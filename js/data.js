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
    desc: 'Duże liście szałwii smażone w chrupiącym cieście z oliwy, wody i mąki pszennej, posypane solą. Idealna przekąska komponująca się z piklowaną szalotką i oliwkami.',
    price: '12',
    veg: 'v',
    allergens: ['gluten', 'jaja'],
    serviceNotes: 'Chrupiąca przekąska na start. Ciasto bazuje na oliwie, wodzie i mące pszennej. Danie jest doprawiane solą.',
    ingIds: ['salvia', 'farina', 'olio'],
    components: [
      { name: 'Główne składniki', ingIds: ['salvia', 'sale'] },
      { name: 'Ciasto do smażenia', ingIds: ['farina', 'olio', 'acqua', 'uova'] },
      { name: 'Rekomendowany dodatek', ingIds: ['cipolla', 'olive'] }
    ],
    tr: {
      name: { pl: 'Smażona szałwia', en: 'Fried sage' },
      desc: { en: 'Crispy fried sage leaves in light flour-olive oil batter, seasoned with sea salt.' }
    }
  },
  {
    id: 'a2',
    cat: 'antipasti',
    name: 'cipolline sottaceti',
    pron: 'czipolline sottaczeti',
    desc: 'Szalotki słodko-kwaśne i lekko pikantne, marynowane w occie z czerwonego wina z ziarnami kolendry.',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Wytrawne cebulki. Tworzą zgrany zestaw w połączeniu ze smażoną szałwią i zielonymi oliwkami.',
    ingIds: ['cipolla', 'aceto', 'coriandolo'],
    components: [
      { name: 'Baza dania', ingIds: ['cipolla'] },
      { name: 'Marynata słodko-kwaśna', ingIds: ['aceto', 'coriandolo', 'zucchero', 'sale'] }
    ],
    tr: {
      name: { pl: 'Marynowane cebulki', en: 'Pickled baby onions' },
      desc: { en: 'Sweet, sour and lightly spicy shallots pickled in red wine vinegar with coriander seeds.' }
    }
  },
  {
    id: 'a3',
    cat: 'antipasti',
    name: 'olive verdi',
    pron: 'olive werdi',
    desc: 'Oliwki Castelvetrano marynowane wg klasycznej receptury w oliwie z oliwek z liściem laurowym i skórką z pomarańczy.',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: '⚠️ Pamiętaj poinformować gościa: oliwki podawane są z pestką!',
    ingIds: ['olive', 'alloro', 'arancia', 'olio'],
    components: [
      { name: 'Oliwki', ingIds: ['olive'] },
      { name: 'Ziołowo-cytrusowa marynata', ingIds: ['olio', 'alloro', 'arancia'] }
    ],
    tr: {
      name: { pl: 'Zielone oliwki', en: 'Green olives' },
      desc: { en: 'Castelvetrano olives marinated in olive oil with bay leaf and orange zest. Contains pits!' }
    }
  },
  {
    id: 'a4',
    cat: 'antipasti',
    name: 'antipasti misti',
    pron: 'antipasti misti',
    desc: 'Zestaw przekąsek na start: piklowane szalotki, marynowane oliwki oraz duże liście szałwii smażone w cieście z oliwy, mąki i jajka.',
    price: '33',
    veg: 'vg',
    allergens: ['gluten', 'jaja'],
    serviceNotes: 'Idealne danie do dzielenia się (to share) na początek posiłku.',
    ingIds: ['cipolla', 'olive', 'salvia', 'farina'],
    components: [
      { name: 'Smażona szałwia (Salvia fritta)', ingIds: ['salvia', 'farina', 'olio', 'uova', 'sale'] },
      { name: 'Cebulki marynowane (Cipolline)', ingIds: ['cipolla', 'aceto', 'coriandolo'] },
      { name: 'Zielone oliwki (Olive verdi)', ingIds: ['olive', 'alloro', 'arancia', 'olio'] }
    ],
    tr: {
      name: { pl: 'Zestaw przystawek', en: 'Mixed antipasti' },
      desc: { en: 'Platter of pickled shallots, olives, and crispy sage leaves in light batter.' }
    }
  },
  {
    id: 'a5',
    cat: 'antipasti',
    name: 'focaccia',
    pron: 'fokacza',
    desc: 'Domowa autorska focaccia na bazie mąki pszennej, drożdży, oliwy z oliwek i soli. Ciasto rośnie około 18 godzin.',
    price: '12',
    veg: 'vg',
    allergens: ['gluten'],
    serviceNotes: 'Oliwę nalewamy przy gościu z konewki na spodeczek. Podajemy też sól i pieprz. Gratis do dań: 2 os. = 3 kromki, 3+ os. = po 1 kromce/os.',
    ingIds: ['farina', 'olio', 'lievito'],
    components: [
      { name: 'Ciasto focaccia (wyrasta 18h)', ingIds: ['farina', 'lievito', 'olio', 'sale', 'acqua'] },
      { name: 'Rytuał podania przy stole', ingIds: ['olio', 'sale', 'pepe'] }
    ],
    tr: {
      name: { pl: 'Autorska focaccia', en: 'House focaccia' },
      desc: { en: 'Signature house recipe dough fermented for 18 hours. Served with olive oil poured at table from a watering can.' }
    }
  },
  {
    id: 'a6',
    cat: 'antipasti',
    name: 'insalata verde',
    pron: 'insalata werde',
    desc: 'Mieszanka sezonowych sałat z dressingiem cytrynowym. W sezonie wiosenno-letnim z gospodarstwa Ludwik Majlert, w jesienno-zimowym spod Hali Mirowskiej.',
    price: '18',
    veg: 'vg',
    allergens: ['gorczyca'],
    serviceNotes: 'Lokalna mieszanka sałat od zaufanych dostawców. Dressing cytrynowy zawiera gorczycę.',
    ingIds: ['insalata', 'erbe', 'limone'],
    components: [
      { name: 'Baza sałat', ingIds: ['insalata', 'erbe'] },
      { name: 'Dressing cytrynowy', ingIds: ['limone', 'olio', 'gorczyca', 'sale'] }
    ],
    tr: {
      name: { pl: 'Zielona sałatka', en: 'Green salad' },
      desc: { en: 'Seasonal salad greens with lemon dressing, sourced locally from farm Majlert or Hala Mirowska.' }
    }
  },
  {
    id: 'a7',
    cat: 'antipasti',
    name: 'caprese diversa',
    pron: 'kapreze diwersa',
    desc: 'Kremowy ser stracciatella z karmelizowanymi pomidorami i aromatyczną oliwą bazyliową.',
    price: '42',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Unikalne ujęcie klasycznej caprese. Kremowa stracciatella przełamana karmelizowaną słodyczą pomidorów i oliwą bazyliową.',
    ingIds: ['stracciatella', 'pomodoro', 'basilico', 'olio'],
    components: [
      { name: 'Baza serowa', ingIds: ['stracciatella'] },
      { name: 'Pomidory & Oliwa bazyliowa', ingIds: ['pomodoro', 'basilico', 'olio', 'zucchero', 'sale'] }
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
    desc: 'Żółta fasolka szparagowa ze świeżymi brzoskwiniami, chrupiącymi migdałami i świeżą werbeną.',
    price: '32',
    veg: 'vg',
    allergens: ['orzechy'],
    serviceNotes: 'Lekka, wyrazista przystawka. Połączenie chrupkości fasolki ze słodyczą brzoskwiń, migdałami i ziołową nutą werbeny.',
    ingIds: ['fagiolini', 'pesca', 'mandorla', 'verbena'],
    components: [
      { name: 'Baza warzywno-owocowa', ingIds: ['fagiolini', 'pesca'] },
      { name: 'Posypka & Zioła', ingIds: ['mandorla', 'verbena', 'olio', 'sale'] }
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
    desc: 'Surowa, cienko krojona dorada chorwacka podana z purée z kopru włoskiego, agrestem, dressingiem z agrestu i trybuli, kaparami z czosnku niedźwiedziego i chlebem pane carasau.',
    price: '48',
    veg: null,
    allergens: ['ryby', 'gluten'],
    serviceNotes: 'W porcji znajduje się dokładnie 40g dorady. Bardzo świeże, lekkie i eleganckie danie z chrupiącym chlebem sardyńskim.',
    ingIds: ['orata', 'finocchio', 'uvaspina', 'pane', 'capperi'],
    components: [
      { name: 'Surowa ryba (40g porcja)', ingIds: ['orata', 'sale'] },
      { name: 'Purée & Dressing agrestowy', ingIds: ['finocchio', 'uvaspina', 'erbe', 'olio'] },
      { name: 'Dodatki & Chleb sardyński', ingIds: ['capperi', 'czosnekniedzwiedzi', 'pane'] }
    ],
    tr: {
      name: { pl: 'Crudo z dorady', en: 'Sea bream crudo' },
      desc: { en: 'Fresh Croatian sea bream crudo (40g) with fennel purée, gooseberries, wild garlic capers and Sardinian bread.' }
    }
  },
  {
    id: 'a10',
    cat: 'antipasti',
    name: 'fiori di zucca con pappa al pomodoro',
    pron: 'fiori di dzukka kon pappa al pomodoro',
    desc: 'Smażone kwiaty cukinii nadziewane serem kozim i bobem z tymiankiem, chili oraz chłodnikiem ze świeżych pomidorów.',
    price: '48',
    veg: 'v',
    allergens: ['mleko', 'gluten'],
    serviceNotes: 'Chrupiące kwiaty cukinii z wytrawnym nadzieniem z sera koziego i bobu na orzeźwiającym chłodniku pomidorowym.',
    ingIds: ['fioridizucca', 'formaggiocapra', 'fave', 'tymianek', 'peperoncino', 'pomodoro'],
    components: [
      { name: 'Nadziewane kwiaty cukinii', ingIds: ['fioridizucca', 'formaggiocapra', 'fave', 'tymianek'] },
      { name: 'Chłodnik pomidorowy & Chili', ingIds: ['pomodoro', 'peperoncino', 'olio', 'sale'] }
    ],
    tr: {
      name: { pl: 'Kwiaty cukinii z pappa al pomodoro', en: 'Zucchini flowers with tomato soup' },
      desc: { en: 'Fried zucchini flowers stuffed with goat cheese and fava beans, thyme, chili and chilled fresh tomato soup.' }
    }
  },
  {
    id: 'a11',
    cat: 'antipasti',
    name: 'tartare al parmigiano',
    pron: 'tartare al parmidżano',
    desc: 'Tatar z wołowiny (górna zrazowa) z pianką z parmezanu, mleka i śmietanki, olejem rzepakowym, szalotką, sos Worcestershire, surowym żółtkiem przepiórczym i opieńkami pod pianką.',
    price: '52',
    veg: null,
    allergens: ['mleko', 'jaja'],
    serviceNotes: 'Do tatara zawsze podajemy gościowi sól oraz młotkowany pieprz.',
    ingIds: ['manzo', 'tuorlo', 'parmigiano', 'funghi', 'cipolla'],
    components: [
      { name: 'Tatar z wołowiny zrazowej', ingIds: ['manzo', 'tuorlo', 'cipolla', 'worcestershire', 'olio', 'sale', 'pepe'] },
      { name: 'Aksamitna pianka parmezanowa', ingIds: ['parmigiano', 'panna'] },
      { name: 'Grzyby pod pianką', ingIds: ['funghi', 'aceto'] }
    ],
    tr: {
      name: { pl: 'Tatar wołowy z parmezanem', en: 'Beef tartare with parmesan foam' },
      desc: { en: 'Beef tenderloin tartare topped with parmesan foam, quail egg yolk, shallots and marinated mushrooms.' }
    }
  },
  {
    id: 'a12',
    cat: 'antipasti',
    name: 'zuppa del giorno',
    pron: 'dzuppa del dżorno',
    desc: 'Codziennie inna autorska propozycja zupy przygotowywana ze świeżych, sezonowych składników przez szefa kuchni lub sous-chefów.',
    price: '18',
    veg: 'v',
    allergens: ['zależy od dnia'],
    serviceNotes: 'Przed zaoferowaniem gościom dopytaj w kuchni o aktualną zupę i obecne w niej alergeny.',
    ingIds: ['verdure', 'erbe'],
    components: [
      { name: 'Baza zupy dnia', ingIds: ['verdure', 'erbe', 'sale'] }
    ],
    tr: {
      name: { pl: 'Zupa dnia', en: 'Soup of the day' },
      desc: { en: 'Daily special soup crafted from fresh seasonal ingredients.' }
    }
  },

  // --- PASTA ---
  {
    id: 'p1',
    cat: 'pasta',
    name: 'occhi di lupo alla vodka',
    pron: 'okki di lupo alla wodka',
    desc: 'Klasyk lat 80. Duże, gładkie tuby z południa Włoch w sosie śmietanowo-pomidorowym z wódką. Wódka całkowicie odparowuje podczas gotowania, nadając aksamitność.',
    price: '32',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'cebula', 'czosnek'],
    serviceNotes: 'Wódka całkowicie odparowuje w trakcie gotowania — danie nie zawiera alkoholu.',
    ingIds: ['pastafresca', 'pomodoro', 'panna', 'vodka'],
    components: [
      { name: 'Makaron Occhi di lupo', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Sos śmietanowo-pomidorowy z wódką', ingIds: ['pomodoro', 'panna', 'vodka', 'czosnek', 'cipolla', 'parmigiano', 'sale'] }
    ],
    tr: {
      name: { pl: 'Occhi di lupo w sosie z wódką', en: 'Occhi di lupo alla vodka' },
      desc: { en: 'Large tube pasta in an 80s classic silky tomato-cream sauce finished with evaporated vodka.' }
    }
  },
  {
    id: 'p2',
    cat: 'pasta',
    name: 'rosette al ragù',
    pron: 'rozette al ragu',
    desc: 'Zawijana forma lasagni z Modeny. Farsz z długo duszonych policzków wołowych po bolońsku z soffritto (seler, marchew, cebula), pomidorami i ziołami.',
    price: '48',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'seler', 'cebula'],
    serviceNotes: 'Ragù alla bolognese występuje tu jako esencjonalny farsz z rolowanego makaronu, a nie płynny sos.',
    ingIds: ['pastafresca', 'guanciadimanzo', 'pomodoro', 'wino', 'mozzarella', 'erbe'],
    components: [
      { name: 'Rolowane ciasto lasagne', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Farsz Ragù z policzków', ingIds: ['guanciadimanzo', 'seler', 'marchew', 'cipolla', 'pomodoro', 'wino', 'sale'] },
      { name: 'Zapieczenie & Zioła', ingIds: ['mozzarella', 'basilico', 'erbe'] }
    ],
    tr: {
      name: { pl: 'Rosette z ragù z policzków', en: 'Rosette with beef cheek ragù' },
      desc: { en: 'Rolled and baked Modena-style lasagna stuffed with slow-braised beef cheek ragù and mozzarella.' }
    }
  },
  {
    id: 'p3',
    cat: 'pasta',
    name: 'gnocchi allo zafferano e zucchine novelle',
    pron: 'niokki allo dzafferano e dzukkine nowelle',
    desc: 'Gnocchi ze słodkich ziemniaków z szafranem w aromatycznym sosie z żółtych pomidorów, z młodymi cukiniami i ziołami.',
    price: '46',
    veg: 'v',
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'mleko'],
    serviceNotes: 'Lekka, aromatyczna kompozycja ze słodkich ziemniaków i szafranu w złocistym sosie z żółtych pomidorów.',
    ingIds: ['gnocchi', 'zafferano', 'pomodorogiallo', 'zucchine', 'erbe'],
    components: [
      { name: 'Gnocchi ze słodkich ziemniaków', ingIds: ['gnocchi', 'patate'] },
      { name: 'Sos szafranowo-pomidorowy & Cukinia', ingIds: ['zafferano', 'pomodorogiallo', 'zucchine', 'erbe', 'burro', 'sale'] }
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
    desc: 'Płat świeżego makaronu z kurkami, płynnym żółtkiem confit, majerankiem i pesto z rukwi wodnej.',
    price: '60',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Szeroki płat świeżego makaronu skrywający leśne kurki, majeranek i chłodne pesto z rukwi wodnej pod płynnym żółtkiem.',
    ingIds: ['pastafresca', 'gallinacci', 'tuorlo', 'majeranek', 'crescione'],
    components: [
      { name: 'Płat makaronu Fazzoletti', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Kurki & Pesto z rukwi', ingIds: ['gallinacci', 'crescione', 'majeranek', 'burro', 'sale'] },
      { name: 'Konfitowane żółtko', ingIds: ['tuorlo'] }
    ],
    tr: {
      name: { pl: 'Fazzoletti z kurkami i żółtkiem', en: 'Fazzoletti with chanterelles' },
      desc: { en: 'Fresh pasta sheet with chanterelles, confit egg yolk, marjoram and watercress pesto.' }
    }
  },
  {
    id: 'p5',
    cat: 'pasta',
    name: 'casarecce con salsiccia',
    pron: 'kazarecze kon salsiczcza',
    desc: 'Krótki skręcony makaron z Sycylii z włoską kiełbasą salsiccia fresca, pieczonym fenkułem i świeżą skórką z pomarańczy.',
    price: '46',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'czosnek', 'cebula'],
    serviceNotes: 'Świeży cytrusowy akcent pomarańczy doskonale przełamuje i balansuje tłustość włoskiej kiełbasy.',
    ingIds: ['pastafresca', 'salsiccia', 'finocchio', 'arancia', 'wino'],
    components: [
      { name: 'Makaron Casarecce', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Sos mięsno-fenkułowy', ingIds: ['salsiccia', 'finocchio', 'cipolla', 'czosnek', 'wino', 'sale'] },
      { name: 'Nuta cytrusowa', ingIds: ['arancia'] }
    ],
    tr: {
      name: { pl: 'Casarecce z kiełbasą salsiccia', en: 'Casarecce with salsiccia sausage' },
      desc: { en: 'Twisted pasta with fresh Italian sausage, fennel purée, white wine, and orange zest.' }
    }
  },
  {
    id: 'p6',
    cat: 'pasta',
    name: 'fiori',
    pron: 'fiori',
    desc: 'Ręcznie wałkowany makaron nadziewany ricottą, parmezanem, mascarpone, szpinakiem i oregano, podany z palonym masłem.',
    price: '44',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'jaja'],
    serviceNotes: 'Nazwa pochodzi od włoskiego słowa „fiori” (kwiaty). Subtelne i aromatyczne danie wegetariańskie.',
    ingIds: ['pastafresca', 'ricotta', 'mascarpone', 'parmigiano', 'spinaci', 'burro'],
    components: [
      { name: 'Ciasto ravioli (kwiatki)', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Farsz z serów i szpinaku', ingIds: ['ricotta', 'mascarpone', 'parmigiano', 'spinaci', 'erbe', 'sale'] },
      { name: 'Okrasa z palonego masła', ingIds: ['burro'] }
    ],
    tr: {
      name: { pl: 'Fiori z ricottą i szpinakiem', en: 'Fiori (flower ravioli)' },
      desc: { en: 'Hand-rolled flower-shaped ravioli filled with ricotta, mascarpone, spinach and oregano in brown butter.' }
    }
  },
  {
    id: 'p7',
    cat: 'pasta',
    name: 'lasagnette alfredo',
    pron: 'lazaniette alfredo',
    desc: 'Pasy makaronu z krewetkami, cytryną confit, masłem i parmezanem.',
    price: '58',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['skorupiaki', 'mleko', 'jaja', 'gluten', 'czosnek'],
    serviceNotes: 'Wykwintna wersja sosu Alfredo — cytryna confit dodaje lekkości i przełamuje maślano-serowy smak.',
    ingIds: ['pastafresca', 'gamberi', 'limone', 'burro', 'parmigiano'],
    components: [
      { name: 'Pasy makaronu Lasagnette', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Sos Alfredo z krewetkami', ingIds: ['gamberi', 'burro', 'parmigiano', 'czosnek', 'wino', 'sale'] },
      { name: 'Wykończenie cytrynowe', ingIds: ['limone', 'erbe'] }
    ],
    tr: {
      name: { pl: 'Lasagnette alfredo z krewetkami', en: 'Lasagnette Alfredo with shrimp' },
      desc: { en: 'Extruded pasta ribbons with shrimp, confit lemon, butter, garlic and parmesan sauce.' }
    }
  },
  {
    id: 'p8',
    cat: 'pasta',
    name: 'spaghetti alla chitarra con astice',
    pron: 'spagetti alla kitarra kon asticze',
    desc: 'Spaghetti z homarem, żółtymi pomidorami, papryką goccia, kolendrą i cytrynowym pangrattato.',
    price: '98',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'skorupiaki'],
    serviceNotes: 'Ekskluzywne danie z mięsem z homara, aromatycznym sosem z żółtych pomidorów i papryczki goccia.',
    ingIds: ['pastafresca', 'astice', 'pomodorogiallo', 'coriandolo', 'limone'],
    components: [
      { name: 'Makaron i Mięso z homara', ingIds: ['pastafresca', 'farina', 'uova', 'astice'] },
      { name: 'Sos maślany z żółtymi pomidorami', ingIds: ['pomodorogiallo', 'burro', 'czosnek', 'peperoncino', 'wino', 'sale'] },
      { name: 'Posypka & Zioła', ingIds: ['pane', 'limone', 'coriandolo'] }
    ],
    tr: {
      name: { pl: 'Spaghetti z homarem', en: 'Spaghetti with lobster' },
      desc: { en: 'Guitar-cut spaghetti with lobster meat, yellow tomato-butter sauce, goccia pepper and lemon breadcrumbs.' }
    }
  },
  {
    id: 'p9',
    cat: 'pasta',
    name: 'spaghettoni alla carbonara',
    pron: 'spagettoni alla karbonara',
    desc: 'Spaghettoni z guanciale, serem pecorino romano, parmezanem i konfitowanym jajkiem. Możliwa zamiana na spaghetti o obniżonej zawartości glutenu.',
    price: '48',
    veg: null,
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Opcja bezglutenowa: możliwość zamówienia na makaronie o obniżonej zawartości glutenu.',
    ingIds: ['pastafresca', 'guanciale', 'pecorino', 'parmigiano', 'tuorlo'],
    components: [
      { name: 'Makaron Spaghettoni', ingIds: ['pastafresca', 'farina', 'acqua'] },
      { name: 'Sos Rzymski & Guanciale', ingIds: ['guanciale', 'pecorino', 'parmigiano', 'pepe', 'sale'] },
      { name: 'Konfitowane żółtko', ingIds: ['tuorlo', 'uova'] }
    ],
    tr: {
      name: { pl: 'Spaghettoni alla carbonara', en: 'Spaghettoni carbonara' },
      desc: { en: 'Thick fresh spaghettoni with cured guanciale, pecorino, parmesan and confit egg yolk.' }
    }
  },

  // --- SECONDI ---
  {
    id: 's1',
    cat: 'secondi',
    name: 'melanzane e parmigiano',
    pron: 'melandzane e parmidżano',
    desc: 'Pieczony bakłażan z kremem parmezanowym, pomidorkami i perełkami parmezanowymi (v).',
    price: '52',
    veg: 'v',
    allergens: ['mleko', 'jaja', 'czosnek'],
    serviceNotes: '✨ Całe danie jest całkowicie bezglutenowe (włącznie z chrupiącymi kulkami parmezanowymi).',
    ingIds: ['melanzana', 'parmigiano', 'pomodorini', 'basilico'],
    components: [
      { name: 'Pieczone warzywa', ingIds: ['melanzana', 'pomodorini', 'sale'] },
      { name: 'Pikantna glazura pomidorowa', ingIds: ['pomodoro', 'czosnek', 'peperoncino', 'olio'] },
      { name: 'Sos parmezanowy & Perełki', ingIds: ['parmigiano', 'panna', 'uova', 'basilico', 'olio'] }
    ],
    tr: {
      name: { pl: 'Bakłażan z parmezanem (GF)', en: 'Eggplant parmesan (GF)' },
      desc: { en: 'Roasted eggplant with parmesan cream, cherry tomatoes and GF parmesan pearls.' }
    }
  },
  {
    id: 's2',
    cat: 'secondi',
    name: 'filetto di orata con porri novelli',
    pron: 'filetto di orata kon porri nowelli',
    desc: 'Filet z dorady z młodymi porami i ziemniakami, mulami, sosem maślanym z wermutem i kaparami.',
    price: '98',
    veg: null,
    allergens: ['ryby', 'mleko', 'mięczaki'],
    serviceNotes: 'Subtelny morsko-maślany sos o ziołowym aromacie z mulami i kaparami.',
    ingIds: ['orata', 'cozze', 'porro', 'patate', 'burro'],
    components: [
      { name: 'Filet z dorady & Mule', ingIds: ['orata', 'cozze', 'sale'] },
      { name: 'Warzywa w maśle & Sos wywarowy', ingIds: ['porro', 'patate', 'burro', 'vermut', 'sale'] },
      { name: 'Dodatki i kapary', ingIds: ['capperi', 'erbe', 'olio'] }
    ],
    tr: {
      name: { pl: 'Filet z dorady z porami i mulami', en: 'Sea bream fillet with leeks and mussels' },
      desc: { en: 'Sea bream fillet on baby leeks, potatoes and mussels in vermouth butter sauce.' }
    }
  },
  {
    id: 's3',
    cat: 'secondi',
    name: 'cotoletta alla milanese',
    pron: 'kotoletta alla milaneze',
    desc: 'Mediołański schab z kością, z kremem parmezanowym, sezonowymi sałatami i młodymi ziemniakami.',
    price: '66',
    veg: null,
    allergens: ['gluten', 'jaja', 'mleko', 'gorczyca'],
    serviceNotes: 'Zawsze serwujemy schab na sosie parmezanowym z dwoma osobnymi talerzykami (sałata z majlertów z winegretem + ziemniaki).',
    ingIds: ['maiale', 'parmigiano', 'limone', 'insalata', 'patate'],
    components: [
      { name: 'Panierowany schab z kością', ingIds: ['maiale', 'farina', 'uova', 'pane', 'parmigiano', 'sale'] },
      { name: 'Sos parmezanowy i cytryna', ingIds: ['parmigiano', 'panna', 'limone'] },
      { name: 'Talerzyk 1: Sałata Majlertów', ingIds: ['insalata', 'gorczyca', 'olio', 'aceto'] },
      { name: 'Talerzyk 2: Ziemniaki', ingIds: ['patate', 'burro', 'sale'] }
    ],
    tr: {
      name: { pl: 'Kotlet po mediolańsku', en: 'Milanese pork cutlet' },
      desc: { en: 'Bone-in fried pork cutlet on parmesan cream, served with two side plates: Majlert salad and buttered potatoes.' }
    }
  },
  {
    id: 's4',
    cat: 'secondi',
    name: 'filetto di manzo',
    pron: 'filetto di mandzo',
    desc: 'Stek z polędwicy wołowej z sosem z zielonego pieprzu, sałatką z cukinii i ziemniaczano-cytrynowym puree.',
    price: '124',
    veg: null,
    allergens: ['mleko'],
    serviceNotes: 'Soczysty stek z polędwicy z wyrazistym sosem z zielonego pieprzu i kremowym ziemniaczano-cytrynowym puree.',
    ingIds: ['manzo', 'pepeverde', 'zucchine', 'patate', 'limone'],
    components: [
      { name: 'Stek z polędwicy wołowej', ingIds: ['manzo', 'sale'] },
      { name: 'Sos z zielonego pieprzu', ingIds: ['pepeverde', 'panna', 'burro'] },
      { name: 'Dodatki', ingIds: ['zucchine', 'patate', 'limone', 'burro'] }
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
    desc: 'Jogurtowo-malinowe lody soft serve z melonem, oliwą z oliwek i kwiatem czarnego bzu.',
    price: '22',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Lekki i orzeźwiający deser lodowy ze świeżym melonem, oliwą oraz aromatem kwiatu czarnego bzu.',
    ingIds: ['yogurt', 'lamponi', 'melone', 'olio', 'bez'],
    components: [
      { name: 'Lody jogurtowo-malinowe soft', ingIds: ['yogurt', 'lamponi', 'panna', 'zucchero'] },
      { name: 'Wykończenie', ingIds: ['melone', 'olio', 'bez'] }
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
    desc: 'Kremowe ciastko z włoskiego sera Stracchino, z orzechowo-słonym spodem i świeżymi malinami.',
    price: '24',
    veg: 'v',
    allergens: ['mleko', 'gluten', 'orzechy'],
    serviceNotes: 'Unikalny sernik ze świeżego włoskiego sera Stracchino ze słonym orzechowym spodem.',
    ingIds: ['stracchino', 'nocciole', 'lamponi', 'panna'],
    components: [
      { name: 'Krem serowy Stracchino', ingIds: ['stracchino', 'panna', 'zucchero'] },
      { name: 'Słony spód orzechowy', ingIds: ['nocciole', 'burro', 'sale'] },
      { name: 'Maliny', ingIds: ['lamponi'] }
    ],
    tr: {
      name: { pl: 'Sernik z sera Stracchino z malinami', en: 'Stracchino cheese cake with raspberries' },
      desc: { en: 'Chilled cream cake made of Italian Stracchino cheese with salted walnut crust and fresh raspberries.' }
    }
  },
  {
    id: 'd3',
    cat: 'dolce',
    name: 'maritozzo con la panna e mirtilli',
    pron: 'maritocco kon la panna e mirtilli',
    desc: 'Rzymska bułeczka z bitą śmietaną i świeżymi jagodami.',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'mleko', 'jaja'],
    serviceNotes: 'Tradycyjna maślana bułeczka rzymska obficie wypełniona bitą śmietaną i jagodami.',
    ingIds: ['brioche', 'panna', 'mirtilli'],
    components: [
      { name: 'Bułeczka maślana Maritozzo', ingIds: ['brioche', 'farina', 'burro', 'uova'] },
      { name: 'Nadzienie', ingIds: ['panna', 'zucchero', 'mirtilli'] }
    ],
    tr: {
      name: { pl: 'Maritozzo ze śmietaną i jagodami', en: 'Maritozzo with cream and blueberries' },
      desc: { en: 'Roman brioche bun stuffed with whipped cream and fresh blueberries.' }
    }
  },
  {
    id: 'd4',
    cat: 'dolce',
    name: 'panna cotta alla camomilla con rabarbaro',
    pron: 'panna kotta alla kamomilla kon rabarbaro',
    desc: 'Rumiankowa panna cotta z rabarbarem i oliwą z oliwek.',
    price: '20',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Subtelny deser o aromacie rumianku przełamany kwaskowatym rabarbarem i oliwą.',
    ingIds: ['camomilla', 'panna', 'rabarbaro', 'olio'],
    components: [
      { name: 'Panna cotta rumiankowa', ingIds: ['panna', 'camomilla', 'zucchero'] },
      { name: 'Rabarbar & Oliwa', ingIds: ['rabarbaro', 'olio'] }
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
    desc: 'Ciasto "choux" z waniliową bitą śmietaną i czekoladą.',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Efektowny serwis przy stole — gorącą czekoladę polewamy bezpośrednio przy gościu.',
    ingIds: ['pastachoux', 'panna', 'cioccolato', 'wanilia'],
    components: [
      { name: 'Profiterolki (ciasto choux)', ingIds: ['pastachoux', 'farina', 'burro', 'uova'] },
      { name: 'Waniliowa bita śmietana', ingIds: ['panna', 'wanilia', 'zucchero'] },
      { name: 'Gorąca czekolada', ingIds: ['cioccolato'] }
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
    desc: 'Cytrynowa granita z bazylią (0%) / cytrynowa granita z limoncello.',
    price: '18/26',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Orzeźwiająca granita cytrynowa — wersja 0% z bazylią za 18 zł lub wersja z limoncello za 26 zł.',
    ingIds: ['limone', 'basilico', 'limoncello'],
    components: [
      { name: 'Baza granity', ingIds: ['limone', 'zucchero', 'acqua'] },
      { name: 'Dodatki', ingIds: ['basilico', 'limoncello'] }
    ],
    tr: {
      name: { pl: 'Granita sycylijska', en: 'Sicilian granita' },
      desc: { en: 'Lemon granita with basil (non-alcoholic, 18 zł) or with limoncello (26 zł).' }
    }
  },
  {
    id: 'd7',
    cat: 'dolce',
    name: 'tiramisù',
    pron: 'tiramisu',
    desc: 'Klasyczne tiramisù.',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Klasyczne włoskie tiramisù z mascarpone, biszkoptami, espresso i amaretto.',
    ingIds: ['mascarpone', 'savoiardi', 'caffe', 'amaretto', 'cacao', 'tuorlo'],
    components: [
      { name: 'Krem mascarpone', ingIds: ['mascarpone', 'tuorlo', 'uova', 'zucchero'] },
      { name: 'Biszkopty z kawą i amaretto', ingIds: ['savoiardi', 'caffe', 'amaretto'] },
      { name: 'Kakao', ingIds: ['cacao'] }
    ],
    tr: {
      name: { pl: 'Klasyczne Tiramisù', en: 'Classic Tiramisù' },
      desc: { en: 'Classic tiramisù with mascarpone, espresso, amaretto and cocoa.' }
    }
  },
  {
    id: 'd8',
    cat: 'dolce',
    name: 'sorbetto al limone',
    pron: 'sorbetto al limone',
    desc: 'Sorbet cytrynowy.',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: '🥛 Pamiętaj informować gości: sorbet zawiera laktozę (dodatek mleka)! Serwujemy na spodku z białą serwetką „rozetką”.',
    ingIds: ['limone', 'zucchero', 'panna'],
    components: [
      { name: 'Masa sorbetowa (zawiera laktozę)', ingIds: ['limone', 'zucchero', 'panna', 'acqua'] },
      { name: 'Forma podania', ingIds: ['limone'] }
    ],
    tr: {
      name: { pl: 'Sorbet cytrynowy', en: 'Lemon sorbet' },
      desc: { en: 'Refreshing lemon sorbet. Note: Contains lactose/dairy!' }
    }
  },

  // --- BIBITE ---
  {
    id: 'b1',
    cat: 'bibite',
    name: 'świeży sok pomarańczowy',
    pron: 'swiezy sok pomaranczowy',
    desc: 'Świeżo wyciskany sok z pomarańczy.',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Sok wyciskany na świeżo na zamówienie gościa.',
    ingIds: ['arancia'],
    components: [{ name: 'Składniki', ingIds: ['arancia'] }],
    tr: { name: { pl: 'Świeży sok pomarańczowy', en: 'Fresh orange juice' }, desc: { en: 'Freshly squeezed orange juice.' } }
  },
  {
    id: 'b2',
    cat: 'bibite',
    name: 'limonata',
    pron: 'limonata',
    desc: 'Domowa lemoniada z bergamotką.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Orzeźwiająca domowa lemoniada o wyjątkowym cytrusowym aromacie bergamotki.',
    ingIds: ['limone', 'bergamotka', 'zucchero', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['limone', 'bergamotka', 'acqua', 'zucchero'] }],
    tr: { name: { pl: 'Domowa lemoniada z bergamotką', en: 'Homemade bergamot lemonade' }, desc: { en: 'Homemade lemonade infused with bergamot.' } }
  },
  {
    id: 'b3',
    cat: 'bibite',
    name: 'tè freddo',
    pron: 'te freddo',
    desc: 'Domowa brzoskwiniowa ice tea.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Domowa mrożona herbata brzoskwiniowa podawana na lodzie.',
    ingIds: ['pesca', 'acqua', 'zucchero'],
    components: [{ name: 'Składniki', ingIds: ['pesca', 'acqua', 'zucchero'] }],
    tr: { name: { pl: 'Mrożona herbata brzoskwiniowa', en: 'Peach ice tea' }, desc: { en: 'Homemade peach ice tea served over ice.' } }
  },
  {
    id: 'b4',
    cat: 'bibite',
    name: 'soda',
    pron: 'soda',
    desc: 'Włoskie napoje gazowane: chinotto, aranciata.',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Tradycyjne włoskie napoje w butelkach: gorzkawa chinotto lub pomarańczowa aranciata.',
    ingIds: ['arancia', 'acqua', 'zucchero'],
    components: [{ name: 'Warianty', ingIds: ['arancia', 'zucchero', 'acqua'] }],
    tr: { name: { pl: 'Włoska soda', en: 'Italian soda' }, desc: { en: 'Italian sparkling drinks: chinotto or aranciata.' } }
  },
  {
    id: 'b5',
    cat: 'bibite',
    name: 'cola',
    pron: 'cola',
    desc: 'Coca-cola / Coca-cola zero.',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Podawane dobrze schłodzone ze szklanką z lodem i plastrem cytryny.',
    ingIds: ['acqua', 'zucchero'],
    components: [{ name: 'Składniki', ingIds: ['acqua', 'zucchero'] }],
    tr: { name: { pl: 'Cola / Cola Zero', en: 'Coca-Cola / Zero' }, desc: { en: 'Classic Coca-Cola or Coca-Cola Zero.' } }
  },
  {
    id: 'b6',
    cat: 'bibite',
    name: 'succo',
    pron: 'sukko',
    desc: 'Włoski sok brzoskwiniowy lub gruszkowy.',
    price: '16',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Gęste, aromatyczne włoskie soki owocowe (pesca / pera).',
    ingIds: ['pesca', 'pera'],
    components: [{ name: 'Warianty', ingIds: ['pesca', 'pera'] }],
    tr: { name: { pl: 'Włoski sok owocowy', en: 'Italian fruit juice' }, desc: { en: 'Italian peach or pear juice.' } }
  },
  {
    id: 'b7',
    cat: 'bibite',
    name: 'acqua',
    pron: 'akkwa',
    desc: 'Woda San Pellegrino / Aqua Panna (750 ml / 250 ml).',
    price: '22/14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Włoska woda mineralna gazowana (San Pellegrino) lub niegazowana (Aqua Panna). Ceny: 250ml = 14 zł, 750ml = 22 zł.',
    ingIds: ['acqua'],
    components: [{ name: 'Warianty', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Woda mineralna', en: 'Mineral water' }, desc: { en: 'San Pellegrino sparkling or Aqua Panna still mineral water.' } }
  },
  {
    id: 'b8',
    cat: 'bibite',
    name: 'tonica j.gasco',
    pron: 'tonika dżi gasko',
    desc: 'Toniki J.Gasco: indian tonic, aperitivo bitter, sodarosa grapefruit, fiori di sambuco.',
    price: '18',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Premium włoskie toniki i miksery marki J.Gasco w różnych smakach.',
    ingIds: ['arancia', 'bez', 'acqua'],
    components: [{ name: 'Smaki', ingIds: ['arancia', 'bez', 'acqua'] }],
    tr: { name: { pl: 'Tonik J.Gasco', en: 'J.Gasco tonic' }, desc: { en: 'Premium Italian tonics: indian tonic, aperitivo bitter, sodarosa grapefruit, elderflower.' } }
  },

  // --- CAFFÈ ---
  {
    id: 'c1',
    cat: 'caffe',
    name: 'caffè',
    pron: 'kaffe',
    desc: 'Klasyczne włoskie espresso.',
    price: '9',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Pojedyncze, esencjonalne espresso.',
    ingIds: ['caffe', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'acqua'] }],
    tr: { name: { pl: 'Espresso', en: 'Espresso' }, desc: { en: 'Classic single espresso shot.' } }
  },
  {
    id: 'c2',
    cat: 'caffe',
    name: 'macchiato',
    pron: 'makkiato',
    desc: 'Espresso z odrobiną spienionego mleka.',
    price: '10',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Espresso "poplamione" odrobiną gorącego spienionego mleka.',
    ingIds: ['caffe', 'panna'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna'] }],
    tr: { name: { pl: 'Espresso macchiato', en: 'Espresso macchiato' }, desc: { en: 'Single espresso with a dash of foamed milk.' } }
  },
  {
    id: 'c3',
    cat: 'caffe',
    name: 'caffè doppio / lungo',
    pron: 'kaffe doppio / lungo',
    desc: 'Podwójne espresso lub przedłużane espresso.',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Doppio = 2x shot espresso. Lungo = espresso z większą ilością wody.',
    ingIds: ['caffe', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'acqua'] }],
    tr: { name: { pl: 'Kawa doppio / lungo', en: 'Double espresso / lungo' }, desc: { en: 'Double shot espresso or extended espresso.' } }
  },
  {
    id: 'c4',
    cat: 'caffe',
    name: 'caffè filtrato / freddo',
    pron: 'kaffe filtrato / freddo',
    desc: 'Kawa przelewowa lub kawa mrożona.',
    price: '12',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Filtrato = czarna kawa przelewowa. Freddo = mrożona czarna kawa.',
    ingIds: ['caffe', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'acqua'] }],
    tr: { name: { pl: 'Kawa przelewowa / mrożona', en: 'Drip coffee / iced coffee' }, desc: { en: 'Filter drip coffee or cold iced black coffee.' } }
  },
  {
    id: 'c5',
    cat: 'caffe',
    name: 'cappuccino',
    pron: 'kappuczino',
    desc: 'Espresso ze spienionym aksamitnym mlekiem.',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Klasyczne włoskie cappuccino z gęstą mleczną pianką.',
    ingIds: ['caffe', 'panna'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna'] }],
    tr: { name: { pl: 'Cappuccino', en: 'Cappuccino' }, desc: { en: 'Espresso topped with steamed milk foam.' } }
  },
  {
    id: 'c6',
    cat: 'caffe',
    name: 'latte',
    pron: 'latte',
    desc: 'Spienione mleko z delikatnym espresso.',
    price: '16',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Duża mleczna kawa serwowana w wysokiej szklance.',
    ingIds: ['caffe', 'panna'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna'] }],
    tr: { name: { pl: 'Caffè latte', en: 'Caffè latte' }, desc: { en: 'Large steamed milk coffee with espresso shot.' } }
  },
  {
    id: 'c7',
    cat: 'caffe',
    name: 'caffè affogato',
    pron: 'kaffe affogato',
    desc: 'Gorące espresso wlane na gałkę lodów waniliowych.',
    price: '16',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Klasyczny włoski deser kawowy: porcja gorącego espresso wlana na zimne lody.',
    ingIds: ['caffe', 'panna', 'wanilia'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'panna', 'wanilia'] }],
    tr: { name: { pl: 'Affogato', en: 'Affogato' }, desc: { en: 'Hot espresso poured over a scoop of vanilla ice cream.' } }
  },
  {
    id: 'c8',
    cat: 'caffe',
    name: 'tonic espresso',
    pron: 'tonik espresso',
    desc: 'Espresso wlane na lód z tonikiem.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Orzeźwiający napój kawowy — musujący tonik przełamany mocnym espresso.',
    ingIds: ['caffe', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['caffe', 'acqua'] }],
    tr: { name: { pl: 'Tonic espresso', en: 'Espresso tonic' }, desc: { en: 'Espresso poured over chilled sparkling tonic water.' } }
  },
  {
    id: 'c9',
    cat: 'caffe',
    name: 'cioccolato',
    pron: 'czokkolato',
    desc: 'Gęsta włoska gorąca czekolada.',
    price: '14',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Bardzo gęsta, aromatyczna czekolada podawana na gorąco.',
    ingIds: ['cioccolato', 'panna', 'cacao'],
    components: [{ name: 'Składniki', ingIds: ['cioccolato', 'panna', 'cacao'] }],
    tr: { name: { pl: 'Gorąca czekolada', en: 'Hot chocolate' }, desc: { en: 'Rich and thick Italian hot chocolate.' } }
  },

  // --- TÈ E INFUSI ---
  {
    id: 't1',
    cat: 'te',
    name: 'tè nero',
    pron: 'te nero',
    desc: 'Klasyczna czarna herbata.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Głęboka w smaku czarna herbata serwowana w dzbanku.',
    ingIds: ['acqua'],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Czarna herbata', en: 'Black tea' }, desc: { en: 'Classic loose-leaf black tea.' } }
  },
  {
    id: 't2',
    cat: 'te',
    name: 'earl grey',
    pron: 'erl grej',
    desc: 'Czarna herbata z bergamotką.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Aromatyzowana naturalnym olejkiem z bergamotki.',
    ingIds: ['bergamotka', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['bergamotka', 'acqua'] }],
    tr: { name: { pl: 'Herbata Earl Grey', en: 'Earl Grey tea' }, desc: { en: 'Black tea infused with bergamot.' } }
  },
  {
    id: 't3',
    cat: 'te',
    name: 'tè verde',
    pron: 'te werde',
    desc: 'Zielona herbata sencha.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Szlachetna japońska zielona herbata Sencha.',
    ingIds: ['acqua'],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Zielona herbata sencha', en: 'Green tea sencha' }, desc: { en: 'Japanese green tea sencha.' } }
  },
  {
    id: 't4',
    cat: 'te',
    name: 'paradiso',
    pron: 'paradizo',
    desc: 'Czarna herbata, lawenda, kwiaty truskawki i kukurydzy.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Kwiatowo-owocowa kompozycja na bazie czarnej herbaty z nutą lawendy.',
    ingIds: ['acqua'],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Herbata Paradiso', en: 'Paradiso infusion' }, desc: { en: 'Black tea with lavender, strawberry flowers and cornflower.' } }
  },
  {
    id: 't5',
    cat: 'te',
    name: 'fiore bianco',
    pron: 'fiore bianko',
    desc: 'Biała i zielona herbata, żółte owoce, płatki nagietka.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Delikatna mieszanka białej i zielonej herbaty z żółtymi owocami.',
    ingIds: ['acqua'],
    components: [{ name: 'Składniki', ingIds: ['acqua'] }],
    tr: { name: { pl: 'Herbata Fiore Bianco', en: 'Fiore Bianco tea' }, desc: { en: 'White & green tea blend with yellow fruits and marigold petals.' } }
  },
  {
    id: 't6',
    cat: 'te',
    name: 'riso e vaniglia',
    pron: 'rizo e wanilia',
    desc: 'Zielona herbata z prażonym ryżem i wanilią (Genmaicha style).',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Niezwykłe połączenie zielonej herbaty, chrupiącego prażonego ryżu i nuty wanilii.',
    ingIds: ['ryz', 'wanilia', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['ryz', 'wanilia', 'acqua'] }],
    tr: { name: { pl: 'Herbata z ryżem i wanilią', en: 'Rice & vanilla green tea' }, desc: { en: 'Green tea with roasted rice and vanilla.' } }
  },
  {
    id: 't7',
    cat: 'te',
    name: 'palermo',
    pron: 'palermo',
    desc: 'Trawa cytrynowa, eukaliptus i suszone mandarynki.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Orzeźwiająca mieszanka ziołowo-cytrusowa z eukaliptusem i mandarynką.',
    ingIds: ['arancia', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['arancia', 'acqua'] }],
    tr: { name: { pl: 'Napar Palermo', en: 'Palermo infusion' }, desc: { en: 'Lemongrass, eucalyptus and dried mandarin infusion.' } }
  },
  {
    id: 't8',
    cat: 'te',
    name: 'menta',
    pron: 'menta',
    desc: 'Mięta, skórka pomarańczy, róża i lukrecja.',
    price: '14',
    veg: 'vg',
    allergens: [],
    serviceNotes: 'Aromatyczny napar z liści mięty z cytrusowo-kwiatową nutą.',
    ingIds: ['menta', 'arancia', 'acqua'],
    components: [{ name: 'Składniki', ingIds: ['menta', 'arancia', 'acqua'] }],
    tr: { name: { pl: 'Napar z mięty i ziół', en: 'Mint & citrus infusion' }, desc: { en: 'Mint, orange peel, rose and liquorice infusion.' } }
  }
];
