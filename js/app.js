import { CATS, TIPS, SERVICE_RULES, ING, ITEMS, DISH_PHOTOS } from './data.js';

const STORAGE_KEY = 'lupo_nauka_v2';
const BATCH_SIZE = 3;
const itemsById = Object.fromEntries(ITEMS.map(i => [i.id, i]));
const DISH_PHOTO_SET = new Set(DISH_PHOTOS);

ITEMS.forEach(i => {
  let t = i.desc;
  if (t.length > 66) {
    let cut = t.slice(0, 62);
    const sp = cut.lastIndexOf(' ');
    if (sp > 30) cut = cut.slice(0, sp);
    cut = cut.replace(/[,;:]$/, '');
    t = cut + '…';
  }
  i.descShort = t;
  i.hasPhoto = DISH_PHOTO_SET.has(i.id);
});

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const d = JSON.parse(raw);
    return { prog: d.prog || {}, cats: d.cats || {}, learnCat: d.learnCat || null, catBatchIdx: d.catBatchIdx || {} };
  } catch (e) { return {}; }
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ prog: state.prog, cats: state.cats, learnCat: state.learnCat, catBatchIdx: state.catBatchIdx })); } catch (e) {}
}

const saved = loadSaved();
const state = {
  screen: 'home',
  prog: saved.prog || {},
  cats: Object.assign(Object.fromEntries(CATS.map(c => [c.key, true])), saved.cats || {}),
  learnCat: (saved.learnCat && CATS.some(c => c.key === saved.learnCat)) ? saved.learnCat : CATS[0].key,
  catBatchIdx: Object.assign({}, saved.catBatchIdx || {}),
  learnIdx: 0,
  t9Questions: null,
  t9Idx: 0,
  t9Score: 0,
  t9Done: false,
  _t9Batch: null,
  match: null,
  tipIdx: Math.floor(Math.random() * TIPS.length),
  photoModalId: null
};

function byId(id) { return itemsById[id]; }
function st(id) { return state.prog[id] || { box: 0, correct: 0, wrong: 0, seen: 0 }; }
function poolIds() { return ITEMS.filter(i => state.cats[i.cat]).map(i => i.id); }
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function weight(id) { const p = st(id); let w = (6 - p.box); w = w * w; w += p.wrong * 3; if (!p.seen) w += 6; return Math.max(1, w); }
function pick(pool, exclude) {
  let cs = pool.filter(id => id !== exclude); if (!cs.length) cs = pool.slice();
  const ws = cs.map(id => weight(id)); let sum = 0; ws.forEach(x => sum += x);
  let r = Math.random() * sum;
  for (let k = 0; k < cs.length; k++) { r -= ws[k]; if (r <= 0) return cs[k]; }
  return cs[cs.length - 1];
}
function pickMany(pool, n) {
  const res = []; let avail = pool.slice();
  for (let k = 0; k < n && avail.length; k++) { const id = pick(avail, res.length ? res[res.length - 1] : null); res.push(id); avail = avail.filter(x => x !== id); }
  return res;
}
function record(id, correct) {
  const p = Object.assign({}, st(id));
  p.seen++;
  if (correct) { p.correct++; p.box = Math.min(5, p.box + 1); } else { p.wrong++; p.box = Math.max(0, p.box - 1); }
  state.prog[id] = p;
  persist();
}
function catTitle(k) { const c = CATS.find(x => x.key === k); return c ? c.title : k; }
function catSub(k) { const c = CATS.find(x => x.key === k); return c ? c.sub : ''; }
function vegLabel(v) { return v === 'vg' ? 'wegańskie (vg)' : 'wegetariańskie (v)'; }
function dotColor(box) { return box >= 4 ? '#5E7D57' : (box >= 2 ? 'var(--accent)' : '#D6C9B6'); }

// ---------- navigation & photo modal ----------
function go(screen) {
  if (screen === 'learn') ensureLearn();
  if (screen === 'test') ensureTest();
  if (screen === 'match') ensureMatch();
  state.screen = screen;
  render();
}
function openPhoto(id) {
  state.photoModalId = id;
  render();
}
function closePhoto() {
  state.photoModalId = null;
  render();
}

// ---------- learn (batching per category) ----------
function catItemIds(catKey) { return ITEMS.filter(i => i.cat === catKey).map(i => i.id); }
function catBatches(catKey) {
  const ids = catItemIds(catKey);
  if (!ids.length) return [[]];
  const nBatches = Math.max(1, Math.ceil(ids.length / BATCH_SIZE));
  const size = Math.ceil(ids.length / nBatches);
  const batches = [];
  for (let i = 0; i < ids.length; i += size) batches.push(ids.slice(i, i + size));
  return batches;
}
function catBatchIdx(catKey) {
  const total = catBatches(catKey).length;
  return (state.catBatchIdx[catKey] || 0) % total;
}
function currentBatch() {
  const batches = catBatches(state.learnCat);
  return batches[catBatchIdx(state.learnCat)] || [];
}
function ensureLearn() {
  if (state.learnIdx == null || state.learnIdx < 0 || state.learnIdx >= currentBatch().length) state.learnIdx = 0;
}
function learnNext() {
  if (state.learnIdx < currentBatch().length - 1) { state.learnIdx++; render(); } else { go('test'); }
}
function learnPrev() { if (state.learnIdx > 0) { state.learnIdx--; render(); } }
function advanceBatch() {
  const total = catBatches(state.learnCat).length;
  state.catBatchIdx[state.learnCat] = (catBatchIdx(state.learnCat) + 1) % total;
  state.learnIdx = 0;
  state.t9Done = false; state.t9Questions = null;
  persist();
  go('learn');
}
function selectLearnCat(key) {
  if (state.learnCat !== key) {
    state.learnCat = key;
    state.learnIdx = 0;
    state.t9Done = false; state.t9Questions = null; state._t9Batch = null;
    persist();
  }
  go('learn');
}

