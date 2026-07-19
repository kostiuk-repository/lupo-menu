// Dane menu Lupo (wersja z 10.07.2026): dania + główne składniki do testów (ingIds) + komponenty szczegółowe + tłumaczenia + alergeny + wskazówki.
// Ikony składników: assets/ingredients/*.svg (Twemoji 14.0.2, CC-BY 4.0).
// Zdjęcia dań: assets/photos/*.jpg wyciągnięte z menu.

export const CATS = [
  { key: 'antipasti', title: 'Antipasti', sub: 'Przystawki' },
  { key: 'pasta', title: 'Pasta', sub: 'Makarony' },
  { key: 'secondi', title: 'Secondi', sub: 'Dania główne' },
  { key: 'dolce', title: 'Dolce', sub: 'Desery' },
  { key: 'bibite', title: 'Bibite', sub: 'Napoje' },
  { key: 'caffe', title: 'Caffè', sub: 'Kawa' },
  { key: 'te', title: 'Tè e infusi', sub: 'Herbaty i napary' }
];

export const DISH_PHOTOS = [
  'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a9', 'a11',
  'p1', 'p2', 'p5', 'p6', 'p7', 'p8', 'p9',
  's1', 's2', 's3',
  'd2', 'd5', 'd7', 'd8'
];

export const TIPS = [
  'Zawsze proponujemy min. 2 dania dla 1 osoby: przystawkę + makaron lub przystawkę + drugie.',
  'Zawsze proponujemy deser oraz kawę lub digestivo po posiłku.',
  'Do wszystkich dań serwujemy naszą autorską focaccię (z oliwą nalewaną z konewki przy stoliku).',
  'Do poszczególnych dań rekomendujemy odpowiednio dobrane wina i koktajle.',
  'Jeśli ktoś zgłasza alergię, zawsze dokładnie weryfikujemy skład dania na kuchni.',
  'W poniedziałki zapraszamy na Parmigiano Reggiano Show — cacio e pepe z kręgu parmezanu za 48 zł/porcja.',
  'Rezerwacje mają limit czasowy: 1,5h do 16:00, a od 16:00 limit 2h. Do stolików od 6 osób doliczamy +12% serwisu.'
];

export const SERVICE_RULES = [
  { title: 'Standard 2 dań', desc: 'Zawsze proponujemy przynajmniej dwie rzeczy dla 1 osoby: przystawkę i makaron, lub przystawkę i drugie danie.' },
  { title: 'Propozycja deseru', desc: 'Po posiłku zawsze proponujemy deser oraz kawę lub digestivo (np. amaro lub limoncello).' },
  { title: 'Autorska Focaccia', desc: 'Do każdego stolika serwujemy focaccię. Oliwę nalewamy przy gościu z konewki na spodeczek (+ sól i pieprz).' },
  { title: 'Dobór napojów', desc: 'Każdą propozycję potrawy uzupełniamy odpowiednio dobranym koktajlem lub winem.' },
  { title: 'Alergie i bezpieczeństwo', desc: 'W przypadku jakiejkolwiek zgłoszonej alergii bezwzględnie weryfikujemy skład dania na kuchni.' }
];

