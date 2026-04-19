// ASH & STEEL — DATA LAYER v1.0.0
// 4 artistes, discographies complètes, 15 playlists curatorées
// YouTube IDs : format "search:{query}" pour fallback si ID direct indisponible

const ASH_DATA = {

  artists: {
    holden: {
      id: "holden",
      name: "Errol Holden",
      origin: "Harlem, New York",
      years: "2022–",
      bio: "Voix la plus brute de Harlem. Autobiographique, précis, cinématographique. Cosigné par Roc Marciano et Cam'ron. Ancienne vie dans les rues, reconverti dans l'art par choix lucide.",
      bioLong: "Errol Holden grandit entre Harlem et le Bronx, d'origine panaméenne-américaine, dans un Harlem « all black » qu'il n'a connu que comme locataire d'une époque révolue. Les seuls blancs qu'il voyait dans le quartier, dit-il en interview, étaient flics, pompiers ou profs. Dans la rue, on l'appelait H-O. Deux jobs dans sa vie avant la musique : un chez le couturier légendaire Dapper Dan, l'autre à la bibliothèque des Harlem River Houses — où il fut licencié pour avoir pris des chèques qu'il n'aurait pas dû. Il quitte l'école, hustle sur la 123rd, la 111th, puis s'éloigne — Pittsburgh, Caroline du Sud, l'upstate. Des décennies à ce rythme : incarcération, famille fracturée, hauts et bas.\n\nEn 2019, il choisit le stylo. Pas un hobby — une sortie. Les premiers projets sont auto-distribués via DM, les fans paient en direct. Il se réclame des enseignements de la Nation of Gods and Earths (le Five Percent) — d'où le Supreme en titres. Joe Frog (2022) — hommage à son père, pas de deadbeat, juste un homme qui a fait ce qu'il pouvait — le fait entrer sur la carte. Mass Appeal (le label de Nas) le signe. Roc Marciano l'entend, tombe raide.\n\nJanvier 2025 : Roc Nation signe un deal de distribution avec lui, et Roc Marciano l'intègre à son imprint PIMPIRE International. Cam'ron l'invite sur la toute première session de son émission Freestyle Fridays, le 24 janvier 2025 : The best lyricists are from Harlem, go argue with your mother. L'année devient un tir groupé : Supreme Magnetic (février), Joe Frog 2, The Talented Mr Ripley, War Pig, FEVER, Death March, Mulberry Silk Road (avec Roc), 615 W 150 Street, Harlem's Finest (avec Big L posthume). En 2026, il apparaît sur 656 de Roc Marciano — le seul feature de l'album — sur Rain Dance et Trapeze.\n\nErrol Holden écrit à hauteur d'homme, sans imagination. Sa voix est basse, son débit lent, ses images précises. Il est la démonstration que Harlem n'a pas dit son dernier mot, et que la transformation d'un criminel en artiste n'est pas une abdication — c'est une victoire.",
      quote: "I am a lifelong criminal in transformation, and music has shown me that you don't have to do bad.",
      quoteSource: "Errol Holden, Roc Nation press statement, 2025",
      whyHere: "Errol Holden est la preuve présente. Ka, Roc, Styles ont construit le territoire. Holden démontre qu'il est encore vivant, qu'il produit encore, qu'il peut encore accueillir un nouvel entrant authentique. Il incarne la reconversion lucide — thème central de la philosophie Morale de Ghost. Il a choisi d'arrêter. Il écrit ce qu'il a vécu, sans glamour, sans culpabilité excessive. Dans l'économie symbolique d'ASH & STEEL, il est le présent qui prouve que la tradition n'est pas morte.",
      color: "#8b1a1a",
      albums: [
        { title: "Joe Frog", year: 2022, type: "LP" },
        { title: "Glock 19s for Caskets n Flower Moves", year: 2024, type: "Collab", feat: "Rome Streetz" },
        { title: "Death March", year: 2025, type: "EP" },
        { title: "FEVER", year: 2025, type: "EP" },
        { title: "The Talented Mr Ripley", year: 2025, type: "EP" },
        { title: "War Pig", year: 2025, type: "EP" },
        { title: "Rudy Ray Moore", year: 2025, type: "Single" },
        { title: "Dancin Debbie", year: 2025, type: "Single" },
        { title: "Supreme Magnetic", year: 2025, type: "LP" },
        { title: "Roc Marciano Presents: Mulberry Silk Road", year: 2025, type: "Collab", feat: "Roc Marciano" },
        { title: "Harlem's Finest: Return of the King", year: 2025, type: "Collab", feat: "Big L" },
        { title: "JOE FROG 2", year: 2025, type: "LP" }
      ]
    },
    marciano: {
      id: "marciano",
      name: "Roc Marciano",
      origin: "Hempstead, Long Island / NYC",
      years: "2010–",
      bio: "Architecte du minimalisme mafioso moderne. Producteur et MC. Luxe discret, menace silencieuse, samples poussiéreux. La référence absolue du underground new-yorkais post-2010.",
      bioLong: "Rakeem Calief Meyer naît le 11 février 1978 dans les projets du 100 Terrace Avenue, à Hempstead, Long Island. Sa mère s'habille bien, son père aussi — l'élégance est une religion familiale. Puis l'ère du crack fracasse le quartier. Rakeem tombe dans la rue, mais il écrit déjà. Son premier nom de scène, Roc Marciano, est un hommage à Rocky Marciano, le boxeur italo-américain qui n'a jamais perdu.\n\nÀ la fin des années 90, Busta Rhymes le repère et l'intègre à son Flipmode Squad. Il apparaît sur The Heist (1998), aux côtés de Raekwon et Ghostface Killah — un baptême de feu. En 2001, il fonde The U.N. avec Dino Brave, Laku et Mic Raw, publie UN or U Out (2004), traîne dans l'ombre de Pete Rock et du Wu-Tang, mais la grande vague ne vient pas. Il produit seul, attend son heure.\n\nEn mai 2010, Marcberg sort. Et tout change. Boucles sans batterie, samples poussiéreux, voix posée, imagerie mafioso sans guns-pétards : une esthétique naît. La presse ignore d'abord. Puis Sean Price saute sur un remix, et le bouche-à-oreille fait le reste. Reloaded (2012), Rosebudd's Revenge (2017), RR2 la même année, Behold a Dark Horse (2018), Marcielago (2020)… chaque album affine la méthode : moins, mais plus dense. Rolling Stone finit par le couronner Godfather of the Underground.\n\nRoc Marciano est l'homme qui a prouvé qu'on pouvait vendre du luxe sans crier, menacer sans hausser la voix, et bâtir un empire indépendant sans signer un contrat de major. Son label PIMPIRE International signe aujourd'hui Errol Holden, la relève qu'il adoube publiquement. Son album de 2026, 656 — du nom d'un appartement sur Terrace Avenue — le ramène à l'essence : tout produit par lui-même, une seule voix invitée, celle de Holden. La boucle se ferme sans se refermer.",
      quote: "My goal isn't to be liked. My goal is to be respected by the real.",
      quoteSource: "Roc Marciano, paraphrase d'interviews",
      whyHere: "Roc Marciano est l'architecte. Sans lui, ni Ka, ni Griselda, ni Holden n'auraient eu de langage commun. Il a inventé la grammaire du minimalisme mafioso moderne : le luxe sans vulgarité, la violence suggérée, la patience du prédateur. ASH & STEEL est impensable sans Roc Marciano. Il est le prisme par lequel tout le reste se lit.",
      color: "#b8960c",
      albums: [
        { title: "Marcberg", year: 2010, type: "LP" },
        { title: "Reloaded", year: 2012, type: "LP" },
        { title: "The Pimpire Strikes Back", year: 2013, type: "Mixtape" },
        { title: "Marci Beaucoup", year: 2013, type: "LP" },
        { title: "Rosebudd's Revenge", year: 2017, type: "LP" },
        { title: "RR2: The Bitter Dose", year: 2018, type: "LP" },
        { title: "Behold a Dark Horse", year: 2018, type: "LP" },
        { title: "KAOS", year: 2018, type: "Collab", feat: "DJ Muggs" },
        { title: "Marcielago", year: 2019, type: "LP" },
        { title: "Reasonable Drought", year: 2020, type: "Collab", feat: "Stove God Cooks" },
        { title: "Mt. Marci", year: 2020, type: "LP" },
        { title: "Delgado", year: 2021, type: "Collab", feat: "Flee Lord" },
        { title: "The Elephant Man's Bones", year: 2022, type: "Collab", feat: "The Alchemist" },
        { title: "Nothing Bigger Than the Program", year: 2023, type: "Collab", feat: "Jay Worthy" },
        { title: "Marciology", year: 2024, type: "LP" },
        { title: "The Skeleton Key", year: 2024, type: "Collab", feat: "The Alchemist" },
        { title: "The Coldest Profession", year: 2025, type: "Collab", feat: "DJ Premier" },
        { title: "Mulberry Silk Road", year: 2025, type: "Collab", feat: "Errol Holden" }
      ]
    },
    ka: {
      id: "ka",
      name: "Ka",
      origin: "Brownsville, Brooklyn",
      years: "2008–2024",
      bio: "Capitaine des pompiers de Brooklyn. Poète stoïque. Chaque album est un concept, chaque ligne une sculpture. Disparu en octobre 2024 à 52 ans. Sa musique est un monument permanent.",
      bioLong: "Kaseem Ryan naît le 11 août 1972 à New York, et grandit sur Hopkinson et Saratoga, à Brownsville — un quartier de Brooklyn où treize personnes cohabitent parfois sous un même toit, où l'héroïne et le crack sont voisins de palier. Il commence à écrire des rimes vers huit ans, inspiré par Slick Rick. Au début des années 90, son cousin Deon lui glisse mille dollars pour qu'il prenne le rap au sérieux. Il rejoint Natural Elements, puis Nightbreed. Dans les deux cas, il s'efface : trop lent, trop concentré, trop peu convaincu de sa propre valeur au milieu de rappeurs qui veulent tout, tout de suite.\n\nPendant que Natural Elements signe chez Tommy Boy, Ka disparaît. Il entre au FDNY, les pompiers de New York. Le 11 septembre 2001, il est premier intervenant sur les décombres du World Trade Center. Il gravira les échelons jusqu'au grade de capitaine — vingt ans de service. Entre deux gardes, il continue d'écrire, seul. En 2008, il auto-produit Iron Works, un premier album solo qu'il voulait juste faire écouter à sa famille. GZA du Wu-Tang Clan l'entend, l'invite sur Pro Tools. Le retour a lieu sans tambour.\n\nEn 2012, Grief Pedigree impose une grammaire nouvelle : presque pas de batterie, des boucles de samples poussiéreuses, une voix grave posée à un volume quasi méditatif. Pas de refrains accrocheurs, pas de couplets faciles. Chaque mot est choisi, chaque rime interne est une pierre taillée. Ka écrit comme un artisan : il enregistrait pendant ses congés, remplissait lui-même les commandes de vinyles depuis chez lui, refusait les tournées. Sa discographie devient une suite d'albums conceptuels — The Night's Gambit (2013, les échecs), Honor Killed the Samurai (2016, le bushido appliqué aux rues), Descendants of Cain (2020, le biblique), A Martyr's Reward (2021). Chaque projet est un livre court qu'il faut lire plusieurs fois.\n\nKa est le rappeur des rappeurs. Earl Sweatshirt, MIKE, Alchemist, Roc Marciano, toute une génération d'underground le cite comme une boussole. Il rime sur le sacrifice, sur la dette qu'on doit à ceux qui nous ont permis de survivre, sur le deuil permanent qu'implique le fait d'avoir grandi noir à Brownsville. Son dernier album, The Thief Next to Jesus (août 2024), creuse la foi, la trahison, la grâce. Sept semaines plus tard, il meurt à New York, à 52 ans, sans cause de mort divulguée. Il laisse une femme, une mère, une sœur, et onze albums solo qui forment l'un des catalogues les plus denses du rap américain du XXIe siècle.",
      quote: "Hope the sacrifice match the vice / Speak thoughts sincere to spare the soul / I pray every cross you bear is gold.",
      quoteSource: "The Thief Next to Jesus, 2024",
      whyHere: "Ka incarne le pilier central du projet : la discipline. Onze albums en quinze ans, tous auto-produits, tous auto-distribués, tous exigeants. Il éteignait l'incendie le jour et écrivait la nuit. La preuve qu'on peut bâtir une œuvre complète en silence, à contre-courant, en restant fidèle à un seul endroit — Brownsville — et à une seule méthode — la sienne. Sans lui, le minimalisme stoïque new-yorkais n'aurait ni sa voix, ni sa colonne vertébrale.",
      memorial: "Ka est mort à New York le 12 octobre 2024, à l'âge de 52 ans. Cause non divulguée par la famille. Il laisse une œuvre discographique de onze albums solo, plusieurs projets collaboratifs (Hermit and the Recluse avec Animoss, Dr. Yen Lo avec Preservation, Metal Clergy avec Roc Marciano), et une empreinte définitive sur le rap new-yorkais underground.",
      memorialTribute: "The truest man and artist I have ever been lucky enough to cross paths with.",
      memorialTributeSource: "Alchemist, 14 octobre 2024",
      color: "#4a6741",
      albums: [
        { title: "Iron Works", year: 2008, type: "LP" },
        { title: "Grief Pedigree", year: 2012, type: "LP" },
        { title: "The Night's Gambit", year: 2013, type: "LP" },
        { title: "1200 B.C.", year: 2014, type: "EP", feat: "Roc Marciano" },
        { title: "Days with Dr. Yen Lo", year: 2015, type: "Collab", feat: "Preservation" },
        { title: "Honor Killed the Samurai", year: 2016, type: "LP" },
        { title: "Descendants of Cain", year: 2020, type: "LP" },
        { title: "A Martyr's Reward", year: 2021, type: "LP" },
        { title: "Languish Arts", year: 2022, type: "LP" },
        { title: "Woeful Studies", year: 2022, type: "LP" },
        { title: "The Thief Next to Jesus", year: 2024, type: "LP" }
      ]
    },
    stylesp: {
      id: "stylesp",
      name: "Styles P",
      origin: "Yonkers, New York",
      years: "2002–",
      bio: "Le Ghost. Membre fondateur des LOX avec Jadakiss et Sheek Louch. Warrior energy, spiritualité de rue, vérité brute. Plus de 15 albums, 16 mixtapes. La discipline incarnée.",
      bioLong: "David Styles naît le 28 novembre 1974 dans le Queens, grandit à Yonkers. À 19 ans, avec ses amis d'enfance Jadakiss et Sheek Louch, il forme The LOX (alias D-Block). Mary J. Blige entend leur démo, la passe à Diddy. Bad Boy Records les signe. Le trio ghost-écrit pour Notorious B.I.G., apparaît sur It's All About the Benjamins, signe Money, Power & Respect (1998). Mais Bad Boy les enferme dans un moule pop qui n'est pas le leur. Ils se libèrent et filent chez Ruff Ryders, aux côtés de DMX, où leur rap dur trouve enfin son habitat.\n\nEn 2002, Styles P sort son premier album solo : A Gangster and a Gentleman. Le single Good Times (prod. Swizz Beatz) devient un tube — un rappeur hardcore à la radio grâce à un track sur la weed. L'album atteint le top 10 Billboard. Styles hérite du surnom The Ghost — présent partout, invisible quand il le faut, mortel quand il frappe. La décennie suivante, il enchaîne les solos (Time Is Money, Super Gangster Extraordinary Gentleman, Master of Ceremonies), les mixtapes, et les albums LOX.\n\nEntre deux couplets, Styles devient écrivain (Invincible, 2010) et entrepreneur. En 2011, il ouvre Juices for Life dans le Bronx — un bar à jus de fruits bio dans un quartier où les épiceries vendent plus de malt que de légumes. Geste politique, geste sanitaire, geste de quartier. Il enchaîne avec Farmacy for Life à Scarsdale. Le rappeur le plus brutal de New York pivote vers la santé publique sans jamais renier ses rimes.\n\nEn octobre 2022, il annonce sa retraite solo. Son 15e album, Penultimate: A Calm Wolf Is Still a Wolf (2023), est son point final. Il garde The LOX actif avec Jadakiss et Sheek Louch — l'amitié ne se retire pas. Styles P a traversé trois décennies de hip-hop sans jamais changer de voix : grave, posée, tranchante, consciente. Un loup calme. A calm wolf is still a wolf.",
      quote: "A calm wolf is still a wolf.",
      quoteSource: "Penultimate: A Calm Wolf Is Still a Wolf, 2023",
      whyHere: "Styles P n'est pas seulement un artiste de cette curation. Il est le parrain symbolique du projet. Le blaze Ghost que j'ai adopté vient de lui. Trente ans de rap new-yorkais sans concession, sans trahison, sans réinvention opportuniste — la preuve vivante qu'on peut rester dur sans se durcir, conscient sans moraliser, indépendant sans s'isoler. Dans la philosophie Morale de Ghost, Styles P est le patriarche silencieux dont j'ai emprunté le nom. Le loup calme qui a toujours été là.",
      filiation: "Le nom « Ghost » dans l'écosystème Morale de Ghost (@AigleRoyal28, GHOST-2, Ghost mode) est un hommage direct à Styles P. Respect et reconnaissance.",
      color: "#2a4a6b",
      albums: [
        { title: "A Gangster and a Gentleman", year: 2002, type: "LP" },
        { title: "Time Is Money", year: 2006, type: "LP" },
        { title: "Super Gangster", year: 2007, type: "LP" },
        { title: "Master of Ceremonies", year: 2011, type: "LP" },
        { title: "Float", year: 2013, type: "LP" },
        { title: "Phantom and the Ghost", year: 2014, type: "LP" },
        { title: "A Wise Guy and a Wise Guy", year: 2015, type: "LP" },
        { title: "G-Host", year: 2018, type: "LP" },
        { title: "Beloved", year: 2018, type: "Collab", feat: "Dave East" },
        { title: "Dime Bag", year: 2018, type: "LP" },
        { title: "S.P. The GOAT: Ghost of All Time", year: 2019, type: "LP" },
        { title: "Presence", year: 2019, type: "LP" },
        { title: "Styles David: Ghost Your Enthusiasm", year: 2020, type: "LP", feat: "Vinny Idol" },
        { title: "The Seven", year: 2021, type: "Collab", feat: "Talib Kweli" },
        { title: "Penultimate: A Calm Wolf Is Still a Wolf", year: 2023, type: "LP" },
        { title: "Ghost of the Past, Present and Future Vol.1", year: 2025, type: "LP" }
      ]
    }
  },

  playlists: [

    // ── MOOD / AMBIANCES ──────────────────────────────────────────────
    {
      id: "noir-harlem",
      category: "mood",
      title: "Noir Harlem Realism",
      subtitle: "Froid. Minimaliste. Film d'auteur.",
      mood: "Froide, introspective, cinématographique",
      icon: "◆",
      tracks: [
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship", ytId: "bzyPZvWtCN8" },
        { artist: "Errol Holden", title: "Cashmere Kufis", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Cashmere Kufis", ytId: "0sX2aLU4hpQ" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night Honor Killed the Samurai", ytId: "22qF6Drbihg" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, ytSearch: "Ka I've Been Here Before Grief Pedigree", ytId: "h4pSIupzFdA" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire Woeful Studies" },
        { artist: "Errol Holden", title: "Guantanamo Diaries", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Guantanamo Diaries", ytId: "gZ8s3GCa054" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change Night's Gambit", ytId: "mN5ORMHDy5Y" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal", ytId: "Eir9WiqcJ9k" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain", ytId: "RswTGeL9wd0" }
      ]
    },

    {
      id: "luxury-mafioso",
      category: "mood",
      title: "Luxury Mafioso Minimalism",
      subtitle: "Élégance sombre. Menace silencieuse.",
      mood: "Luxe discret, cinématographique, lent",
      icon: "◈",
      tracks: [
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg", ytId: "AZSPs8oPYUk" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Roc Marciano", title: "Greneberg", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Greneberg", ytId: "o1iOuybIkf0" },
        { artist: "Roc Marciano", title: "Yayo", album: "Marcielago", year: 2019, ytSearch: "Roc Marciano Yayo Marcielago", ytId: "kiAJAU8rA14" },
        { artist: "Roc Marciano", title: "Cashmere Ropes", album: "RR2: The Bitter Dose", year: 2018, ytSearch: "Roc Marciano Cashmere Ropes RR2" },
        { artist: "Errol Holden & Roc Marciano", title: "Rod Lavers with the Stussy Hoodie", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Rod Lavers Stussy Hoodie Roc Marciano", ytId: "jVQVAJ2PgiU" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal Rosebudd's Revenge", ytId: "Glytqr0UdiY" },
        { artist: "Roc Marciano", title: "Pistol", album: "Behold a Dark Horse", year: 2018, ytSearch: "Roc Marciano Pistol Behold Dark Horse", ytId: "3kj31RKZOLg" },
        { artist: "Errol Holden", title: "Pig Latin", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Pig Latin Supreme Magnetic", ytId: "CIWcAyFnoY8" },
        { artist: "Roc Marciano", title: "Jungle Fever", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Jungle Fever Marcberg", ytId: "hpar-be5JkE" }
      ]
    },

    {
      id: "street-wisdom",
      category: "mood",
      title: "Street Wisdom & Warrior Energy",
      subtitle: "Discipline. Vérité brute. Force mentale.",
      mood: "Énergie guerrière, motivation sombre",
      icon: "▲",
      tracks: [
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times I Get High", ytId: "4fJZbBcDsRQ" },
        { artist: "Styles P", title: "The Life", album: "The Life / The Trouble Is...", year: 2016, ytSearch: "Styles P The Life", ytId: "pfblnrUjysI" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float", ytId: "QX2371V5ta4" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts Honor Killed the Samurai", ytId: "QvlF0dDs4Gw" },
        { artist: "Styles P", title: "Phantom and the Ghost", album: "Phantom and the Ghost", year: 2014, ytSearch: "Styles P Phantom and the Ghost", ytId: "sIRQgPJQOrk" },
        { artist: "Styles P", title: "Blow Your Mind", album: "G-Host", year: 2018, ytSearch: "Styles P Blow Your Mind G-Host", ytId: "R6imJp_CLac" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement A Martyr's Reward" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It", ytId: "p6TrQzNTrRA" },
        { artist: "Styles P & Ka", title: "The KA-BA feat. Styles P", album: "Woeful Studies", year: 2022, ytSearch: "Ka The KA-BA Styles P" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence album", ytId: "4py3XMbYdSE" }
      ]
    },

    {
      id: "night-walk-nyc",
      category: "mood",
      title: "Night Walk in New York",
      subtitle: "3h du matin. Trottoirs mouillés. Cinéma.",
      mood: "Nocturne, sombre, élégant, introspectif",
      icon: "◉",
      tracks: [
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night", ytId: "22qF6Drbihg" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises", ytId: "dACa3SqzE_U" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North", ytId: "DgrC0njnx4I" },
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit", ytId: "d1hDpufNXd0" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Styles P", title: "Ghost In The Building", album: "G-Host", year: 2018, ytSearch: "Styles P Ghost In The Building", ytId: "ksXJPcGuQ3s" },
        { artist: "Errol Holden & Roc Marciano", title: "Perhaps in the Next", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Perhaps in the Next Roc Marciano", ytId: "qmdF9S2J62c" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi Grief Pedigree", ytId: "OOTdy_vpFIA" },
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings", ytId: "gU23O0WP71g" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time Ghost Your Enthusiasm", ytId: "jysK2gSa_3Y" }
      ]
    },

    // ── NARRATIVES ────────────────────────────────────────────────────
    {
      id: "crime-elevation",
      category: "narrative",
      title: "Crime → Conscience → Discipline → Élévation",
      subtitle: "Une trajectoire en musique.",
      mood: "Arc narratif, transformation",
      icon: "↑",
      tracks: [
        { artist: "Roc Marciano", title: "Jungle Fever", album: "Marcberg", year: 2010, chapter: "I. La rue", ytSearch: "Roc Marciano Jungle Fever Marcberg", ytId: "hpar-be5JkE" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, chapter: "I. La rue", ytSearch: "Ka I've Been Here Before", ytId: "h4pSIupzFdA" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, chapter: "I. La rue", ytSearch: "Styles P Good Times I Get High", ytId: "4fJZbBcDsRQ" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, chapter: "II. La prise de conscience", ytSearch: "Ka Mourn at Night", ytId: "22qF6Drbihg" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, chapter: "II. La prise de conscience", ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, chapter: "III. La discipline", ytSearch: "Ka Cold Facts Honor Killed the Samurai", ytId: "QvlF0dDs4Gw" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, chapter: "III. La discipline", ytSearch: "Styles P Warrior Float", ytId: "QX2371V5ta4" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, chapter: "III. La discipline", ytSearch: "Roc Marciano Snow Marcberg", ytId: "AZSPs8oPYUk" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, chapter: "IV. L'élévation", ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Supreme Magnetic", album: "Supreme Magnetic", year: 2025, chapter: "IV. L'élévation", ytSearch: "Errol Holden Supreme Magnetic album", ytId: "Uo0jVKVBHtc" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, chapter: "IV. L'élévation", ytSearch: "Ka Wrapping Naked Wire" }
      ]
    },

    {
      id: "film-auteur",
      category: "narrative",
      title: "Film d'auteur new-yorkais",
      subtitle: "Réalisme. Lenteur. Tension. Élégance sombre.",
      mood: "Cinématographique, storytellers minimalistes",
      icon: "◫",
      tracks: [
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit", ytId: "d1hDpufNXd0" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises", ytId: "dACa3SqzE_U" },
        { artist: "Errol Holden", title: "Guantanamo Diaries", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Guantanamo Diaries", ytId: "gZ8s3GCa054" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies", ytId: "ZgAt9pHiqUQ" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times", ytId: "4fJZbBcDsRQ" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal", ytId: "Eir9WiqcJ9k" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts", ytId: "0YaL0FPdceY" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal", ytId: "Glytqr0UdiY" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence", ytId: "4py3XMbYdSE" }
      ]
    },

    {
      id: "homme-change-vie",
      category: "narrative",
      title: "L'itinéraire d'un homme qui change de vie",
      subtitle: "Quitter la rue. Se reconstruire. Stoïque.",
      mood: "Mature, lucide, transformationnel",
      icon: "→",
      tracks: [
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi", ytId: "OOTdy_vpFIA" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It", ytId: "p6TrQzNTrRA" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts", ytId: "QvlF0dDs4Gw" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg", ytId: "AZSPs8oPYUk" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time Ghost Enthusiasm", ytId: "jysK2gSa_3Y" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North", ytId: "DgrC0njnx4I" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence", ytId: "4py3XMbYdSE" }
      ]
    },

    // ── TECHNIQUE ─────────────────────────────────────────────────────
    {
      id: "beats-poussiéreux",
      category: "technique",
      title: "Beats minimalistes & samples poussiéreux",
      subtitle: "Production soul-mafioso. Texture avant tout.",
      mood: "Minimaliste, sombre, texturé",
      icon: "◌",
      tracks: [
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg", ytId: "AZSPs8oPYUk" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night", ytId: "22qF6Drbihg" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change", ytId: "mN5ORMHDy5Y" },
        { artist: "Roc Marciano", title: "Cashmere Ropes", album: "RR2: The Bitter Dose", year: 2018, ytSearch: "Roc Marciano Cashmere Ropes" },
        { artist: "Errol Holden & Roc Marciano", title: "Rod Lavers with the Stussy Hoodie", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Rod Lavers Roc Marciano", ytId: "jVQVAJ2PgiU" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, ytSearch: "Ka I've Been Here Before", ytId: "h4pSIupzFdA" },
        { artist: "Roc Marciano", title: "Pistol", album: "Behold a Dark Horse", year: 2018, ytSearch: "Roc Marciano Pistol", ytId: "3kj31RKZOLg" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies", ytId: "ZgAt9pHiqUQ" },
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings", ytId: "gU23O0WP71g" }
      ]
    },

    {
      id: "stoic-flow",
      category: "technique",
      title: "Stoic Flow",
      subtitle: "Calme mais tranchant. Dense. Précis.",
      mood: "Flows stoïques, introspectifs",
      icon: "≡",
      tracks: [
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts Honor Killed the Samurai", ytId: "QvlF0dDs4Gw" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts", ytId: "0YaL0FPdceY" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence", ytId: "4py3XMbYdSE" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi", ytId: "OOTdy_vpFIA" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal", ytId: "Glytqr0UdiY" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, ytSearch: "Styles P The Life", ytId: "pfblnrUjysI" }
      ]
    },

    {
      id: "street-philosophy",
      category: "technique",
      title: "Street Philosophy",
      subtitle: "Sagesse. Codes. Survie mentale.",
      mood: "Philosophique, introspectif, universel",
      icon: "Ψ",
      tracks: [
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit", ytId: "d1hDpufNXd0" },
        { artist: "Styles P", title: "Ghost In The Building", album: "G-Host", year: 2018, ytSearch: "Styles P Ghost In The Building", ytId: "ksXJPcGuQ3s" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain", ytId: "RswTGeL9wd0" },
        { artist: "Styles P & Ka", title: "The KA-BA", album: "Woeful Studies", year: 2022, ytSearch: "Ka The KA-BA Styles P Woeful Studies" },
        { artist: "Roc Marciano", title: "Marcielago", album: "Marcielago", year: 2019, ytSearch: "Roc Marciano Marcielago title track", ytId: "yvI0pBnjeTs" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies", ytId: "ZgAt9pHiqUQ" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It", ytId: "p6TrQzNTrRA" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship", ytId: "bzyPZvWtCN8" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change", ytId: "mN5ORMHDy5Y" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time", ytId: "jysK2gSa_3Y" }
      ]
    },

    // ── ALGO PERSONNEL ────────────────────────────────────────────────
    {
      id: "discipline-structure",
      category: "algo",
      title: "Discipline & Structure",
      subtitle: "Rigueur mentale. Constance. Ghost mode.",
      mood: "Discipline, structure, rigueur",
      icon: "⬛",
      tracks: [
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts", ytId: "QvlF0dDs4Gw" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float", ytId: "QX2371V5ta4" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts", ytId: "0YaL0FPdceY" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence", ytId: "4py3XMbYdSE" },
        { artist: "Errol Holden", title: "War Pig", album: "War Pig EP", year: 2025, ytSearch: "Errol Holden War Pig", ytId: "KlQE59OrMYk" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain", ytId: "RswTGeL9wd0" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time", ytId: "jysK2gSa_3Y" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal", ytId: "Glytqr0UdiY" }
      ]
    },

    {
      id: "energie-entrainement",
      category: "algo",
      title: "Energie sombre pour l'entraînement",
      subtitle: "Agressivité contrôlée. Feu froid.",
      mood: "Intense, physique, sombre",
      icon: "◢",
      tracks: [
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times", ytId: "4fJZbBcDsRQ" },
        { artist: "Errol Holden", title: "War Pig", album: "War Pig EP", year: 2025, ytSearch: "Errol Holden War Pig", ytId: "KlQE59OrMYk" },
        { artist: "Styles P", title: "Blow Your Mind", album: "G-Host", year: 2018, ytSearch: "Styles P Blow Your Mind", ytId: "R6imJp_CLac" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises", ytId: "dACa3SqzE_U" },
        { artist: "Errol Holden", title: "ZOMBIE PROTOCOL", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden ZOMBIE PROTOCOL", ytId: "ejJlG-A0ya0" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, ytSearch: "Styles P The Life", ytId: "pfblnrUjysI" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow", ytId: "AZSPs8oPYUk" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts", ytId: "QvlF0dDs4Gw" },
        { artist: "Errol Holden", title: "Rudy Ray Moore", album: "Rudy Ray Moore", year: 2025, ytSearch: "Errol Holden Rudy Ray Moore Black Thought", ytId: "VV75UdFEva4" },
        { artist: "Styles P", title: "Phantom and the Ghost", album: "Phantom and the Ghost", year: 2014, ytSearch: "Styles P Phantom and the Ghost", ytId: "sIRQgPJQOrk" }
      ]
    },

    {
      id: "ecriture-introspection",
      category: "algo",
      title: "Écriture & introspection",
      subtitle: "Silence. Profondeur. Beats lents.",
      mood: "Calme, profond, créatif",
      icon: "◻",
      tracks: [
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings", ytId: "gU23O0WP71g" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi", ytId: "OOTdy_vpFIA" },
        { artist: "Errol Holden & Roc Marciano", title: "Perhaps in the Next", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Perhaps in the Next", ytId: "qmdF9S2J62c" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change", ytId: "mN5ORMHDy5Y" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts", ytId: "0YaL0FPdceY" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence", ytId: "4py3XMbYdSE" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North", ytId: "DgrC0njnx4I" },
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit", ytId: "d1hDpufNXd0" }
      ]
    },

    // ── CARRÉ MAGIQUE ─────────────────────────────────────────────────
    {
      id: "carre-magique",
      category: "carre",
      title: "Le Carré Magique",
      subtitle: "Holden / Marci / Ka / Styles P — cohérence absolue.",
      mood: "Minimalisme, réalisme, élégance sombre",
      icon: "◼",
      tracks: [
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg", ytId: "AZSPs8oPYUk" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night", ytId: "22qF6Drbihg" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times", ytId: "4fJZbBcDsRQ" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal", ytId: "Eir9WiqcJ9k" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts", ytId: "QvlF0dDs4Gw" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float", ytId: "QX2371V5ta4" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P & Ka", title: "The KA-BA", album: "Woeful Studies", year: 2022, ytSearch: "Ka KA-BA Styles P" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship", ytId: "bzyPZvWtCN8" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal", ytId: "Glytqr0UdiY" }
      ]
    },

    {
      id: "lignee-stoique",
      category: "carre",
      title: "La Lignée New-Yorkaise Stoïque",
      subtitle: "Marci → Ka → Styles P → Holden. La continuité.",
      mood: "Progression chronologique et esthétique",
      icon: "⟶",
      tracks: [
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, era: "Les fondations (2010-2013)", ytSearch: "Roc Marciano Marci Enterprises Marcberg", ytId: "dACa3SqzE_U" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, era: "Les fondations (2010-2013)", ytSearch: "Roc Marciano 76 Reloaded", ytId: "CVm5b9TFi_Y" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, era: "Les fondations (2010-2013)", ytSearch: "Ka I've Been Here Before", ytId: "h4pSIupzFdA" },
        { artist: "Ka", title: "Searching", album: "The Night's Gambit", year: 2013, era: "La consolidation (2015-2018)", ytSearch: "Ka Searching Night's Gambit" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, era: "La consolidation (2015-2018)", ytSearch: "Ka Cold Facts Honor Killed the Samurai", ytId: "QvlF0dDs4Gw" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, era: "La consolidation (2015-2018)", ytSearch: "Styles P The Life", ytId: "pfblnrUjysI" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, era: "L'apogée (2019-2022)", ytSearch: "Styles P Presence album", ytId: "4py3XMbYdSE" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, era: "L'apogée (2019-2022)", ytSearch: "Ka Solitary Refinement" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, era: "L'apogée (2019-2022)", ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden Joe Frog", ytId: "wwLtUmaxRLw" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden visvim vandal Roc Marciano", ytId: "Eir9WiqcJ9k" },
        { artist: "Errol Holden", title: "Supreme Magnetic", album: "Supreme Magnetic", year: 2025, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden Supreme Magnetic", ytId: "Uo0jVKVBHtc" }
      ]
    }

  ],

  categories: [
    { id: "mood", label: "Ambiances", icon: "◆", color: "#8b1a1a" },
    { id: "narrative", label: "Histoires", icon: "→", color: "#4a6741" },
    { id: "technique", label: "Technique", icon: "≡", color: "#b8960c" },
    { id: "algo", label: "Mon Algorithme", icon: "◢", color: "#2a4a6b" },
    { id: "carre", label: "Le Carré Magique", icon: "◼", color: "#5a3a7a" }
  ]
};
