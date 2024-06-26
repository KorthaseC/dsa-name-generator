//prettier-ignore
const maleFirstNames = [
  "Albin", "Anshag", "Arvid", "Baerjan", "Baerow", "Berschin", "Birjew", "Bornjeff", "Bosjew", "Boutsen", "Daanje",
  "Dabbert", "Damian", "Danow", "Duchjo", "Dulgjew", "Dunjew", "Dunjoscha", "Elkjow", "Elko", "Elkwin", "Ertzel", "Firnjan",
  "Firunjew", "Fredo", "Galjan", "Goljew", "Grimjan", "Hane", "Helmjew", "Hurdo", "Iber", "Ilmin", "Irjan", "Ischtan",
  "Jaakon", "Jarlow", "Jasper", "Joost", "Joschin", "Jucho", "Koljka", "Larjan", "Leomar", "Linjan", "Littjew", "Ljasew",
  "Ljubow", "Maris", "Matajew", "Meljow", "Mew", "Miljan", "Mjesko", "Nasjan", "Neerjan", "Neesdan", "Olko", "Orschin",
  "Oswin", "Panek", "Pedder", "Peraenjow", "Pettar", "Pitjow", "Pjerow", "Rowin", "Rudjew", "Semkin", "Stane", "Suschin",
  "Tannjew", "Thezmar", "Tirulf", "Torjin", "Travin", "Ugo", "Ulmjan", "Ulmjew", "Uriel", "Urnislaw", "Vigo", "Vito",
  "Wassjew", "Wolpje", "Wulfen", "Wulfjew", "Xebbert"
];

//prettier-ignore
const femaleFirstNames = [
  "Alinja", "Alwinje", "Baernja", "Bernischa", "Danja", "Dorlin", "Duna", "Dunjascha", "Eljascha", "Elkwine", "Elmjescha",
  "Firunja", "Frinja", "Gari", "Geertja", "Grimje", "Gritten", "Gudwinja", "Helvja", "Hesinja", "Ifirnja", "Ilmjescha",
  "Irinja", "Isidra", "Jadvige", "Janne", "Jassia", "Jedwinja", "Jella", "Karinja", "Kundra", "Leudara", "Libussa", "Luta",
  "Lysminja", "Maline", "Marissja", "Marja", "Moschane", "Nadjescha", "Nadschenka", "Nessa", "Nuschinja", "Olja", "Paale",
  "Peraenja", "Peranka", "Rabescha", "Rassia", "Rihinja", "Rowena", "Rowinja", "Rudwischa", "Selwine", "Sewjescha", "Sulja",
  "Tesbinja", "Thesia", "Thila", "Tineke", "Tjeika", "Travjescha", "Turiken", "Ulmjescha", "Urjelke", "Vanjescha", "Verisja",
  "Vestissja", "Warja", "Winja", "Wolpjane", "Wulfjascha", "Xinja", "Yadwinja", "Yasinde", "Zidonje"
];

//prettier-ignore
const lastNames = [
  "Alatzer", "Alwinnen", "Arauken", "Baerensen", "Baerow", "Bornski", "Brinnske", "Dappersjen", "Dobelsteen", "Donsemkin",
  "Drulgosch", "Ebersen", "Eelkinnen", "Elkensen", "Elmsjen", "Firnske", "Firunkis", "Gartimpski", "Gerbensen", "Gerberow",
  "Grumpen", "Hinske", "Hollerow", "Ilmensen", "Ilumkis", "Jannerloff", "Jannske", "Juchski", "Karenkis", "Karjensen",
  "Kruschin", "Kunzke", "Laikis", "Larinow", "Luminoff", "Meskinske", "Miljes", "Muselken", "Nagragski", "Notjes", "Ouvensen",
  "Parenkis", "Peddersen", "Peddersjepen", "Perschoff", "Puschinske", "Puspersen", "Rodensen", "Ruderow", "Salderken",
  "Schorkin", "Sewerski", "Surjeloff", "Siveling", "Sjepensen", "Stipkow", "Stoerrebrandt", "Timpski", "Tuljow", "Turjeleff",
  "Ulmensen", "Ulmski", "Walroder", "Walsareff", "Walsjakow", "Wolpjes", "Wulfski"
];

//prettier-ignore
const nobleNames = [
  "Aringen", "Blütenfeld", "Brinbaum", "Dotzen", "Elkauen", "Erbarmen", "Eschenfurt", "Gradnochsjepengurken", "Hinzk",
  "Ilmenstein", "Kirschhausen", "Krempelow", "Larsach", "Notmark", "Plötzingen", "Quelldunkel", "Salderkeim", "Schossko",
  "Sjepengurken", "Treie", "Wosna"
];

const noblePrefix = ["von "];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: true,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, noblePrefix, regionSpecifics };
