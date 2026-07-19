// Dane menu Lupo: dania + główne składniki do testów (ingIds) + komponenty szczegółowe + tłumaczenia + alergeny + wskazówki.
// Ikony składników: assets/ingredients/*.svg (Twemoji 14.0.2, CC-BY 4.0).

export const CATS = [
  { key: 'antipasti', title: 'Antipasti', sub: 'Przystawki' },
  { key: 'pasta', title: 'Pasta', sub: 'Makarony' },
  { key: 'secondi', title: 'Secondi', sub: 'Dania główne' },
  { key: 'dolce', title: 'Dolce', sub: 'Desery' }
];

export const TIPS = [
  'Zawsze proponujemy min. 2 dania dla 1 osoby: przystawkę + makaron lub przystawkę + drugie.',
  'Zawsze proponujemy deser oraz kawę lub digestivo po posiłku.',
  'Do wszystkich dań serwujemy naszą autorską focaccię (z oliwą nalewaną z konewki przy stoliku).',
  'Do poszczególnych dań rekomendujemy odpowiednio dobrane wina i koktajle.',
  'Jeśli ktoś zgłasza alergię, zawsze dokładnie weryfikujemy skład dania na kuchni.',
  'Pamiętaj: sorbet cytrynowy zawiera laktozę, a tatar z wołowiny podajemy zawsze z solą i pieprzem młotkowanym.'
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
  asparagi: { it: 'asparagi verdi', pl: 'zielone szparagi', en: 'green asparagus', icon: 'spinaci.svg' },
  asparagibianchi: { it: 'asparagi bianchi', pl: 'białe szparagi', en: 'white asparagus', icon: 'spinaci.svg' },
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
  manzo: { it: 'manzo (zrazowa)', pl: 'wołowina (górna zrazowa)', en: 'beef tenderloin', icon: 'manzo.svg' },
  guanciadimanzo: { it: 'guancia di manzo', pl: 'policzek wołowy', en: 'beef cheek', icon: 'manzo.svg' },
  maiale: { it: 'maiale con osso', pl: 'schab wieprzowy z kością', en: 'pork cutlet with bone', icon: 'maiale.svg' },
  salsiccia: { it: 'salsiccia', pl: 'kiełbasa salsiccia', en: 'salsiccia sausage', icon: 'salsiccia.svg' },
  guanciale: { it: 'guanciale', pl: 'guanciale (dojrzewający policzek)', en: 'cured pork cheek', icon: 'guanciale.svg' },
  lardo: { it: 'lardo', pl: 'lardo (marynowana słonina)', en: 'cured fatback', icon: 'guanciale.svg' },
  gęś: { it: 'oca fumé', pl: 'wędzona gęś', en: 'smoked goose', icon: 'ges.svg' },
  orata: { it: 'orata', pl: 'dorada chorwacka', en: 'sea bream', icon: 'orata.svg' },
  cozze: { it: 'cozze', pl: 'mule (małże)', en: 'mussels', icon: 'cozze.svg' },
  gamberi: { it: 'gamberi', pl: 'krewetki', en: 'shrimp', icon: 'gamberi.svg' },
  astice: { it: 'astice (40g)', pl: 'homar (40g mięsa)', en: 'lobster meat (40g)', icon: 'astice.svg' },
  ikra: { it: 'uova di trota', pl: 'ikra z troci', en: 'trout roe', icon: 'orata.svg' },
  colatura: { it: 'colatura di alici', pl: 'colatura di alici (sos z anchois)', en: 'anchovy sauce', icon: 'orata.svg' },
  worcestershire: { it: 'salsa Worcestershire', pl: 'sos Worcestershire', en: 'Worcestershire sauce', icon: 'aceto.svg' },

  // Pieczywo, Bakalie & Inne
  pane: { it: 'pane / pangrattato', pl: 'pieczywo / chleb sardyński / posypka', en: 'bread / breadcrumbs', icon: 'pane.svg' },
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
  ryz: { it: 'riso Carnaroli', pl: 'ryż Carnaroli', en: 'Carnaroli rice', icon: 'ryz.svg' }
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
    desc: 'Oliwki Castelvetrano marynowane wg klasycznej receptury w oliwie z oliwek z liściem laurowym i skórką pomarańczy.',
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
    veg: 'v',
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
    price: '10',
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
    name: 'burrata con asparagi verdi',
    pron: 'burrata kon asparagi werdi',
    desc: 'Smażone zielone szparagi z kremową burratą, cytrynowym pangrattato (chrupiącą posypką z pieczywa), suszoną czarną oliwką i olejem miętowym.',
    price: '44',
    veg: 'v',
    allergens: ['gluten', 'mleko'],
    serviceNotes: 'Kompozycja oparta na kontraście temperatur (ciepłe szparagi, zimna burrata), tekstur oraz ziołowo-cytrusowym akcencie.',
    ingIds: ['asparagi', 'burrata', 'pane', 'limone', 'olive', 'menta'],
    components: [
      { name: 'Ciepłe szparagi & Ser', ingIds: ['asparagi', 'burrata', 'sale'] },
      { name: 'Cytrynowe pangrattato', ingIds: ['pane', 'limone', 'olio'] },
      { name: 'Wykończenie smakowe', ingIds: ['olive', 'menta', 'olio'] }
    ],
    tr: {
      name: { pl: 'Burrata z zielonymi szparagami', en: 'Burrata with green asparagus' },
      desc: { en: 'Seared green asparagus with creamy burrata, lemon pangrattato, dried black olives and mint oil.' }
    }
  },
  {
    id: 'a8',
    cat: 'antipasti',
    name: 'asparagi bianci',
    pron: 'asparagi bianki',
    desc: 'Białe szparagi podane z ciepłą pianą ziemniaczaną (z masłem i mlekiem), wykończone oliwą truflową oraz świeżą truflą.',
    price: '36',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: 'Proste i eleganckie danie sezonowe. Białe szparagi mają delikatną orzechową nutę, a piana ziemniaczana nadaje miękkość.',
    ingIds: ['asparagibianchi', 'patate', 'burro', 'panna', 'funghi'],
    components: [
      { name: 'Warzywo główne', ingIds: ['asparagibianchi', 'sale'] },
      { name: 'Ciepła piana ziemniaczana', ingIds: ['patate', 'burro', 'panna', 'sale'] },
      { name: 'Aromat truflowy', ingIds: ['olio', 'funghi'] }
    ],
    tr: {
      name: { pl: 'Białe szparagi z truflą', en: 'White asparagus with truffle' },
      desc: { en: 'White asparagus served with warm potato foam, butter, truffle oil and fresh black truffle.' }
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
    name: 'insalata di radicchio ed oca',
    pron: 'insalata di radikkio ed oka',
    desc: 'Sałatka z odmian radicchio (Castelfranco, Treviso) z polską gęsią podwędzaną w niskiej temp. (60°C), purée z migdałów, dressingiem z octu sherry, malin, miodu i amaro.',
    price: '44',
    veg: null,
    allergens: ['orzechy'],
    serviceNotes: 'Chrupiące fioletowe ziemniaki serwowane są zawsze na osobnym talerzyku!',
    ingIds: ['insalata', 'gęś', 'mandorla', 'lamponi', 'amaro', 'patate'],
    components: [
      { name: 'Sałaty & Wędzona gęś (60°C)', ingIds: ['insalata', 'gęś'] },
      { name: 'Purée migdałowe (bez nabiału)', ingIds: ['mandorla', 'acqua', 'sale'] },
      { name: 'Dressing owocowo-winny', ingIds: ['aceto', 'lamponi', 'miel', 'amaro'] },
      { name: 'Chrupiące ziemniaki (osobno)', ingIds: ['patate', 'sale'] }
    ],
    tr: {
      name: { pl: 'Sałatka z radicchio i gęsią', en: 'Radicchio and smoked goose salad' },
      desc: { en: 'Mix of radicchio with low-temp smoked Polish goose, almond purée, sherry-raspberry dressing and purple potatoes served separately.' }
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
    desc: 'Zawijana forma lasagni z Modeny. Farsz z długo duszonych policzków wołowych z soffritto (seler, marchew, cebula), pomidorami i białym winem, zapiekany z mozzarellą i ziołami.',
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
    name: 'cacio e pepe',
    pron: 'kaczjo e pepe',
    desc: 'Tradycyjne rzymskie danie na grubym, sprężystym makaronie spaghettoni. Sos z sera pecorino, parmezanu i świeżo mielonego czarnego pieprzu.',
    price: '48',
    veg: 'v',
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'mleko', 'seler', 'cebula'],
    serviceNotes: '🔥 W PONIEDZIAŁKI: Parmigiano Reggiano Show! Serwujemy cacio e pepe bezpośrednio z wielkiego kręgu parmezanu (48 zł/porcja, min. 2 os.).',
    ingIds: ['pastafresca', 'pecorino', 'parmigiano', 'pepe'],
    components: [
      { name: 'Makaron Spaghettoni', ingIds: ['pastafresca', 'farina', 'acqua'] },
      { name: 'Kremowy sos serowo-pieprzowy', ingIds: ['pecorino', 'parmigiano', 'pepe', 'seler', 'cipolla', 'sale'] }
    ],
    tr: {
      name: { pl: 'Cacio e pepe', en: 'Cacio e pepe' },
      desc: { en: 'Classic Roman thick spaghettoni tossed in pecorino, parmesan and freshly cracked black pepper.' }
    }
  },
  {
    id: 'p4',
    cat: 'pasta',
    name: 'fazzoletti con asparagi bianchi',
    pron: 'faccoletti kon asparagi bianki',
    desc: 'Szerokie płaty świeżego makaronu z purée z białych szparagów i palonym masłem, wykończone konfitowanym żółtkiem oraz ikrą z troci.',
    price: '60',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'ryby'],
    serviceNotes: 'Aksamitny sos z masła palonego, konfitowane żółtko i słony, świeży akcent ikry z troci.',
    ingIds: ['pastafresca', 'asparagibianchi', 'burro', 'tuorlo', 'ikra'],
    components: [
      { name: 'Płaty makaronu Fazzoletti', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Purée ze szparagów z palonym masłem', ingIds: ['asparagibianchi', 'burro', 'sale'] },
      { name: 'Wykończenie & Akcent morski', ingIds: ['tuorlo', 'ikra'] }
    ],
    tr: {
      name: { pl: 'Fazzoletti z białymi szparagami', en: 'Fazzoletti with white asparagus' },
      desc: { en: 'Wide fresh pasta sheets with white asparagus purée, brown butter, confit yolk and trout roe.' }
    }
  },
  {
    id: 'p5',
    cat: 'pasta',
    name: 'casarecce con salsiccia',
    pron: 'kazarecze kon salsiczcza',
    desc: 'Skręcony makaron z podsmażoną włoską kiełbasą salsiccia, koperkiem włoskim, szalotką, czosnkiem, białym winem, purée z kopru oraz świeżą skórką i sokiem z pomarańczy.',
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
    desc: 'Ręcznie wałkowany makaron jajeczny wykrawany w kształt kwiatków, nadziewany ricottą, mascarpone, Grana Padano, oregano i szpinakiem, podany z palonym masłem.',
    price: '44',
    veg: 'v',
    pastaType: 'jajeczny',
    allergens: ['gluten', 'mleko', 'jaja'],
    serviceNotes: 'Nazwa pochodzi od włoskiego słowa „fiori” (kwiaty). Piękne i subtelne danie wegetariańskie.',
    ingIds: ['pastafresca', 'ricotta', 'mascarpone', 'parmigiano', 'spinaci', 'burro'],
    components: [
      { name: 'Ciasto ravioli (kwiatki)', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Aromatyczny farsz z serów i szpinaku', ingIds: ['ricotta', 'mascarpone', 'parmigiano', 'spinaci', 'erbe', 'sale'] },
      { name: 'Okrasa', ingIds: ['burro'] }
    ],
    tr: {
      name: { pl: 'Fiori (kwiatki z ricottą)', en: 'Fiori (flower ravioli)' },
      desc: { en: 'Hand-rolled flower-shaped ravioli filled with ricotta, mascarpone, spinach and oregano in brown butter.' }
    }
  },
  {
    id: 'p7',
    cat: 'pasta',
    name: 'lasagnette alfredo',
    pron: 'lazaniette alfredo',
    desc: 'Pasy makaronu z ekstrudera w bogatym kremowym sosie Alfredo z krewetkami, cytryną confit, masłem, parmezanem, odrobiną wina, natką pietruszki i czosnkiem.',
    price: '58',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['skorupiaki', 'mleko', 'jaja', 'gluten', 'czosnek'],
    serviceNotes: 'Wykwintna wersja sosu Alfredo — cytryna confit dodaje lekkości i przełamuje maślano-serowy smak.',
    ingIds: ['pastafresca', 'gamberi', 'limone', 'burro', 'parmigiano'],
    components: [
      { name: 'Pasy makaronu Lasagnette', ingIds: ['pastafresca', 'farina', 'uova'] },
      { name: 'Sos Alfredo z owoce morza', ingIds: ['gamberi', 'burro', 'parmigiano', 'czosnek', 'wino', 'sale'] },
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
    desc: 'Makaron spaghetti alla chitarra z mięsem z homara (40g), w sosie maślanym z żółtych pomidorów, czosnku, pikantnej papryczki goccia, białego wina i redukcji z pancerzy. Z cytrynowym pangrattato i kolendrą.',
    price: '98',
    veg: null,
    pastaType: 'jajeczny',
    allergens: ['gluten', 'jaja', 'mleko', 'skorupiaki'],
    serviceNotes: 'Danie zawiera 40g czystego mięsa z homara. Redukcja z pancerzy buduje niezwykłą głębię smaku.',
    ingIds: ['pastafresca', 'astice', 'pomodorogiallo', 'coriandolo', 'limone'],
    components: [
      { name: 'Makaron i Mięso z homara (40g)', ingIds: ['pastafresca', 'farina', 'uova', 'astice'] },
      { name: 'Sos maślany z redukcją pancerzy', ingIds: ['pomodorogiallo', 'burro', 'czosnek', 'peperoncino', 'wino', 'sale'] },
      { name: 'Posypka & Zioła', ingIds: ['pane', 'limone', 'coriandolo'] }
    ],
    tr: {
      name: { pl: 'Spaghetti z homarem', en: 'Spaghetti with lobster' },
      desc: { en: 'Guitar-cut spaghetti with lobster meat (40g), yellow tomato-butter sauce, goccia pepper and lemon breadcrumbs.' }
    }
  },
  {
    id: 'p9',
    cat: 'pasta',
    name: 'spaghettoni alla carbonara',
    pron: 'spagettoni alla karbonara',
    desc: 'Bezjajeczny makaron tłoczony na miejscu, z guanciale (dojrzewające 3 mies. policzki/podgardle wieprzowe), pecorino, parmezanem i aksamitnym konfitowanym żółtkiem (60-65°C).',
    price: '46',
    veg: null,
    pastaType: 'bezjajeczny',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Opcja bezglutenowa: możliwość zamówienia na makaronie z mąki ryżowej i kukurydzianej (może zawierać śladowe ilości glutenu).',
    ingIds: ['pastafresca', 'guanciale', 'pecorino', 'parmigiano', 'tuorlo'],
    components: [
      { name: 'Makaron Spaghettoni (bezjajeczny)', ingIds: ['pastafresca', 'farina', 'acqua'] },
      { name: 'Sos Rzymski & Guanciale', ingIds: ['guanciale', 'pecorino', 'parmigiano', 'pepe', 'sale'] },
      { name: 'Konfitowane żółtko (60-65°C)', ingIds: ['tuorlo', 'uova'] }
    ],
    tr: {
      name: { pl: 'Spaghettoni alla carbonara', en: 'Spaghettoni carbonara' },
      desc: { en: 'Thick fresh spaghettoni with 3-month cured guanciale, pecorino, parmesan and slow-confit egg yolk.' }
    }
  },

  // --- SECONDI ---
  {
    id: 's1',
    cat: 'secondi',
    name: 'melanzane e parmigiano',
    pron: 'melandzane e parmidżano',
    desc: 'Pieczona połówka bakłażana z pikantną pomidorową glazurą (czosnek, wędzona i ostra papryka), pomidorkami cherry, sosem parmezanowym, oliwą bazyliową i bezglutenowymi kulkami parmezanowymi.',
    price: '52',
    veg: 'v',
    allergens: ['mleko', 'jaja', 'czosnek'],
    serviceNotes: '✨ Całe danie jest całkowicie bezglutenowe (włącznie z chrupiącymi kulkami parmezanowymi).',
    ingIds: ['melanzana', 'parmigiano', 'pomodorini', 'basilico'],
    components: [
      { name: 'Pieczone warzywa', ingIds: ['melanzana', 'pomodorini', 'sale'] },
      { name: 'Pikantna glazura pomidorowa', ingIds: ['pomodoro', 'czosnek', 'peperoncino', 'olio'] },
      { name: 'Sos parmezanowy & Kulki GF', ingIds: ['parmigiano', 'panna', 'uova', 'basilico', 'olio'] }
    ],
    tr: {
      name: { pl: 'Bakłażan z parmezanem (GF)', en: 'Eggplant parmesan (GF)' },
      desc: { en: 'Slow-roasted eggplant half with spicy tomato glaze, parmesan cream, basil oil and GF crispy parmesan pearls.' }
    }
  },
  {
    id: 's2',
    cat: 'secondi',
    name: 'filetto di orata con porri novelli',
    pron: 'filetto di orata kon porri nowelli',
    desc: 'Filet z dorady smażony na chrupiącej skórze, podany na młodych duszonych porach i ziemniakach z mulami oraz maślanym sosem na wywarze z muli. Wykończony kaparami i oliwą z trybuli.',
    price: '98',
    veg: null,
    allergens: ['ryby', 'mleko', 'mięczaki'],
    serviceNotes: 'Subtelny morsko-maślany sos o ziołowym aromacie idealnie podkreśla delikatne mięso ryby.',
    ingIds: ['orata', 'cozze', 'porro', 'patate', 'burro'],
    components: [
      { name: 'Filet z dorady & Mule', ingIds: ['orata', 'cozze', 'sale'] },
      { name: 'Warzywa w maśle & Sos wywarowy', ingIds: ['porro', 'patate', 'burro', 'vermut', 'sale'] },
      { name: 'Dodatki chrupiące i ziołowe', ingIds: ['capperi', 'erbe', 'olio'] }
    ],
    tr: {
      name: { pl: 'Filet z dorady z porami i mulami', en: 'Sea bream fillet with leeks and mussels' },
      desc: { en: 'Crispy skin sea bream fillet on buttered baby leeks, potatoes and mussels in sea-broth butter sauce.' }
    }
  },
  {
    id: 's3',
    cat: 'secondi',
    name: 'cotoletta alla milanese',
    pron: 'kotoletta alla milaneze',
    desc: 'Schab z kością żebrową panierowany i smażony na patelni, podany na sosie parmezanowym z połówką cytryny. Serwowany z 2 osobnymi talerzykami: sałatą od Majlertów i ziemniakami z masłem.',
    price: '66',
    veg: null,
    allergens: ['gluten', 'jaja', 'mleko', 'gorczyca'],
    serviceNotes: 'Zawsze serwujemy schab na sosie parmezanowym z dwoma osobnymi talerzykami (sałata z majlertów z winegretem + ziemniaki).',
    ingIds: ['maiale', 'parmigiano', 'limone', 'insalata', 'patate'],
    components: [
      { name: 'Panierowany schab z kością', ingIds: ['maiale', 'farina', 'uova', 'pane', 'parmigiano', 'sale'] },
      { name: 'Sos parmezanowy i cytryna', ingIds: ['parmigiano', 'panna', 'limone'] },
      { name: 'Talerzyk 1: Sałata Majlertów', ingIds: ['insalata', 'gorczyca', 'olio', 'aceto'] },
      { name: 'Talerzyk 2: Ziemniaki francuskie', ingIds: ['patate', 'burro', 'sale'] }
    ],
    tr: {
      name: { pl: 'Kotlet po mediolańsku', en: 'Milanese pork cutlet' },
      desc: { en: 'Bone-in fried pork cutlet on parmesan cream, served with two side plates: Majlert salad and buttered potatoes.' }
    }
  },
  {
    id: 's4',
    cat: 'secondi',
    name: 'arrosticini di manzo',
    pron: 'arrosticzini di mandzo',
    desc: 'Inspiracja z Abruzji: precyzyjnie krojona polędwica wołowa i marynowane lardo ułożone naprzemiennie na szpadkach. Grillowane krótko, podane na sosie mięsnym z colaturą, szczypiorkiem i purée ziemniaczanym z parmezanem.',
    price: '88',
    veg: null,
    allergens: ['mleko', 'ryby'],
    serviceNotes: '⚠️ Uwaga na alergen rybny: wyrazisty sos mięsny zawiera colaturę di alici (sos z anchois). Podać z aksamitnym purée.',
    ingIds: ['manzo', 'lardo', 'colatura', 'patate', 'parmigiano'],
    components: [
      { name: 'Szpadki wołowo-lardowe', ingIds: ['manzo', 'lardo', 'sale'] },
      { name: 'Sos mięsny z colaturą di alici', ingIds: ['colatura', 'szczypiorek', 'sale'] },
      { name: 'Purée ziemniaczane z parmezanem', ingIds: ['patate', 'parmigiano', 'burro', 'sale'] }
    ],
    tr: {
      name: { pl: 'Arrosticini wołowe z lardo', en: 'Beef & lardo arrosticini' },
      desc: { en: 'Abruzzo skewers of beef tenderloin and cured lardo, grilled rare and served over colatura meat reduction and potato purée.' }
    }
  },

  // --- DOLCE ---
  {
    id: 'd1',
    cat: 'dolce',
    name: 'gelato soft al cioccolato con granella di cacao',
    pron: 'dżelato soft al czokkolato kon granella di kakao',
    desc: 'Czekoladowe lody soft serve z polewą z gorzkiej czekolady na miodzie, chrupiącą kruszonką kakaową z rozmarynem oraz mandarynką w syropie mandarynkowym ze skórką cytrusową.',
    price: '22',
    veg: 'v',
    allergens: ['mleko', 'gluten', 'miód'],
    serviceNotes: 'Niezwykłe połączenie czekolady z nutą rozmarynu w kruszonce i orzeźwiającą mandarynką.',
    ingIds: ['cioccolato', 'cacao', 'arancia', 'panna'],
    components: [
      { name: 'Lody czekoladowe soft serve', ingIds: ['cioccolato', 'panna', 'zucchero'] },
      { name: 'Polewa z gorzkiej czekolady', ingIds: ['cioccolato', 'miel', 'cacao'] },
      { name: 'Kruszonka rozmarynowa & Mandarynka', ingIds: ['farina', 'cacao', 'rozmaryn', 'arancia'] }
    ],
    tr: {
      name: { pl: 'Czekoladowe lody soft z mandarynką', en: 'Chocolate soft-serve with cocoa nibs' },
      desc: { en: 'Intense chocolate soft serve with dark chocolate honey glaze, rosemary-cocoa crumble and syrup mandarin.' }
    }
  },
  {
    id: 'd2',
    cat: 'dolce',
    name: 'torta di stracchino',
    pron: 'torta di strakkino',
    desc: 'Delikatny sernik na zimno z włoskiego sera Stracchino o subtelnie kwaśnej nucie. Spód z słonych orzechów włoskich ze świeżą maliną na górze.',
    price: '24',
    veg: 'v',
    allergens: ['mleko', 'gluten', 'orzechy'],
    serviceNotes: 'Unikalny sernik ze świeżego włoskiego sera Stracchino ze słonym orzechowym spodem.',
    ingIds: ['stracchino', 'nocciole', 'lamponi', 'panna'],
    components: [
      { name: 'Krem serowy Stracchino', ingIds: ['stracchino', 'panna', 'zucchero'] },
      { name: 'Słony spód orzechowy', ingIds: ['nocciole', 'burro', 'sale'] },
      { name: 'Wykończenie', ingIds: ['lamponi'] }
    ],
    tr: {
      name: { pl: 'Sernik z sera Stracchino', en: 'Stracchino cheese cake' },
      desc: { en: 'Chilled cream cake made of Italian Stracchino cheese with salted walnut crust and fresh raspberries.' }
    }
  },
  {
    id: 'd3',
    cat: 'dolce',
    name: 'pera arrosto',
    pron: 'pera arrosto',
    desc: 'Pieczona skarmelizowana gruszka z pianą z ryżu carnaroli, śmietanki i wanilii, redukcją z cydru gruszkowego, octu jabłkowego i oliwy rozmarynowej oraz prażonym ryżem z cynamonem.',
    price: '26',
    veg: 'v',
    allergens: ['mleko'],
    serviceNotes: '🍴 WAŻNE: Do deseru Pera Arrosto obowiązkowo podajemy komplet sztućców: łyżkę, widelec ORAZ NÓŻ!',
    ingIds: ['pera', 'ryz', 'panna', 'wanilia', 'cynamon'],
    components: [
      { name: 'Pieczona gruszka', ingIds: ['pera', 'zucchero'] },
      { name: 'Piana z ryżu Carnaroli', ingIds: ['ryz', 'panna', 'wanilia'] },
      { name: 'Redukcja cydrowa & Prażony ryż', ingIds: ['aceto', 'rozmaryn', 'olio', 'cynamon'] }
    ],
    tr: {
      name: { pl: 'Pieczona gruszka z pianą ryżową', en: 'Roasted pear with rice foam' },
      desc: { en: 'Roasted caramelized pear with carnaroli rice foam, pear cider reduction and cinnamon puffed rice.' }
    }
  },
  {
    id: 'd4',
    cat: 'dolce',
    name: 'profiterole',
    pron: 'profiterol',
    desc: 'Trzy delikatne profiterolki z ciasta choux wypełnione waniliową bitą śmietaną, polewane przy stole gorącą aksamitną czekoladą.',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: 'Efektowny serwis przy stole — gorącą czekoladę polewamy bezpośrednio przy gościu.',
    ingIds: ['pastachoux', 'panna', 'cioccolato', 'wanilia'],
    components: [
      { name: 'Profiterolki (ciasto choux)', ingIds: ['pastachoux', 'farina', 'burro', 'uova'] },
      { name: 'Waniliowa bita śmietana', ingIds: ['panna', 'wanilia', 'zucchero'] },
      { name: 'Gorąca czekolada (serw przy stole)', ingIds: ['cioccolato'] }
    ],
    tr: {
      name: { pl: 'Profiterolki z gorącą czekoladą', en: 'Profiteroles with hot chocolate' },
      desc: { en: 'Three choux pastries filled with vanilla whipped cream, drizzled at the table with hot dark chocolate.' }
    }
  },
  {
    id: 'd5',
    cat: 'dolce',
    name: 'tiramisù',
    pron: 'tiramisu',
    desc: 'Warstwowy deser w pucharku z puszystym kremem z żółtek i mascarpone, biszkoptami nasączonymi espresso i amaretto oraz gorzkim kakao. Dojrzewa przez noc.',
    price: '22',
    veg: 'v',
    allergens: ['gluten', 'jaja', 'mleko'],
    serviceNotes: '🗣️ Ważne w komunikacji z gościem: akcentujemy wyraźnie na ostatnią literę „u” (Tiramisù!). Zawiera amaretto.',
    ingIds: ['mascarpone', 'savoiardi', 'caffe', 'amaretto', 'cacao', 'tuorlo'],
    components: [
      { name: 'Puszysty krem mascarpone', ingIds: ['mascarpone', 'tuorlo', 'uova', 'zucchero'] },
      { name: 'Biszkopty nasączane kawą i amaretto', ingIds: ['savoiardi', 'caffe', 'amaretto'] },
      { name: 'Posypka', ingIds: ['cacao'] }
    ],
    tr: {
      name: { pl: 'Klasyczne Tiramisù', en: 'Classic Tiramisù' },
      desc: { en: 'Layered cup dessert with mascarpone & yolk cream, espresso-amaretto ladyfingers and cocoa.' }
    }
  },
  {
    id: 'd6',
    cat: 'dolce',
    name: 'sorbetto al limone',
    pron: 'sorbetto al limone',
    desc: 'Orzeźwiający sorbet cytrynowy podawany w przekrojonej na pół, wydrążonej cytrynie.',
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
      name: { pl: 'Sorbet cytrynowy w cytrynie', en: 'Lemon sorbet in whole lemon' },
      desc: { en: 'Refreshing lemon sorbet served inside a hollowed lemon half. Note: Contains lactose/dairy!' }
    }
  }
];
