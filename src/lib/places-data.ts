// Static dataset of places rendered on the globe and in the places
// listing pages. Every entry uses real coordinates and real facts.
// No API calls: this is the single source of truth for the demo.

import type { Place } from "@/types/places";

export const PLACES: Place[] = [
  // ─── Europe ────────────────────────────────────────────────────
  {
    slug: "athens",
    name: "Athens",
    country: "Greece",
    continent: "Europe",
    coordinates: { lat: 37.9838, lng: 23.7275 },
    description:
      "Birthplace of democracy and Western philosophy. The city has been continuously inhabited for over 3,400 years, with the Acropolis standing as a reminder that civic life once revolved around open-air debate and marble columns.",
    facts: [
      "The Parthenon was completed in 432 BC and served as a treasury before it was a temple.",
      "Athens hosted the first modern Olympic Games in 1896.",
      "The city sits in a basin surrounded by mountains on three sides, which traps heat in summer and smog in winter.",
    ],
    category: "historical",
    imageUrl: "/images/athens.jpg",
    featured: true,
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description:
      "Two thousand years of empire, papacy, and espresso. Rome layers its history vertically: dig beneath any construction site and you hit an ancient floor. The city treats its ruins the way other cities treat lampposts: they are just part of the scenery.",
    facts: [
      "The Colosseum could seat around 50,000 spectators and had a retractable awning system.",
      "Rome has more than 2,000 fountains, more than any other city in the world.",
      "The Pantheon's unreinforced concrete dome is still the largest of its kind after nearly 1,900 years.",
    ],
    category: "historical",
    imageUrl: "/images/rome.jpg",
    featured: true,
  },
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    coordinates: { lat: 52.52, lng: 13.405 },
    description:
      "A city that has been leveled, divided by a wall, and rebuilt twice in a single century. Berlin's identity is defined by reinvention: every neighbourhood tells a different story depending on which decade you look at.",
    facts: [
      "The Berlin Wall stood for 28 years, from 1961 to 1989, dividing the city into East and West.",
      "Berlin has more bridges than Venice: around 960 compared to Venice's 400.",
      "The city's Tempelhof Airport, once one of Europe's busiest, is now a public park where people kite-surf on the old runways.",
    ],
    category: "cultural",
    imageUrl: "/images/berlin.jpg",
    featured: true,
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    description:
      "The only major city in the world that straddles two continents. Istanbul has been the capital of three empires: Roman, Byzantine, and Ottoman. The skyline is still defined by minarets and domes that have survived earthquakes, sieges, and 16 centuries of politics.",
    facts: [
      "The Hagia Sophia served as a cathedral for 916 years, a mosque for 481 years, a museum for 85 years, then reverted to a mosque in 2020.",
      "The Grand Bazaar has over 4,000 shops and is one of the oldest covered markets in the world, dating to 1461.",
      "Istanbul's population exceeds 15 million, making it the most populous city in Europe.",
    ],
    category: "historical",
    imageUrl: "/images/istanbul.jpg",
    featured: true,
  },
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    coordinates: { lat: 38.7223, lng: -9.1393 },
    description:
      "Built on seven hills at the mouth of the Tagus River, Lisbon launched the Age of Exploration in the 15th century. The 1755 earthquake flattened most of the city, and the rebuild created one of Europe's first examples of earthquake-resistant construction and urban grid planning.",
    facts: [
      "The 1755 Lisbon earthquake killed roughly 30,000 to 50,000 people and triggered a tsunami felt as far as Brazil.",
      "Lisbon's Tram 28 route has been running since 1914 and climbs through the steepest streets of the Alfama district.",
      "Vasco da Gama departed from Lisbon in 1497 to find a sea route to India.",
    ],
    category: "historical",
    imageUrl: "/images/lisbon.jpg",
    featured: false,
  },
  {
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    coordinates: { lat: 50.0755, lng: 14.4378 },
    description:
      "One of the few major European cities that was not heavily bombed in World War II, which is why the medieval and baroque architecture survives largely intact. The Charles Bridge alone has been standing since 1357.",
    facts: [
      "Prague Castle, at roughly 70,000 square metres, is the largest ancient castle complex in the world according to the Guinness Book of Records.",
      "The Prague Astronomical Clock, installed in 1410, is the oldest still-operating astronomical clock.",
      "Franz Kafka was born here in 1883 and set most of his work in the city's labyrinthine streets.",
    ],
    category: "cultural",
    imageUrl: "/images/prague.jpg",
    featured: false,
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    country: "United Kingdom",
    continent: "Europe",
    coordinates: { lat: 55.9533, lng: -3.1883 },
    description:
      "Scotland's capital sits on a group of extinct volcanoes. The Old Town and New Town are both UNESCO World Heritage Sites, and the city has hosted the world's largest arts festival every August since 1947.",
    facts: [
      "Edinburgh Castle sits on Castle Rock, a volcanic plug that has been settled since at least the Iron Age.",
      "The Edinburgh Fringe Festival hosts over 3,000 shows each year, making it the largest arts festival on the planet.",
      "J.K. Rowling wrote much of the early Harry Potter books in Edinburgh cafes.",
    ],
    category: "cultural",
    imageUrl: "/images/edinburgh.jpg",
    featured: false,
  },
  {
    slug: "dubrovnik",
    name: "Dubrovnik",
    country: "Croatia",
    continent: "Europe",
    coordinates: { lat: 42.6507, lng: 18.0944 },
    description:
      "A walled city on the Adriatic coast that operated as an independent republic for over 450 years. The Republic of Ragusa was a maritime trading power that rivalled Venice and abolished the slave trade in 1416, centuries before most of Europe.",
    facts: [
      "The city walls run for nearly 2 kilometres and are up to 25 metres high in places.",
      "Dubrovnik's Stradun, the main street, is paved with limestone that has been polished smooth by centuries of foot traffic.",
      "The city was heavily shelled during the Croatian War of Independence in 1991, and the reconstruction took over a decade.",
    ],
    category: "historical",
    imageUrl: "/images/dubrovnik.jpg",
    featured: false,
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "Austria",
    continent: "Europe",
    coordinates: { lat: 48.2082, lng: 16.3738 },
    description:
      "The former seat of the Habsburg Empire and the city where classical music became an industry. Mozart, Beethoven, and Schubert all lived and worked here, and the Vienna Philharmonic still performs in the same hall it has used since 1870.",
    facts: [
      "The Vienna State Opera performs roughly 300 shows per year, with almost no repeats of the same production in a single week.",
      "The city's Zentralfriedhof cemetery holds over 3 million burials, more than the current living population.",
      "Vienna has topped the Mercer Quality of Living ranking more times than any other city.",
    ],
    category: "cultural",
    imageUrl: "/images/vienna.jpg",
    featured: false,
  },
  {
    slug: "granada",
    name: "Granada",
    country: "Spain",
    continent: "Europe",
    coordinates: { lat: 37.1773, lng: -3.5986 },
    description:
      "The last stronghold of Moorish rule in Iberia, surrendered to Ferdinand and Isabella in 1492. The Alhambra palace complex is one of the finest examples of Islamic architecture anywhere outside the Middle East, and it overlooks a city where flamenco culture runs deep.",
    facts: [
      "The Alhambra receives roughly 2.7 million visitors per year, making it Spain's most visited monument.",
      "Granada was the site of the final defeat of the Moors in 1492, ending nearly 800 years of Islamic rule in the peninsula.",
      "The Sacromonte neighbourhood is famous for its cave houses, many of which are still inhabited.",
    ],
    category: "historical",
    imageUrl: "/images/granada.jpg",
    featured: false,
  },

  // ─── Africa ────────────────────────────────────────────────────
  {
    slug: "cairo",
    name: "Cairo",
    country: "Egypt",
    continent: "Africa",
    coordinates: { lat: 30.0444, lng: 31.2357 },
    description:
      "A megacity of over 20 million people built at the point where the Nile Delta begins. The Giza pyramids sit on the western edge of the metro area: you can see them from a Pizza Hut parking lot, which says more about urban sprawl than about ancient Egypt.",
    facts: [
      "The Great Pyramid of Giza was the tallest structure on Earth for over 3,800 years.",
      "Cairo's Al-Azhar University, founded in 970 AD, is one of the oldest continuously operating universities.",
      "The city's name in Arabic, al-Qahirah, means 'the vanquisher.'",
    ],
    category: "historical",
    imageUrl: "/images/cairo.jpg",
    featured: true,
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description:
      "Known as the Red City for the colour of its sandstone walls, Marrakech has been a trading hub between sub-Saharan Africa and the Mediterranean for nearly a thousand years. The Djemaa el-Fna square has been in continuous use as a marketplace since the city's founding in 1070.",
    facts: [
      "The Koutoubia Mosque's minaret, completed around 1195, set the architectural template for the Giralda in Seville and the Hassan Tower in Rabat.",
      "Djemaa el-Fna was declared a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity in 2001.",
      "The city's souks contain over 40,000 artisans and merchants in a labyrinth of covered alleys.",
    ],
    category: "cultural",
    imageUrl: "/images/marrakech.jpg",
    featured: true,
  },
  {
    slug: "lalibela",
    name: "Lalibela",
    country: "Ethiopia",
    continent: "Africa",
    coordinates: { lat: 12.0319, lng: 39.0472 },
    description:
      "A small town in the Ethiopian highlands with 11 medieval churches carved directly out of solid rock. King Lalibela ordered them built in the 12th and 13th centuries as a 'New Jerusalem' after Muslim conquests made pilgrimage to the real one impossible.",
    facts: [
      "The Church of St. George was carved downward from the surface, leaving a cross-shaped monolith sitting in a pit 12 metres deep.",
      "The rock-hewn churches are still active places of worship for Ethiopian Orthodox Christians.",
      "Lalibela sits at roughly 2,500 metres elevation in the Lasta Mountains.",
    ],
    category: "historical",
    imageUrl: "/images/lalibela.jpg",
    featured: false,
  },
  {
    slug: "timbuktu",
    name: "Timbuktu",
    country: "Mali",
    continent: "Africa",
    coordinates: { lat: 16.7666, lng: -3.0026 },
    description:
      "Once one of the wealthiest cities in Africa and a major centre of Islamic scholarship. In the 14th century, Mansa Musa's gold-funded building spree turned Timbuktu into a university town with libraries holding hundreds of thousands of manuscripts.",
    facts: [
      "The Sankore Madrasah had roughly 25,000 students at its peak in the 15th century.",
      "Over 700,000 surviving manuscripts from Timbuktu's golden age have been catalogued, covering astronomy, medicine, law, and poetry.",
      "The city sits on the southern edge of the Sahara Desert, just north of the Niger River's great bend.",
    ],
    category: "historical",
    imageUrl: "/images/timbuktu.jpg",
    featured: false,
  },
  {
    slug: "stone-town",
    name: "Stone Town",
    country: "Tanzania",
    continent: "Africa",
    coordinates: { lat: -6.1622, lng: 39.1921 },
    description:
      "The old quarter of Zanzibar City, built primarily of coral stone. For centuries it was the hub of the Indian Ocean spice trade and, less pleasantly, the last major slave market in East Africa, which did not close until 1873.",
    facts: [
      "Freddie Mercury was born in Stone Town in 1946 as Farrokh Bulsara.",
      "The carved wooden doors of Stone Town are its most distinctive architectural feature, with over 560 original doors documented.",
      "The former slave market site now holds the Anglican Cathedral of Christ Church, built deliberately on the same ground.",
    ],
    category: "historical",
    imageUrl: "/images/stone-town.jpg",
    featured: false,
  },

  // ─── Asia ──────────────────────────────────────────────────────
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    description:
      "The largest metropolitan economy on the planet, running on punctuality and vending machines. Tokyo manages to be both hyper-modern and deeply traditional: a Shinto shrine can sit comfortably between two glass towers without anyone finding it odd.",
    facts: [
      "Tokyo's rail network moves over 13 million passengers per day, more than most countries' entire systems.",
      "The Tsukiji outer market still operates despite the inner wholesale market relocating to Toyosu in 2018.",
      "Tokyo was known as Edo until 1868, when the Emperor moved the capital from Kyoto.",
    ],
    category: "urban",
    imageUrl: "/images/tokyo.jpg",
    featured: true,
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.0116, lng: 135.7681 },
    description:
      "Imperial capital of Japan for over a thousand years, from 794 to 1868. Kyoto was deliberately spared from Allied bombing in World War II partly so its cultural heritage could survive, which is why 17 of its sites are now UNESCO World Heritage properties.",
    facts: [
      "The Fushimi Inari shrine has over 10,000 vermillion torii gates lining its mountain trails.",
      "Kyoto has roughly 2,000 temples and 400 shrines.",
      "The city's grid layout was modelled after Chang'an (modern Xi'an), the capital of Tang Dynasty China.",
    ],
    category: "cultural",
    imageUrl: "/images/kyoto.jpg",
    featured: true,
  },
  {
    slug: "jerusalem",
    name: "Jerusalem",
    country: "Israel",
    continent: "Asia",
    coordinates: { lat: 31.7683, lng: 35.2137 },
    description:
      "Sacred to Judaism, Christianity, and Islam simultaneously. The Old City covers less than one square kilometre but contains the Western Wall, the Church of the Holy Sepulchre, and the Dome of the Rock, all within a ten-minute walk of each other.",
    facts: [
      "Jerusalem has been besieged at least 23 times, attacked 52 times, captured and recaptured 44 times, and destroyed twice.",
      "The Western Wall dates to roughly 19 BC, built by Herod the Great as a retaining wall for the Temple Mount expansion.",
      "The Old City is divided into four quarters: Jewish, Christian, Muslim, and Armenian.",
    ],
    category: "historical",
    imageUrl: "/images/jerusalem.jpg",
    featured: true,
  },
  {
    slug: "petra",
    name: "Petra",
    country: "Jordan",
    continent: "Asia",
    coordinates: { lat: 30.3285, lng: 35.4444 },
    description:
      "A city carved into rose-red sandstone cliffs by the Nabataeans over 2,000 years ago. Petra controlled the incense trade routes between Arabia, Egypt, and the Mediterranean until an earthquake and shifting trade patterns left it abandoned by the 7th century.",
    facts: [
      "The Treasury (Al-Khazneh) stands 40 metres tall and was likely a royal tomb, not a treasury at all.",
      "Petra was unknown to the Western world until Swiss explorer Johann Ludwig Burckhardt rediscovered it in 1812.",
      "The Nabataeans built an advanced water conduit system that allowed a city of 30,000 to thrive in the desert.",
    ],
    category: "historical",
    imageUrl: "/images/petra.jpg",
    featured: false,
  },
  {
    slug: "samarkand",
    name: "Samarkand",
    country: "Uzbekistan",
    continent: "Asia",
    coordinates: { lat: 39.6542, lng: 66.9597 },
    description:
      "One of the oldest continuously inhabited cities in Central Asia, sitting at the crossroads of the Silk Road. Tamerlane made it his capital in the 14th century and filled it with turquoise-domed mosques and madrasas that still define the skyline.",
    facts: [
      "The Registan square contains three madrasas built between 1417 and 1660, forming one of the most photographed ensembles in Central Asia.",
      "Alexander the Great captured the city in 329 BC and reportedly said: 'Everything I have heard about Samarkand is true, except that it is more beautiful than I imagined.'",
      "Ulugh Beg built an observatory here in the 1420s and catalogued over 1,000 stars with accuracy not surpassed until Tycho Brahe 150 years later.",
    ],
    category: "historical",
    imageUrl: "/images/samarkand.jpg",
    featured: false,
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    country: "India",
    continent: "Asia",
    coordinates: { lat: 25.3176, lng: 83.0103 },
    description:
      "Considered one of the oldest continuously inhabited cities in the world and the holiest city in Hinduism. The ghats along the Ganges see cremation ceremonies, morning prayers, and laundry drying all within a few hundred metres of each other.",
    facts: [
      "Mark Twain wrote that Varanasi is 'older than history, older than tradition, older even than legend.'",
      "There are roughly 88 ghats along the riverfront, of which Dashashwamedh and Manikarnika are the most prominent.",
      "The city is also sacred to Buddhism: the Buddha gave his first sermon at nearby Sarnath around 528 BC.",
    ],
    category: "cultural",
    imageUrl: "/images/varanasi.jpg",
    featured: false,
  },
  {
    slug: "angkor",
    name: "Angkor",
    country: "Cambodia",
    continent: "Asia",
    coordinates: { lat: 13.4125, lng: 103.867 },
    description:
      "The remains of the Khmer Empire's capital, which at its peak in the 12th century was the largest preindustrial city in the world. The temple complex covers over 400 square kilometres, and Angkor Wat alone is the largest religious monument ever built.",
    facts: [
      "Angkor Wat appears on Cambodia's national flag, the only building on any country's flag.",
      "At its peak, the greater Angkor area supported a population estimated between 750,000 and one million people.",
      "The city's decline in the 15th century is partly attributed to failures in the hydraulic water management system that sustained its agriculture.",
    ],
    category: "historical",
    imageUrl: "/images/angkor.jpg",
    featured: false,
  },
  {
    slug: "xian",
    name: "Xi'an",
    country: "China",
    continent: "Asia",
    coordinates: { lat: 34.3416, lng: 108.9398 },
    description:
      "The eastern terminus of the Silk Road and capital of 13 Chinese dynasties. Xi'an's city walls, rebuilt in the 14th century during the Ming Dynasty, are among the best-preserved ancient fortifications in China. The Terracotta Army was discovered by farmers digging a well in 1974.",
    facts: [
      "The Terracotta Army contains over 8,000 soldiers, 130 chariots, and 670 horses, each with unique facial features.",
      "Xi'an was known as Chang'an when it served as capital of the Tang Dynasty, the most cosmopolitan era in Chinese history.",
      "The city's Muslim Quarter has been home to the Hui people since the Tang Dynasty, over 1,300 years ago.",
    ],
    category: "historical",
    imageUrl: "/images/xian.jpg",
    featured: false,
  },
  {
    slug: "bagan",
    name: "Bagan",
    country: "Myanmar",
    continent: "Asia",
    coordinates: { lat: 21.1717, lng: 94.8585 },
    description:
      "An ancient city on the banks of the Irrawaddy River with over 2,000 surviving Buddhist temples and pagodas built between the 9th and 13th centuries. At its height, over 10,000 structures covered the plain. A 1975 earthquake damaged many, but the sheer density remains staggering.",
    facts: [
      "The Ananda Temple, built around 1105, is considered the masterpiece of Bagan architecture.",
      "Bagan was the capital of the Pagan Kingdom, the first kingdom to unify the regions that make up modern Myanmar.",
      "Hot air balloon rides over the temple plain at sunrise have become one of Southeast Asia's most iconic tourist experiences.",
    ],
    category: "historical",
    imageUrl: "/images/bagan.jpg",
    featured: false,
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    description:
      "A city of contradictions where gilded Buddhist temples sit next to neon-lit shopping malls and street food stalls serve better food than most restaurants. Bangkok's full ceremonial name is 168 characters long, making it the longest place name in the world.",
    facts: [
      "Wat Phra Kaew (Temple of the Emerald Buddha) is the most sacred Buddhist temple in Thailand.",
      "Bangkok's Chatuchak Weekend Market has over 15,000 stalls and attracts roughly 200,000 visitors every weekend.",
      "The city's canal network once earned it the nickname 'Venice of the East,' though most canals have since been filled in to make roads.",
    ],
    category: "urban",
    imageUrl: "/images/bangkok.jpg",
    featured: false,
  },
  {
    slug: "isfahan",
    name: "Isfahan",
    country: "Iran",
    continent: "Asia",
    coordinates: { lat: 32.6546, lng: 51.668 },
    description:
      "An Iranian proverb says 'Isfahan is half the world,' and under Shah Abbas I in the 16th century, it nearly was. The Naqsh-e Jahan Square is one of the largest public squares ever built, surrounded by mosques and palaces covered in blue tilework.",
    facts: [
      "Naqsh-e Jahan Square, built in 1598, measures 560 by 160 metres and was designed for polo matches.",
      "The Shah Mosque's acoustic design allows a whisper at one end of the main dome to be heard clearly at the other.",
      "Isfahan's 33-arch bridge (Si-o-se-pol) doubles as a dam and has been standing since 1602.",
    ],
    category: "cultural",
    imageUrl: "/images/isfahan.jpg",
    featured: false,
  },

  // ─── South America ─────────────────────────────────────────────
  {
    slug: "cusco",
    name: "Cusco",
    country: "Peru",
    continent: "South America",
    coordinates: { lat: -13.532, lng: -71.9675 },
    description:
      "The former capital of the Inca Empire, sitting at 3,400 metres above sea level. Spanish colonial churches were built directly on top of Inca stone foundations, and the lower walls are often more impressive than the upper ones because the Inca masonry has no mortar yet has survived every earthquake.",
    facts: [
      "Sacsayhuaman, the fortress above Cusco, contains stones weighing over 100 tonnes fitted together without mortar.",
      "Cusco was the navel of the Inca world: four roads led out of the city to the four quarters of the empire.",
      "The city sits at 3,399 metres elevation, and altitude sickness is common among visitors on their first day.",
    ],
    category: "historical",
    imageUrl: "/images/cusco.jpg",
    featured: true,
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    country: "Colombia",
    continent: "South America",
    coordinates: { lat: 10.391, lng: -75.5144 },
    description:
      "A Caribbean port city whose colonial walled centre is one of the best-preserved in the Americas. Spain used Cartagena as the primary port for shipping gold and silver back to Europe, which made it a constant target for pirates and the English navy.",
    facts: [
      "The Castillo San Felipe de Barajas, completed in 1657, is the largest Spanish fort built in the New World.",
      "Sir Francis Drake ransomed the city in 1586, and the English navy under Admiral Vernon attacked it unsuccessfully in 1741.",
      "Gabriel Garcia Marquez lived in Cartagena and set parts of 'Love in the Time of Cholera' in the city.",
    ],
    category: "historical",
    imageUrl: "/images/cartagena.jpg",
    featured: false,
  },
  {
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    coordinates: { lat: -34.6037, lng: -58.3816 },
    description:
      "Sometimes called the Paris of South America for its wide boulevards and European architecture. The city's identity is tied to tango, beef, and a habit of staying up later than almost any other major city on Earth. Dinner before 10 PM is considered early.",
    facts: [
      "Buenos Aires has the highest concentration of bookstores per capita of any city in the world.",
      "The Recoleta Cemetery contains the remains of Eva Peron and 23 former Argentine presidents.",
      "Avenida 9 de Julio, at 140 metres wide, is one of the widest avenues in the world.",
    ],
    category: "cultural",
    imageUrl: "/images/buenos-aires.jpg",
    featured: false,
  },
  {
    slug: "valparaiso",
    name: "Valparaiso",
    country: "Chile",
    continent: "South America",
    coordinates: { lat: -33.0472, lng: -71.6127 },
    description:
      "A port city built on 42 hills overlooking the Pacific, connected by a network of funiculars and staircases. The houses are painted in every colour imaginable, and the street art is so pervasive that the entire city functions as an open-air gallery.",
    facts: [
      "Valparaiso has 16 funicular lifts (ascensores), some dating back to the 1880s and still in daily use.",
      "Pablo Neruda's house La Sebastiana sits on one of the hills and is now a museum.",
      "The city was Chile's main port during the California Gold Rush and grew wealthy servicing ships rounding Cape Horn.",
    ],
    category: "cultural",
    imageUrl: "/images/valparaiso.jpg",
    featured: false,
  },
  {
    slug: "quito",
    name: "Quito",
    country: "Ecuador",
    continent: "South America",
    coordinates: { lat: -0.1807, lng: -78.4678 },
    description:
      "The highest official capital city in the world at 2,850 metres. Quito's colonial centre was one of the first two places named a UNESCO World Heritage Site in 1978, alongside Krakow. The city sits in a narrow Andean valley with active volcanoes visible on clear days.",
    facts: [
      "The Basilica del Voto Nacional is one of the largest neo-Gothic churches in the Americas and took over 100 years to build.",
      "Quito lies just 25 kilometres south of the equator.",
      "The Mitad del Mundo monument marking the equator line is actually about 240 metres off from the GPS-measured equator.",
    ],
    category: "historical",
    imageUrl: "/images/quito.jpg",
    featured: false,
  },

  // ─── North America ─────────────────────────────────────────────
  {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    continent: "North America",
    coordinates: { lat: 19.4326, lng: -99.1332 },
    description:
      "Built on the ruins of the Aztec capital Tenochtitlan, which itself was built on a lake. The city is sinking at roughly 50 centimetres per year because the clay lakebed compresses as groundwater is extracted. The cathedral tilts visibly, and engineers have been trying to stabilise it since the 18th century.",
    facts: [
      "Tenochtitlan had a population of roughly 200,000 when Cortes arrived in 1519, making it one of the largest cities in the world at the time.",
      "The Templo Mayor ruins sit directly adjacent to the Metropolitan Cathedral in the Zocalo.",
      "Mexico City has more museums than any other city in the world: over 170.",
    ],
    category: "historical",
    imageUrl: "/images/mexico-city.jpg",
    featured: true,
  },
  {
    slug: "havana",
    name: "Havana",
    country: "Cuba",
    continent: "North America",
    coordinates: { lat: 23.1136, lng: -82.3666 },
    description:
      "The capital of Cuba and the largest city in the Caribbean. Old Havana's colonial architecture has been slowly crumbling since the 1959 revolution froze development, giving the city a time-capsule quality. The classic American cars from the 1950s still run because there was nothing to replace them with.",
    facts: [
      "The Malecon seawall stretches 8 kilometres along Havana's coastline and is the city's informal social gathering spot.",
      "Ernest Hemingway lived near Havana for over 20 years and wrote 'The Old Man and the Sea' there.",
      "Old Havana was declared a UNESCO World Heritage Site in 1982.",
    ],
    category: "cultural",
    imageUrl: "/images/havana.jpg",
    featured: false,
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    country: "United States",
    continent: "North America",
    coordinates: { lat: 29.9511, lng: -90.0715 },
    description:
      "A city shaped by French, Spanish, African, and Caribbean influences in a way that makes it unlike anywhere else in the United States. The French Quarter's cast-iron balconies, jazz clubs, and Creole cuisine exist because New Orleans changed hands between colonial powers so many times that no single culture dominated.",
    facts: [
      "New Orleans is the birthplace of jazz, which emerged from the city's Congo Square gatherings in the 19th century.",
      "Much of the city sits below sea level, protected by a levee system that famously failed during Hurricane Katrina in 2005.",
      "The St. Louis Cemetery No. 1 uses above-ground tombs because the high water table makes underground burial impractical.",
    ],
    category: "cultural",
    imageUrl: "/images/new-orleans.jpg",
    featured: false,
  },

  // ─── Asia (continued) ──────────────────────────────────────────
  {
    slug: "kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    continent: "Asia",
    coordinates: { lat: 27.7172, lng: 85.324 },
    description:
      "The capital of Nepal, sitting in a valley surrounded by the foothills of the Himalayas. The Kathmandu Valley contains seven UNESCO World Heritage Sites within a 15-kilometre radius, mostly Hindu and Buddhist temples that have been continuously used for over a thousand years.",
    facts: [
      "Boudhanath is one of the largest spherical stupas in Nepal and the center of Tibetan Buddhism in Kathmandu.",
      "The 2015 earthquake destroyed or damaged over 600 heritage structures in the valley.",
      "Durbar Square in Kathmandu contained more than 50 temples and palaces, many dating to the 12th century.",
    ],
    category: "cultural",
    imageUrl: "/images/kathmandu.jpg",
    featured: false,
  },
  {
    slug: "seoul",
    name: "Seoul",
    country: "South Korea",
    continent: "Asia",
    coordinates: { lat: 37.5665, lng: 126.978 },
    description:
      "A city that went from wartime rubble in 1953 to one of the most technologically advanced metropolises on Earth within a single generation. Gyeongbokgung Palace and Bukchon Hanok Village sit minutes from the Gangnam district's glass towers.",
    facts: [
      "Seoul's subway system is one of the most extensive in the world, with over 300 stations across the metropolitan area.",
      "Gyeongbokgung Palace was originally built in 1395 and has been destroyed and rebuilt multiple times.",
      "The DMZ between North and South Korea is only about 50 kilometres north of downtown Seoul.",
    ],
    category: "urban",
    imageUrl: "/images/seoul.jpg",
    featured: false,
  },

  // ─── Oceania ───────────────────────────────────────────────────
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    description:
      "Built around one of the world's great natural harbours, which the Gadigal people of the Eora Nation had used for thousands of years before the First Fleet arrived in 1788. The Opera House took 16 years to build, went 1,400% over budget, and became a national icon anyway.",
    facts: [
      "The Sydney Harbour Bridge contains roughly 52,800 tonnes of steel and took eight years to build.",
      "Sydney's population is larger than that of some entire European countries, including Ireland and New Zealand.",
      "Bondi Beach is one of the most visited beaches in Australia, attracting over 2.7 million visitors per year.",
    ],
    category: "urban",
    imageUrl: "/images/sydney.jpg",
    featured: false,
  },

  // ─── Europe (continued) ────────────────────────────────────────
  {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description:
      "A city built on reclaimed marshland, held together by roughly 11 million wooden piles driven into the mud. The 17th-century canal ring was purpose-built as both a transportation network and a real estate development, and the houses leaning forward is intentional: it makes hoisting furniture through upper-floor windows easier.",
    facts: [
      "Amsterdam has more bicycles than residents: roughly 881,000 bikes for 821,000 people.",
      "The Anne Frank House receives over 1.3 million visitors per year.",
      "There are 165 canals in Amsterdam with a total length of over 100 kilometres.",
    ],
    category: "cultural",
    imageUrl: "/images/amsterdam.jpg",
    featured: false,
  },
  {
    slug: "krakow",
    name: "Krakow",
    country: "Poland",
    continent: "Europe",
    coordinates: { lat: 50.0647, lng: 19.945 },
    description:
      "Poland's former royal capital and one of the few major Polish cities that survived World War II without large-scale destruction. The Rynek Glowny is the largest medieval town square in Europe, and Wawel Castle has been the seat of Polish kings since the 11th century.",
    facts: [
      "Krakow's Wieliczka Salt Mine has been in operation since the 13th century and contains an entire chapel carved from salt.",
      "The Hejnal, a trumpet call played hourly from St. Mary's Basilica, cuts off mid-note to commemorate a 13th-century watchman shot by a Mongol arrow.",
      "Krakow was one of the first two places designated a UNESCO World Heritage Site in 1978.",
    ],
    category: "historical",
    imageUrl: "/images/krakow.jpg",
    featured: false,
  },

  // ─── Africa (continued) ────────────────────────────────────────
  {
    slug: "luxor",
    name: "Luxor",
    country: "Egypt",
    continent: "Africa",
    coordinates: { lat: 25.6872, lng: 32.6396 },
    description:
      "The site of ancient Thebes, capital of Egypt during the New Kingdom period. The east bank holds the Karnak and Luxor temples; the west bank holds the Valley of the Kings. More pharaohs are buried within a few kilometres of Luxor than anywhere else on Earth.",
    facts: [
      "The Valley of the Kings contains 63 known tombs, including that of Tutankhamun, discovered by Howard Carter in 1922.",
      "The Karnak temple complex covers about 200 acres and was under construction for over 2,000 years.",
      "The Colossi of Memnon are two 18-metre-tall stone statues that have guarded the entrance to the west bank necropolis for 3,400 years.",
    ],
    category: "historical",
    imageUrl: "/images/luxor.jpg",
    featured: false,
  },
  {
    slug: "carthage",
    name: "Carthage",
    country: "Tunisia",
    continent: "Africa",
    coordinates: { lat: 36.8526, lng: 10.3233 },
    description:
      "Founded by Phoenician settlers around 814 BC, Carthage became the dominant power in the western Mediterranean until Rome destroyed it in 146 BC. The Romans then rebuilt it as one of their own major cities. Today the ruins of both civilizations sit side by side in a suburb of Tunis.",
    facts: [
      "Hannibal Barca, who marched elephants across the Alps, was born in Carthage around 247 BC.",
      "After the Third Punic War, Rome razed the city so thoroughly that the story of salting the earth became legend, though historians debate whether it actually happened.",
      "The Antonine Baths at Carthage were the largest Roman baths outside of Rome itself.",
    ],
    category: "historical",
    imageUrl: "/images/carthage.jpg",
    featured: false,
  },

  // ─── Asia (continued) ──────────────────────────────────────────
  {
    slug: "lhasa",
    name: "Lhasa",
    country: "China",
    continent: "Asia",
    coordinates: { lat: 29.65, lng: 91.1 },
    description:
      "The traditional seat of the Dalai Lama and the spiritual heart of Tibetan Buddhism. The Potala Palace rises 13 storeys above the city at an altitude of 3,650 metres, making it one of the highest palaces in the world. Lhasa means 'place of the gods' in Tibetan.",
    facts: [
      "The Potala Palace contains over 1,000 rooms and was the winter residence of the Dalai Lama until 1959.",
      "Jokhang Temple, built in the 7th century, is the most sacred temple in Tibetan Buddhism.",
      "Lhasa sits at 3,650 metres elevation, and the railway connecting it to mainland China is the highest in the world, reaching 5,072 metres at Tanggula Pass.",
    ],
    category: "cultural",
    imageUrl: "/images/lhasa.jpg",
    featured: false,
  },
  {
    slug: "damascus",
    name: "Damascus",
    country: "Syria",
    continent: "Asia",
    coordinates: { lat: 33.5138, lng: 36.2765 },
    description:
      "Often cited as one of the oldest continuously inhabited cities in the world, with evidence of settlement dating to at least 10,000 BC. The Old City contains the Umayyad Mosque, built in 715 AD on a site that had previously been an Aramean temple, a Roman temple, and a Christian church.",
    facts: [
      "The Umayyad Mosque is one of the oldest and largest mosques in the world and contains a shrine said to hold the head of John the Baptist.",
      "Damascus steel, the legendary material for swords, was traded through the city though likely produced elsewhere.",
      "The city's Straight Street, mentioned in the Bible's Book of Acts, still exists and can be walked today.",
    ],
    category: "historical",
    imageUrl: "/images/damascus.jpg",
    featured: false,
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    country: "India",
    continent: "Asia",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    description:
      "Known as the Pink City because Maharaja Ram Singh had the entire old town painted terracotta pink in 1876 to welcome the Prince of Wales. The colour stuck, and a municipal law now requires buildings in the old city to maintain the original shade.",
    facts: [
      "The Hawa Mahal (Palace of Winds) has 953 small windows designed to let royal women observe street life without being seen.",
      "Jaipur was one of India's first planned cities, laid out in 1727 on a grid system based on Vastu Shastra principles.",
      "The Jantar Mantar observatory, built in 1734, contains the world's largest stone sundial, accurate to within two seconds.",
    ],
    category: "cultural",
    imageUrl: "/images/jaipur.jpg",
    featured: false,
  },

  // ─── North America (continued) ─────────────────────────────────
  {
    slug: "quebec-city",
    name: "Quebec City",
    country: "Canada",
    continent: "North America",
    coordinates: { lat: 46.8139, lng: -71.208 },
    description:
      "The only walled city north of Mexico in the Americas. Old Quebec sits on a bluff overlooking the St. Lawrence River, and the Chateau Frontenac hotel is so prominent that it functions as the city's visual identity. French is spoken by 95% of the population.",
    facts: [
      "The Battle of the Plains of Abraham in 1759 lasted roughly 15 minutes but decided the fate of French North America.",
      "Quebec City was founded by Samuel de Champlain in 1608, making it one of the oldest European settlements in North America.",
      "The Chateau Frontenac, opened in 1893, is the most photographed hotel in the world.",
    ],
    category: "historical",
    imageUrl: "/images/quebec-city.jpg",
    featured: false,
  },

  // ─── Europe (continued) ────────────────────────────────────────
  {
    slug: "florence",
    name: "Florence",
    country: "Italy",
    continent: "Europe",
    coordinates: { lat: 43.7696, lng: 11.2558 },
    description:
      "The birthplace of the Renaissance, bankrolled largely by the Medici family. The concentration of artistic masterpieces per square metre in the historic centre is probably unmatched anywhere. Brunelleschi's dome on the cathedral was the largest in the world when completed in 1436 and remains an engineering puzzle.",
    facts: [
      "The Uffizi Gallery contains works by Botticelli, Leonardo, Michelangelo, and Caravaggio, among others.",
      "Brunelleschi built the cathedral dome without scaffolding using a herringbone brick pattern; the exact technique is still debated.",
      "The 1966 Arno River flood damaged or destroyed millions of artworks and books, triggering modern art restoration science.",
    ],
    category: "cultural",
    imageUrl: "/images/florence.jpg",
    featured: false,
  },

  // ─── South America (continued) ─────────────────────────────────

  // ─── Asia (final) ──────────────────────────────────────────────
  {
    slug: "hoi-an",
    name: "Hoi An",
    country: "Vietnam",
    continent: "Asia",
    coordinates: { lat: 15.8801, lng: 108.338 },
    description:
      "A well-preserved Southeast Asian trading port that was active from the 15th to the 19th century. Japanese, Chinese, and European merchants all had their own quarters, and the Japanese Covered Bridge from the 16th century still connects two of them. The Thu Bon River silted up and trade moved to Da Nang, which is why Hoi An survived intact.",
    facts: [
      "The Japanese Covered Bridge was built in the 1590s to connect the Japanese and Chinese quarters.",
      "On the 14th of each lunar month, the old town turns off electric lights and switches to silk lanterns.",
      "Hoi An is considered the best place in Vietnam to get custom-tailored clothing, with over 400 tailor shops in the old town.",
    ],
    category: "cultural",
    imageUrl: "/images/hoi-an.jpg",
    featured: false,
  },

  // ─── Oceania (continued) ───────────────────────────────────────
  {
    slug: "rotorua",
    name: "Rotorua",
    country: "New Zealand",
    continent: "Oceania",
    coordinates: { lat: -38.1368, lng: 176.2497 },
    description:
      "A city built on top of a geothermal field where the Earth's crust is thin enough that boiling water and sulfur gas seep through cracks in suburban backyards. The Maori settled the area centuries ago and still use the natural hot pools for cooking and bathing.",
    facts: [
      "The Te Puia geothermal reserve contains the Pohutu Geyser, which erupts up to 30 metres high multiple times per day.",
      "Rotorua sits in the Taupo Volcanic Zone, one of the most active geothermal regions in the world.",
      "The city's sulfur smell is so distinctive that first-time visitors often think something is burning.",
    ],
    category: "natural-wonder",
    imageUrl: "/images/rotorua.jpg",
    featured: false,
  },

  // ─── Africa (final) ────────────────────────────────────────────
  {
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    country: "Zimbabwe",
    continent: "Africa",
    coordinates: { lat: -20.2674, lng: 30.9338 },
    description:
      "The ruins of a medieval city that was the capital of the Kingdom of Zimbabwe between the 11th and 15th centuries. The stone walls were built without mortar and are the largest ancient structures in sub-Saharan Africa south of the Ethiopian highlands. The country took its name from this site.",
    facts: [
      "The Great Enclosure wall is 11 metres high and 250 metres long, built entirely without mortar.",
      "At its peak, the city had a population of roughly 18,000 people.",
      "Colonial-era Europeans refused to believe Africans built the structures and attributed them to various outside civilizations, a claim thoroughly disproven by archaeology.",
    ],
    category: "historical",
    imageUrl: "/images/great-zimbabwe.jpg",
    featured: false,
  },
  {
    slug: "axum",
    name: "Axum",
    country: "Ethiopia",
    continent: "Africa",
    coordinates: { lat: 14.121, lng: 38.7469 },
    description:
      "The former capital of the Aksumite Empire, which was one of the four great powers of the ancient world alongside Rome, Persia, and China. The city's stelae field contains giant carved obelisks, the tallest of which stood 33 metres before it fell, making it the largest single stone structure the ancient world ever tried to erect.",
    facts: [
      "Ethiopia's Church of Our Lady Mary of Zion in Axum claims to house the Ark of the Covenant.",
      "The Aksumite Empire was one of the first states to adopt Christianity, around 330 AD.",
      "A 24-metre obelisk looted by Italian forces in 1937 was returned to Axum in 2005 after decades of negotiations.",
    ],
    category: "historical",
    imageUrl: "/images/axum.jpg",
    featured: false,
  },
];
