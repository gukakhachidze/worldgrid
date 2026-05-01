import type { Country } from '../types';

export const COUNTRIES_DATA: Country[] = [
  // ── EUROPE ──────────────────────────────────────────────────────────────────
  {
    cca2: "DE", name: { common: "Germany", official: "Federal Republic of Germany", nativeName: { deu: { common: "Deutschland", official: "Bundesrepublik Deutschland" } } },
    flags: { png: "https://flagcdn.com/w320/de.png", svg: "https://flagcdn.com/de.svg" },
    capital: ["Berlin"], region: "Europe", subregion: "Western Europe",
    population: 83240525, area: 357114,
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["AUT","BEL","CZE","DNK","FRA","LUX","NLD","POL","CHE"],
    idd: { root: "+4", suffixes: ["9"] }, tld: [".de"],
    latlng: [51, 9], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "FR", name: { common: "France", official: "French Republic", nativeName: { fra: { common: "France", official: "République française" } } },
    flags: { png: "https://flagcdn.com/w320/fr.png", svg: "https://flagcdn.com/fr.svg" },
    capital: ["Paris"], region: "Europe", subregion: "Western Europe",
    population: 67391582, area: 551695,
    languages: { fra: "French" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["AND","BEL","DEU","ITA","LUX","MCO","ESP","CHE"],
    idd: { root: "+3", suffixes: ["3"] }, tld: [".fr"],
    latlng: [46, 2], timezones: ["UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-04:00","UTC-03:00","UTC+01:00","UTC+03:00","UTC+04:00","UTC+05:00","UTC+11:00","UTC+12:00"],
    continents: ["Europe"]
  },
  {
    cca2: "GB", name: { common: "United Kingdom", official: "United Kingdom of Great Britain and Northern Ireland", nativeName: { eng: { common: "United Kingdom", official: "United Kingdom of Great Britain and Northern Ireland" } } },
    flags: { png: "https://flagcdn.com/w320/gb.png", svg: "https://flagcdn.com/gb.svg" },
    capital: ["London"], region: "Europe", subregion: "Northern Europe",
    population: 67215293, area: 242900,
    languages: { eng: "English" },
    currencies: { GBP: { name: "British pound", symbol: "£" } },
    borders: ["IRL"],
    idd: { root: "+4", suffixes: ["4"] }, tld: [".uk"],
    latlng: [54, -2], timezones: ["UTC-08:00","UTC-05:00","UTC-04:00","UTC-03:00","UTC-02:00","UTC","UTC+01:00","UTC+02:00","UTC+06:00"],
    continents: ["Europe"]
  },
  {
    cca2: "IT", name: { common: "Italy", official: "Italian Republic", nativeName: { ita: { common: "Italia", official: "Repubblica italiana" } } },
    flags: { png: "https://flagcdn.com/w320/it.png", svg: "https://flagcdn.com/it.svg" },
    capital: ["Rome"], region: "Europe", subregion: "Southern Europe",
    population: 59554023, area: 301336,
    languages: { ita: "Italian" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["AUT","FRA","SMR","SVN","CHE","VAT"],
    idd: { root: "+3", suffixes: ["9"] }, tld: [".it"],
    latlng: [42.83, 12.83], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "ES", name: { common: "Spain", official: "Kingdom of Spain", nativeName: { spa: { common: "España", official: "Reino de España" } } },
    flags: { png: "https://flagcdn.com/w320/es.png", svg: "https://flagcdn.com/es.svg" },
    capital: ["Madrid"], region: "Europe", subregion: "Southern Europe",
    population: 47351567, area: 505992,
    languages: { spa: "Spanish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["AND","FRA","GIB","PRT","MAR"],
    idd: { root: "+3", suffixes: ["4"] }, tld: [".es"],
    latlng: [40, -4], timezones: ["UTC","UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "PT", name: { common: "Portugal", official: "Portuguese Republic", nativeName: { por: { common: "Portugal", official: "República Portuguesa" } } },
    flags: { png: "https://flagcdn.com/w320/pt.png", svg: "https://flagcdn.com/pt.svg" },
    capital: ["Lisbon"], region: "Europe", subregion: "Southern Europe",
    population: 10305564, area: 92212,
    languages: { por: "Portuguese" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["ESP"],
    idd: { root: "+3", suffixes: ["51"] }, tld: [".pt"],
    latlng: [39.5, -8], timezones: ["UTC-01:00","UTC"], continents: ["Europe"]
  },
  {
    cca2: "NL", name: { common: "Netherlands", official: "Kingdom of the Netherlands", nativeName: { nld: { common: "Nederland", official: "Koninkrijk der Nederlanden" } } },
    flags: { png: "https://flagcdn.com/w320/nl.png", svg: "https://flagcdn.com/nl.svg" },
    capital: ["Amsterdam"], region: "Europe", subregion: "Western Europe",
    population: 17441139, area: 41850,
    languages: { nld: "Dutch" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["BEL","DEU"],
    idd: { root: "+3", suffixes: ["1"] }, tld: [".nl"],
    latlng: [52.5, 5.75], timezones: ["UTC-04:00","UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "SE", name: { common: "Sweden", official: "Kingdom of Sweden", nativeName: { swe: { common: "Sverige", official: "Konungariket Sverige" } } },
    flags: { png: "https://flagcdn.com/w320/se.png", svg: "https://flagcdn.com/se.svg" },
    capital: ["Stockholm"], region: "Europe", subregion: "Northern Europe",
    population: 10353442, area: 450295,
    languages: { swe: "Swedish" },
    currencies: { SEK: { name: "Swedish krona", symbol: "kr" } },
    borders: ["FIN","NOR"],
    idd: { root: "+4", suffixes: ["6"] }, tld: [".se"],
    latlng: [62, 15], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "NO", name: { common: "Norway", official: "Kingdom of Norway", nativeName: { nor: { common: "Norge", official: "Kongeriket Norge" } } },
    flags: { png: "https://flagcdn.com/w320/no.png", svg: "https://flagcdn.com/no.svg" },
    capital: ["Oslo"], region: "Europe", subregion: "Northern Europe",
    population: 5379475, area: 323802,
    languages: { nor: "Norwegian", nno: "Norwegian Nynorsk", nob: "Norwegian Bokmål" },
    currencies: { NOK: { name: "Norwegian krone", symbol: "kr" } },
    borders: ["FIN","SWE","RUS"],
    idd: { root: "+4", suffixes: ["7"] }, tld: [".no"],
    latlng: [62, 10], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "CH", name: { common: "Switzerland", official: "Swiss Confederation", nativeName: { deu: { common: "Schweiz", official: "Schweizerische Eidgenossenschaft" } } },
    flags: { png: "https://flagcdn.com/w320/ch.png", svg: "https://flagcdn.com/ch.svg" },
    capital: ["Bern"], region: "Europe", subregion: "Western Europe",
    population: 8654622, area: 41285,
    languages: { deu: "German", fra: "French", ita: "Italian", roh: "Romansh" },
    currencies: { CHF: { name: "Swiss franc", symbol: "Fr." } },
    borders: ["AUT","FRA","ITA","LIE","DEU"],
    idd: { root: "+4", suffixes: ["1"] }, tld: [".ch"],
    latlng: [47, 8], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "GR", name: { common: "Greece", official: "Hellenic Republic", nativeName: { ell: { common: "Ελλάδα", official: "Ελληνική Δημοκρατία" } } },
    flags: { png: "https://flagcdn.com/w320/gr.png", svg: "https://flagcdn.com/gr.svg" },
    capital: ["Athens"], region: "Europe", subregion: "Southern Europe",
    population: 10715549, area: 131990,
    languages: { ell: "Greek" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["ALB","BGR","TUR","MKD"],
    idd: { root: "+3", suffixes: ["0"] }, tld: [".gr"],
    latlng: [39, 22], timezones: ["UTC+02:00"], continents: ["Europe"]
  },
  {
    cca2: "PL", name: { common: "Poland", official: "Republic of Poland", nativeName: { pol: { common: "Polska", official: "Rzeczpospolita Polska" } } },
    flags: { png: "https://flagcdn.com/w320/pl.png", svg: "https://flagcdn.com/pl.svg" },
    capital: ["Warsaw"], region: "Europe", subregion: "Central Europe",
    population: 37950802, area: 312679,
    languages: { pol: "Polish" },
    currencies: { PLN: { name: "Polish złoty", symbol: "zł" } },
    borders: ["BLR","CZE","DEU","LTU","RUS","SVK","UKR"],
    idd: { root: "+4", suffixes: ["8"] }, tld: [".pl"],
    latlng: [52, 20], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "GE", name: { common: "Georgia", official: "Georgia", nativeName: { kat: { common: "საქართველო", official: "საქართველო" } } },
    flags: { png: "https://flagcdn.com/w320/ge.png", svg: "https://flagcdn.com/ge.svg" },
    capital: ["Tbilisi"], region: "Asia", subregion: "Western Asia",
    population: 3714000, area: 69700,
    languages: { kat: "Georgian" },
    currencies: { GEL: { name: "Georgian lari", symbol: "₾" } },
    borders: ["ARM","AZE","RUS","TUR"],
    idd: { root: "+9", suffixes: ["95"] }, tld: [".ge"],
    latlng: [42, 43.5], timezones: ["UTC+04:00"], continents: ["Asia"]
  },
  {
    cca2: "TR", name: { common: "Turkey", official: "Republic of Turkey", nativeName: { tur: { common: "Türkiye", official: "Türkiye Cumhuriyeti" } } },
    flags: { png: "https://flagcdn.com/w320/tr.png", svg: "https://flagcdn.com/tr.svg" },
    capital: ["Ankara"], region: "Asia", subregion: "Western Asia",
    population: 84339067, area: 783562,
    languages: { tur: "Turkish" },
    currencies: { TRY: { name: "Turkish lira", symbol: "₺" } },
    borders: ["ARM","AZE","BGR","GEO","GRC","IRN","IRQ","SYR"],
    idd: { root: "+9", suffixes: ["0"] }, tld: [".tr"],
    latlng: [39, 35], timezones: ["UTC+03:00"], continents: ["Asia","Europe"]
  },

  // ── AMERICAS ────────────────────────────────────────────────────────────────
  {
    cca2: "US", name: { common: "United States", official: "United States of America", nativeName: { eng: { common: "United States", official: "United States of America" } } },
    flags: { png: "https://flagcdn.com/w320/us.png", svg: "https://flagcdn.com/us.svg" },
    capital: ["Washington, D.C."], region: "Americas", subregion: "North America",
    population: 329484123, area: 9372610,
    languages: { eng: "English" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } },
    borders: ["CAN","MEX"],
    idd: { root: "+1", suffixes: [""] }, tld: [".us"],
    latlng: [38, -97], timezones: ["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:00","UTC+10:00","UTC+12:00"],
    continents: ["North America"]
  },
  {
    cca2: "CA", name: { common: "Canada", official: "Canada", nativeName: { eng: { common: "Canada", official: "Canada" }, fra: { common: "Canada", official: "Canada" } } },
    flags: { png: "https://flagcdn.com/w320/ca.png", svg: "https://flagcdn.com/ca.svg" },
    capital: ["Ottawa"], region: "Americas", subregion: "North America",
    population: 38005238, area: 9984670,
    languages: { eng: "English", fra: "French" },
    currencies: { CAD: { name: "Canadian dollar", symbol: "$" } },
    borders: ["USA"],
    idd: { root: "+1", suffixes: [""] }, tld: [".ca"],
    latlng: [60, -95], timezones: ["UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:00","UTC-03:30"],
    continents: ["North America"]
  },
  {
    cca2: "BR", name: { common: "Brazil", official: "Federative Republic of Brazil", nativeName: { por: { common: "Brasil", official: "República Federativa do Brasil" } } },
    flags: { png: "https://flagcdn.com/w320/br.png", svg: "https://flagcdn.com/br.svg" },
    capital: ["Brasília"], region: "Americas", subregion: "South America",
    population: 212559409, area: 8515767,
    languages: { por: "Portuguese" },
    currencies: { BRL: { name: "Brazilian real", symbol: "R$" } },
    borders: ["ARG","BOL","COL","GUF","GUY","PRY","PER","SUR","URY","VEN"],
    idd: { root: "+5", suffixes: ["5"] }, tld: [".br"],
    latlng: [-10, -55], timezones: ["UTC-05:00","UTC-04:00","UTC-03:00","UTC-02:00"],
    continents: ["South America"]
  },
  {
    cca2: "MX", name: { common: "Mexico", official: "United Mexican States", nativeName: { spa: { common: "México", official: "Estados Unidos Mexicanos" } } },
    flags: { png: "https://flagcdn.com/w320/mx.png", svg: "https://flagcdn.com/mx.svg" },
    capital: ["Mexico City"], region: "Americas", subregion: "North America",
    population: 128932753, area: 1964375,
    languages: { spa: "Spanish" },
    currencies: { MXN: { name: "Mexican peso", symbol: "$" } },
    borders: ["BLZ","GTM","USA"],
    idd: { root: "+5", suffixes: ["2"] }, tld: [".mx"],
    latlng: [23, -102], timezones: ["UTC-08:00","UTC-07:00","UTC-06:00"],
    continents: ["North America"]
  },
  {
    cca2: "AR", name: { common: "Argentina", official: "Argentine Republic", nativeName: { spa: { common: "Argentina", official: "República Argentina" } } },
    flags: { png: "https://flagcdn.com/w320/ar.png", svg: "https://flagcdn.com/ar.svg" },
    capital: ["Buenos Aires"], region: "Americas", subregion: "South America",
    population: 45376763, area: 2780400,
    languages: { spa: "Spanish", grn: "Guaraní" },
    currencies: { ARS: { name: "Argentine peso", symbol: "$" } },
    borders: ["BOL","BRA","CHL","PRY","URY"],
    idd: { root: "+5", suffixes: ["4"] }, tld: [".ar"],
    latlng: [-34, -64], timezones: ["UTC-03:00"], continents: ["South America"]
  },
  {
    cca2: "CO", name: { common: "Colombia", official: "Republic of Colombia", nativeName: { spa: { common: "Colombia", official: "República de Colombia" } } },
    flags: { png: "https://flagcdn.com/w320/co.png", svg: "https://flagcdn.com/co.svg" },
    capital: ["Bogotá"], region: "Americas", subregion: "South America",
    population: 50882884, area: 1141748,
    languages: { spa: "Spanish" },
    currencies: { COP: { name: "Colombian peso", symbol: "$" } },
    borders: ["BRA","ECU","PAN","PER","VEN"],
    idd: { root: "+5", suffixes: ["7"] }, tld: [".co"],
    latlng: [4, -72], timezones: ["UTC-05:00"], continents: ["South America"]
  },

  // ── ASIA ────────────────────────────────────────────────────────────────────
  {
    cca2: "JP", name: { common: "Japan", official: "Japan", nativeName: { jpn: { common: "日本", official: "日本国" } } },
    flags: { png: "https://flagcdn.com/w320/jp.png", svg: "https://flagcdn.com/jp.svg" },
    capital: ["Tokyo"], region: "Asia", subregion: "Eastern Asia",
    population: 125681593, area: 377930,
    languages: { jpn: "Japanese" },
    currencies: { JPY: { name: "Japanese yen", symbol: "¥" } },
    borders: [],
    idd: { root: "+8", suffixes: ["1"] }, tld: [".jp"],
    latlng: [36, 138], timezones: ["UTC+09:00"], continents: ["Asia"]
  },
  {
    cca2: "CN", name: { common: "China", official: "People's Republic of China", nativeName: { zho: { common: "中国", official: "中华人民共和国" } } },
    flags: { png: "https://flagcdn.com/w320/cn.png", svg: "https://flagcdn.com/cn.svg" },
    capital: ["Beijing"], region: "Asia", subregion: "Eastern Asia",
    population: 1402112000, area: 9706961,
    languages: { zho: "Chinese" },
    currencies: { CNY: { name: "Renminbi", symbol: "¥" } },
    borders: ["AFG","BHU","MMR","HKG","IND","KAZ","PRK","KGZ","LAO","MAC","MNG","PAK","RUS","TJK","VNM"],
    idd: { root: "+8", suffixes: ["6"] }, tld: [".cn"],
    latlng: [35, 105], timezones: ["UTC+08:00"], continents: ["Asia"]
  },
  {
    cca2: "IN", name: { common: "India", official: "Republic of India", nativeName: { eng: { common: "India", official: "Republic of India" }, hin: { common: "भारत", official: "भारत गणराज्य" } } },
    flags: { png: "https://flagcdn.com/w320/in.png", svg: "https://flagcdn.com/in.svg" },
    capital: ["New Delhi"], region: "Asia", subregion: "Southern Asia",
    population: 1380004385, area: 3287590,
    languages: { eng: "English", hin: "Hindi" },
    currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
    borders: ["BGD","BTN","CHN","MMR","NPL","PAK"],
    idd: { root: "+9", suffixes: ["1"] }, tld: [".in"],
    latlng: [20, 77], timezones: ["UTC+05:30"], continents: ["Asia"]
  },
  {
    cca2: "KR", name: { common: "South Korea", official: "Republic of Korea", nativeName: { kor: { common: "대한민국", official: "대한민국" } } },
    flags: { png: "https://flagcdn.com/w320/kr.png", svg: "https://flagcdn.com/kr.svg" },
    capital: ["Seoul"], region: "Asia", subregion: "Eastern Asia",
    population: 51780579, area: 100210,
    languages: { kor: "Korean" },
    currencies: { KRW: { name: "South Korean won", symbol: "₩" } },
    borders: ["PRK"],
    idd: { root: "+8", suffixes: ["2"] }, tld: [".kr"],
    latlng: [37, 127.5], timezones: ["UTC+09:00"], continents: ["Asia"]
  },
  {
    cca2: "TH", name: { common: "Thailand", official: "Kingdom of Thailand", nativeName: { tha: { common: "ประเทศไทย", official: "ราชอาณาจักรไทย" } } },
    flags: { png: "https://flagcdn.com/w320/th.png", svg: "https://flagcdn.com/th.svg" },
    capital: ["Bangkok"], region: "Asia", subregion: "South-Eastern Asia",
    population: 69799978, area: 513120,
    languages: { tha: "Thai" },
    currencies: { THB: { name: "Thai baht", symbol: "฿" } },
    borders: ["MMR","KHM","LAO","MYS"],
    idd: { root: "+6", suffixes: ["6"] }, tld: [".th"],
    latlng: [15, 100], timezones: ["UTC+07:00"], continents: ["Asia"]
  },
  {
    cca2: "VN", name: { common: "Vietnam", official: "Socialist Republic of Vietnam", nativeName: { vie: { common: "Việt Nam", official: "Cộng hòa xã hội chủ nghĩa Việt Nam" } } },
    flags: { png: "https://flagcdn.com/w320/vn.png", svg: "https://flagcdn.com/vn.svg" },
    capital: ["Hanoi"], region: "Asia", subregion: "South-Eastern Asia",
    population: 97338583, area: 331212,
    languages: { vie: "Vietnamese" },
    currencies: { VND: { name: "Vietnamese đồng", symbol: "₫" } },
    borders: ["KHM","CHN","LAO"],
    idd: { root: "+8", suffixes: ["4"] }, tld: [".vn"],
    latlng: [16.17, 107.83], timezones: ["UTC+07:00"], continents: ["Asia"]
  },
  {
    cca2: "SG", name: { common: "Singapore", official: "Republic of Singapore", nativeName: { eng: { common: "Singapore", official: "Republic of Singapore" } } },
    flags: { png: "https://flagcdn.com/w320/sg.png", svg: "https://flagcdn.com/sg.svg" },
    capital: ["Singapore"], region: "Asia", subregion: "South-Eastern Asia",
    population: 5850342, area: 710,
    languages: { eng: "English", zho: "Chinese", msa: "Malay", tam: "Tamil" },
    currencies: { SGD: { name: "Singapore dollar", symbol: "$" } },
    borders: [],
    idd: { root: "+6", suffixes: ["5"] }, tld: [".sg"],
    latlng: [1.37, 103.8], timezones: ["UTC+08:00"], continents: ["Asia"]
  },
  {
    cca2: "AE", name: { common: "United Arab Emirates", official: "United Arab Emirates", nativeName: { ara: { common: "الإمارات العربية المتحدة", official: "الإمارات العربية المتحدة" } } },
    flags: { png: "https://flagcdn.com/w320/ae.png", svg: "https://flagcdn.com/ae.svg" },
    capital: ["Abu Dhabi"], region: "Asia", subregion: "Western Asia",
    population: 9890400, area: 83600,
    languages: { ara: "Arabic" },
    currencies: { AED: { name: "United Arab Emirates dirham", symbol: "د.إ" } },
    borders: ["OMN","SAU"],
    idd: { root: "+9", suffixes: ["71"] }, tld: [".ae"],
    latlng: [24, 54], timezones: ["UTC+04:00"], continents: ["Asia"]
  },

  // ── AFRICA ──────────────────────────────────────────────────────────────────
  {
    cca2: "ZA", name: { common: "South Africa", official: "Republic of South Africa", nativeName: { afr: { common: "Suid-Afrika", official: "Republiek van Suid-Afrika" } } },
    flags: { png: "https://flagcdn.com/w320/za.png", svg: "https://flagcdn.com/za.svg" },
    capital: ["Pretoria", "Bloemfontein", "Cape Town"], region: "Africa", subregion: "Southern Africa",
    population: 59308690, area: 1221037,
    languages: { afr: "Afrikaans", eng: "English", nbl: "Southern Ndebele", nso: "Northern Sotho", sot: "Southern Sotho", ssw: "Swazi", tsn: "Tswana", tso: "Tsonga", ven: "Venda", xho: "Xhosa", zul: "Zulu" },
    currencies: { ZAR: { name: "South African rand", symbol: "R" } },
    borders: ["BWA","LSO","MOZ","NAM","SWZ","ZWE"],
    idd: { root: "+2", suffixes: ["7"] }, tld: [".za"],
    latlng: [-29, 25], timezones: ["UTC+02:00"], continents: ["Africa"]
  },
  {
    cca2: "EG", name: { common: "Egypt", official: "Arab Republic of Egypt", nativeName: { ara: { common: "مصر", official: "جمهورية مصر العربية" } } },
    flags: { png: "https://flagcdn.com/w320/eg.png", svg: "https://flagcdn.com/eg.svg" },
    capital: ["Cairo"], region: "Africa", subregion: "Northern Africa",
    population: 102334403, area: 1002450,
    languages: { ara: "Arabic" },
    currencies: { EGP: { name: "Egyptian pound", symbol: "£" } },
    borders: ["ISR","LBY","PSE","SDN"],
    idd: { root: "+2", suffixes: ["0"] }, tld: [".eg"],
    latlng: [27, 30], timezones: ["UTC+02:00"], continents: ["Africa"]
  },
  {
    cca2: "NG", name: { common: "Nigeria", official: "Federal Republic of Nigeria", nativeName: { eng: { common: "Nigeria", official: "Federal Republic of Nigeria" } } },
    flags: { png: "https://flagcdn.com/w320/ng.png", svg: "https://flagcdn.com/ng.svg" },
    capital: ["Abuja"], region: "Africa", subregion: "Western Africa",
    population: 206139587, area: 923768,
    languages: { eng: "English" },
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
    borders: ["BEN","CMR","TCD","NER"],
    idd: { root: "+2", suffixes: ["34"] }, tld: [".ng"],
    latlng: [10, 8], timezones: ["UTC+01:00"], continents: ["Africa"]
  },
  {
    cca2: "KE", name: { common: "Kenya", official: "Republic of Kenya", nativeName: { eng: { common: "Kenya", official: "Republic of Kenya" }, swa: { common: "Kenya", official: "Jamhuri ya Kenya" } } },
    flags: { png: "https://flagcdn.com/w320/ke.png", svg: "https://flagcdn.com/ke.svg" },
    capital: ["Nairobi"], region: "Africa", subregion: "Eastern Africa",
    population: 53771300, area: 580367,
    languages: { eng: "English", swa: "Swahili" },
    currencies: { KES: { name: "Kenyan shilling", symbol: "Ksh" } },
    borders: ["ETH","SOM","SSD","TZA","UGA"],
    idd: { root: "+2", suffixes: ["54"] }, tld: [".ke"],
    latlng: [1, 38], timezones: ["UTC+03:00"], continents: ["Africa"]
  },
  {
    cca2: "MA", name: { common: "Morocco", official: "Kingdom of Morocco", nativeName: { ara: { common: "المغرب", official: "المملكة المغربية" } } },
    flags: { png: "https://flagcdn.com/w320/ma.png", svg: "https://flagcdn.com/ma.svg" },
    capital: ["Rabat"], region: "Africa", subregion: "Northern Africa",
    population: 36910558, area: 446550,
    languages: { ara: "Arabic", ber: "Berber" },
    currencies: { MAD: { name: "Moroccan dirham", symbol: "MAD" } },
    borders: ["DZA","ESH","ESP"],
    idd: { root: "+2", suffixes: ["12"] }, tld: [".ma"],
    latlng: [32, -5], timezones: ["UTC","UTC+01:00"], continents: ["Africa"]
  },
  {
    cca2: "ET", name: { common: "Ethiopia", official: "Federal Democratic Republic of Ethiopia", nativeName: { amh: { common: "ኢትዮጵያ", official: "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ" } } },
    flags: { png: "https://flagcdn.com/w320/et.png", svg: "https://flagcdn.com/et.svg" },
    capital: ["Addis Ababa"], region: "Africa", subregion: "Eastern Africa",
    population: 114963583, area: 1104300,
    languages: { amh: "Amharic" },
    currencies: { ETB: { name: "Ethiopian birr", symbol: "Br" } },
    borders: ["DJI","ERI","KEN","SOM","SSD","SDN"],
    idd: { root: "+2", suffixes: ["51"] }, tld: [".et"],
    latlng: [8, 38], timezones: ["UTC+03:00"], continents: ["Africa"]
  },

  // ── OCEANIA ─────────────────────────────────────────────────────────────────
  {
    cca2: "AU", name: { common: "Australia", official: "Commonwealth of Australia", nativeName: { eng: { common: "Australia", official: "Commonwealth of Australia" } } },
    flags: { png: "https://flagcdn.com/w320/au.png", svg: "https://flagcdn.com/au.svg" },
    capital: ["Canberra"], region: "Oceania", subregion: "Australia and New Zealand",
    population: 25687041, area: 7692024,
    languages: { eng: "English" },
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } },
    borders: [],
    idd: { root: "+6", suffixes: ["1"] }, tld: [".au"],
    latlng: [-27, 133], timezones: ["UTC+05:00","UTC+06:30","UTC+07:00","UTC+08:00","UTC+09:30","UTC+10:00","UTC+10:30","UTC+11:00"],
    continents: ["Oceania"]
  },
  {
    cca2: "NZ", name: { common: "New Zealand", official: "New Zealand", nativeName: { eng: { common: "New Zealand", official: "New Zealand" }, mri: { common: "Aotearoa", official: "Aotearoa" } } },
    flags: { png: "https://flagcdn.com/w320/nz.png", svg: "https://flagcdn.com/nz.svg" },
    capital: ["Wellington"], region: "Oceania", subregion: "Australia and New Zealand",
    population: 5084300, area: 270467,
    languages: { eng: "English", mri: "Māori", nzs: "New Zealand Sign Language" },
    currencies: { NZD: { name: "New Zealand dollar", symbol: "$" } },
    borders: [],
    idd: { root: "+6", suffixes: ["4"] }, tld: [".nz"],
    latlng: [-41, 174], timezones: ["UTC-11:30","UTC-11:00","UTC-10:00","UTC+12:00","UTC+12:45","UTC+13:00"],
    continents: ["Oceania"]
  },
  {
    cca2: "FJ", name: { common: "Fiji", official: "Republic of Fiji", nativeName: { eng: { common: "Fiji", official: "Republic of Fiji" } } },
    flags: { png: "https://flagcdn.com/w320/fj.png", svg: "https://flagcdn.com/fj.svg" },
    capital: ["Suva"], region: "Oceania", subregion: "Melanesia",
    population: 896444, area: 18272,
    languages: { eng: "English", fij: "Fijian", hif: "Fiji Hindi" },
    currencies: { FJD: { name: "Fijian dollar", symbol: "$" } },
    borders: [],
    idd: { root: "+6", suffixes: ["79"] }, tld: [".fj"],
    latlng: [-18, 175], timezones: ["UTC+12:00"], continents: ["Oceania"]
  },

  // ── MORE ASIA ────────────────────────────────────────────────────────────────
  {
    cca2: "RU", name: { common: "Russia", official: "Russian Federation", nativeName: { rus: { common: "Россия", official: "Российская Федерация" } } },
    flags: { png: "https://flagcdn.com/w320/ru.png", svg: "https://flagcdn.com/ru.svg" },
    capital: ["Moscow"], region: "Europe", subregion: "Eastern Europe",
    population: 144104080, area: 17098242,
    languages: { rus: "Russian" },
    currencies: { RUB: { name: "Russian ruble", symbol: "₽" } },
    borders: ["AZE","BLR","CHN","EST","FIN","GEO","KAZ","PRK","LVA","LTU","MNG","NOR","POL","UKR"],
    idd: { root: "+7", suffixes: [""] }, tld: [".ru"],
    latlng: [60, 100], timezones: ["UTC+02:00","UTC+03:00","UTC+04:00","UTC+05:00","UTC+06:00","UTC+07:00","UTC+08:00","UTC+09:00","UTC+10:00","UTC+11:00","UTC+12:00"],
    continents: ["Asia","Europe"]
  },
  {
    cca2: "SA", name: { common: "Saudi Arabia", official: "Kingdom of Saudi Arabia", nativeName: { ara: { common: "المملكة العربية السعودية", official: "المملكة العربية السعودية" } } },
    flags: { png: "https://flagcdn.com/w320/sa.png", svg: "https://flagcdn.com/sa.svg" },
    capital: ["Riyadh"], region: "Asia", subregion: "Western Asia",
    population: 34813867, area: 2149690,
    languages: { ara: "Arabic" },
    currencies: { SAR: { name: "Saudi riyal", symbol: "ر.س" } },
    borders: ["IRQ","JOR","KWT","OMN","QAT","ARE","YEM"],
    idd: { root: "+9", suffixes: ["66"] }, tld: [".sa"],
    latlng: [25, 45], timezones: ["UTC+03:00"], continents: ["Asia"]
  },
  {
    cca2: "ID", name: { common: "Indonesia", official: "Republic of Indonesia", nativeName: { ind: { common: "Indonesia", official: "Republik Indonesia" } } },
    flags: { png: "https://flagcdn.com/w320/id.png", svg: "https://flagcdn.com/id.svg" },
    capital: ["Jakarta"], region: "Asia", subregion: "South-Eastern Asia",
    population: 273523621, area: 1904569,
    languages: { ind: "Indonesian" },
    currencies: { IDR: { name: "Indonesian rupiah", symbol: "Rp" } },
    borders: ["TLS","MYS","PNG"],
    idd: { root: "+6", suffixes: ["2"] }, tld: [".id"],
    latlng: [-5, 120], timezones: ["UTC+07:00","UTC+08:00","UTC+09:00"], continents: ["Asia"]
  },
  {
    cca2: "PK", name: { common: "Pakistan", official: "Islamic Republic of Pakistan", nativeName: { eng: { common: "Pakistan", official: "Islamic Republic of Pakistan" }, urd: { common: "پاکستان", official: "اسلامی جمہوریہ پاکستان" } } },
    flags: { png: "https://flagcdn.com/w320/pk.png", svg: "https://flagcdn.com/pk.svg" },
    capital: ["Islamabad"], region: "Asia", subregion: "Southern Asia",
    population: 220892331, area: 881913,
    languages: { eng: "English", urd: "Urdu" },
    currencies: { PKR: { name: "Pakistani rupee", symbol: "₨" } },
    borders: ["AFG","CHN","IND","IRN"],
    idd: { root: "+9", suffixes: ["2"] }, tld: [".pk"],
    latlng: [30, 70], timezones: ["UTC+05:00"], continents: ["Asia"]
  },
  {
    cca2: "IR", name: { common: "Iran", official: "Islamic Republic of Iran", nativeName: { fas: { common: "ایران", official: "جمهوری اسلامی ایران" } } },
    flags: { png: "https://flagcdn.com/w320/ir.png", svg: "https://flagcdn.com/ir.svg" },
    capital: ["Tehran"], region: "Asia", subregion: "Southern Asia",
    population: 83992953, area: 1648195,
    languages: { fas: "Persian" },
    currencies: { IRR: { name: "Iranian rial", symbol: "﷼" } },
    borders: ["AFG","ARM","AZE","IRQ","KAZ","PAK","TUR","TKM"],
    idd: { root: "+9", suffixes: ["8"] }, tld: [".ir"],
    latlng: [32, 53], timezones: ["UTC+03:30"], continents: ["Asia"]
  },
  {
    cca2: "IL", name: { common: "Israel", official: "State of Israel", nativeName: { ara: { common: "إسرائيل", official: "دولة إسرائيل" }, heb: { common: "ישראל", official: "מדינת ישראל" } } },
    flags: { png: "https://flagcdn.com/w320/il.png", svg: "https://flagcdn.com/il.svg" },
    capital: ["Jerusalem"], region: "Asia", subregion: "Western Asia",
    population: 9216900, area: 20770,
    languages: { ara: "Arabic", heb: "Hebrew" },
    currencies: { ILS: { name: "Israeli new shekel", symbol: "₪" } },
    borders: ["EGY","JOR","LBN","PSE","SYR"],
    idd: { root: "+9", suffixes: ["72"] }, tld: [".il"],
    latlng: [31.47, 35.13], timezones: ["UTC+02:00"], continents: ["Asia"]
  },

  // ── MORE EUROPE ──────────────────────────────────────────────────────────────
  {
    cca2: "UA", name: { common: "Ukraine", official: "Ukraine", nativeName: { ukr: { common: "Україна", official: "Україна" } } },
    flags: { png: "https://flagcdn.com/w320/ua.png", svg: "https://flagcdn.com/ua.svg" },
    capital: ["Kyiv"], region: "Europe", subregion: "Eastern Europe",
    population: 44134693, area: 603550,
    languages: { ukr: "Ukrainian" },
    currencies: { UAH: { name: "Ukrainian hryvnia", symbol: "₴" } },
    borders: ["BLR","HUN","MDA","POL","ROU","RUS","SVK"],
    idd: { root: "+3", suffixes: ["80"] }, tld: [".ua"],
    latlng: [49, 32], timezones: ["UTC+02:00"], continents: ["Europe"]
  },
  {
    cca2: "RO", name: { common: "Romania", official: "Romania", nativeName: { ron: { common: "România", official: "România" } } },
    flags: { png: "https://flagcdn.com/w320/ro.png", svg: "https://flagcdn.com/ro.svg" },
    capital: ["Bucharest"], region: "Europe", subregion: "Eastern Europe",
    population: 19237682, area: 238397,
    languages: { ron: "Romanian" },
    currencies: { RON: { name: "Romanian leu", symbol: "lei" } },
    borders: ["BGR","HUN","MDA","SRB","UKR"],
    idd: { root: "+4", suffixes: ["0"] }, tld: [".ro"],
    latlng: [46, 25], timezones: ["UTC+02:00"], continents: ["Europe"]
  },
  {
    cca2: "CZ", name: { common: "Czechia", official: "Czech Republic", nativeName: { ces: { common: "Česko", official: "Česká republika" } } },
    flags: { png: "https://flagcdn.com/w320/cz.png", svg: "https://flagcdn.com/cz.svg" },
    capital: ["Prague"], region: "Europe", subregion: "Central Europe",
    population: 10900555, area: 78866,
    languages: { ces: "Czech" },
    currencies: { CZK: { name: "Czech koruna", symbol: "Kč" } },
    borders: ["AUT","DEU","POL","SVK"],
    idd: { root: "+4", suffixes: ["20"] }, tld: [".cz"],
    latlng: [49.75, 15.5], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "HU", name: { common: "Hungary", official: "Hungary", nativeName: { hun: { common: "Magyarország", official: "Magyarország" } } },
    flags: { png: "https://flagcdn.com/w320/hu.png", svg: "https://flagcdn.com/hu.svg" },
    capital: ["Budapest"], region: "Europe", subregion: "Central Europe",
    population: 9749763, area: 93028,
    languages: { hun: "Hungarian" },
    currencies: { HUF: { name: "Hungarian forint", symbol: "Ft" } },
    borders: ["AUT","HRV","ROU","SRB","SVK","SVN","UKR"],
    idd: { root: "+3", suffixes: ["6"] }, tld: [".hu"],
    latlng: [47, 20], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "BE", name: { common: "Belgium", official: "Kingdom of Belgium", nativeName: { deu: { common: "Belgien", official: "Königreich Belgien" } } },
    flags: { png: "https://flagcdn.com/w320/be.png", svg: "https://flagcdn.com/be.svg" },
    capital: ["Brussels"], region: "Europe", subregion: "Western Europe",
    population: 11555997, area: 30528,
    languages: { deu: "German", fra: "French", nld: "Dutch" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["FRA","DEU","LUX","NLD"],
    idd: { root: "+3", suffixes: ["2"] }, tld: [".be"],
    latlng: [50.83, 4], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "AT", name: { common: "Austria", official: "Republic of Austria", nativeName: { deu: { common: "Österreich", official: "Republik Österreich" } } },
    flags: { png: "https://flagcdn.com/w320/at.png", svg: "https://flagcdn.com/at.svg" },
    capital: ["Vienna"], region: "Europe", subregion: "Central Europe",
    population: 9006398, area: 83871,
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["CZE","DEU","HUN","ITA","LIE","SVK","SVN","CHE"],
    idd: { root: "+4", suffixes: ["3"] }, tld: [".at"],
    latlng: [47.33, 13.33], timezones: ["UTC+01:00"], continents: ["Europe"]
  },
  {
    cca2: "DK", name: { common: "Denmark", official: "Kingdom of Denmark", nativeName: { dan: { common: "Danmark", official: "Kongeriget Danmark" } } },
    flags: { png: "https://flagcdn.com/w320/dk.png", svg: "https://flagcdn.com/dk.svg" },
    capital: ["Copenhagen"], region: "Europe", subregion: "Northern Europe",
    population: 5831404, area: 43094,
    languages: { dan: "Danish" },
    currencies: { DKK: { name: "Danish krone", symbol: "kr." } },
    borders: ["DEU"],
    idd: { root: "+4", suffixes: ["5"] }, tld: [".dk"],
    latlng: [56, 10], timezones: ["UTC-04:00","UTC-03:00","UTC-01:00","UTC","UTC+01:00"],
    continents: ["Europe"]
  },
  {
    cca2: "FI", name: { common: "Finland", official: "Republic of Finland", nativeName: { fin: { common: "Suomi", official: "Suomen tasavalta" }, swe: { common: "Finland", official: "Republiken Finland" } } },
    flags: { png: "https://flagcdn.com/w320/fi.png", svg: "https://flagcdn.com/fi.svg" },
    capital: ["Helsinki"], region: "Europe", subregion: "Northern Europe",
    population: 5530719, area: 338424,
    languages: { fin: "Finnish", swe: "Swedish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["NOR","RUS","SWE"],
    idd: { root: "+3", suffixes: ["58"] }, tld: [".fi"],
    latlng: [64, 26], timezones: ["UTC+02:00"], continents: ["Europe"]
  },
  {
    cca2: "IE", name: { common: "Ireland", official: "Republic of Ireland", nativeName: { eng: { common: "Ireland", official: "Republic of Ireland" }, gle: { common: "Éire", official: "Poblacht na hÉireann" } } },
    flags: { png: "https://flagcdn.com/w320/ie.png", svg: "https://flagcdn.com/ie.svg" },
    capital: ["Dublin"], region: "Europe", subregion: "Northern Europe",
    population: 4994724, area: 70273,
    languages: { eng: "English", gle: "Irish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    borders: ["GBR"],
    idd: { root: "+3", suffixes: ["53"] }, tld: [".ie"],
    latlng: [53, -8], timezones: ["UTC"], continents: ["Europe"]
  },

  // ── MORE AFRICA ──────────────────────────────────────────────────────────────
  {
    cca2: "GH", name: { common: "Ghana", official: "Republic of Ghana", nativeName: { eng: { common: "Ghana", official: "Republic of Ghana" } } },
    flags: { png: "https://flagcdn.com/w320/gh.png", svg: "https://flagcdn.com/gh.svg" },
    capital: ["Accra"], region: "Africa", subregion: "Western Africa",
    population: 31072945, area: 238533,
    languages: { eng: "English" },
    currencies: { GHS: { name: "Ghanaian cedi", symbol: "₵" } },
    borders: ["BFA","CIV","TGO"],
    idd: { root: "+2", suffixes: ["33"] }, tld: [".gh"],
    latlng: [8, -2], timezones: ["UTC"], continents: ["Africa"]
  },
  {
    cca2: "TZ", name: { common: "Tanzania", official: "United Republic of Tanzania", nativeName: { eng: { common: "Tanzania", official: "United Republic of Tanzania" }, swa: { common: "Tanzania", official: "Jamhuri ya Muungano wa Tanzania" } } },
    flags: { png: "https://flagcdn.com/w320/tz.png", svg: "https://flagcdn.com/tz.svg" },
    capital: ["Dodoma"], region: "Africa", subregion: "Eastern Africa",
    population: 59734213, area: 945087,
    languages: { eng: "English", swa: "Swahili" },
    currencies: { TZS: { name: "Tanzanian shilling", symbol: "Sh" } },
    borders: ["BDI","COD","KEN","MWI","MOZ","RWA","UGA","ZMB"],
    idd: { root: "+2", suffixes: ["55"] }, tld: [".tz"],
    latlng: [-6, 35], timezones: ["UTC+03:00"], continents: ["Africa"]
  },

  // ── MORE AMERICAS ────────────────────────────────────────────────────────────
  {
    cca2: "PE", name: { common: "Peru", official: "Republic of Peru", nativeName: { spa: { common: "Perú", official: "República del Perú" } } },
    flags: { png: "https://flagcdn.com/w320/pe.png", svg: "https://flagcdn.com/pe.svg" },
    capital: ["Lima"], region: "Americas", subregion: "South America",
    population: 32971846, area: 1285216,
    languages: { spa: "Spanish", aym: "Aymara", que: "Quechua" },
    currencies: { PEN: { name: "Peruvian sol", symbol: "S/." } },
    borders: ["BOL","BRA","CHL","COL","ECU"],
    idd: { root: "+5", suffixes: ["1"] }, tld: [".pe"],
    latlng: [-10, -76], timezones: ["UTC-05:00"], continents: ["South America"]
  },
  {
    cca2: "CL", name: { common: "Chile", official: "Republic of Chile", nativeName: { spa: { common: "Chile", official: "República de Chile" } } },
    flags: { png: "https://flagcdn.com/w320/cl.png", svg: "https://flagcdn.com/cl.svg" },
    capital: ["Santiago"], region: "Americas", subregion: "South America",
    population: 19116209, area: 756102,
    languages: { spa: "Spanish" },
    currencies: { CLP: { name: "Chilean peso", symbol: "$" } },
    borders: ["ARG","BOL","PER"],
    idd: { root: "+5", suffixes: ["6"] }, tld: [".cl"],
    latlng: [-30, -71], timezones: ["UTC-06:00","UTC-04:00"], continents: ["South America"]
  },
  {
    cca2: "CU", name: { common: "Cuba", official: "Republic of Cuba", nativeName: { spa: { common: "Cuba", official: "República de Cuba" } } },
    flags: { png: "https://flagcdn.com/w320/cu.png", svg: "https://flagcdn.com/cu.svg" },
    capital: ["Havana"], region: "Americas", subregion: "Caribbean",
    population: 11326616, area: 109884,
    languages: { spa: "Spanish" },
    currencies: { CUP: { name: "Cuban peso", symbol: "$" } },
    borders: [],
    idd: { root: "+5", suffixes: ["3"] }, tld: [".cu"],
    latlng: [22, -79.5], timezones: ["UTC-05:00"], continents: ["North America"]
  },
];

export default COUNTRIES_DATA;