// ---------- NEW FILL-IN-THE-BLANK DRAG & DROP TEST ----------
function ensureTest() {
  const batchKey = currentBatch().join(',');
  if (!state.t9Questions || state.t9Done || state._t9Batch !== batchKey) buildTest9();
}

function makeTestQuestionForDish(dishId) {
  const dish = byId(dishId);
  const slots = [];
  let sIdx = 0;
  dish.testDesc.forEach(part => {
    if (typeof part === 'object' && part.ingId) {
      slots.push({
        slotIdx: sIdx++,
        ingId: part.ingId,
        expectedText: part.text
      });
    }
  });

  const neededIngs = slots.map(s => s.ingId);
  const otherDishes = ITEMS.filter(i => i.cat === dish.cat && i.id !== dishId);
  let decoyPool = Array.from(new Set(otherDishes.flatMap(i => i.ingIds).filter(id => neededIngs.indexOf(id) < 0)));
  if (decoyPool.length < 3) {
    decoyPool = Array.from(new Set(Object.keys(ING).filter(id => neededIngs.indexOf(id) < 0)));
  }
  const decoys = shuffle(decoyPool).slice(0, Math.max(2, 5 - slots.length));

  const allIngs = shuffle([...neededIngs, ...decoys]);
  const candidates = allIngs.map((ingId, idx) => ({
    chipId: 'chip_' + idx,
    ingId
  }));

  return {
    dishId,
    dish,
    slots,
    candidates,
    placed: {}, // slotIdx -> chipId
    selectedChip: null,
    checked: false,
    status: 'unanswered', // 'unanswered' | 'correct' | 'wrong' | 'revealed'
    result: null
  };
}

function buildTest9() {
  const batch = currentBatch();
  state._t9Batch = batch.join(',');
  state.t9Questions = batch.map(makeTestQuestionForDish);
  state.t9Idx = 0;
  state.t9Score = 0;
  state.t9Done = false;
}

function currentQ() {
  return (state.t9Questions && state.t9Questions[state.t9Idx]) ? state.t9Questions[state.t9Idx] : null;
}

function placeChip(slotIdx, chipId) {
  const q = currentQ();
  if (!q || q.checked || q.status === 'revealed') return;
  // If chip was placed in another slot, unplace it
  Object.keys(q.placed).forEach(k => {
    if (q.placed[k] === chipId) delete q.placed[k];
  });
  q.placed[slotIdx] = chipId;
  q.selectedChip = null;
  render();
}

function unplaceSlot(slotIdx) {
  const q = currentQ();
  if (!q || q.checked || q.status === 'revealed') return;
  delete q.placed[slotIdx];
  render();
}

function selectChip(chipId) {
  const q = currentQ();
  if (!q || q.checked || q.status === 'revealed') return;
  if (q.selectedChip === chipId) {
    q.selectedChip = null;
  } else {
    q.selectedChip = chipId;
    // Auto-place into first empty slot
    const emptySlot = q.slots.find(s => !q.placed[s.slotIdx]);
    if (emptySlot) {
      placeChip(emptySlot.slotIdx, chipId);
      return;
    }
  }
  render();
}

function checkTestAnswer() {
  const q = currentQ();
  if (!q || q.checked) return;
  
  let allOk = true;
  q.slots.forEach(s => {
    const placedChipId = q.placed[s.slotIdx];
    const placedChip = q.candidates.find(c => c.chipId === placedChipId);
    if (!placedChip || placedChip.ingId !== s.ingId) {
      allOk = false;
    }
  });

  q.checked = true;
  q.result = allOk;

  if (allOk) {
    q.status = 'correct';
    state.t9Score++;
    record(q.dishId, true);
  } else {
    q.status = 'wrong';
    record(q.dishId, false);
  }
  render();
}

function retryTestQuestion() {
  const q = currentQ();
  if (!q) return;
  q.checked = false;
  q.status = 'unanswered';
  q.result = null;
  // Remove wrong placements
  q.slots.forEach(s => {
    const placedChipId = q.placed[s.slotIdx];
    const placedChip = q.candidates.find(c => c.chipId === placedChipId);
    if (!placedChip || placedChip.ingId !== s.ingId) {
      delete q.placed[s.slotIdx];
    }
  });
  render();
}