export const ING = {
  // Podstawowe & Przyprawy
  sale: { it: 'sale marino', pl: 'sól morska', en: 'sea salt', icon: 'sale.svg' },
  acqua: { it: 'acqua', pl: 'woda', en: 'water', icon: 'acqua.svg' },
  pepe: { it: 'pepe nero', pl: 'czarny pieprz', en: 'black pepper', icon: 'pepeverde.svg' },
  olio: { it: 'olio d’oliva', pl: 'oliwa z oliwek', en: 'olive oil', icon: 'olio-oliva.svg' },
  farina: { it: 'farina', pl: 'mąka pszenna', en: 'wheat flour', icon: 'farina.svg' },
  lievito: { it: 'lievito', pl: 'drożdże', en: 'yeast', icon: 'lievito.svg' },
  uova: { it: 'uova', pl: 'jajka', en: 'eggs', icon: 'uova.svg' },
  tuorlo: { it: 'tuorlo', pl: 'żółtko jajka', en: 'egg yolk', icon: 'uova.svg' },
  burro: { it: 'burro', pl: 'masło', en: 'butter', icon: 'burro.svg' },
  zucchero: { it: 'zucchero', pl: 'cukier', en: 'sugar', icon: 'zucchero.svg' },
  miel: { it: 'miele', pl: 'miód', en: 'honey', icon: 'miel.svg' },
  aceto: { it: 'aceto', pl: 'ocet winny', en: 'vinegar', icon: 'aceto.svg' },
  wino: { it: 'vino bianco', pl: 'białe wino', en: 'white wine', icon: 'wino.svg' },
  vodka: { it: 'vodka', pl: 'wódka', en: 'vodka', icon: 'vodka.svg' },
  amaro: { it: 'amaro', pl: 'likier amaro', en: 'amaro liqueur', icon: 'aceto.svg' },
  amaretto: { it: 'amaretto', pl: 'likier amaretto', en: 'amaretto liqueur', icon: 'aceto.svg' },
  vermut: { it: 'vermut', pl: 'wermut', en: 'vermouth', icon: 'aceto.svg' },
  limoncello: { it: 'limoncello', pl: 'limoncello', en: 'limoncello', icon: 'limone.svg' },

  // Warzywa & Zioła
  salvia: { it: 'salvia', pl: 'szałwia', en: 'sage', icon: 'salvia.svg' },
  basilico: { it: 'basilico', pl: 'bazylia', en: 'basil', icon: 'basilico.svg' },
  erbe: { it: 'erbe fresche', pl: 'świeże zioła', en: 'fresh herbs', icon: 'basilico.svg' },
  alloro: { it: 'alloro', pl: 'liść laurowy', en: 'bay leaf', icon: 'basilico.svg' },
  spinaci: { it: 'spinaci', pl: 'szpinak', en: 'spinach', icon: 'spinaci.svg' },
  crescione: { it: 'crescione', pl: 'rukiew wodna', en: 'watercress', icon: 'spinaci.svg' },
  cipolla: { it: 'cipolla / scalogno', pl: 'szalotka / cebula', en: 'shallot / onion', icon: 'cipolla.svg' },
  czosnek: { it: 'aglio', pl: 'czosnek', en: 'garlic', icon: 'czosnek.svg' },
  czosnekniedzwiedzi: { it: 'aglio orsino', pl: 'czosnek niedźwiedzi', en: 'wild garlic', icon: 'czosnek.svg' },
  szczypiorek: { it: 'erba cipollina', pl: 'szczypiorek', en: 'chives', icon: 'basilico.svg' },
  porro: { it: 'porro', pl: 'por', en: 'leek', icon: 'cipolla.svg' },
  finocchio: { it: 'finocchio', pl: 'koper włoski (fenkuł)', en: 'fennel', icon: 'finocchio.svg' },
  insalata: { it: 'insalata', pl: 'sałata', en: 'lettuce greens', icon: 'insalata.svg' },
  fagiolini: { it: 'fagiolini', pl: 'fasolka szparagowa', en: 'green beans', icon: 'fave.svg' },
  fave: { it: 'fave', pl: 'bób', en: 'fava beans', icon: 'fave.svg' },
  capperi: { it: 'capperi', pl: 'kapary', en: 'capers', icon: 'fave.svg' },
  melanzana: { it: 'melanzana', pl: 'bakłażan', en: 'eggplant', icon: 'melanzana.svg' },
  zucchine: { it: 'zucchine', pl: 'cukinia', en: 'zucchini', icon: 'zucchine.svg' },
  fioridizucca: { it: 'fiori di zucca', pl: 'kwiaty cukinii', en: 'zucchini flowers', icon: 'fioridizucca.svg' },
  patate: { it: 'patate', pl: 'ziemniaki', en: 'potatoes', icon: 'patate.svg' },
  gnocchi: { it: 'gnocchi', pl: 'gnocchi', en: 'gnocchi', icon: 'patate.svg' },
  funghi: { it: 'funghi opieńki', pl: 'opieńki / grzyby', en: 'mushrooms', icon: 'funghi.svg' },
  gallinacci: { it: 'gallinacci', pl: 'kurki', en: 'chanterelles', icon: 'funghi.svg' },
  verdure: { it: 'verdure', pl: 'warzywa', en: 'vegetables', icon: 'verdure.svg' },
  peperoncino: { it: 'peperoncino', pl: 'papryczka chili', en: 'chili pepper', icon: 'peperoncino.svg' },
  pepeverde: { it: 'pepe verde', pl: 'zielony pieprz', en: 'green pepper', icon: 'pepeverde.svg' },
  gorczyca: { it: 'senape', pl: 'gorczyca / musztarda', en: 'mustard', icon: 'zafferano.svg' },
  zafferano: { it: 'zafferano', pl: 'szafran', en: 'saffron', icon: 'zafferano.svg' },
  menta: { it: 'menta', pl: 'mięta', en: 'mint', icon: 'basilico.svg' },
  rozmaryn: { it: 'rosmarino', pl: 'rozmaryn', en: 'rosemary', icon: 'salvia.svg' },
  seler: { it: 'sedano', pl: 'seler', en: 'celery', icon: 'verdure.svg' },
  marchew: { it: 'carota', pl: 'marchewka', en: 'carrot', icon: 'marchew.svg' },
  tymianek: { it: 'timo', pl: 'tymianek', en: 'thyme', icon: 'salvia.svg' },
  majeranek: { it: 'maggiorana', pl: 'majeranek', en: 'marjoram', icon: 'salvia.svg' },
  pomodoro: { it: 'pomodoro', pl: 'pomidory', en: 'tomatoes', icon: 'pomodoro.svg' },
  pomodorini: { it: 'pomodorini', pl: 'pomidorki cherry', en: 'cherry tomatoes', icon: 'pomodoro.svg' },
  pomodorogiallo: { it: 'pomodoro giallo', pl: 'żółte pomidory', en: 'yellow tomatoes', icon: 'pomodoro.svg' },
  olive: { it: 'olive', pl: 'oliwki', en: 'olives', icon: 'olive.svg' },

  // Owoce
  arancia: { it: 'arancia', pl: 'pomarańcza', en: 'orange', icon: 'arancia.svg' },
  limone: { it: 'limone', pl: 'cytryna', en: 'lemon', icon: 'limone.svg' },
  uvaspina: { it: 'uva spina', pl: 'agrest', en: 'gooseberry', icon: 'uvaspina.svg' },
  pesca: { it: 'pesca', pl: 'brzoskwinia', en: 'peach', icon: 'pesca.svg' },
  pera: { it: 'pera', pl: 'gruszka', en: 'pear', icon: 'pesca.svg' },
  lamponi: { it: 'lamponi', pl: 'maliny', en: 'raspberries', icon: 'lamponi.svg' },
  mirtilli: { it: 'mirtilli', pl: 'jagody', en: 'blueberries', icon: 'mirtilli.svg' },
  melone: { it: 'melone', pl: 'melon', en: 'melon', icon: 'melone.svg' },
  rabarbaro: { it: 'rabarbaro', pl: 'rabarbar', en: 'rhubarb', icon: 'coriandolo.svg' },
  coriandolo: { it: 'coriandolo', pl: 'kolendra', en: 'coriander', icon: 'coriandolo.svg' },
  bez: { it: 'fiori di sambuco', pl: 'kwiat czarnego bzu', en: 'elderflower', icon: 'verbena.svg' },
  wanilia: { it: 'vaniglia', pl: 'wanilia', en: 'vanilla', icon: 'zafferano.svg' },
  cynamon: { it: 'cannella', pl: 'cynamon', en: 'cinnamon', icon: 'zafferano.svg' },
  bergamotka: { it: 'bergamotto', pl: 'bergamotka', en: 'bergamot', icon: 'arancia.svg' },

  // Sery & Nabiał
  stracciatella: { it: 'stracciatella', pl: 'stracciatella (ser)', en: 'stracciatella cheese', icon: 'stracciatella.svg' },
  burrata: { it: 'burrata', pl: 'burrata (ser)', en: 'burrata cheese', icon: 'stracciatella.svg' },
  mozzarella: { it: 'mozzarella', pl: 'mozzarella (ser)', en: 'mozzarella cheese', icon: 'stracciatella.svg' },
  ricotta: { it: 'ricotta', pl: 'ricotta (ser)', en: 'ricotta cheese', icon: 'ricotta.svg' },
  parmigiano: { it: 'parmigiano', pl: 'parmezan', en: 'parmesan', icon: 'parmigiano.svg' },
  pecorino: { it: 'pecorino', pl: 'pecorino romano', en: 'pecorino cheese', icon: 'parmigiano.svg' },
  mascarpone: { it: 'mascarpone', pl: 'mascarpone (ser)', en: 'mascarpone cheese', icon: 'mascarpone.svg' },
  stracchino: { it: 'stracchino', pl: 'stracchino (ser)', en: 'stracchino cheese', icon: 'stracciatella.svg' },
  formaggiocapra: { it: 'formaggio di capra', pl: 'ser kozi', en: 'goat cheese', icon: 'formaggiocapra.svg' },
  panna: { it: 'panna', pl: 'śmietanka / śmietana', en: 'cream', icon: 'yogurt.svg' },
  yogurt: { it: 'yogurt', pl: 'jogurt', en: 'yogurt', icon: 'yogurt.svg' },

  // Mięso, Ryby & Owoce morza
  manzo: { it: 'manzo', pl: 'wołowina', en: 'beef', icon: 'manzo.svg' },
  guanciadimanzo: { it: 'guancia di manzo', pl: 'policzek wołowy', en: 'beef cheek', icon: 'manzo.svg' },
  maiale: { it: 'maiale con osso', pl: 'schab wieprzowy z kością', en: 'pork cutlet with bone', icon: 'maiale.svg' },
  salsiccia: { it: 'salsiccia', pl: 'kiełbasa salsiccia', en: 'salsiccia sausage', icon: 'salsiccia.svg' },
  guanciale: { it: 'guanciale', pl: 'guanciale', en: 'cured pork cheek', icon: 'guanciale.svg' },
  lardo: { it: 'lardo', pl: 'lardo', en: 'cured fatback', icon: 'guanciale.svg' },
  orata: { it: 'orata', pl: 'dorada chorwacka', en: 'sea bream', icon: 'orata.svg' },
  cozze: { it: 'cozze', pl: 'mule (małże)', en: 'mussels', icon: 'cozze.svg' },
  gamberi: { it: 'gamberi', pl: 'krewetki', en: 'shrimp', icon: 'gamberi.svg' },
  astice: { it: 'astice', pl: 'homar', en: 'lobster', icon: 'astice.svg' },
  worcestershire: { it: 'salsa Worcestershire', pl: 'sos Worcestershire', en: 'Worcestershire sauce', icon: 'aceto.svg' },

  // Pieczywo, Bakalie, Napoje & Inne
  pane: { it: 'pane / pangrattato', pl: 'pieczywo / chleb / posypka', en: 'bread / breadcrumbs', icon: 'pane.svg' },
  brioche: { it: 'brioche / maritozzo', pl: 'bułka maślana maritozzo', en: 'brioche bun', icon: 'pane.svg' },
  pastafresca: { it: 'pasta fresca', pl: 'świeży makaron', en: 'fresh pasta', icon: 'pasta-fresca.svg' },
  pastachoux: { it: 'pasta choux', pl: 'ciasto parzone choux', en: 'choux pastry', icon: 'pastachoux.svg' },
  savoiardi: { it: 'savoiardi', pl: 'biszkopty savoiardi', en: 'ladyfingers', icon: 'savoiardi.svg' },
  mandorla: { it: 'mandorla', pl: 'migdały', en: 'almonds', icon: 'mandorla.svg' },
  nocciole: { it: 'nocciole / noci', pl: 'orzechy włoskie', en: 'walnuts', icon: 'nocciole.svg' },
  cacao: { it: 'cacao', pl: 'kakao w proszku', en: 'cocoa powder', icon: 'cacao.svg' },
  cioccolato: { it: 'cioccolato', pl: 'czekolada', en: 'chocolate', icon: 'cacao.svg' },
  caffe: { it: 'caffè', pl: 'kawa espresso', en: 'espresso coffee', icon: 'caffe.svg' },
  verbena: { it: 'verbena', pl: 'werbena', en: 'verbena', icon: 'verbena.svg' },
  camomilla: { it: 'camomilla', pl: 'rumianek', en: 'chamomile', icon: 'camomilla.svg' },
  ryz: { it: 'riso', pl: 'ryż', en: 'rice', icon: 'ryz.svg' }
};

