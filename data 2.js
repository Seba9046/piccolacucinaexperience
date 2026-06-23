const LABELS={"it": {"welcome": "Benvenuti a Piccola Cucina Osteria. La Sicilia raccontata attraverso i suoi sapori.", "enter": "Entra nel menù", "ingredients": "Ingredienti", "allergens": "Allergeni", "modifiable": "Modificabile", "photo": "Foto in arrivo", "filters": "Filtra per allergeni da evitare", "all": "Tutti", "call": "Chiama il cameriere", "locations": "Locations", "reviews": "Reviews", "search": "Cerca un piatto", "notice": "Avvisa sempre il personale in caso di allergie o intolleranze prima di ordinare.", "yes": "Sì", "no": "No"}, "en": {"welcome": "Welcome to Piccola Cucina Osteria. Sicily through its flavors.", "enter": "Enter menu", "ingredients": "Ingredients", "allergens": "Allergens", "modifiable": "Can be modified", "photo": "Photo coming soon", "filters": "Filter allergens to avoid", "all": "All", "call": "Call waiter", "locations": "Locations", "reviews": "Reviews", "search": "Search dish", "notice": "Always inform the staff about allergies or intolerances before ordering.", "yes": "Yes", "no": "No"}, "es": {"welcome": "Bienvenidos a Piccola Cucina Osteria. Sicilia a través de sus sabores.", "enter": "Entrar al menú", "ingredients": "Ingredientes", "allergens": "Alérgenos", "modifiable": "Se puede modificar", "photo": "Foto próximamente", "filters": "Filtrar alérgenos a evitar", "all": "Todos", "call": "Llamar camarero", "locations": "Locations", "reviews": "Reviews", "search": "Buscar plato", "notice": "Informe siempre al personal sobre alergias o intolerancias antes de pedir.", "yes": "Sí", "no": "No"}};
const ALLERGEN_LABELS={"gluten": "Glutine / Gluten", "dairy": "Latte / Dairy", "eggs": "Uova / Eggs", "fish": "Pesce / Fish", "shellfish": "Crostacei/Molluschi", "nuts": "Frutta a guscio / Nuts", "sesame": "Sesamo / Sesame", "soy": "Soia / Soy", "pork": "Maiale / Pork", "meat": "Carne / Meat"};
const ITEMS=[
  {
    "cat": "Sfizi",
    "name": "Pane Cunzato",
    "price": "19.95",
    "desc": {
      "it": "Pane siciliano tostato con olio EVO, origano, primo sale, acciughe e pomodoro.",
      "en": "Toasted Sicilian bread with EVOO, oregano, primo sale cheese, anchovies and tomato.",
      "es": "Pan siciliano tostado con AOVE, orégano, queso primo sale, anchoas y tomate."
    },
    "ing": [
      "pane",
      "olio EVO",
      "origano",
      "primo sale",
      "acciughe",
      "pomodoro"
    ],
    "all": [
      "gluten",
      "dairy",
      "fish"
    ],
    "can": "yes"
  },
  {
    "cat": "Sfizi",
    "name": "Bruschetta Pomodoro",
    "price": "18.95",
    "desc": {
      "it": "Bruschetta con pomodoro rosso, basilico e origano.",
      "en": "Bruschetta with red tomatoes, basil and oregano.",
      "es": "Bruschetta con tomate rojo, albahaca y orégano."
    },
    "ing": [
      "pane",
      "olio EVO",
      "origano",
      "basilico",
      "pomodoro"
    ],
    "all": [
      "gluten"
    ],
    "can": "yes"
  },
  {
    "cat": "Sfizi",
    "name": "Bruschetta Manzo",
    "price": "21.95",
    "desc": {
      "it": "Bruschetta con stracciatella, rucola, carpaccio di manzo e tartufo.",
      "en": "Bruschetta with stracciatella, arugula, beef carpaccio and truffle.",
      "es": "Bruschetta con stracciatella, rúcula, carpaccio de ternera y trufa."
    },
    "ing": [
      "pane",
      "stracciatella",
      "rucola",
      "carpaccio di manzo",
      "tartufo",
      "fondo di vitello"
    ],
    "all": [
      "gluten",
      "dairy",
      "meat"
    ],
    "can": "yes"
  },
  {
    "cat": "Sfizi",
    "name": "Hummus della Casa",
    "price": "16.95",
    "desc": {
      "it": "Hummus con feta, olive al forno e anello di pizza.",
      "en": "Homemade hummus with feta, baked olives and pizza ring.",
      "es": "Hummus casero con feta, aceitunas al horno y pan de pizza."
    },
    "ing": [
      "ceci",
      "olio EVO",
      "feta",
      "olive",
      "sesamo",
      "limone",
      "farina"
    ],
    "all": [
      "gluten",
      "dairy",
      "sesame"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Arancino Catanese",
    "price": "18.95",
    "desc": {
      "it": "Arancino con ragù di carne, mozzarella e salsa di pomodoro.",
      "en": "Sicilian rice ball with meat ragù, mozzarella and tomato sauce.",
      "es": "Arancino siciliano con ragú de carne, mozzarella y salsa de tomate."
    },
    "ing": [
      "riso",
      "zafferano",
      "manzo",
      "mozzarella",
      "piselli",
      "parmigiano",
      "sedano",
      "carote",
      "cipolla",
      "farina"
    ],
    "all": [
      "gluten",
      "dairy",
      "meat"
    ],
    "can": "no"
  },
  {
    "cat": "Antipasti",
    "name": "Prosciutto Iberico 35 mesi",
    "price": "28.95",
    "desc": {
      "it": "Prosciutto iberico con ciabatta croccante, stracciatella, pomodorini e rucola.",
      "en": "35-month Iberico ham with crunchy ciabatta, stracciatella, cherry tomatoes and arugula.",
      "es": "Jamón ibérico de 35 meses con ciabatta crujiente, stracciatella, tomates cherry y rúcula."
    },
    "ing": [
      "prosciutto",
      "ciabatta",
      "stracciatella",
      "pomodorini",
      "rucola"
    ],
    "all": [
      "gluten",
      "dairy",
      "pork"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Parmigiana di Melanzane",
    "price": "21.95",
    "desc": {
      "it": "Melanzane fritte con burrata, salsa di pomodoro, basilico e ricotta salata.",
      "en": "Fried eggplant with burrata, tomato sauce, basil and salted ricotta.",
      "es": "Berenjena frita con burrata, salsa de tomate, albahaca y ricotta salada."
    },
    "ing": [
      "melanzane",
      "burrata",
      "pomodoro",
      "basilico",
      "ricotta salata",
      "olio di frittura"
    ],
    "all": [
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Antipasti",
    "name": "Tartare di Manzo",
    "price": "25.95",
    "desc": {
      "it": "Tartare di manzo con carciofi, nduja, senape, capperi, olive e salsa balsamica.",
      "en": "Beef tartare with artichokes, nduja, mustard, capers, olives and balsamic glaze.",
      "es": "Tartar de ternera con alcachofas, nduja, mostaza, alcaparras, aceitunas y balsámico."
    },
    "ing": [
      "manzo",
      "carciofi",
      "nduja",
      "cipolla",
      "senape",
      "acciughe",
      "capperi",
      "olive"
    ],
    "all": [
      "pork",
      "fish",
      "meat"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Burrata",
    "price": "20.95",
    "desc": {
      "it": "Burrata fresca con rucola, pomodorini, basilico e pane carasau.",
      "en": "Fresh burrata with arugula, cherry tomatoes, basil and carasau bread.",
      "es": "Burrata fresca con rúcula, tomates cherry, albahaca y pan carasau."
    },
    "ing": [
      "burrata",
      "rucola",
      "pomodori",
      "basilico",
      "pane carasau",
      "origano"
    ],
    "all": [
      "dairy",
      "gluten"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Vitello Tonnato",
    "price": "23.95",
    "desc": {
      "it": "Vitello con salsa tonnata, tartufo, capperi e fondo bruno.",
      "en": "Veal with tuna sauce, truffle, capers and veal jus.",
      "es": "Ternera con salsa tonnato, trufa, alcaparras y jugo de ternera."
    },
    "ing": [
      "vitello",
      "tonno",
      "acciughe",
      "capperi",
      "maionese",
      "tartufo",
      "sedano",
      "carote",
      "cipolla"
    ],
    "all": [
      "fish",
      "eggs",
      "meat"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Fiori di Zucca",
    "price": "21.95",
    "desc": {
      "it": "Fiori di zucca fritti ripieni con provola affumicata e coulis di peperoni.",
      "en": "Fried zucchini flowers stuffed with smoked provola and pepper coulis.",
      "es": "Flores de calabacín fritas rellenas de provola ahumada y coulis de pimientos."
    },
    "ing": [
      "fiori di zucca",
      "provola",
      "peperoni",
      "parmigiano",
      "farina",
      "bagnetto verde"
    ],
    "all": [
      "gluten",
      "dairy",
      "fish"
    ],
    "can": "no"
  },
  {
    "cat": "Antipasti",
    "name": "Calamari Grigliati",
    "price": "25.95",
    "desc": {
      "it": "Calamari grigliati su gazpacho e verdure croccanti.",
      "en": "Grilled calamari served over gazpacho and crunchy vegetables.",
      "es": "Calamares a la parrilla sobre gazpacho y verduras crujientes."
    },
    "ing": [
      "calamari",
      "pomodoro",
      "sedano",
      "carota",
      "cipolla",
      "aceto",
      "aglio"
    ],
    "all": [
      "shellfish"
    ],
    "can": "yes"
  },
  {
    "cat": "Antipasti",
    "name": "Involtini di Pesce Spada",
    "price": "23.95",
    "desc": {
      "it": "Pesce spada arrotolato con mozzarella e pangrattato su salsa di pomodoro.",
      "en": "Swordfish rolls with mozzarella and breadcrumbs over tomato sauce.",
      "es": "Rollitos de pez espada con mozzarella y pan rallado sobre salsa de tomate."
    },
    "ing": [
      "pesce spada",
      "mozzarella",
      "pangrattato",
      "pomodoro",
      "basilico"
    ],
    "all": [
      "fish",
      "gluten",
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Antipasti",
    "name": "Polpo Grigliato",
    "price": "28.95",
    "desc": {
      "it": "Polpo grigliato con guacamole, olive, capperi e bagnetto verde.",
      "en": "Grilled octopus with guacamole, olives, capers and green sauce.",
      "es": "Pulpo a la parrilla con guacamole, aceitunas, alcaparras y salsa verde."
    },
    "ing": [
      "polpo",
      "avocado",
      "limone",
      "cipolla",
      "pomodoro",
      "olive",
      "capperi",
      "acciughe"
    ],
    "all": [
      "fish",
      "shellfish"
    ],
    "can": "no"
  },
  {
    "cat": "Crudo di Mare",
    "name": "Carpaccio di Ricciola",
    "price": "25.95",
    "desc": {
      "it": "Ricciola marinata con olive verdi, salsa di pomodoro giallo, capperi croccanti e origano.",
      "en": "Cured yellowtail with green olives, yellow tomato sauce, crispy capers and oregano.",
      "es": "Serviola marinada con aceitunas verdes, salsa de tomate amarillo, alcaparras crujientes y orégano."
    },
    "ing": [
      "ricciola",
      "olive verdi",
      "pomodoro giallo",
      "capperi",
      "origano",
      "limone"
    ],
    "all": [
      "fish"
    ],
    "can": "no"
  },
  {
    "cat": "Crudo di Mare",
    "name": "Tartare di Tonno",
    "price": "26.95",
    "desc": {
      "it": "Tartare di tonno con avocado, lime, miso e chips di patate.",
      "en": "Tuna tartare with avocado, lime, miso and potato chips.",
      "es": "Tartar de atún con aguacate, lima, miso y chips de patata."
    },
    "ing": [
      "tonno",
      "avocado",
      "pomodoro",
      "cipolla",
      "tabasco",
      "lime",
      "miso",
      "patate"
    ],
    "all": [
      "fish",
      "soy"
    ],
    "can": "yes"
  },
  {
    "cat": "Crudo di Mare",
    "name": "Gamberi Rossi",
    "price": "25.95",
    "desc": {
      "it": "Gamberi rossi marinati con finocchi, arance, finocchietto e olive Taggiasche.",
      "en": "Marinated red prawns with fennel, orange, wild dill and Taggiasca olives.",
      "es": "Gambas rojas marinadas con hinojo, naranja, eneldo silvestre y aceitunas Taggiasca."
    },
    "ing": [
      "gamberi rossi",
      "finocchio",
      "arancia",
      "finocchietto",
      "olive"
    ],
    "all": [
      "shellfish"
    ],
    "can": "yes"
  },
  {
    "cat": "Insalate",
    "name": "Insalata di Rucola",
    "price": "19.95",
    "desc": {
      "it": "Rucola, patate dolci, olive e salsa alla curcuma.",
      "en": "Arugula, sweet potatoes, olives and turmeric dressing.",
      "es": "Rúcula, batatas, aceitunas y aderezo de cúrcuma."
    },
    "ing": [
      "rucola",
      "patate dolci",
      "olive",
      "curcuma",
      "limone",
      "scalogno",
      "miele",
      "senape"
    ],
    "all": [],
    "can": "yes"
  },
  {
    "cat": "Insalate",
    "name": "Insalata Piccola Cucina",
    "price": "19.95",
    "desc": {
      "it": "Spinaci baby, barbabietola, arancia, pomodorini, noci, mandorle, frutta secca e mela.",
      "en": "Baby spinach, beets, orange, cherry tomatoes, nuts, dried fruits and apple.",
      "es": "Espinacas baby, remolacha, naranja, tomates cherry, frutos secos, frutas secas y manzana."
    },
    "ing": [
      "spinaci",
      "barbabietola",
      "arancia",
      "pomodorini",
      "mela",
      "noci",
      "mandorle",
      "fichi",
      "uvetta"
    ],
    "all": [
      "nuts"
    ],
    "can": "yes"
  },
  {
    "cat": "Insalate",
    "name": "Insalata Finocchi e Arance",
    "price": "16.95",
    "desc": {
      "it": "Finocchi tagliati sottili, arancia, olio EVO, limone e aneto.",
      "en": "Shaved fennel, orange, EVOO, lemon and dill.",
      "es": "Hinojo laminado, naranja, AOVE, limón y eneldo."
    },
    "ing": [
      "finocchio",
      "arancia",
      "olio EVO",
      "limone",
      "aneto"
    ],
    "all": [],
    "can": "yes"
  },
  {
    "cat": "Insalate",
    "name": "Carciofo",
    "price": "21.95",
    "desc": {
      "it": "Carciofo ripieno con avocado, rucola, scaglie di parmigiano e riduzione balsamica.",
      "en": "Stuffed artichoke with avocado, arugula, shaved parmesan and balsamic reduction.",
      "es": "Alcachofa rellena con aguacate, rúcula, parmesano y reducción balsámica."
    },
    "ing": [
      "carciofo",
      "pangrattato",
      "avocado",
      "rucola",
      "parmigiano",
      "pomodoro confit",
      "balsamico"
    ],
    "all": [
      "gluten",
      "dairy"
    ],
    "can": "yes"
  },
  {
    "cat": "Insalate",
    "name": "Caesar Salad",
    "price": "17.95",
    "desc": {
      "it": "Lattuga romana, crostini, parmigiano, dressing Caesar e riduzione balsamica.",
      "en": "Romaine, croutons, parmigiano, Caesar dressing and balsamic reduction.",
      "es": "Lechuga romana, crutones, parmesano, salsa Caesar y reducción balsámica."
    },
    "ing": [
      "lattuga",
      "crostini",
      "parmigiano",
      "maionese",
      "acciughe",
      "senape",
      "limone"
    ],
    "all": [
      "gluten",
      "dairy",
      "eggs",
      "fish"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Tagliatelle Verdi",
    "price": "26.95",
    "desc": {
      "it": "Tagliatelle verdi con ragù di cinghiale, erbe e tartufo nero.",
      "en": "Green tagliatelle with wild boar ragù, herbs and black truffle.",
      "es": "Tagliatelle verdes con ragú de jabalí, hierbas y trufa negra."
    },
    "ing": [
      "farina",
      "spinaci",
      "uova",
      "cinghiale",
      "sedano",
      "carote",
      "cipolla",
      "vino rosso",
      "tartufo"
    ],
    "all": [
      "gluten",
      "eggs",
      "pork"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Paccheri alla Nerano",
    "price": "24.95",
    "desc": {
      "it": "Paccheri con zucchine, provolone, parmigiano, basilico e pepe nero.",
      "en": "Paccheri with zucchini, provolone, parmigiano, basil and black pepper.",
      "es": "Paccheri con calabacín, provolone, parmesano, albahaca y pimienta negra."
    },
    "ing": [
      "paccheri",
      "zucchine",
      "provolone",
      "parmigiano",
      "basilico",
      "pepe"
    ],
    "all": [
      "gluten",
      "dairy",
      "eggs"
    ],
    "can": "no"
  },
  {
    "cat": "Pasta",
    "name": "Gemelli con Ricciola",
    "price": "26.95",
    "desc": {
      "it": "Gemelli con ricciola, pomodoro giallo, basilico e salsa di mandorle.",
      "en": "Gemelli with yellowtail, yellow tomato, basil and almond sauce.",
      "es": "Gemelli con serviola, tomate amarillo, albahaca y salsa de almendras."
    },
    "ing": [
      "gemelli",
      "ricciola",
      "pomodoro giallo",
      "aglio",
      "basilico",
      "mandorle"
    ],
    "all": [
      "gluten",
      "eggs",
      "fish",
      "nuts"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Fusilloni Scampi",
    "price": "26.95",
    "desc": {
      "it": "Fusilloni con scampi, burrata, pomodorini e rucola.",
      "en": "Fusilloni with langoustines, burrata, cherry tomatoes and arugula.",
      "es": "Fusilloni con cigalas, burrata, tomates cherry y rúcula."
    },
    "ing": [
      "fusilloni",
      "scampi",
      "gamberi",
      "acciuga",
      "pomodoro",
      "burrata",
      "rucola"
    ],
    "all": [
      "gluten",
      "eggs",
      "shellfish",
      "dairy",
      "fish"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Bucatini Cacio e Pepe",
    "price": "26.95",
    "desc": {
      "it": "Bucatini con pecorino, parmigiano e pepe nero.",
      "en": "Bucatini with pecorino, parmigiano and black pepper.",
      "es": "Bucatini con pecorino, parmesano y pimienta negra."
    },
    "ing": [
      "bucatini",
      "pecorino",
      "parmigiano",
      "uova",
      "pepe"
    ],
    "all": [
      "gluten",
      "dairy",
      "eggs"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Maccheroni alla Norma",
    "price": "22.95",
    "desc": {
      "it": "Maccheroni con melanzane fritte, pomodoro, basilico e ricotta salata.",
      "en": "Maccheroni with fried eggplant, tomato, basil and salted ricotta.",
      "es": "Maccheroni con berenjena frita, tomate, albahaca y ricotta salada."
    },
    "ing": [
      "pasta",
      "pomodoro",
      "basilico",
      "melanzane",
      "ricotta salata"
    ],
    "all": [
      "gluten",
      "dairy"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Ravioli Ricotta e Spinaci",
    "price": "25.95",
    "desc": {
      "it": "Ravioli ripieni di ricotta e spinaci con ragù di salsiccia e nduja.",
      "en": "Homemade ravioli filled with ricotta and spinach in sausage ragù with spicy nduja.",
      "es": "Ravioli caseros rellenos de ricotta y espinacas con ragú de salchicha y nduja."
    },
    "ing": [
      "farina",
      "uova",
      "ricotta",
      "spinaci",
      "salsiccia",
      "nduja",
      "sedano",
      "carota",
      "cipolla"
    ],
    "all": [
      "gluten",
      "dairy",
      "pork",
      "eggs"
    ],
    "can": "yes"
  },
  {
    "cat": "Pasta",
    "name": "Lasagna della Mamma Rosa",
    "price": "24.95",
    "desc": {
      "it": "Lasagna con ragù di carne, besciamella, parmigiano e mozzarella.",
      "en": "Lasagna with meat ragù, béchamel, parmigiano and mozzarella.",
      "es": "Lasaña con ragú de carne, bechamel, parmesano y mozzarella."
    },
    "ing": [
      "pasta all’uovo",
      "manzo",
      "besciamella",
      "parmigiano",
      "mozzarella"
    ],
    "all": [
      "gluten",
      "dairy",
      "eggs",
      "meat"
    ],
    "can": "no"
  },
  {
    "cat": "Pasta",
    "name": "Gnocchi con Stracotto",
    "price": "26.95",
    "desc": {
      "it": "Gnocchi di ricotta con ragù di manzo brasato ed erbe.",
      "en": "Ricotta gnocchi with braised beef ragù and herbs.",
      "es": "Ñoquis de ricotta con ragú de ternera braseada y hierbas."
    },
    "ing": [
      "ricotta",
      "uova",
      "farina",
      "parmigiano",
      "manzo",
      "sedano",
      "carote",
      "cipolla"
    ],
    "all": [
      "gluten",
      "dairy",
      "eggs",
      "meat"
    ],
    "can": "no"
  },
  {
    "cat": "Pasta",
    "name": "Linguine Vongole e Lime",
    "price": "27.95",
    "desc": {
      "it": "Linguine con vongole, fumetto di pesce, aglio, lime e prezzemolo.",
      "en": "Linguine with clams, fish stock, garlic, lime and parsley.",
      "es": "Linguine con almejas, caldo de pescado, ajo, lima y perejil."
    },
    "ing": [
      "linguine",
      "vongole",
      "fumetto di pesce",
      "olio EVO",
      "aglio",
      "lime",
      "peperoncino",
      "prezzemolo"
    ],
    "all": [
      "gluten",
      "shellfish",
      "fish"
    ],
    "can": "yes"
  },
  {
    "cat": "Main Course",
    "name": "Branzino Grigliato",
    "price": "38.95",
    "desc": {
      "it": "Branzino grigliato in salsa mediterranea.",
      "en": "Grilled sea bass with Mediterranean sauce.",
      "es": "Lubina a la parrilla con salsa mediterránea."
    },
    "ing": [
      "branzino",
      "olive",
      "capperi",
      "pomodorini",
      "basilico",
      "aglio",
      "fumetto di pesce",
      "limone"
    ],
    "all": [
      "fish"
    ],
    "can": "no"
  },
  {
    "cat": "Main Course",
    "name": "Cotoletta di Pollo",
    "price": "31.95",
    "desc": {
      "it": "Cotoletta di pollo alla milanese con patate arrosto e chimichurri.",
      "en": "Milanese-style chicken cutlet with roasted potatoes and chimichurri.",
      "es": "Milanesa de pollo con patatas asadas y chimichurri."
    },
    "ing": [
      "pollo",
      "pangrattato",
      "uova",
      "parmigiano",
      "patate",
      "chimichurri"
    ],
    "all": [
      "gluten",
      "eggs",
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Main Course",
    "name": "Lombatello di Manzo",
    "price": "35.95",
    "desc": {
      "it": "Lombatello di manzo con purè di patate, tartufo nero e chimichurri.",
      "en": "Beef skirt steak with mashed potatoes, black truffle and chimichurri.",
      "es": "Entraña de ternera con puré de patatas, trufa negra y chimichurri."
    },
    "ing": [
      "manzo",
      "patate",
      "latte",
      "burro",
      "tartufo",
      "chimichurri"
    ],
    "all": [
      "meat",
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Contorni",
    "name": "Spinaci",
    "price": "12.95",
    "desc": {
      "it": "Spinaci al vapore con olio EVO, pomodoro, sale, pepe e origano.",
      "en": "Steamed spinach with EVOO, tomato, salt, pepper and oregano.",
      "es": "Espinacas al vapor con AOVE, tomate, sal, pimienta y orégano."
    },
    "ing": [
      "spinaci",
      "olio EVO",
      "pomodoro",
      "sale",
      "pepe",
      "origano"
    ],
    "all": [],
    "can": "yes"
  },
  {
    "cat": "Contorni",
    "name": "Patate Arrosto",
    "price": "12.95",
    "desc": {
      "it": "Patate arrosto con chimichurri.",
      "en": "Roasted potatoes with chimichurri.",
      "es": "Patatas asadas con chimichurri."
    },
    "ing": [
      "patate",
      "chimichurri"
    ],
    "all": [],
    "can": "yes"
  },
  {
    "cat": "Contorni",
    "name": "Verdure Grigliate",
    "price": "12.95",
    "desc": {
      "it": "Zucchine, melanzane e pomodori grigliati con olio EVO e origano.",
      "en": "Grilled zucchini, eggplant and tomatoes with EVOO and oregano.",
      "es": "Calabacín, berenjena y tomates a la parrilla con AOVE y orégano."
    },
    "ing": [
      "zucchine",
      "melanzane",
      "pomodori",
      "olio EVO",
      "origano"
    ],
    "all": [],
    "can": "yes"
  },
  {
    "cat": "Contorni",
    "name": "Caponata",
    "price": "13.95",
    "desc": {
      "it": "Verdure fritte in agrodolce con pane carasau.",
      "en": "Fried vegetables in sweet and sour sauce with carasau bread.",
      "es": "Verduras fritas en salsa agridulce con pan carasau."
    },
    "ing": [
      "melanzane",
      "cipolla",
      "carote",
      "peperoni",
      "sedano",
      "aceto",
      "zucchero",
      "pane carasau"
    ],
    "all": [
      "gluten"
    ],
    "can": "no"
  },
  {
    "cat": "Contorni",
    "name": "Purè di Patate",
    "price": "13.95",
    "desc": {
      "it": "Purè di patate con latte, burro e pepe bianco.",
      "en": "Mashed potatoes with milk, butter and white pepper.",
      "es": "Puré de patatas con leche, mantequilla y pimienta blanca."
    },
    "ing": [
      "patate",
      "latte",
      "burro",
      "pepe bianco"
    ],
    "all": [
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Desserts",
    "name": "Cannoli",
    "price": "13.95",
    "desc": {
      "it": "Cannoli con ricotta zuccherata, pistacchio e cacao.",
      "en": "Cannoli with sweet ricotta, pistachio and cocoa.",
      "es": "Cannoli con ricotta dulce, pistacho y cacao."
    },
    "ing": [
      "farina",
      "uova",
      "ricotta",
      "pistacchio",
      "cacao"
    ],
    "all": [
      "gluten",
      "eggs",
      "dairy",
      "nuts"
    ],
    "can": "no"
  },
  {
    "cat": "Desserts",
    "name": "Cassata",
    "price": "13.95",
    "desc": {
      "it": "Cassata con ricotta, mandorla, canditi, cacao e pistacchio.",
      "en": "Cassata with ricotta, almond, candied fruit, cocoa and pistachio.",
      "es": "Cassata con ricotta, almendra, fruta confitada, cacao y pistacho."
    },
    "ing": [
      "farina di mandorle",
      "farina",
      "uova",
      "ricotta",
      "canditi",
      "pistacchio"
    ],
    "all": [
      "gluten",
      "eggs",
      "dairy",
      "nuts"
    ],
    "can": "no"
  },
  {
    "cat": "Desserts",
    "name": "Tiramisu",
    "price": "13.95",
    "desc": {
      "it": "Savoiardi, mascarpone, caffè, uova, panna e cacao.",
      "en": "Ladyfingers, mascarpone, coffee, eggs, cream and cocoa.",
      "es": "Bizcochos, mascarpone, café, huevos, crema y cacao."
    },
    "ing": [
      "savoiardi",
      "zucchero",
      "mascarpone",
      "uova",
      "caffè",
      "panna",
      "cacao"
    ],
    "all": [
      "gluten",
      "eggs",
      "dairy"
    ],
    "can": "no"
  },
  {
    "cat": "Desserts",
    "name": "Gelato",
    "price": "13.95",
    "desc": {
      "it": "Gelato al pistacchio, vaniglia, nocciola o cioccolato.",
      "en": "Gelato: pistachio, vanilla, hazelnut or chocolate.",
      "es": "Helado de pistacho, vainilla, avellana o chocolate."
    },
    "ing": [
      "latte",
      "panna",
      "zucchero",
      "pistacchio",
      "nocciola"
    ],
    "all": [
      "dairy",
      "nuts"
    ],
    "can": "no"
  }
];