function revealTestQuestion() {
  const q = currentQ();
  if (!q) return;
  q.checked = true;
  q.status = 'revealed';
  // Fill correct candidates into slots
  q.slots.forEach(s => {
    const matchingChip = q.candidates.find(c => c.ingId === s.ingId);
    if (matchingChip) {
      q.placed[s.slotIdx] = matchingChip.chipId;
    }
  });
  render();
}

function restartTestBatch() {
  buildTest9();
  render();
}

function nextTestQuestion() {
  if (state.t9Idx < state.t9Questions.length - 1) {
    state.t9Idx++;
    render();
  } else {
    state.t9Done = true;
    render();
  }
}

// ---------- match ----------
function ensureMatch() { const pool = poolIds(); const m = state.match; const valid = m && m.ids.every(id => pool.indexOf(id) >= 0); if (!valid) buildMatch(); }
function buildMatch() {
  const pool = poolIds(); const n = Math.min(5, pool.length);
  if (n < 3) { state.match = null; return; }
  const ids = pickMany(pool, n); const rightIds = shuffle(ids);
  state.match = { ids, leftIds: ids, rightIds, selLeft: null, selRight: null, matched: {}, wrong: null };
}
function pickLeft(id) { const m = state.match; if (!m || m.matched[id]) return; m.selLeft = id; m.wrong = null; if (m.selRight) evalMatch(id, m.selRight); else render(); }
function pickRight(id) { const m = state.match; if (!m || m.matched[id]) return; m.selRight = id; m.wrong = null; if (m.selLeft) evalMatch(m.selLeft, id); else render(); }
function evalMatch(l, r) {
  const m = state.match;
  if (l === r) {
    m.matched[l] = true; record(l, true); m.selLeft = null; m.selRight = null; m.wrong = null; render();
  } else {
    record(l, false); m.selLeft = l; m.selRight = r; m.wrong = { l, r }; render();
    setTimeout(() => { if (state.match) { state.match.selLeft = null; state.match.selRight = null; state.match.wrong = null; render(); } }, 750);
  }
}

// ---------- categories / reset ----------
function toggleCat(k) {
  const on = Object.keys(state.cats).filter(x => state.cats[x]).length;
  if (state.cats[k] && on <= 1) return;
  state.cats[k] = !state.cats[k];
  state.match = null;
  persist();
  if (state.screen === 'match') buildMatch();
  render();
}
function resetProgress() {
  if (typeof confirm === 'function' && !confirm('Wyczyścić cały postęp nauki?')) return;
  state.prog = {}; state.match = null; persist(); render();
}

// ================= RENDER =================
const root = document.getElementById('app');

function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function ico(file) { return 'assets/ingredients/' + (file || 'verdure.svg'); }

