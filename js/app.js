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
  cats: Object.assign({ antipasti: true, pasta: true, secondi: true, dolce: true }, saved.cats || {}),
  learnCat: (saved.learnCat && CATS.some(c => c.key === saved.learnCat)) ? saved.learnCat : CATS[0].key,
  catBatchIdx: Object.assign({}, saved.catBatchIdx || {}),
  learnIdx: 0,
  t9Questions: null, t9Idx: 0, t9Score: 0, t9Results: [], t9Sel: null, t9MultiSel: {}, t9Checked: false, t9Drag: { placed: {} }, t9Done: false,
  _t9Batch: null,
  match: null,
  tipIdx: Math.floor(Math.random() * TIPS.length),
  photoModalId: null
};

function byId(id) { return itemsById[id]; }
function st(id) { return state.prog[id] || { box: 0, correct: 0, wrong: 0, seen: 0 }; }
function poolIds() { return ITEMS.filter(i => state.cats[i.cat]).map(i => i.id); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
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

// ---------- learn (infinite batch cycling, scoped to one category) ----------
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

// ---------- test ----------
function ensureTest() {
  const batchKey = currentBatch().join(',');
  if (!state.t9Questions || state.t9Done || state._t9Batch !== batchKey) buildTest9();
}
function makeTest9Questions(dishIds) {
  const own = {};
  dishIds.forEach(id => { own[id] = byId(id).ingIds; });
  const qs = [];

  dishIds.forEach(dishId => {
    const mine = own[dishId];
    const otherIds = dishIds.filter(x => x !== dishId);
    let decoyPool = shuffle(Array.from(new Set(otherIds.flatMap(x => own[x]).filter(ing => mine.indexOf(ing) < 0))));
    if (!decoyPool.length) decoyPool = shuffle(Object.keys(ING).filter(k => mine.indexOf(k) < 0));
    const decoy = decoyPool[0];
    const sampleOwn = shuffle(mine).slice(0, Math.min(3, mine.length));
    const options = shuffle(sampleOwn.concat([decoy]));
    qs.push({ type: 'single', dishId, options, correct: decoy });
  });

  dishIds.forEach(dishId => {
    const mine = own[dishId];
    const otherIds = dishIds.filter(x => x !== dishId);
    const decoyPool = shuffle(Array.from(new Set(otherIds.flatMap(x => own[x]).filter(ing => mine.indexOf(ing) < 0))));
    const decoys = decoyPool.slice(0, 2);
    const options = shuffle(mine.concat(decoys));
    qs.push({ type: 'multi', dishId, options, correct: mine.slice() });
  });

  const allChips = shuffle(Array.from(new Set(dishIds.flatMap(id => own[id]))));
  const chunk = Math.max(1, Math.ceil(allChips.length / 3));
  for (let i = 0; i < 3; i++) {
    const chips = allChips.slice(i * chunk, (i + 1) * chunk);
    if (chips.length) qs.push({ type: 'drag', chips });
  }
  return qs;
}
function buildTest9() {
  const batch = currentBatch();
  state._t9Batch = batch.join(',');
  state.t9Questions = makeTest9Questions(batch);
  state.t9Idx = 0; state.t9Score = 0; state.t9Results = new Array(state.t9Questions.length).fill(null);
  state.t9Sel = null; state.t9MultiSel = {}; state.t9Checked = false; state.t9Drag = { placed: {} }; state.t9Done = false;
}
function retryTest() { buildTest9(); render(); }
function currentQ() { return state.t9Questions ? state.t9Questions[state.t9Idx] : null; }
function commitAnswer(correct) {
  const results = state.t9Results.slice(); results[state.t9Idx] = correct;
  const q = currentQ();
  if (q && q.dishId) record(q.dishId, correct);
  state.t9Checked = true; state.t9Results = results; state.t9Score += correct ? 1 : 0;
  render();
}
function selectSingle(val) { if (state.t9Checked) return; state.t9Sel = val; render(); }
function checkSingle() { const q = currentQ(); if (!q || state.t9Sel == null || state.t9Checked) return; commitAnswer(state.t9Sel === q.correct); }
function toggleMulti(val) { if (state.t9Checked) return; state.t9MultiSel[val] = !state.t9MultiSel[val]; render(); }
function checkMulti() {
  const q = currentQ(); if (!q || state.t9Checked) return;
  const chosen = q.options.filter(o => state.t9MultiSel[o]);
  const ok = chosen.length === q.correct.length && chosen.every(o => q.correct.indexOf(o) >= 0);
  commitAnswer(ok);
}
function dropChip(ingId, zoneKey) {
  const q = currentQ(); if (!q || q.type !== 'drag' || state.t9Checked) return;
  const ok = byId(zoneKey).ingIds.indexOf(ingId) >= 0;
  state.t9Drag.placed[ingId] = { zone: zoneKey, ok };
  const allPlaced = q.chips.every(c => state.t9Drag.placed[c]);
  render();
  if (allPlaced) {
    const correctCount = q.chips.filter(c => state.t9Drag.placed[c].ok).length;
    commitAnswer(correctCount === q.chips.length);
  }
}
function nextQuestion() {
  const idx = state.t9Idx;
  if (!state.t9Questions || idx >= state.t9Questions.length - 1) { state.t9Done = true; render(); return; }
  state.t9Idx = idx + 1; state.t9Sel = null; state.t9MultiSel = {}; state.t9Checked = false; state.t9Drag = { placed: {} };
  render();
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
  const checked = state.t9Checked;
  const dishLabel = q.dishId ? byId(q.dishId).name : '';
  const total = state.t9Questions.length;
  const progressPct = Math.round(state.t9Idx / total * 100);
  const typeLabel = q.type === 'single' ? '1 z 4' : (q.type === 'multi' ? 'Zaznacz kilka' : 'Przeciągnij');

  let body = '';
  if (q.type === 'single') {
    const optionsHtml = q.options.map(oid => {
      const ing = ING[oid] || { it: oid, pl: oid };
      let cls = 'option';
      if (!checked) cls += (state.t9Sel === oid ? ' sel' : '');
      else if (oid === q.correct) cls += ' correct';
      else if (oid === state.t9Sel) cls += ' wrong';
      else cls += ' dim';
      return `<button class="${cls}" data-action="selectSingle" data-id="${oid}">${esc(ing.it)} · ${esc(ing.pl)}</button>`;
    }).join('');
    body = `<div class="card"><div class="serif" style="font-size:19px;font-weight:600;color:#2A2521;line-height:1.35;">Który składnik NIE wchodzi w skład dania «${esc(dishLabel)}»?</div></div>
      <div style="display:flex;flex-direction:column;gap:10px;">${optionsHtml}</div>
      ${(!checked && state.t9Sel != null) ? '<button class="btn btn-dark btn-block" data-action="checkSingle">Sprawdź</button>' : ''}`;
  } else if (q.type === 'multi') {
    const optionsHtml = q.options.map(oid => {
      const ing = ING[oid] || { it: oid, pl: oid };
      const sel = !!state.t9MultiSel[oid];
      const isCorrect = q.correct.indexOf(oid) >= 0;
      let cls = 'option multi';
      if (checked) { if (isCorrect) cls += ' correct'; else if (sel) cls += ' wrong'; else cls += ' dim'; }
      else if (sel) cls += ' sel';
      return `<button class="${cls}" data-action="toggleMulti" data-id="${oid}"><span>${sel ? '☑' : '☐'}</span>${esc(ing.it)} · ${esc(ing.pl)}</button>`;
    }).join('');
    const anySel = Object.keys(state.t9MultiSel).some(k => state.t9MultiSel[k]);
    body = `<div class="card"><div class="serif" style="font-size:19px;font-weight:600;color:#2A2521;line-height:1.35;">Zaznacz WSZYSTKIE składniki dania «${esc(dishLabel)}»</div></div>
      <div style="display:flex;flex-direction:column;gap:10px;">${optionsHtml}</div>
      ${(!checked && anySel) ? '<button class="btn btn-dark btn-block" data-action="checkMulti">Sprawdź</button>' : ''}`;
  } else {
    const placed = state.t9Drag.placed;
    const batchDishes = currentBatch().map(byId);
    const chipsHtml = q.chips.filter(c => !placed[c]).map(c => {
      const ing = ING[c] || { it: c, pl: c, icon: 'verdure.svg' };
      return `<button class="drag-chip" data-drag-id="${c}"><img src="${ico(ing.icon)}" /><span>${esc(ing.it)}</span><span class="chip-pl">${esc(ing.pl)}</span></button>`;
    }).join('');
    const zonesHtml = currentBatch().map(id => {
      const it = byId(id);
      const items = q.chips.filter(c => placed[c] && placed[c].zone === id);
      const itemsHtml = items.map(c => {
        const ing = ING[c] || { it: c, pl: c, icon: 'verdure.svg' };
        const info = placed[c];
        const correctDish = info.ok ? null : batchDishes.find(d => d.ingIds.indexOf(c) >= 0);
        return `<span class="placed-item ${info.ok ? 'ok' : 'bad'}"><img src="${ico(ing.icon)}" /><span class="mark">${info.ok ? '✓' : '✗'}</span>${esc(ing.it)} · ${esc(ing.pl)}${correctDish ? `<span class="hint">→ ${esc(correctDish.name)}</span>` : ''}</span>`;
      }).join('');
      return `<div class="drop-zone" data-zone="${id}">
        <div class="serif" style="font-size:14px;font-weight:600;color:#2A2521;">${esc(it.name)}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">${itemsHtml}</div>
      </div>`;
    }).join('');
    body = `<div class="card" style="padding:16px 20px;"><div class="serif" style="font-size:17px;font-weight:600;color:#2A2521;line-height:1.35;">Przeciągnij każdy składnik do właściwego dania</div></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;min-height:64px;">${chipsHtml}</div>
      <div style="display:flex;flex-direction:column;gap:10px;">${zonesHtml}</div>`;
  }

  const feedback = checked ? `<div style="display:flex;flex-direction:column;gap:11px;padding-top:2px;">
      <div class="serif" style="font-size:17px;font-weight:600;color:${state.t9Results[state.t9Idx] ? '#4F7A52' : '#B0524C'};">${state.t9Results[state.t9Idx] ? 'Dobrze!' : 'Prawie — sprawdź poprawne odpowiedzi powyżej.'}</div>
      <button class="btn btn-dark btn-block" data-action="nextQuestion">Dalej →</button>
    </div>` : '';

  return `<div style="display:flex;flex-direction:column;gap:15px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span class="kicker">Pytanie ${state.t9Idx + 1} / ${total} · ${esc(catTitle(state.learnCat))}</span>
      <span style="font-size:12px;color:#9A9086;">${typeLabel}</span>
    </div>
    <div class="progressbar"><i style="width:${progressPct}%;"></i></div>
    ${body}
    ${feedback}
  </div>`;
}

function renderTestDone() {
  const score = state.t9Score, total = state.t9Questions.length;
  const pct = Math.round(score / total * 100);
  const headline = score === total ? 'Perfekcyjnie! Znasz te dania na wylot.' : (score >= total * 0.6 ? 'Dobra robota!' : 'Warto powtórzyć — spróbuj jeszcze raz.');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:18px;padding-top:16px;">
    <div class="result-ring">
      <div class="ring" style="background:conic-gradient(var(--accent) ${pct}%, #E9DFCF ${pct}%);"></div>
      <div class="hole"><div class="serif" style="font-size:26px;font-weight:600;color:#2A2521;">${score}/${total}</div></div>
    </div>
    <div class="serif" style="font-size:19px;color:#2A2521;text-align:center;">${esc(headline)}</div>
    <button class="btn btn-primary btn-block" data-action="advanceBatch">Kolejna grupa dań →</button>
    <div class="btn-row" style="width:100%;">
      <button class="btn btn-outline" data-action="retryTest">Powtórz test</button>
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

function renderBrowse() {
  const groups = CATS.map(c => {
    const its = ITEMS.filter(i => i.cat === c.key);
    const itemsHtml = its.map(i => {
      const allergens = (i.allergens && i.allergens.length)
        ? i.allergens.map(a => `<span class="allergen-pill-sm">${esc(a)}</span>`).join('')
        : `<span class="allergen-pill-sm none">brak</span>`;
      const pastaTag = i.pastaType
        ? `<span class="pasta-pill-sm">${i.pastaType === 'jajeczny' ? '🥚 jajeczny' : '🌾 bezjajeczny'}</span>`
        : '';

      const photoBtn = i.hasPhoto
        ? `<button class="btn-photo" data-action="openPhoto" data-id="${i.id}">📷 Zobacz zdjęcie</button>`
        : '';

      const compSummary = i.components ? i.components.map(comp => {
        const ingNames = comp.ingIds.map(iid => (ING[iid] ? ING[iid].pl : iid)).join(', ');
        return `<div style="font-size:11.5px;color:#5E554B;line-height:1.4;"><strong style="color:#7A4E1B;">${esc(comp.name)}:</strong> ${esc(ingNames)}</div>`;
      }).join('') : '';

      return `<div style="display:flex;gap:11px;background:#FFFFFF;border:1px solid #EAE2D5;border-radius:16px;padding:14px;">
        <span style="width:10px;height:10px;border-radius:50%;background:${dotColor(st(i.id).box)};flex:none;margin-top:6px;"></span>
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:6px;">
          <div style="display:flex;justify-content:space-between;gap:12px;align-items:baseline;">
            <span class="serif" style="font-size:16.5px;font-weight:600;color:#2A2521;">${esc(i.name)}</span>
            <span style="font-size:13.5px;color:#9A9086;white-space:nowrap;flex:none;font-weight:600;">${esc(i.price)} zł</span>
          </div>
          <div class="serif" style="font-style:italic;font-size:13px;color:#B08A5A;">${esc(i.pron)}</div>
          <div style="font-size:13px;line-height:1.5;color:#4A433B;">${esc(i.desc)}</div>
          
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-top:2px;">
            ${i.veg ? `<span class="veg-badge">${esc(vegLabel(i.veg))}</span>` : ''}
            ${pastaTag}
            ${photoBtn}
          </div>

          ${compSummary ? `<div style="background:#FAF6F0;border-left:2.5px solid #C1741F;padding:7px 10px;border-radius:6px;margin-top:3px;display:flex;flex-direction:column;gap:3px;">${compSummary}</div>` : ''}

          ${i.serviceNotes ? `<div style="font-size:11.5px;line-height:1.4;color:#B07219;background:#FFFDF7;border-left:3px solid #E2A042;padding:5px 8px;border-radius:4px;margin-top:2px;">💡 ${esc(i.serviceNotes)}</div>` : ''}

          <div style="display:flex;align-items:center;gap:6px;margin-top:4px;font-size:11px;color:#9A9086;">
            <span>Alergeny:</span>
            <div style="display:flex;gap:4px;flex-wrap:wrap;">${allergens}</div>
          </div>
        </div>
      </div>`;
    }).join('');

    return `<div style="display:flex;flex-direction:column;gap:13px;">
      <div style="display:flex;align-items:baseline;gap:9px;border-bottom:1.5px solid #E3D9C9;padding-bottom:7px;margin-top:6px;">
        <span class="serif" style="font-size:22px;font-weight:600;color:#2A2521;">${esc(c.title)}</span>
        <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#B08A5A;font-weight:700;">${esc(c.sub)}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">${itemsHtml}</div>
    </div>`;
  }).join('');

  return `<div style="display:flex;flex-direction:column;gap:22px;">
    ${groups}
    <div style="font-size:11.5px;line-height:1.5;color:#B0A69A;text-align:center;padding-top:4px;">Kropka po lewej wskazuje poziom opanowania w nauce. Dane zebrane ściśle z PDF menu Lupo.</div>
  </div>`;
}

function renderPhotoModal() {
  if (!state.photoModalId) return '';
  const item = byId(state.photoModalId);
  if (!item || !item.hasPhoto) return '';

  return `<div class="photo-modal-overlay" data-action="closePhoto">
    <div class="photo-modal-content" onclick="event.stopPropagation()">
      <button class="photo-modal-close" data-action="closePhoto" title="Zamknij">✕</button>
      <img class="photo-modal-img" src="assets/photos/${item.id}.jpg" alt="${esc(item.name)}" />
      <div class="photo-modal-info">
        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;">
          <span class="serif" style="font-size:20px;font-weight:600;color:#2A2521;">${esc(item.name)}</span>
          <span style="font-size:15px;font-weight:700;color:#C1741F;flex:none;">${esc(item.price)} zł</span>
        </div>
        <div class="serif" style="font-style:italic;font-size:13.5px;color:#A08A6E;">${esc(item.pron)}</div>
        <div style="font-size:12.5px;color:#6E655C;margin-top:4px;line-height:1.4;">🇵🇱 ${esc(item.tr.name.pl)}</div>
      </div>
    </div>
  </div>`;
}

const TITLES = { home: 'Twój postęp', learn: 'Nauka dania', test: 'Test', match: 'Dopasuj', browse: 'Karta Lupo' };
const NAV_DEFS = [['home', 'Postęp'], ['learn', 'Nauka'], ['test', 'Test'], ['match', 'Dopasuj'], ['browse', 'Karta']];

function render() {
  const mastered = ITEMS.filter(i => st(i.id).box >= 4).length;
  const overallPct = Math.round(mastered / ITEMS.length * 100);
  let body;
  if (state.screen === 'home') body = renderHome();
  else if (state.screen === 'learn') body = renderLearn();
  else if (state.screen === 'test') body = renderTest();
  else if (state.screen === 'match') body = renderMatch();
  else body = renderBrowse();

  const navHtml = NAV_DEFS.map(([key, label]) => `<button class="nav-btn ${state.screen === key ? 'active' : ''}" data-action="go" data-id="${key}"><span class="bar"></span>${label}</button>`).join('');

  root.innerHTML = `
    <header class="app-header">
      <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
        <div class="app-title">${TITLES[state.screen] || ''}</div>
        <div class="app-sub">Lupo · nauka menu</div>
      </div>
      <div class="head-pill"><span class="dot"></span><span class="val">${overallPct}%</span></div>
    </header>
    <main class="app-main">${body}</main>
    <nav class="app-nav">${navHtml}</nav>
    ${renderPhotoModal()}
  `;
}

// ================= EVENTS =================
const ACTIONS = {
  go: (id) => go(id),
  toggleCat: (id) => toggleCat(id),
  selectLearnCat: (id) => selectLearnCat(id),
  resetProgress: () => resetProgress(),
  learnNext: () => learnNext(),
  learnPrev: () => learnPrev(),
  advanceBatch: () => advanceBatch(),
  retryTest: () => retryTest(),
  selectSingle: (id) => selectSingle(id),
  checkSingle: () => checkSingle(),
  toggleMulti: (id) => toggleMulti(id),
  checkMulti: () => checkMulti(),
  nextQuestion: () => nextQuestion(),
  pickLeft: (id) => pickLeft(id),
  pickRight: (id) => pickRight(id),
  newMatchRound: () => { buildMatch(); render(); },
  openPhoto: (id) => openPhoto(id),
  closePhoto: () => closePhoto()
};

root.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el || el.disabled) return;
  const action = el.getAttribute('data-action');
  const id = el.getAttribute('data-id');
  const fn = ACTIONS[action];
  if (fn) fn(id);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.photoModalId) {
    closePhoto();
  }
});