export const ITEMS = [
  // --- ANTIPASTI ---
  {
    id: 'a1',
    cat: 'antipasti',
    name: 'salvia fritta',
    pron: 'salwia fritta',
    desc: 'chrupiące liście szałwii (v)',
    price: '12',
    veg: 'v',
    allergens: ['gluten', 'jaja'],
    serviceNotes: 'Chrupiąca przekąska na start. Szałwia smażona w ciastku na bazie oliwy, wody i mąki pszennej. Podawana z solą morską.',
    ingIds: ['salvia'],
    testDesc: [
      'chrupiące liście ',
      { ingId: 'salvia', text: 'szałwii' }
    ],
    components: [
      { name: 'Główne składniki', ingIds: ['salvia', 'sale'] },
      { name: 'Ciasto do smażenia', ingIds: ['farina', 'olio', 'acqua', 'uova'] }
    ],
    tr: {
      name: { pl: 'Smażona szałwia', en: 'Fried sage' },
      desc: { en: 'Crispy fried sage leaves.' }
    }
  },
  {
    id: 'a2',
    cat: 'antipasti',
    name: 'cipolline sottaceti',
    pron: 'czipolline sottaczeti',
    desc: 'piklowane szalotki w occie z czerwonego wina i ziarnami kolendry (vg)',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Wytrawne, słodko-kwaśne cebulki szalotki marynowane w occie winnym i kolendrze.',
    ingIds: ['cipolla', 'aceto', 'coriandolo'],
    testDesc: [
      'piklowane ',
      { ingId: 'cipolla', text: 'szalotki' },
      ' w ',
      { ingId: 'aceto', text: 'occie z czerwonego wina' },
      ' i ziarnami ',
      { ingId: 'coriandolo', text: 'kolendry' }
    ],
    components: [
      { name: 'Baza dania', ingIds: ['cipolla'] },
      { name: 'Marynata', ingIds: ['aceto', 'coriandolo', 'zucchero', 'sale'] }
    ],
    tr: {
      name: { pl: 'Marynowane cebulki', en: 'Pickled baby onions' },
      desc: { en: 'Pickled shallots in red wine vinegar with coriander seeds.' }
    }
  },
  {
    id: 'a3',
    cat: 'antipasti',
    name: 'olive verdi',
    pron: 'olive werdi',
    desc: 'marynowane oliwki "Castelvetrano" z liściem laurowym i skórką z pomarańczy (vg)',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: '⚠️ Pamiętaj poinformować gościa: oliwki podawane są z pestką!',
    ingIds: ['olive', 'alloro', 'arancia'],
    testDesc: [
      'marynowane ',
      { ingId: 'olive', text: 'oliwki "Castelvetrano"' },
      ' z ',
      { ingId: 'alloro', text: 'liściem laurowym' },
      ' i skórką z ',
      { ingId: 'arancia', text: 'pomarańczy' }
    ],
    components: [
      { name: 'Oliwki', ingIds: ['olive'] },
      { name: 'Marynata', ingIds: ['olio', 'alloro', 'arancia'] }
    ],
    tr: {
      name: { pl: 'Zielone oliwki', en: 'Green olives' },
      desc: { en: 'Marinated Castelvetrano olives with bay leaf and orange zest.' }
    }
  },
  {
    id: 'a4',
    cat: 'antipasti',
    name: 'antipasti misti',
    pron: 'antipasti misti',
    desc: 'zestaw: piklowane szalotki, oliwki, liście szałwii (vg)',
    price: '33',
    veg: 'vg',
    allergens: ['gluten', 'jaja'],
    serviceNotes: 'Idealny zestaw przekąsek do dzielenia się na początek posiłku.',
    ingIds: ['cipolla', 'olive', 'salvia'],
    testDesc: [
      'zestaw: piklowane ',
      { ingId: 'cipolla', text: 'szalotki' },
      ', ',
      { ingId: 'olive', text: 'oliwki' },
      ', liście ',
      { ingId: 'salvia', text: 'szałwii' }
    ],
    components: [
      { name: 'Składniki zestawu', ingIds: ['cipolla', 'olive', 'salvia', 'aceto', 'alloro', 'arancia', 'farina'] }
    ],
    tr: {
      name: { pl: 'Zestaw przystawek', en: 'Mixed antipasti' },
      desc: { en: 'Set of pickled shallots, olives, fried sage leaves.' }
    }
  },
  {
    id: 'a5',
    cat: 'antipasti',
    name: 'focaccia',
    pron: 'fokacza',
    desc: 'domowa focaccia z oliwą z oliwek (vg)',
    price: '12',
    veg: 'vg',
    allergens: ['gluten'],
    serviceNotes: 'Oliwę nalewamy przy gościu z konewki na spodeczek (+ sól i pieprz). Gratis do dań: 2 os. = 3 kromki, 3+ os. = po 1 kromce/os.',
    ingIds: ['pane', 'olio'],
    testDesc: [
      'domowa ',
      { ingId: 'pane', text: 'focaccia' },
      ' z ',
      { ingId: 'olio', text: 'oliwą z oliwek' }
    ],
    components: [
      { name: 'Ciasto i podanie', ingIds: ['farina', 'lievito', 'olio', 'sale'] }
    ],
    tr: {
      name: { pl: 'Autorska focaccia', en: 'House focaccia' },
      desc: { en: 'Homemade focaccia with olive oil.' }
    }
  },
  {
    id: 'a6',
    cat: 'antipasti',
    name: 'insalata verde',
    pron: 'insalata werde',
    desc: 'mieszanka sezonowych sałat i ziół (vg)',
    price: '18',
    veg: 'vg',
    allergens: ['gorczyca'],
    serviceNotes: 'Lokalna mieszanka sałat z dressingiem cytrynowym.',
    ingIds: ['insalata', 'erbe'],
    testDesc: [
      'mieszanka sezonowych ',
      { ingId: 'insalata', text: 'sałat' },
      ' i ',
      { ingId: 'erbe', text: 'ziół' }
    ],
    components: [
      { name: 'Baza sałat', ingIds: ['insalata', 'erbe', 'limone'] }
    ],
    tr: {
      name: { pl: 'Zielona sałatka', en: 'Green salad' },
      desc: { en: 'Mix of seasonal salad greens and herbs.' }
    }
  },
  {
    id: 'a7',
    cat: 'antipasti',
    name: 'caprese diversa',
    pron: 'kapreze diwersa',
    desc: 'kremowy ser stracciatella z karmelizowanymi pomidorami i oliwą bazyliową (v)',
    price: '42',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Kremowa stracciatella ze słodkimi pomidorami i oliwą bazyliową.',
    ingIds: ['stracciatella', 'pomodoro', 'basilico', 'olio'],
    testDesc: [
      'kremowy ser ',
      { ingId: 'stracciatella', text: 'stracciatella' },
      ' z karmelizowanymi ',
      { ingId: 'pomodoro', text: 'pomidorami' },
      ' i oliwą ',
      { ingId: 'basilico', text: 'bazyliową' }
    ],
    components: [
      { name: 'Elementy', ingIds: ['stracciatella', 'pomodoro', 'basilico', 'olio'] }
    ],
    tr: {
      name: { pl: 'Caprese diversa', en: 'Caprese diversa' },
      desc: { en: 'Creamy stracciatella cheese with caramelized tomatoes and basil oil.' }
    }
  },
  {
    id: 'a8',
    cat: 'antipasti',
    name: 'fagiolini con pesche',
    pron: 'fadżiolini kon peske',
    desc: 'żółta fasolka szparagowa ze świeżymi brzoskwiniami, migdałami i werbeną (vg)',
    price: '32',
    veg: 'vg',
    allergens: ['orzechy'],
    serviceNotes: 'Lekka, wyrazista przystawka łącząca fasolkę, brzoskwinie, migdały i werbenę.',
    ingIds: ['fagiolini', 'pesca', 'mandorla', 'verbena'],
    testDesc: [
      'żółta ',
      { ingId: 'fagiolini', text: 'fasolka szparagowa' },
      ' ze świeżymi ',
      { ingId: 'pesca', text: 'brzoskwiniami' },
      ', ',
      { ingId: 'mandorla', text: 'migdałami' },
      ' i ',
      { ingId: 'verbena', text: 'werbeną' }
    ],
    components: [
      { name: 'Składniki', ingIds: ['fagiolini', 'pesca', 'mandorla', 'verbena'] }
    ],
    tr: {
      name: { pl: 'Fasolka szparagowa z brzoskwiniami', en: 'Green beans with peaches' },
      desc: { en: 'Yellow string beans with fresh peaches, almonds and verbena.' }
    }
  },
  {
    id: 'a9',
    cat: 'antipasti',
    name: 'crudo di orata con crema di finocchio',
    pron: 'krudo di orata kon krema di finokkio',
    desc: 'crudo z dorady z kremem z kopru włoskiego, agrestem, kaparami z czosnku niedźwiedziego i chrupiącym chlebem sardyńskim',
    price: '48',
    veg: null,
    allergens: ['ryby', 'gluten'],
    serviceNotes: 'Świeża surowa dorada (40g) podana z kremem z fenkułu, agrestem i chlebem pane carasau.',
    ingIds: ['orata', 'finocchio', 'uvaspina', 'czosnekniedzwiedzi', 'pane'],
    testDesc: [
      'crudo z ',
      { ingId: 'orata', text: 'dorady' },
      ' z kremem z ',
      { ingId: 'finocchio', text: 'kopru włoskiego' },
      ', ',
      { ingId: 'uvaspina', text: 'agrestem' },
      ', kaparami z ',
      { ingId: 'czosnekniedzwiedzi', text: 'czosnku niedźwiedziego' },
      ' i chrupiącym ',
      { ingId: 'pane', text: 'chlebem sardyńskim' }
    ],
    components: [
      { name: 'Składniki dania', ingIds: ['orata', 'finocchio', 'uvaspina', 'czosnekniedzwiedzi', 'pane'] }
    ],
    tr: {
      name: { pl: 'Crudo z dorady', en: 'Sea bream crudo' },
      desc: { en: 'Sea bream crudo with fennel cream, gooseberries, wild garlic capers and Sardinian bread.' }
    }
  },
  {
    id: 'a10',
    cat: 'antipasti',
    name: 'fiori di zucca con pappa al pomodoro',
    pron: 'fiori di dzukka kon pappa al pomodoro',
    desc: 'smażone kwiaty cukinii z serem kozim i bobem, tymiankiem, chili i chłodnikiem ze świeżych pomidorów (v)',
    price: '48',
    veg: 'v',
    allergens: ['mleko', 'gluten'],
    serviceNotes: 'Chrupiące kwiaty cukinii nadziewane serem kozim i bobem na chłodniku pomidorowym.',
    ingIds: ['fioridizucca', 'formaggiocapra', 'fave', 'tymianek', 'peperoncino', 'pomodoro'],
    testDesc: [
      'smażone ',
      { ingId: 'fioridizucca', text: 'kwiaty cukinii' },
      ' z ',
      { ingId: 'formaggiocapra', text: 'serem kozim' },
      ' i ',
      { ingId: 'fave', text: 'bobem' },
      ', ',
      { ingId: 'tymianek', text: 'tymiankiem' },
      ', ',
      { ingId: 'peperoncino', text: 'chili' },
      ' i chłodnikiem ze świeżych ',
      { ingId: 'pomodoro', text: 'pomidorów' }
    ],
    components: [
      { name: 'Nadzienie i sos', ingIds: ['fioridizucca', 'formaggiocapra', 'fave', 'tymianek', 'peperoncino', 'pomodoro'] }
    ],
    tr: {
      name: { pl: 'Kwiaty cukinii z pappa al pomodoro', en: 'Zucchini flowers with tomato soup' },
      desc: { en: 'Fried zucchini flowers with goat cheese, fava beans, thyme, chili and chilled fresh tomato soup.' }
    }
  },
  {
    id: 'a11',
    cat: 'antipasti',
    name: 'tartare al parmigiano',
    pron: 'tartare al parmidżano',
    desc: 'tatar wołowy z żółtkiem przepiórczym, pianką parmezanową i marynowanymi opieńkami',
    price: '52',
    veg: null,
    allergens: ['mleko', 'jaja'],
    serviceNotes: 'Tatar wołowy pod zwieńczeniem aksamitnej pianki parmezanowej. Zawsze serwujemy z solą i młotkowanym pieprzem.',
    ingIds: ['manzo', 'tuorlo', 'parmigiano', 'funghi'],
    testDesc: [
      'tatar ',
      { ingId: 'manzo', text: 'wołowy' },
      ' z ',
      { ingId: 'tuorlo', text: 'żółtkiem przepiórczym' },
      ', pianką ',
      { ingId: 'parmigiano', text: 'parmezanową' },
      ' i marynowanymi ',
      { ingId: 'funghi', text: 'opieńkami' }
    ],
    components: [
      { name: 'Główne elementy', ingIds: ['manzo', 'tuorlo', 'parmigiano', 'funghi', 'cipolla', 'worcestershire'] }
    ],
    tr: {
      name: { pl: 'Tatar wołowy z parmezanem', en: 'Beef tartare with parmesan foam' },
      desc: { en: 'Beef tartare with quail egg yolk, parmesan foam and marinated mushrooms.' }
    }
  },
  {
    id: 'a12',
    cat: 'antipasti',
    name: 'zuppa del giorno',
    pron: 'dzuppa del dżorno',
    desc: 'zupa dnia',
    price: '18',
    veg: 'v',
    allergens: ['zależy od dnia'],
    serviceNotes: 'Codziennie inna autorska zupa. Przed zaoferowaniem dopytaj w kuchni o skład i alergeny.',
    ingIds: ['verdure', 'erbe'],
    testDesc: [
      { ingId: 'verdure', text: 'zupa' },
      ' ',
      { ingId: 'erbe', text: 'dnia' }
    ],
    components: [
      { name: 'Baza zupy', ingIds: ['verdure', 'erbe'] }
    ],
    tr: {
      name: { pl: 'Zupa dnia', en: 'Soup of the day' },
      desc: { en: 'Soup of the day.' }
    }
  },

  // --- PASTA ---
  {
    id: 'p1',
    cat: 'pasta',
    name: 'occhi di lupo alla vodka',
    pron: 'okki di lupo alla wodka',
    desc: 'klasyk lat 80-tych, sos śmietanowo - pomidorowy z dodatkiem wódki (v)',
    price: '32',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'cebula', 'czosnek'],
    serviceNotes: 'Wódka całkowicie odparowuje w trakcie gotowania — danie nie zawiera alkoholu.',
    ingIds: ['panna', 'pomodoro', 'vodka'],
    testDesc: [
      'klasyk lat 80-tych, sos ',
      { ingId: 'panna', text: 'śmietanowo' },
      ' - ',
      { ingId: 'pomodoro', text: 'pomidorowy' },
      ' z dodatkiem ',
      { ingId: 'vodka', text: 'wódki' }
    ],
    components: [
      { name: 'Składniki sosu', ingIds: ['pastafresca', 'pomodoro', 'panna', 'vodka', 'czosnek', 'cipolla'] }
    ],
    tr: {
      name: { pl: 'Occhi di lupo w sosie z wódką', en: 'Occhi di lupo alla vodka' },
      desc: { en: '80s classic, tomato-cream sauce with vodka.' }
    }
  },
  {
    id: 'p2',
    cat: 'pasta',
    name: 'rosette al ragù',
    pron: 'rozette al ragu',
    desc: 'rodzaj lasagne z Modeny z długo gotowanymi policzkami wołowymi po bolońsku z ziołami',
    price: '48',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'seler', 'cebula'],
    serviceNotes: 'Rolowana zapiekana lasagne z farszem z policzków wołowych po bolońsku.',
    ingIds: ['pastafresca', 'guanciadimanzo', 'erbe'],
    testDesc: [
      'rodzaj ',
      { ingId: 'pastafresca', text: 'lasagne z Modeny' },
      ' z długo gotowanymi ',
      { ingId: 'guanciadimanzo', text: 'policzkami wołowymi' },
      ' po bolońsku z ',
      { ingId: 'erbe', text: 'ziołami' }
    ],
    components: [
      { name: 'Farsz i makaron', ingIds: ['pastafresca', 'guanciadimanzo', 'pomodoro', 'seler', 'marchew', 'cipolla', 'erbe'] }
    ],
    tr: {
      name: { pl: 'Rosette z ragù z policzków', en: 'Rosette with beef cheek ragù' },
      desc: { en: 'Type of Modena lasagna with long-cooked beef cheeks Bolognese style with herbs.' }
    }
  },
  {
    id: 'p3',
    cat: 'pasta',
    name: 'gnocchi allo zafferano e zucchine novelle',
    pron: 'niokki allo dzafferano e dzukkine nowelle',
    desc: 'gnocchi ze słodkich ziemniaków z szafranem w sosie z żółtych pomidorów, z młodymi cukiniami i ziołami',
    price: '46',
    veg: 'v',
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'mleko'],
    serviceNotes: 'Gnocchi ze słodkich ziemniaków z szafranem i sosem z żółtych pomidorów.',
    ingIds: ['patate', 'zafferano', 'pomodorogiallo', 'zucchine', 'erbe'],
    testDesc: [
      'gnocchi ze ',
      { ingId: 'patate', text: 'słodkich ziemniaków' },
      ' z ',
      { ingId: 'zafferano', text: 'szafranem' },
      ' w sosie z ',
      { ingId: 'pomodorogiallo', text: 'żółtych pomidorów' },
      ', z młodymi ',
      { ingId: 'zucchine', text: 'cukiniami' },
      ' i ',
      { ingId: 'erbe', text: 'ziołami' }
    ],
    components: [
      { name: 'Główne elementy', ingIds: ['gnocchi', 'patate', 'zafferano', 'pomodorogiallo', 'zucchine', 'erbe'] }
    ],
    tr: {
      name: { pl: 'Gnocchi z szafranem i cukinią', en: 'Saffron sweet potato gnocchi' },
      desc: { en: 'Sweet potato gnocchi with saffron in yellow tomato sauce with baby zucchini and herbs.' }
    }
  },
  {
    id: 'p4',
    cat: 'pasta',
    name: 'fazzoletti con gallinacci',
    pron: 'faccoletti kon gallinaczczi',
    desc: 'płat świeżego makaronu z kurkami, płynnym żółtkiem confit, majerankiem i z pesto z rukwi wodnej (v)',
    price: '60',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Szeroki płat świeżego makaronu z leśnymi kurkami i konfitowanym żółtkiem.',
    ingIds: ['pastafresca', 'gallinacci', 'tuorlo', 'majeranek', 'crescione'],
    testDesc: [
      'płat ',
      { ingId: 'pastafresca', text: 'świeżego makaronu' },
      ' z ',
      { ingId: 'gallinacci', text: 'kurkami' },
      ', płynnym ',
      { ingId: 'tuorlo', text: 'żółtkiem confit' },
      ', ',
      { ingId: 'majeranek', text: 'majerankiem' },
      ' i z pesto z ',
      { ingId: 'crescione', text: 'rukwi wodnej' }
    ],
    components: [
      { name: 'Makaron i kurki', ingIds: ['pastafresca', 'gallinacci', 'tuorlo', 'majeranek', 'crescione', 'burro'] }
    ],
    tr: {
      name: { pl: 'Fazzoletti z kurkami i żółtkiem', en: 'Fazzoletti with chanterelles' },
      desc: { en: 'Sheet of fresh pasta with chanterelles, liquid confit egg yolk, marjoram and watercress pesto.' }
    }
  },
  {
    id: 'p5',
    cat: 'pasta',
    name: 'casarecce con salsiccia',
    pron: 'kazarecze kon salsiczcza',
    desc: 'krótki makaron z Sycylii, z włoską kiełbasą salsiccia fresca, pieczonym fenkułem i skórką z pomarańczy',
    price: '46',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'czosnek', 'cebula'],
    serviceNotes: 'Makaron Casarecce z włoską kiełbasą salsiccia i świeżą cytrusową skórką z pomarańczy.',
    ingIds: ['pastafresca', 'salsiccia', 'finocchio', 'arancia'],
    testDesc: [
      'krótki ',
      { ingId: 'pastafresca', text: 'makaron' },
      ' z Sycylii, z włoską kiełbasą ',
      { ingId: 'salsiccia', text: 'salsiccia fresca' },
      ', pieczonym ',
      { ingId: 'finocchio', text: 'fenkułem' },
      ' i skórką z ',
      { ingId: 'arancia', text: 'pomarańczy' }
    ],
    components: [
      { name: 'Składniki dania', ingIds: ['pastafresca', 'salsiccia', 'finocchio', 'arancia'] }
    ],
    tr: {
      name: { pl: 'Casarecce z kiełbasą salsiccia', en: 'Casarecce with salsiccia sausage' },
      desc: { en: 'Short Sicilian pasta with fresh Italian salsiccia sausage, roasted fennel and orange zest.' }
    }
  },
  {
    id: 'p6',
    cat: 'pasta',
    name: 'fiori',
    pron: 'fiori',
    desc: 'makaron nadziewany ricottą, parmezanem, mascarpone, szpinakiem i oregano, z palonym masłem (v)',
    price: '44',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'jaja'],
    serviceNotes: 'Ręcznie lepine kwiaty ravioli z 3 serami i szpinakiem podane z palonym masłem.',
    ingIds: ['pastafresca', 'ricotta', 'parmigiano', 'mascarpone', 'spinaci', 'burro'],
    testDesc: [
      'makaron nadziewany ',
      { ingId: 'ricotta', text: 'ricottą' },
      ', ',
      { ingId: 'parmigiano', text: 'parmezanem' },
      ', ',
      { ingId: 'mascarpone', text: 'mascarpone' },
      ', ',
      { ingId: 'spinaci', text: 'szpinakiem' },
      ' i oregano, z palonym ',
      { ingId: 'burro', text: 'masłem' }
    ],
    components: [
      { name: 'Farsz i okrasa', ingIds: ['pastafresca', 'ricotta', 'parmigiano', 'mascarpone', 'spinaci', 'burro'] }
    ],
    tr: {
      name: { pl: 'Fiori z ricottą i szpinakiem', en: 'Fiori (flower ravioli)' },
      desc: { en: 'Pasta filled with ricotta, parmesan, mascarpone, spinach and oregano, with brown butter.' }
    }
  },
  {
    id: 'p7',
    cat: 'pasta',
    name: 'lasagnette alfredo',
    pron: 'lazaniette alfredo',
    desc: 'pasy makaronu z krewetkami, cytryną confit, masłem i parmezanem',
    price: '58',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['skorupiaki', 'mleko', 'jaja', 'gluten', 'czosnek'],
    serviceNotes: 'Szerokie pasy makaronu z krewetkami w aksamitnym maślano-parmezanowym sosie z cytryną confit.',
    ingIds: ['pastafresca', 'gamberi', 'limone', 'burro', 'parmigiano'],
    testDesc: [
      'pasy ',
      { ingId: 'pastafresca', text: 'makaronu' },
      ' z ',
      { ingId: 'gamberi', text: 'krewetkami' },
      ', ',
      { ingId: 'limone', text: 'cytryną confit' },
      ', ',
      { ingId: 'burro', text: 'masłem' },
      ' i ',
      { ingId: 'parmigiano', text: 'parmezanem' }
    ],
    components: [
      { name: 'Składniki dania', ingIds: ['pastafresca', 'gamberi', 'limone', 'burro', 'parmigiano'] }
    ],
    tr: {
      name: { pl: 'Lasagnette alfredo z krewetkami', en: 'Lasagnette Alfredo with shrimp' },
      desc: { en: 'Pasta ribbons with shrimp, confit lemon, butter and parmesan.' }
    }
  },
  {
    id: 'p8',
    cat: 'pasta',
    name: 'spaghetti alla chitarra con astice',
    pron: 'spagetti alla kitarra kon asticze',
    desc: 'spaghetti z homarem, żółtymi pomidorami, papryką goccia, kolendrą i cytrynowym pangrattato',
    price: '98',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'skorupiaki'],
    serviceNotes: 'Spaghetti cięte na strunach z mięsem z homara, sosie z żółtych pomidorów i cytrynową posypką.',
    ingIds: ['pastafresca', 'astice', 'pomodorogiallo', 'peperoncino', 'coriandolo', 'pane'],
    testDesc: [
      'spaghetti z ',
      { ingId: 'astice', text: 'homarem' },
      ', ',
      { ingId: 'pomodorogiallo', text: 'żółtymi pomidorami' },
      ', papryką ',
      { ingId: 'peperoncino', text: 'goccia' },
      ', ',
      { ingId: 'coriandolo', text: 'kolendrą' },
      ' i cytrynowym ',
      { ingId: 'pane', text: 'pangrattato' }
    ],
    components: [
      { name: 'Składniki dania', ingIds: ['pastafresca', 'astice', 'pomodorogiallo', 'peperoncino', 'coriandolo', 'pane'] }
    ],
    tr: {
      name: { pl: 'Spaghetti z homarem', en: 'Spaghetti with lobster' },
      desc: { en: 'Spaghetti with lobster, yellow tomatoes, goccia pepper, coriander and lemon pangrattato.' }
    }
  },
  {
    id: 'p9',
    cat: 'pasta',
    name: 'spaghettoni* alla carbonara',
    pron: 'spagettoni alla karbonara',
    desc: 'spaghettoni* z guanciale, serem pecorino i jajkiem konfitowanym',
    price: '48',
    veg: null,
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: '*Możliwa zamiana na spaghetti o obniżonej zawartości glutenu.',
    ingIds: ['pastafresca', 'guanciale', 'pecorino', 'tuorlo'],
    testDesc: [
      'spaghettoni* z ',
      { ingId: 'guanciale', text: 'guanciale' },
      ', serem ',
      { ingId: 'pecorino', text: 'pecorino' },
      ' i ',
      { ingId: 'tuorlo', text: 'jajkiem konfitowanym' }
    ],
    components: [
      { name: 'Baza carbonary', ingIds: ['pastafresca', 'guanciale', 'pecorino', 'parmigiano', 'tuorlo', 'pepe'] }
    ],
    tr: {
      name: { pl: 'Spaghettoni alla carbonara', en: 'Spaghettoni carbonara' },
      desc: { en: 'Spaghettoni with guanciale, pecorino cheese and confit egg yolk.' }
    }
  },

  // --- SECONDI ---
  {
    id: 's1',
    cat: 'secondi',
    name: 'melanzane e parmigiano',
    pron: 'melandzane e parmidżano',
    desc: 'pieczony bakłażan z kremem parmezanowym, pomidorkami i perełkami parmezanowymi (v)',
    price: '52',
    veg: 'v',
    allergens: ['mleko', 'jaja', 'czosnek'],
    serviceNotes: '✨ Danie bezglutenowe! Pieczony bakłażan z perełkami i kremem z parmezanu.',
    ingIds: ['melanzana', 'parmigiano', 'pomodorini'],
    testDesc: [
      'pieczony ',
      { ingId: 'melanzana', text: 'bakłażan' },
      ' z kremem ',
      { ingId: 'parmigiano', text: 'parmezanowym' },
      ', ',
      { ingId: 'pomodorini', text: 'pomidorkami' },
      ' i perełkami ',
      { ingId: 'parmigiano', text: 'parmezanowymi' }
    ],
    components: [
      { name: 'Bakłażan i dodatki', ingIds: ['melanzana', 'parmigiano', 'pomodorini', 'basilico'] }
    ],
    tr: {
      name: { pl: 'Bakłażan z parmezanem (GF)', en: 'Eggplant parmesan (GF)' },
      desc: { en: 'Roasted eggplant with parmesan cream, cherry tomatoes and parmesan pearls.' }
    }
  },
  {
    id: 's2',
    cat: 'secondi',
    name: 'filetto di orata con porri novelli',
    pron: 'filetto di orata kon porri nowelli',
    desc: 'filet z dorady z młodymi porami i ziemniakami, mulami, sosem maślanym z wermutem i kaparami',
    price: '98',
    veg: null,
    allergens: ['ryby', 'mleko', 'mięczaki'],
    serviceNotes: 'Wykwintny filet z dorady na młodych porach i ziemniakach z mulami w sosie maślano-wermutowym.',
    ingIds: ['orata', 'porro', 'patate', 'cozze', 'burro', 'vermut', 'capperi'],
    testDesc: [
      'filet z ',
      { ingId: 'orata', text: 'dorady' },
      ' z młodymi ',
      { ingId: 'porro', text: 'porami' },
      ' i ',
      { ingId: 'patate', text: 'ziemniakami' },
      ', ',
      { ingId: 'cozze', text: 'mulami' },
      ', sosem ',
      { ingId: 'burro', text: 'maślanym' },
      ' z ',
      { ingId: 'vermut', text: 'wermutem' },
      ' i ',
      { ingId: 'capperi', text: 'kaparami' }
    ],
    components: [
      { name: 'Składniki dania', ingIds: ['orata', 'porro', 'patate', 'cozze', 'burro', 'vermut', 'capperi'] }
    ],
    tr: {
      name: { pl: 'Filet z dorady z porami i mulami', en: 'Sea bream fillet with leeks and mussels' },
      desc: { en: 'Sea bream fillet with baby leeks, potatoes, mussels, butter sauce with vermouth and capers.' }
    }
  },
  {
    id: 's3',
    cat: 'secondi',
    name: 'cotoletta alla milanese',
    pron: 'kotoletta alla milaneze',
    desc: 'mediolański schab z kością, z kremem parmezanowym, sezonowymi sałatami i młodymi ziemniakami',
    price: '66',
    veg: null,
    allergens: ['gluten', 'jaja', 'mleko', 'gorczyca'],
    serviceNotes: 'Schab na sosie parmezanowym podawany z dwoma osobnymi talerzykami dodatków.',
    ingIds: ['maiale', 'parmigiano', 'insalata', 'patate'],
    testDesc: [
      'mediolański ',
      { ingId: 'maiale', text: 'schab z kością' },
      ', z kremem ',
      { ingId: 'parmigiano', text: 'parmezanowym' },
      ', sezonowymi ',
      { ingId: 'insalata', text: 'sałatami' },
      ' i młodymi ',
      { ingId: 'patate', text: 'ziemniakami' }
    ],
    components: [
      { name: 'Główne elementy', ingIds: ['maiale', 'parmigiano', 'insalata', 'patate', 'limone'] }
    ],
    tr: {
      name: { pl: 'Kotlet po mediolańsku', en: 'Milanese pork cutlet' },
      desc: { en: 'Milanese bone-in pork cutlet with parmesan cream, seasonal salads and baby potatoes.' }
    }
  },
  {
    id: 's4',
    cat: 'secondi',
    name: 'filetto di manzo',
    pron: 'filetto di mandzo',
    desc: 'stek z polędwicy wołowej z sosem z zielonego pieprzu, sałatką z cukinii i ziemniaczano - cytrynowym puree',
    price: '124',
    veg: null,
    allergens: ['mleko'],
    serviceNotes: 'Polędwica wołowa z pikantnym sosem z zielonego pieprzu i ziemniaczano-cytrynowym puree.',
    ingIds: ['manzo', 'pepeverde', 'zucchine', 'patate', 'limone'],
    testDesc: [
      'stek z ',
      { ingId: 'manzo', text: 'polędwicy wołowej' },
      ' z sosem z ',
      { ingId: 'pepeverde', text: 'zielonego pieprzu' },
      ', sałatką z ',
      { ingId: 'zucchine', text: 'cukinii' },
      ' i ',
      { ingId: 'patate', text: 'ziemniaczano' },
      ' - ',
      { ingId: 'limone', text: 'cytrynowym' },
      ' puree'
    ],
    components: [
      { name: 'Główne składniki', ingIds: ['manzo', 'pepeverde', 'zucchine', 'patate', 'limone'] }
    ],
    tr: {
      name: { pl: 'Stek z polędwicy wołowej', en: 'Beef tenderloin steak' },
      desc: { en: 'Beef tenderloin steak with green pepper sauce, zucchini salad and potato-lemon puree.' }
    }
  },

  // --- DOLCE ---
  {
    id: 'd1',
    cat: 'dolce',
    name: 'gelato allo yogurt e lamponi con melone',
    pron: 'dżelato allo jogurt e lamponi kon melone',
    desc: 'jogurtowo - malinowe lody soft serve z melonem, oliwą z oliwek i kwiatem czarnego bzu',
    price: '22',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Orzeźwiające lody soft serve z oliwą z oliwek i nutą czarnego bzu.',
    ingIds: ['yogurt', 'lamponi', 'melone', 'olio', 'bez'],
    testDesc: [
      { ingId: 'yogurt', text: 'jogurtowo' },
      ' - ',
      { ingId: 'lamponi', text: 'malinowe' },
      ' lody soft serve z ',
      { ingId: 'melone', text: 'melonem' },
      ', ',
      { ingId: 'olio', text: 'oliwą z oliwek' },
      ' i kwiatem ',
      { ingId: 'bez', text: 'czarnego bzu' }
    ],
    components: [
      { name: 'Deser lodowy', ingIds: ['yogurt', 'lamponi', 'melone', 'olio', 'bez'] }
    ],
    tr: {
      name: { pl: 'Lody jogurtowo-malinowe z melonem', en: 'Yogurt-raspberry soft serve with melon' },
      desc: { en: 'Yogurt-raspberry soft serve ice cream with melon, olive oil and elderflower.' }
    }
  },
  {
    id: 'd2',
    cat: 'dolce',
    name: 'torta di stracchino con lamponi',
    pron: 'torta di strakkino kon lamponi',
    desc: 'kremowe ciastko z włoskiego sera Stracchino, z orzechowo - słonym spodem i świeżymi malinami',
    price: '24',
    veg: 'v',
    allergens: ['mleko', 'gluten', 'orzechy'],
    serviceNotes: 'Sernik z włoskiego sera Stracchino ze słonym orzechowym spodem i malinami.',
    ingIds: ['stracchino', 'nocciole', 'lamponi'],
    testDesc: [
      'kremowe ciastko z włoskiego sera ',
      { ingId: 'stracchino', text: 'Stracchino' },
      ', z ',
      { ingId: 'nocciole', text: 'orzechowo' },
      ' - słonym spodem i świeżymi ',
      { ingId: 'lamponi', text: 'malinami' }
    ],
    components: [
      { name: 'Składniki ciasta', ingIds: ['stracchino', 'nocciole', 'lamponi', 'panna'] }
    ],
    tr: {
      name: { pl: 'Sernik z sera Stracchino z malinami', en: 'Stracchino cheese cake with raspberries' },
      desc: { en: 'Cream cake made of Italian Stracchino cheese with salted walnut crust and fresh raspberries.' }
    }
  },
  {
    id: 'd3',
    cat: 'dolce',
    name: 'maritozzo con la panna e mirtilli',
    pron: 'maritocco kon la panna e mirtilli',
    desc: 'rzymska bułeczka z bitą śmietaną i świeżymi jagodami',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'mleko', 'jaja'],
    serviceNotes: 'Rzymska maślana bułeczka nadziewana bitą śmietaną i świeżymi jagodami.',
    ingIds: ['brioche', 'panna', 'mirtilli'],
    testDesc: [
      'rzymska ',
      { ingId: 'brioche', text: 'bułeczka' },
      ' z bitą ',
      { ingId: 'panna', text: 'śmietaną' },
      ' i świeżymi ',
      { ingId: 'mirtilli', text: 'jagodami' }
    ],
    components: [
      { name: 'Elementy deseru', ingIds: ['brioche', 'panna', 'mirtilli'] }
    ],
    tr: {
      name: { pl: 'Maritozzo ze śmietaną i jagodami', en: 'Maritozzo with cream and blueberries' },
      desc: { en: 'Roman brioche bun with whipped cream and fresh blueberries.' }
    }
  },
  {
    id: 'd4',
    cat: 'dolce',
    name: 'panna cotta alla camomilla con rabarbaro',
    pron: 'panna kotta alla kamomilla kon rabarbaro',
    desc: 'rumiankowa panna cotta z rabarbarem i oliwą z oliwek',
    price: '20',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Rumiankowa panna cotta serwowana z rabarbarem i oliwą z oliwek.',
    ingIds: ['camomilla', 'panna', 'rabarbaro', 'olio'],
    testDesc: [
      { ingId: 'camomilla', text: 'rumiankowa' },
      ' ',
      { ingId: 'panna', text: 'panna cotta' },
      ' z ',
      { ingId: 'rabarbaro', text: 'rabarbarem' },
      ' i ',
      { ingId: 'olio', text: 'oliwą z oliwek' }
    ],
    components: [
      { name: 'Składniki deseru', ingIds: ['camomilla', 'panna', 'rabarbaro', 'olio'] }
    ],
    tr: {
      name: { pl: 'Panna cotta rumiankowa z rabarbarem', en: 'Chamomile panna cotta with rhubarb' },
      desc: { en: 'Chamomile panna cotta with rhubarb and olive oil.' }
    }
  },
  {
    id: 'd5',
    cat: 'dolce',
    name: 'profiterole',
    pron: 'profiterol',
    desc: 'ciasto "choux" z waniliową bitą śmietaną i czekoladą',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Profiterolki nadziewane śmietaną waniliową polewane gorącą czekoladą przy stole.',
    ingIds: ['pastachoux', 'panna', 'wanilia', 'cioccolato'],
    testDesc: [
      'ciasto ',
      { ingId: 'pastachoux', text: '"choux"' },
      ' z ',
      { ingId: 'wanilia', text: 'waniliową' },
      ' bitą ',
      { ingId: 'panna', text: 'śmietaną' },
      ' i ',
      { ingId: 'cioccolato', text: 'czekoladą' }
    ],
    components: [
      { name: 'Główne elementy', ingIds: ['pastachoux', 'panna', 'wanilia', 'cioccolato'] }
    ],
    tr: {
      name: { pl: 'Profiterolki z gorącą czekoladą', en: 'Profiteroles with hot chocolate' },
      desc: { en: 'Choux pastry filled with vanilla whipped cream and chocolate.' }
    }
  },
  {
    id: 'd6',
    cat: 'dolce',
    name: 'granita siciliana',
    pron: 'granita sycyliana',
    desc: 'cytrynowa granita z bazylią (0%) / cytrynowa granita z limoncello',
    price: '18/26',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Cytrynowa granita: z bazylią (0% - 18 zł) lub z limoncello (26 zł).',
    ingIds: ['limone', 'basilico', 'limoncello'],
    testDesc: [
      { ingId: 'limone', text: 'cytrynowa' },
      ' granita z ',
      { ingId: 'basilico', text: 'bazylią' },
      ' (0%) / cytrynowa granita z ',
      { ingId: 'limoncello', text: 'limoncello' }
    ],
    components: [
      { name: 'Warianty granity', ingIds: ['limone', 'basilico', 'limoncello'] }
    ],
    tr: {
      name: { pl: 'Granita sycylijska', en: 'Sicilian granita' },
      desc: { en: 'Lemon granita with basil (non-alcoholic) or with limoncello.' }
    }
  },
  {
    id: 'd7',
    cat: 'dolce',
    name: 'tiramisù',
    pron: 'tiramisu',
    desc: 'klasyczne tiramisù',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Klasyczne włoskie tiramisù z mascarpone, biszkoptami, espresso i amaretto.',
    ingIds: ['mascarpone', 'savoiardi', 'caffe', 'amaretto', 'cacao'],
    testDesc: [
      'klasyczne tiramisù (krem ',
      { ingId: 'mascarpone', text: 'mascarpone' },
      ', biszkopty ',
      { ingId: 'savoiardi', text: 'savoiardi' },
      ', napar ',
      { ingId: 'caffe', text: 'espresso' },
      ', likier ',
      { ingId: 'amaretto', text: 'amaretto' },
      ' oraz ',
      { ingId: 'cacao', text: 'kakao' },
      ')'
    ],
    components: [
      { name: 'Składniki tiramisù', ingIds: ['mascarpone', 'savoiardi', 'caffe', 'amaretto', 'cacao'] }
    ],
    tr: {
      name: { pl: 'Klasyczne Tiramisù', en: 'Classic Tiramisù' },
      desc: { en: 'Classic tiramisù.' }
    }
  },
  {
    id: 'd8',
    cat: 'dolce',
    name: 'sorbetto al limone',
    pron: 'sorbetto al limone',
    desc: 'sorbet cytrynowy',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: '🥛 Zawiera laktozę (dodatek śmietanki/mleka)! Serwujemy na spodku.',
    ingIds: ['limone', 'panna'],
    testDesc: [
      'sorbet ',
      { ingId: 'limone', text: 'cytrynowy' },
      ' z dodatkiem ',
      { ingId: 'panna', text: 'śmietanki (laktoza)' }
    ],
    components: [
      { name: 'Masa sorbetowa', ingIds: ['limone', 'panna'] }
    ],
    tr: {
      name: { pl: 'Sorbet cytrynowy', en: 'Lemon sorbet' },
      desc: { en: 'Lemon sorbet. Contains dairy!' }
    }
  },

  // --- BIBITE ---
  {
    id: 'b1',
    cat: 'bibite',
    name: 'świeży sok pomarańczowy',
    pron: 'swiezy sok pomaranczowy',
    desc: 'świeżo wyciskany sok z pomarańczy',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Sok wyciskany na świeżo z pomarańczy.',
    ingIds: ['arancia'],
    testDesc: [
      'świeżo wyciskany sok z ',
      { ingId: 'arancia', text: 'pomarańczy' }
    ],
    components: [{ name: 'Składniki', ingIds: ['arancia'] }],
    tr: { name: { pl: 'Świeży sok pomarańczowy', en: 'Fresh orange juice' }, desc: { en: 'Freshly squeezed orange juice.' } }
  },
  {
    id: 'b2',
    cat: 'bibite',
    name: 'limonata',
    pron: 'limonata',
    desc: 'domowa lemoniada z bergamotką',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Orzeźwiająca domowa lemoniada z cytryn i bergamotki.',
    ingIds: ['limone', 'bergamotka'],
    testDesc: [
      'domowa ',
      { ingId: 'limone', text: 'lemoniada' },
      ' z ',
      { ingId: 'bergamotka', text: 'bergamotką' }
    ],
    components: [{ name: 'Składniki', ingIds: ['limone', 'bergamotka'] }],
    tr: { name: { pl: 'Domowa lemoniada z bergamotką', en: 'Homemade bergamot lemonade' }, desc: { en: 'Homemade lemonade with bergamot.' } }
  },
  {
    id: 'b3',
    cat: 'bibite',
    name: 'tè freddo',
    pron: 'te freddo',
    desc: 'domowa brzoskwiniowa ice tea',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Domowa mrożona herbata brzoskwiniowa podawana z lodem.',
    ingIds: ['pesca'],
    testDesc: [
      'domowa ',
      { ingId: 'pesca', text: 'brzoskwiniowa' },
      ' ice tea'
    ],
    components: [{ name: 'Składniki', ingIds: ['pesca'] }],
    tr: { name: { pl: 'Mrożona herbata brzoskwiniowa', en: 'Peach ice tea' }, desc: { en: 'Homemade peach ice tea.' } }
  },
  {
    id: 'b4',
    cat: 'bibite',
    name: 'soda',
    pron: 'soda',
    desc: 'chinotto, aranciata',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Włoskie napoje gazowane w butelkach: chinotto lub aranciata.',
    ingIds: ['arancia'],
    testDesc: [
      'włoskie napoje gazowane: chinotto, ',
      { ingId: 'arancia', text: 'aranciata' }
    ],
    components: [{ name: 'Warianty', ingIds: ['arancia'] }],
    tr: { name: { pl: 'Włoska soda', en: 'Italian soda' }, desc: { en: 'Chinotto, aranciata.' } }
  },
  {
    id: 'b5',
    cat: 'bibite',
    name: 'cola',
    pron: 'cola',
    desc: 'coca-cola, cola zero',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Podawana schłodzona z plastrem cytryny i lodem.',
    ingIds: ['limone'],
    testDesc: [
      'coca-cola, cola zero z plastrem ',
      { ingId: 'limone', text: 'cytryny' }
    ],
    components: [{ name: 'Warianty', ingIds: ['limone'] }],
    tr: { name: { pl: 'Cola / Cola Zero', en: 'Coca-Cola / Zero' }, desc: { en: 'Coca-cola, cola zero.' } }
  },
  {
    id: 'b6',
    cat: 'bibite',
    name: 'succo',
    pron: 'sukko',
    desc: 'włoski sok brzoskwiniowy lub gruszkowy',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Włoskie soki owocowe (pesca / pera).',
    ingIds: ['pesca', 'pera'],
    testDesc: [
      'włoski sok ',
      { ingId: 'pesca', text: 'brzoskwiniowy' },
      ' lub ',
      { ingId: 'pera', text: 'gruszkowy' }
    ],
    components: [{ name: 'Smaki', ingIds: ['pesca', 'pera'] }],
    tr: { name: { pl: 'Włoski sok owocowy', en: 'Italian fruit juice' }, desc: { en: 'Italian peach or pear juice.' } }
  },
  {
    id: 'b7',
    cat: 'bibite',
    name: 'acqua',
    pron: 'akkwa',
    desc: 'woda San Pellegrino / Aqua Panna 750 ml / 250ml',
    price: '22/14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'San Pellegrino (gazowana) lub Aqua Panna (niegazowana).',
    ingIds: ['acqua'],
    testDesc: [
      'woda ',
      { ingId: 'acqua', text: 'San Pellegrino / Aqua Panna' }
    ],
    components: [{ name: 'Opcje', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Woda mineralna', en: 'Mineral water' }, desc: { en: 'San Pellegrino / Aqua Panna water.' } }
  },
  {
    id: 'b8',
    cat: 'bibite',
    name: 'tonica j.gasco',
    pron: 'tonika dżi gasko',
    desc: 'indian tonic, aperitivo bitter, sodarosa grapefruit, fiori di sambuco',
    price: '18',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Włoskie miksery J.Gasco w różnych smakach.',
    ingIds: ['arancia', 'bez'],
    testDesc: [
      'indian tonic, aperitivo bitter, sodarosa ',
      { ingId: 'arancia', text: 'grapefruit' },
      ', fiori di ',
      { ingId: 'bez', text: 'sambuco' }
    ],
    components: [{ name: 'Smaki', ingIds: ['arancia', 'bez'] }],
    tr: { name: { pl: 'Tonik J.Gasco', en: 'J.Gasco tonic' }, desc: { en: 'Indian tonic, aperitivo bitter, sodarosa grapefruit, fiori di sambuco.' } }
  },

  // --- CAFFÈ ---
  {
    id: 'c1',
    cat: 'caffe',
    name: 'caffè',
    pron: 'kaffe',
    desc: 'klasyczne włoskie espresso',
    price: '9',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Pojedyncze, esencjonalne espresso.',
    ingIds: ['caffe'],
    testDesc: [
      'klasyczne włoskie ',
      { ingId: 'caffe', text: 'espresso' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe'] }],
    tr: { name: { pl: 'Espresso', en: 'Espresso' }, desc: { en: 'Classic Italian espresso.' } }
  },
  {
    id: 'c2',
    cat: 'caffe',
    name: 'macchiato',
    pron: 'makkiato',
    desc: 'espresso z odrobiną spienionego mleka',
    price: '10',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Espresso poplamione odrobiną gorącego spienionego mleka.',
    ingIds: ['caffe', 'panna'],
    testDesc: [
      { ingId: 'caffe', text: 'espresso' },
      ' z odrobiną spienionego ',
      { ingId: 'panna', text: 'mleka' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna'] }],
    tr: { name: { pl: 'Espresso macchiato', en: 'Espresso macchiato' }, desc: { en: 'Espresso with a dash of foamed milk.' } }
  },
  {
    id: 'c3',
    cat: 'caffe',
    name: 'caffè doppio / lungo',
    pron: 'kaffe doppio / lungo',
    desc: 'podwójne espresso lub przedłużane espresso',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Doppio = podwójne espresso. Lungo = przedłużana kawa z większą ilością wody.',
    ingIds: ['caffe', 'acqua'],
    testDesc: [
      'podwójne ',
      { ingId: 'caffe', text: 'espresso' },
      ' lub przedłużane espresso z ',
      { ingId: 'acqua', text: 'wodą' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'acqua'] }],
    tr: { name: { pl: 'Kawa doppio / lungo', en: 'Double espresso / lungo' }, desc: { en: 'Double espresso or extended espresso.' } }
  },
  {
    id: 'c4',
    cat: 'caffe',
    name: 'caffè filtrato / freddo',
    pron: 'kaffe filtrato / freddo',
    desc: 'kawa przelewowa lub kawa mrożona',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Filtrato = kawa przelewowa. Freddo = mrożona kawa.',
    ingIds: ['caffe'],
    testDesc: [
      { ingId: 'caffe', text: 'kawa' },
      ' przelewowa lub kawa mrożona'
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe'] }],
    tr: { name: { pl: 'Kawa przelewowa / mrożona', en: 'Drip coffee / iced coffee' }, desc: { en: 'Filter drip coffee or cold iced black coffee.' } }
  },
  {
    id: 'c5',
    cat: 'caffe',
    name: 'cappuccino',
    pron: 'kappuczino',
    desc: 'espresso ze spienionym aksamitnym mlekiem',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Włoskie cappuccino z aksamitną gęstą mleczną pianką.',
    ingIds: ['caffe', 'panna'],
    testDesc: [
      { ingId: 'caffe', text: 'espresso' },
      ' ze spienionym aksamitnym ',
      { ingId: 'panna', text: 'mlekiem' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna'] }],
    tr: { name: { pl: 'Cappuccino', en: 'Cappuccino' }, desc: { en: 'Espresso with steamed milk.' } }
  },
  {
    id: 'c6',
    cat: 'caffe',
    name: 'latte',
    pron: 'latte',
    desc: 'spienione mleko z delikatnym espresso',
    price: '16',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Duża mleczna kawa w wysokiej szklance.',
    ingIds: ['panna', 'caffe'],
    testDesc: [
      'spienione ',
      { ingId: 'panna', text: 'mleko' },
      ' z delikatnym ',
      { ingId: 'caffe', text: 'espresso' }
    ],
    components: [{ name: 'Składniki', ingIds: ['panna', 'caffe'] }],
    tr: { name: { pl: 'Caffè latte', en: 'Caffè latte' }, desc: { en: 'Steamed milk with delicate espresso.' } }
  },
  {
    id: 'c7',
    cat: 'caffe',
    name: 'caffè affogato',
    pron: 'kaffe affogato',
    desc: 'gorące espresso wlane na gałkę lodów waniliowych',
    price: '16',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Gorące espresso wlewane na zimne lody waniliowe.',
    ingIds: ['caffe', 'wanilia', 'panna'],
    testDesc: [
      'gorące ',
      { ingId: 'caffe', text: 'espresso' },
      ' wlane na gałkę lodów ',
      { ingId: 'wanilia', text: 'waniliowych' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'wanilia', 'panna'] }],
    tr: { name: { pl: 'Affogato', en: 'Affogato' }, desc: { en: 'Hot espresso poured over vanilla ice cream.' } }
  },
  {
    id: 'c8',
    cat: 'caffe',
    name: 'tonic espresso',
    pron: 'tonik espresso',
    desc: 'espresso wlane na lód z tonikiem',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Musujący tonik z lodem i wlanym espresso.',
    ingIds: ['caffe', 'arancia'],
    testDesc: [
      { ingId: 'caffe', text: 'espresso' },
      ' wlane na lód z ',
      { ingId: 'arancia', text: 'tonikiem' }
    ],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'arancia'] }],
    tr: { name: { pl: 'Tonic espresso', en: 'Espresso tonic' }, desc: { en: 'Espresso poured over ice with tonic.' } }
  },
  {
    id: 'c9',
    cat: 'caffe',
    name: 'cioccolato',
    pron: 'czokkolato',
    desc: 'gęsta włoska gorąca czekolada',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Gęsta i aromatyczna czekolada podawana na gorąco.',
    ingIds: ['cioccolato', 'cacao'],
    testDesc: [
      'gęsta włoska gorąca ',
      { ingId: 'cioccolato', text: 'czekolada' }
    ],
    components: [{ name: 'Składniki', ingIds: ['cioccolato', 'cacao'] }],
    tr: { name: { pl: 'Gorąca czekolada', en: 'Hot chocolate' }, desc: { en: 'Thick Italian hot chocolate.' } }
  },

  // --- TÈ E INFUSI ---
  {
    id: 't1',
    cat: 'te',
    name: 'tè nero',
    pron: 'te nero',
    desc: 'czarna herbata',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Klasyczna czarna herbata serwowana w dzbanku.',
    ingIds: ['acqua'],
    testDesc: [
      'czarna ',
      { ingId: 'acqua', text: 'herbata' }
    ],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Czarna herbata', en: 'Black tea' }, desc: { en: 'Black tea.' } }
  },
  {
    id: 't2',
    cat: 'te',
    name: 'earl grey',
    pron: 'erl grej',
    desc: 'czarna herbata z bergamotką',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Czarna herbata aromatyzowana bergamotką.',
    ingIds: ['bergamotka'],
    testDesc: [
      'czarna herbata z ',
      { ingId: 'bergamotka', text: 'bergamotką' }
    ],
    components: [{ name: 'Składniki', ingIds: ['bergamotka'] }],
    tr: { name: { pl: 'Herbata Earl Grey', en: 'Earl Grey tea' }, desc: { en: 'Black tea with bergamot.' } }
  },
  {
    id: 't3',
    cat: 'te',
    name: 'tè verde',
    pron: 'te werde',
    desc: 'zielona herbata sencha',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Japońska zielona herbata Sencha.',
    ingIds: ['acqua'],
    testDesc: [
      'zielona herbata ',
      { ingId: 'acqua', text: 'sencha' }
    ],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Zielona herbata sencha', en: 'Green tea sencha' }, desc: { en: 'Green tea sencha.' } }
  },
  {
    id: 't4',
    cat: 'te',
    name: 'paradiso',
    pron: 'paradizo',
    desc: 'czarna herbata, lawenda, kwiaty truskawki i kukurydzy',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Kwiatowa mieszanka na bazie czarnej herbaty z lawendą.',
    ingIds: ['acqua'],
    testDesc: [
      'czarna herbata, lawenda, kwiaty ',
      { ingId: 'acqua', text: 'truskawki i kukurydzy' }
    ],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Herbata Paradiso', en: 'Paradiso infusion' }, desc: { en: 'Black tea, lavender, strawberry and cornflower.' } }
  },
  {
    id: 't5',
    cat: 'te',
    name: 'fiore bianco',
    pron: 'fiore bianko',
    desc: 'biała i zielona herbata, żółte owoce, płatki nagietka',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Mieszanka herbaty białej i zielonej z żółtymi owocami.',
    ingIds: ['acqua'],
    testDesc: [
      'biała i zielona herbata, żółte owoce, płatki ',
      { ingId: 'acqua', text: 'nagietka' }
    ],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Herbata Fiore Bianco', en: 'Fiore Bianco tea' }, desc: { en: 'White & green tea with yellow fruits and marigold petals.' } }
  },
  {
    id: 't6',
    cat: 'te',
    name: 'riso e vaniglia',
    pron: 'rizo e wanilia',
    desc: 'zielona herbata z prażonym ryżem i wanilią',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Zielona herbata z prażonym ryżem i nutą wanilii.',
    ingIds: ['ryz', 'wanilia'],
    testDesc: [
      'zielona herbata z prażonym ',
      { ingId: 'ryz', text: 'ryżem' },
      ' i ',
      { ingId: 'wanilia', text: 'wanilią' }
    ],
    components: [{ name: 'Składniki', ingIds: ['ryz', 'wanilia'] }],
    tr: { name: { pl: 'Herbata z ryżem i wanilią', en: 'Rice & vanilla green tea' }, desc: { en: 'Green tea with roasted rice and vanilla.' } }
  },
  {
    id: 't7',
    cat: 'te',
    name: 'palermo',
    pron: 'palermo',
    desc: 'trawa cytrynowa, eukaliptus i suszone mandarynki',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Ziołowy napar z trawy cytrynowej, eukaliptusa i mandarynek.',
    ingIds: ['arancia'],
    testDesc: [
      'trawa cytrynowa, eukaliptus i suszone ',
      { ingId: 'arancia', text: 'mandarynki' }
    ],
    components: [{ name: 'Składniki', ingIds: ['arancia'] }],
    tr: { name: { pl: 'Napar Palermo', en: 'Palermo infusion' }, desc: { en: 'Lemongrass, eucalyptus and dried mandarins.' } }
  },
  {
    id: 't8',
    cat: 'te',
    name: 'menta',
    pron: 'menta',
    desc: 'mięta, skórka pomarańczy, róża i lukrecja',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Miętowy napar ze skórką pomarańczy i różą.',
    ingIds: ['menta', 'arancia'],
    testDesc: [
      { ingId: 'menta', text: 'mięta' },
      ', skórka ',
      { ingId: 'arancia', text: 'pomarańczy' },
      ', róża i lukrecja'
    ],
    components: [{ name: 'Składniki', ingIds: ['menta', 'arancia'] }],
    tr: { name: { pl: 'Napar z mięty i ziół', en: 'Mint & citrus infusion' }, desc: { en: 'Mint, orange peel, rose and liquorice.' } }
  }
];