function renderHome() {
  const total = ITEMS.length;
  const mastered = ITEMS.filter(i => st(i.id).box >= 4).length;
  const learning = ITEMS.filter(i => { const p = st(i.id); return p.seen > 0 && p.box < 4; }).length;
  const notStarted = ITEMS.filter(i => st(i.id).seen === 0).length;
  const overallPct = Math.round(mastered / total * 100);
  const headline = mastered === total ? 'Wszystko opanowane. Brawo!' : (mastered > 0 ? 'Dobra robota, tak trzymaj!' : 'Zacznijmy naukę menu Lupo');
  const tip = TIPS[state.tipIdx || 0];

  const catsHtml = CATS.map(c => {
    const its = ITEMS.filter(i => i.cat === c.key);
    const m = its.filter(i => st(i.id).box >= 4).length;
    const pct = its.length ? Math.round(m / its.length * 100) : 0;
    const active = state.learnCat === c.key;
    return `<button class="cat-pick ${active ? 'active' : ''}" data-action="selectLearnCat" data-id="${c.key}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;">
        <span class="serif" style="font-size:15px;color:#2A2521;">${esc(c.title)}<span style="font-size:11px;color:#B08A5A;font-weight:600;text-transform:none;margin-left:6px;">${esc(c.sub)}</span></span>
        <span style="font-size:12px;color:#9A9086;flex:none;">${m} / ${its.length}</span>
      </div>
      <div class="progressbar"><i style="width:${pct}%;"></i></div>
    </button>`;
  }).join('');

  const togglesHtml = CATS.map(c => {
    const on = !!state.cats[c.key];
    return `<button class="pill-toggle ${on ? 'on' : ''}" data-action="toggleCat" data-id="${c.key}">${esc(c.title)}</button>`;
  }).join('');

  const weak = ITEMS.filter(i => { const p = st(i.id); return p.seen > 0 && p.box < 4; })
    .sort((a, b) => { const pa = st(a.id), pb = st(b.id); return (pa.box - pb.box) || (pb.wrong - pa.wrong); })
    .slice(0, 6);
  const weakHtml = weak.length ? `<div class="card" style="display:flex;flex-direction:column;gap:13px;">
      <div class="kicker">Do powtórzenia</div>
      ${weak.map(i => `<div style="display:flex;align-items:flex-start;gap:11px;">
          <span style="width:10px;height:10px;border-radius:50%;background:${dotColor(st(i.id).box)};flex:none;margin-top:6px;"></span>
          <div style="flex:1;min-width:0;">
            <div class="serif" style="font-size:15px;color:#2A2521;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(i.name)}</div>
            <div style="font-size:12px;color:#9A9086;">${esc(catTitle(i.cat))}</div>
          </div>
          <span style="font-size:12px;color:#B0524C;font-weight:600;flex:none;">błędy: ${st(i.id).wrong}</span>
        </div>`).join('')}
    </div>` : `<div style="text-align:center;font-size:12.5px;line-height:1.5;color:#B0A69A;padding:2px 10px;">Twoje słabe miejsca pojawią się tutaj po pierwszych ćwiczeniach.</div>`;

  const rulesHtml = SERVICE_RULES.map(r => `
    <div style="display:flex;gap:10px;align-items:flex-start;background:#FFFFFF;border:1px solid #EAE2D5;padding:11px 13px;border-radius:14px;">
      <span style="font-size:15px;line-height:1;margin-top:2px;">✨</span>
      <div style="display:flex;flex-direction:column;gap:2px;">
        <div style="font-size:13.5px;font-weight:600;color:#2A2521;">${esc(r.title)}</div>
        <div style="font-size:12px;color:#6E655C;line-height:1.45;">${esc(r.desc)}</div>
      </div>
    </div>
  `).join('');

  const batchLabel = `Grupa ${catBatchIdx(state.learnCat) + 1} / ${catBatches(state.learnCat).length} w kategorii „${catTitle(state.learnCat)}”`;

  return `<div style="display:flex;flex-direction:column;gap:15px;">
    <div class="card card-tight" style="display:flex;gap:11px;align-items:flex-start;background:#FAF5ED;">
      <span class="kicker-sm" style="flex:none;margin-top:2px;color:#B07219;">Wskazówka dnia</span>
      <span style="font-size:13px;line-height:1.45;color:#6E5A3E;">${esc(tip)}</span>
    </div>

    <div class="card" style="display:flex;align-items:center;gap:16px;">
      <div class="home-ring-wrap">
        <div class="ring" style="background:conic-gradient(var(--accent) ${overallPct}%, #E9DFCF ${overallPct}%);"></div>
        <div class="hole">
          <div class="serif" style="font-size:25px;font-weight:600;color:#2A2521;line-height:1;">${overallPct}%</div>
          <div style="font-size:9.5px;letter-spacing:.06em;color:#9A9086;margin-top:2px;text-transform:uppercase;">opanowane</div>
        </div>
      </div>
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:11px;">
        <div class="serif" style="font-size:16px;color:#2A2521;line-height:1.25;">${esc(headline)}</div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;">
          <span class="tag tag-good">${mastered} umie</span>
          <span class="tag tag-mid">${learning} w toku</span>
          <span class="tag tag-neutral">${notStarted} nowe</span>
        </div>
      </div>
    </div>

    <div class="card" style="display:flex;flex-direction:column;gap:11px;background:#FCFAF6;">
      <div class="kicker">Zasady serwisu w Lupo (z PDF)</div>
      <div style="display:flex;flex-direction:column;gap:8px;">${rulesHtml}</div>
    </div>

    <div class="card" style="display:flex;flex-direction:column;gap:6px;">
      <div class="kicker" style="padding:0 10px;">Ucz się według kategorii</div>
      ${catsHtml}
    </div>

    <button class="btn btn-primary btn-block" data-action="go" data-id="learn">Ucz się: ${esc(catTitle(state.learnCat))} →</button>
    <div style="text-align:center;font-size:12px;color:#B0A69A;">${batchLabel}</div>
    <div class="btn-row">
      <button class="btn btn-outline" data-action="go" data-id="test">Test: ${esc(catTitle(state.learnCat))}</button>
      <button class="btn btn-outline" data-action="go" data-id="match">Dopasuj pary</button>
    </div>

    <div class="card" style="display:flex;flex-direction:column;gap:12px;">
      <div class="kicker">Kategorie w trybie Dopasuj</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">${togglesHtml}</div>
      <div style="font-size:12px;line-height:1.4;color:#9A9086;">Tryb Dopasuj miesza wybrane kategorie — ustaw go tutaj osobno.</div>
    </div>

    ${weakHtml}

    <button class="link-btn" style="align-self:center;padding:8px;" data-action="resetProgress">Wyczyść postęp</button>
  </div>`;
}