// pointer-based drag & drop for the "drag" question type
root.addEventListener('pointerdown', (e) => {
  const chip = e.target.closest('[data-drag-id]');
  if (!chip) return;
  const q = currentQ();
  if (!q || q.type !== 'drag' || state.t9Checked) return;
  const ingId = chip.getAttribute('data-drag-id');
  if (state.t9Drag.placed[ingId]) return;

  e.preventDefault();
  const rect = chip.getBoundingClientRect();
  const ghost = chip.cloneNode(true);
  Object.assign(ghost.style, {
    position: 'fixed', left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px',
    margin: '0', pointerEvents: 'none', zIndex: '9999', opacity: '0.96',
    boxShadow: '0 14px 28px rgba(42,37,33,.28)', transform: 'scale(1.05)', transition: 'none'
  });
  document.body.appendChild(ghost);
  chip.style.opacity = '0.25';
  const offX = e.clientX - rect.left, offY = e.clientY - rect.top;

  function move(ev) {
    ghost.style.left = (ev.clientX - offX) + 'px';
    ghost.style.top = (ev.clientY - offY) + 'px';
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('hover'));
    const el = document.elementFromPoint(ev.clientX, ev.clientY);
    const zone = el && el.closest('[data-zone]');
    if (zone) zone.classList.add('hover');
  }
  function up(ev) {
    document.removeEventListener('pointermove', move);
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('hover'));
    ghost.remove();
    const el = document.elementFromPoint(ev.clientX, ev.clientY);
    const zone = el && el.closest('[data-zone]');
    const zoneKey = zone ? zone.getAttribute('data-zone') : null;
    if (zoneKey) dropChip(ingId, zoneKey);
  }
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', up, { once: true });
});

render();