function renderLearn() {
  const batch = currentBatch();
  const learnIdx = Math.min(Math.max(state.learnIdx || 0, 0), batch.length - 1);
  const item = byId(batch[learnIdx]);
  const dots = batch.map((id, i) => `<span class="dot-step ${i === learnIdx ? 'active' : ''}"></span>`).join('');
  const isFirst = learnIdx === 0;
  const nextLabel = learnIdx === batch.length - 1 ? 'Rozpocznij test →' : 'Dalej →';
  const catSwitchHtml = CATS.map(c => `<button class="pill-toggle ${c.key === state.learnCat ? 'on' : ''}" data-action="selectLearnCat" data-id="${c.key}">${esc(c.title)}</button>`).join('');

  let componentsHtml = '';
  if (item.components && item.components.length) {
    componentsHtml = item.components.map(comp => {
      const compIngs = comp.ingIds.map(iid => {
        const ing = ING[iid] || { it: iid, pl: iid, en: iid, icon: 'verdure.svg' };
        return `<div class="ing-card">
          <img src="${ico(ing.icon)}" alt="${esc(ing.it)}" />
          <div class="ing-name">${esc(ing.it)}</div>
          <div class="ing-tr">🇵🇱 ${esc(ing.pl)} · 🇬🇧 ${esc(ing.en)}</div>
        </div>`;
      }).join('');
      return `<div style="display:flex;flex-direction:column;gap:7px;">
        <div style="font-size:11.5px;font-weight:700;color:#8C5E29;letter-spacing:.06em;text-transform:uppercase;display:flex;align-items:center;gap:5px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#C1741F;display:inline-block;"></span>
          ${esc(comp.name)}
        </div>
        <div class="ing-grid">${compIngs}</div>
      </div>`;
    }).join('');
  } else {
    const ingCards = item.ingIds.map(iid => {
      const ing = ING[iid] || { it: iid, pl: iid, en: iid, icon: 'verdure.svg' };
      return `<div class="ing-card">
        <img src="${ico(ing.icon)}" alt="${esc(ing.it)}" />
        <div class="ing-name">${esc(ing.it)}</div>
        <div class="ing-tr">🇵🇱 ${esc(ing.pl)} · 🇬🇧 ${esc(ing.en)}</div>
      </div>`;
    }).join('');
    componentsHtml = `<div class="ing-grid">${ingCards}</div>`;
  }

  const allergensHtml = (item.allergens && item.allergens.length)
    ? item.allergens.map(a => `<span class="allergen-pill">${esc(a)}</span>`).join('')
    : `<span class="allergen-pill none">brak alergenów</span>`;

  const pastaBadge = item.pastaType
    ? `<span class="pasta-pill">${item.pastaType === 'jajeczny' ? '🥚 Makaron jajeczny' : '🌾 Makaron bezjajeczny'}</span>`
    : '';

  const photoBtn = item.hasPhoto
    ? `<button class="btn-photo" data-action="openPhoto" data-id="${item.id}">📷 Zobacz zdjęcie</button>`
    : '';

  const serviceNotesHtml = item.serviceNotes
    ? `<div class="card service-note-box">
        <div class="kicker-sm" style="color:#B07219;">💡 Wskazówki serwisu i uwagi</div>
        <div style="font-size:13.5px;line-height:1.5;color:#4A3F35;margin-top:6px;">${esc(item.serviceNotes)}</div>
      </div>`
    : '';

  return `<div style="display:flex;flex-direction:column;gap:15px;">
    <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;">${catSwitchHtml}</div>
    <div style="display:flex;justify-content:center;align-items:center;gap:6px;">${dots}</div>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
      <span class="kicker">Danie ${learnIdx + 1} / ${batch.length} · Grupa ${catBatchIdx(state.learnCat) + 1}/${catBatches(state.learnCat).length}</span>
      <span style="font-size:12px;color:#9A9086;">${esc(catTitle(item.cat))}</span>
    </div>

    <div class="card" style="padding:24px 20px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;box-shadow:0 10px 26px rgba(42,37,33,.05);">
      <div class="kicker-sm">${esc(catSub(item.cat))}</div>
      <div class="serif" style="font-size:28px;font-weight:600;color:#2A2521;line-height:1.15;">${esc(item.name)}</div>
      <div class="serif" style="font-style:italic;font-size:15px;color:#A08A6E;">${esc(item.pron)}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:6px;font-size:11.5px;color:#9A9086;">
        <span>🇵🇱 ${esc(item.tr.name.pl)}</span><span>🇬🇧 ${esc(item.tr.name.en)}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center;margin-top:10px;">
        ${item.veg ? `<span class="veg-badge">${esc(vegLabel(item.veg))}</span>` : ''}
        ${pastaBadge}
        <span style="font-size:13px;color:#9A9086;">Cena: <b style="color:#3A342E;">${esc(item.price)} zł</b></span>
        ${photoBtn}
      </div>
    </div>

    <div class="card" style="background:#F7F2E9;display:flex;flex-direction:column;gap:8px;">
      <div class="kicker-sm">Opis z karty menu</div>
      <div style="font-size:15px;line-height:1.55;color:#3A342E;">${esc(item.desc)}</div>
      <div style="font-size:12px;line-height:1.5;color:#9A9086;">🇬🇧 ${esc(item.tr.desc.en)}</div>
    </div>

    ${serviceNotesHtml}

    <div class="card" style="display:flex;flex-direction:column;gap:8px;background:#FFFBF5;">
      <div class="kicker-sm" style="color:#8A4B29;">⚠️ Alergeny w daniu</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${allergensHtml}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px;">
      <div class="kicker">Składniki z podziałem na elementy</div>
      ${componentsHtml}
    </div>

    <div class="btn-row" style="padding-top:4px;">
      ${isFirst ? '<div></div>' : '<button class="btn btn-outline" data-action="learnPrev">← Wstecz</button>'}
      <button class="btn btn-primary" data-action="learnNext">${nextLabel}</button>
    </div>
  </div>`;
}

function renderTest() {
  if (state.t9Done) return renderTestDone();
  const q = currentQ();
  if (!q) return '';

  const total = state.t9Questions.length;
  const progressPct = Math.round(state.t9Idx / total * 100);
  const isChecked = q.checked || q.status === 'revealed';

  // Build the menu description with embedded drop slots
  const descPartsHtml = q.dish.testDesc.map(part => {
    if (typeof part === 'string') {
      return esc(part);
    }
    // Slot object
    const slotObj = q.slots.find(s => s.ingId === part.ingId && s.expectedText === part.text);
    const slotIdx = slotObj ? slotObj.slotIdx : 0;
    const placedChipId = q.placed[slotIdx];
    const placedChip = placedChipId ? q.candidates.find(c => c.chipId === placedChipId) : null;
    const placedIng = placedChip ? (ING[placedChip.ingId] || { it: placedChip.ingId, pl: placedChip.ingId, icon: 'verdure.svg' }) : null;

    let slotCls = 'test-slot';
    if (!placedChip) {
      slotCls += ' empty';
    } else {
      slotCls += ' filled';
      if (isChecked) {
        if (placedChip.ingId === slotObj.ingId) {
          slotCls += ' correct';
        } else {
          slotCls += ' wrong';
        }
      }
    }

    if (!placedChip) {
      return `<span class="${slotCls}" data-slot-idx="${slotIdx}" data-action="unplaceSlot">
        <span class="slot-placeholder">___</span>
      </span>`;
    } else {
      return `<span class="${slotCls}" data-slot-idx="${slotIdx}" data-action="unplaceSlot">
        <img src="${ico(placedIng.icon)}" alt="${esc(placedIng.it)}" />
        <span class="slot-text">${esc(placedIng.it)}</span>
        ${isChecked ? (placedChip.ingId === slotObj.ingId ? '<span class="mark">✓</span>' : '<span class="mark">✗</span>') : '<span class="remove-btn">×</span>'}
      </span>`;
    }
  }).join('');

  // Build candidate chips pool
  const usedChipIds = new Set(Object.values(q.placed));
  const candidateChipsHtml = q.candidates.map(c => {
    const isUsed = usedChipIds.has(c.chipId);
    const ing = ING[c.ingId] || { it: c.ingId, pl: c.ingId, icon: 'verdure.svg' };
    const isSel = q.selectedChip === c.chipId;

    let chipCls = 'candidate-chip';
    if (isUsed) chipCls += ' used';
    if (isSel) chipCls += ' sel';

    return `<button class="${chipCls}" draggable="${!isUsed && !isChecked}" data-chip-id="${c.chipId}" data-action="selectChip" data-id="${c.chipId}">
      <img src="${ico(ing.icon)}" alt="${esc(ing.it)}" />
      <div style="display:flex;flex-direction:column;align-items:flex-start;gap:1px;line-height:1.2;">
        <span style="font-family:'Spectral',serif;font-weight:600;font-size:13.5px;color:#2A2521;">${esc(ing.it)}</span>
        <span style="font-size:11px;color:#9A9086;">${esc(ing.pl)}</span>
      </div>
    </button>`;
  }).join('');

  // Calculate if all slots are filled
  const allSlotsFilled = q.slots.every(s => !!q.placed[s.slotIdx]);

  // Build feedback & action controls
  let controlsHtml = '';
  if (!isChecked) {
    controlsHtml = `<button class="btn btn-dark btn-block" data-action="checkTestAnswer" ${allSlotsFilled ? '' : 'disabled style="opacity:0.5;cursor:not-allowed;"'}>
      ${allSlotsFilled ? 'Sprawdź opisy →' : 'Uzupełnij wszystkie luki (___)'}
    </button>`;
  } else if (q.status === 'correct') {
    controlsHtml = `<div class="card card-tight" style="background:#E4ECDD;border-color:#CBDCC0;display:flex;flex-direction:column;gap:8px;">
      <div style="font-weight:600;color:#3B5A36;font-size:15px;">✨ Świetnie! Opis uzupełniony bezbłędnie.</div>
      <button class="btn btn-primary btn-block" data-action="nextTestQuestion">Dalej →</button>
    </div>`;
  } else if (q.status === 'wrong') {
    controlsHtml = `<div class="card card-tight" style="background:#FDF3F2;border-color:#F2C9C4;display:flex;flex-direction:column;gap:10px;">
      <div style="font-weight:600;color:#8C3A32;font-size:14.5px;">❌ Niestety nie do końca poprawnie. Co chcesz zrobić?</div>
      <div class="test-3-options">
        <button class="btn btn-outline btn-block" data-action="retryTestQuestion" style="justify-content:flex-start;display:flex;align-items:center;gap:8px;font-size:14px;padding:12px 14px;">
          <span>🔄</span> <span>Spróbuj ponownie</span>
        </button>
        <button class="btn btn-outline btn-block" data-action="revealTestQuestion" style="justify-content:flex-start;display:flex;align-items:center;gap:8px;font-size:14px;padding:12px 14px;">
          <span>💡</span> <span>Pokaż poprawną odpowiedź</span>
        </button>
        <button class="btn btn-outline btn-block" data-action="restartTestBatch" style="justify-content:flex-start;display:flex;align-items:center;gap:8px;font-size:14px;padding:12px 14px;">
          <span>⏪</span> <span>Zacznij od nowa</span>
        </button>
      </div>
    </div>`;
  } else if (q.status === 'revealed') {
    controlsHtml = `<div class="card card-tight" style="background:#FAF5ED;border-color:#E9DFCF;display:flex;flex-direction:column;gap:8px;">
      <div style="font-weight:600;color:#8C5E29;font-size:14.5px;">💡 Oto poprawny opis z karty menu. Zapamiętaj składniki i przejdź dalej.</div>
      <button class="btn btn-primary btn-block" data-action="nextTestQuestion">Dalej →</button>
    </div>`;
  }

  return `<div style="display:flex;flex-direction:column;gap:15px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span class="kicker">Test ${state.t9Idx + 1} / ${total} · ${esc(catTitle(state.learnCat))}</span>
      <span style="font-size:12px;color:#9A9086;">Przeciągnij składniki w puste pola ___</span>
    </div>
    <div class="progressbar"><i style="width:${progressPct}%;"></i></div>

    <div class="card test-menu-card">
      <div class="kicker-sm" style="color:#B08A5A;margin-bottom:6px;">Uzupełnij opis dania w karcie menu</div>
      <div class="serif" style="font-size:24px;font-weight:600;color:#2A2521;margin-bottom:12px;">${esc(q.dish.name)}</div>
      <div class="test-desc-body">${descPartsHtml}</div>
    </div>

    ${!isChecked ? `<div style="display:flex;flex-direction:column;gap:8px;">
      <div class="kicker-sm" style="padding:0 4px;color:#8C5E29;">Dostępne składniki do przeciągnięcia lub kliknięcia:</div>
      <div class="candidate-pool">${candidateChipsHtml}</div>
    </div>` : ''}

    ${controlsHtml}
  </div>`;
}

function renderTestDone() {
  const score = state.t9Score, total = state.t9Questions.length;
  const pct = Math.round(score / total * 100);
  const headline = score === total ? 'Perfekcyjnie! Znasz te opisy na wylot.' : (score >= total * 0.6 ? 'Dobra robota!' : 'Warto powtórzyć — spróbuj jeszcze raz.');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:18px;padding-top:16px;">
    <div class="result-ring">
      <div class="ring" style="background:conic-gradient(var(--accent) ${pct}%, #E9DFCF ${pct}%);"></div>
      <div class="hole"><div class="serif" style="font-size:26px;font-weight:600;color:#2A2521;">${score}/${total}</div></div>
    </div>
    <div class="serif" style="font-size:19px;color:#2A2521;text-align:center;">${esc(headline)}</div>
    <button class="btn btn-primary btn-block" data-action="advanceBatch">Kolejna grupa dań →</button>
    <div class="btn-row" style="width:100%;">
      <button class="btn btn-outline" data-action="restartTestBatch">Powtórz test</button>
      <button class="btn btn-outline" data-action="go" data-id="learn">Wróć do nauki</button>
    </div>
  </div>`;
}

function renderMatch() {
  const m = state.match;
  if (!m) return `<div style="text-align:center;font-size:13px;color:#9A9086;padding-top:20px;">Za mało dań w wybranych kategoriach — zaznacz więcej kategorii na ekranie głównym.</div>`;
  const done = Object.keys(m.matched).length === m.ids.length;
  const leftHtml = m.leftIds.map(id => {
    const matched = !!m.matched[id]; const sel = m.selLeft === id; const wrong = m.wrong && m.wrong.l === id;
    let cls = 'left-opt'; if (matched) cls += ' m-matched'; else if (wrong) cls += ' m-wrong'; else if (sel) cls += ' m-sel';
    return `<button class="match-opt match-left ${cls}" data-action="pickLeft" data-id="${id}" ${matched ? 'disabled' : ''}>${esc(byId(id).name)}</button>`;
  }).join('');
  const rightHtml = m.rightIds.map(id => {
    const matched = !!m.matched[id]; const sel = m.selRight === id; const wrong = m.wrong && m.wrong.r === id;
    let cls = 'right-opt'; if (matched) cls += ' m-matched'; else if (wrong) cls += ' m-wrong'; else if (sel) cls += ' m-sel';
    return `<button class="match-opt match-right ${cls}" data-action="pickRight" data-id="${id}" ${matched ? 'disabled' : ''}>${esc(byId(id).descShort)}</button>`;
  }).join('');
  return `<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
      <span class="kicker">Dopasuj nazwę do opisu</span>
      <span style="font-size:12px;color:#9A9086;flex:none;">${Object.keys(m.matched).length} / ${m.ids.length} dopasowane</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;align-items:start;">
      <div style="display:flex;flex-direction:column;gap:8px;">${leftHtml}</div>
      <div style="display:flex;flex-direction:column;gap:8px;">${rightHtml}</div>
    </div>
    ${done ? `<div style="display:flex;flex-direction:column;gap:12px;align-items:center;padding-top:6px;">
      <div class="serif" style="font-size:19px;color:#4F7A52;text-align:center;">Świetnie! Wszystko dopasowane.</div>
      <button class="btn btn-primary" data-action="newMatchRound">Nowa runda</button>
    </div>` : ''}
    <div style="text-align:center;font-size:12px;color:#B0A69A;">Kliknij nazwę, potem pasujący opis.</div>
  </div>`;
}

function render() {
  const isHome = state.screen === 'home';
  const isLearn = state.screen === 'learn';
  const isTest = state.screen === 'test';
  const isMatch = state.screen === 'match';

  let content = '';
  if (isHome) content = renderHome();
  else if (isLearn) content = renderLearn();
  else if (isTest) content = renderTest();
  else if (isMatch) content = renderMatch();

  const totalMastered = ITEMS.filter(i => st(i.id).box >= 4).length;

  let modalHtml = '';
  if (state.photoModalId) {
    const item = byId(state.photoModalId);
    if (item) {
      modalHtml = `<div class="photo-modal-overlay" data-action="closePhoto">
        <div class="photo-modal-content" onclick="event.stopPropagation()">
          <button class="photo-modal-close" data-action="closePhoto">✕</button>
          <img src="assets/photos/${item.id}.jpg" alt="${esc(item.name)}" class="photo-modal-img" />
          <div class="photo-modal-info">
            <div class="serif" style="font-size:20px;font-weight:600;color:#2A2521;">${esc(item.name)}</div>
            <div style="font-size:13px;color:#6E655C;">${esc(item.desc)}</div>
          </div>
        </div>
      </div>`;
    }
  }

  root.innerHTML = `
    <header class="app-header">
      <div>
        <div class="app-title">Lupo · Menu</div>
        <div class="app-sub">Aplikacja kelnerska</div>
      </div>
      <div class="head-pill">
        <span class="dot"></span>
        <span class="val">${totalMastered} / ${ITEMS.length}</span>
      </div>
    </header>
    <main class="app-main">
      ${content}
    </main>
    <nav class="app-nav">
      <button class="nav-btn ${isHome ? 'active' : ''}" data-action="go" data-id="home"><div class="bar"></div>Główna</button>
      <button class="nav-btn ${isLearn ? 'active' : ''}" data-action="go" data-id="learn"><div class="bar"></div>Nauka</button>
      <button class="nav-btn ${isTest ? 'active' : ''}" data-action="go" data-id="test"><div class="bar"></div>Test</button>
      <button class="nav-btn ${isMatch ? 'active' : ''}" data-action="go" data-id="match"><div class="bar"></div>Dopasuj</button>
    </nav>
    ${modalHtml}
  `;
}

// Global Event Listeners (Clicks & Drag and Drop)
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const act = btn.getAttribute('data-action');
  const id = btn.getAttribute('data-id');

  if (act === 'go') go(id);
  else if (act === 'selectLearnCat') selectLearnCat(id);
  else if (act === 'toggleCat') toggleCat(id);
  else if (act === 'resetProgress') resetProgress();
  else if (act === 'learnNext') learnNext();
  else if (act === 'learnPrev') learnPrev();
  else if (act === 'advanceBatch') advanceBatch();
  else if (act === 'openPhoto') openPhoto(id);
  else if (act === 'closePhoto') closePhoto();
  else if (act === 'pickLeft') pickLeft(id);
  else if (act === 'pickRight') pickRight(id);
  else if (act === 'newMatchRound') { state.match = null; ensureMatch(); render(); }
  // Test actions
  else if (act === 'selectChip') selectChip(id);
  else if (act === 'unplaceSlot') {
    const slotIdx = parseInt(btn.getAttribute('data-slot-idx'), 10);
    unplaceSlot(slotIdx);
  }
  else if (act === 'checkTestAnswer') checkTestAnswer();
  else if (act === 'retryTestQuestion') retryTestQuestion();
  else if (act === 'revealTestQuestion') revealTestQuestion();
  else if (act === 'restartTestBatch') restartTestBatch();
  else if (act === 'nextTestQuestion') nextTestQuestion();
});

// HTML5 Drag and Drop Handlers
let draggedChipId = null;

document.addEventListener('dragstart', e => {
  const chip = e.target.closest('.candidate-chip');
  if (chip) {
    draggedChipId = chip.getAttribute('data-chip-id');
    e.dataTransfer.setData('text/plain', draggedChipId);
    chip.style.opacity = '0.5';
  }
});

document.addEventListener('dragend', e => {
  const chip = e.target.closest('.candidate-chip');
  if (chip) {
    chip.style.opacity = '1';
    draggedChipId = null;
  }
});

document.addEventListener('dragover', e => {
  const slot = e.target.closest('.test-slot');
  if (slot) {
    e.preventDefault();
    slot.classList.add('drag-over');
  }
});

document.addEventListener('dragleave', e => {
  const slot = e.target.closest('.test-slot');
  if (slot) {
    slot.classList.remove('drag-over');
  }
});

document.addEventListener('drop', e => {
  const slot = e.target.closest('.test-slot');
  if (slot) {
    e.preventDefault();
    slot.classList.remove('drag-over');
    const slotIdx = parseInt(slot.getAttribute('data-slot-idx'), 10);
    const chipId = e.dataTransfer.getData('text/plain') || draggedChipId;
    if (chipId != null && !isNaN(slotIdx)) {
      placeChip(slotIdx, chipId);
    }
  }
});

// Initial Render
render();
