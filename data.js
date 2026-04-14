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
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship" },
        { artist: "Errol Holden", title: "Cashmere Kufis", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Cashmere Kufis" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night Honor Killed the Samurai" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, ytSearch: "Ka I've Been Here Before Grief Pedigree" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire Woeful Studies" },
        { artist: "Errol Holden", title: "Guantanamo Diaries", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Guantanamo Diaries" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change Night's Gambit" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain" }
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
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Roc Marciano", title: "Greneberg", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Greneberg" },
        { artist: "Roc Marciano", title: "Yayo", album: "Marcielago", year: 2019, ytSearch: "Roc Marciano Yayo Marcielago" },
        { artist: "Roc Marciano", title: "Cashmere Ropes", album: "RR2: The Bitter Dose", year: 2018, ytSearch: "Roc Marciano Cashmere Ropes RR2" },
        { artist: "Errol Holden & Roc Marciano", title: "Rod Lavers with the Stussy Hoodie", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Rod Lavers Stussy Hoodie Roc Marciano" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal Rosebudd's Revenge" },
        { artist: "Roc Marciano", title: "Pistol", album: "Behold a Dark Horse", year: 2018, ytSearch: "Roc Marciano Pistol Behold Dark Horse" },
        { artist: "Errol Holden", title: "Pig Latin", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Pig Latin Supreme Magnetic" },
        { artist: "Roc Marciano", title: "Jungle Fever", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Jungle Fever Marcberg" }
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
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times I Get High" },
        { artist: "Styles P", title: "The Life", album: "The Life / The Trouble Is...", year: 2016, ytSearch: "Styles P The Life" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts Honor Killed the Samurai" },
        { artist: "Styles P", title: "Phantom and the Ghost", album: "Phantom and the Ghost", year: 2014, ytSearch: "Styles P Phantom and the Ghost" },
        { artist: "Styles P", title: "Blow Your Mind", album: "G-Host", year: 2018, ytSearch: "Styles P Blow Your Mind G-Host" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement A Martyr's Reward" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It" },
        { artist: "Styles P & Ka", title: "The KA-BA feat. Styles P", album: "Woeful Studies", year: 2022, ytSearch: "Ka The KA-BA Styles P" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence album" }
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
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North" },
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Styles P", title: "Ghost In The Building", album: "G-Host", year: 2018, ytSearch: "Styles P Ghost In The Building" },
        { artist: "Errol Holden & Roc Marciano", title: "Perhaps in the Next", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Perhaps in the Next Roc Marciano" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi Grief Pedigree" },
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time Ghost Your Enthusiasm" }
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
        { artist: "Roc Marciano", title: "Jungle Fever", album: "Marcberg", year: 2010, chapter: "I. La rue", ytSearch: "Roc Marciano Jungle Fever Marcberg" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, chapter: "I. La rue", ytSearch: "Ka I've Been Here Before" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, chapter: "I. La rue", ytSearch: "Styles P Good Times I Get High" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, chapter: "II. La prise de conscience", ytSearch: "Ka Mourn at Night" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, chapter: "II. La prise de conscience", ytSearch: "Errol Holden Joe Frog" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, chapter: "III. La discipline", ytSearch: "Ka Cold Facts Honor Killed the Samurai" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, chapter: "III. La discipline", ytSearch: "Styles P Warrior Float" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, chapter: "III. La discipline", ytSearch: "Roc Marciano Snow Marcberg" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, chapter: "IV. L'élévation", ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Supreme Magnetic", album: "Supreme Magnetic", year: 2025, chapter: "IV. L'élévation", ytSearch: "Errol Holden Supreme Magnetic album" },
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
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises" },
        { artist: "Errol Holden", title: "Guantanamo Diaries", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Guantanamo Diaries" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence" }
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
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time Ghost Enthusiasm" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence" }
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
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change" },
        { artist: "Roc Marciano", title: "Cashmere Ropes", album: "RR2: The Bitter Dose", year: 2018, ytSearch: "Roc Marciano Cashmere Ropes" },
        { artist: "Errol Holden & Roc Marciano", title: "Rod Lavers with the Stussy Hoodie", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Rod Lavers Roc Marciano" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, ytSearch: "Ka I've Been Here Before" },
        { artist: "Roc Marciano", title: "Pistol", album: "Behold a Dark Horse", year: 2018, ytSearch: "Roc Marciano Pistol" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies" },
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings" }
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
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts Honor Killed the Samurai" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, ytSearch: "Styles P The Life" }
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
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit" },
        { artist: "Styles P", title: "Ghost In The Building", album: "G-Host", year: 2018, ytSearch: "Styles P Ghost In The Building" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain" },
        { artist: "Styles P & Ka", title: "The KA-BA", album: "Woeful Studies", year: 2022, ytSearch: "Ka The KA-BA Styles P Woeful Studies" },
        { artist: "Roc Marciano", title: "Marcielago", album: "Marcielago", year: 2019, ytSearch: "Roc Marciano Marcielago title track" },
        { artist: "Ka", title: "The Package", album: "Woeful Studies", year: 2022, ytSearch: "Ka The Package Woeful Studies" },
        { artist: "Styles P", title: "We're Gonna Make It", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P We Gonna Make It" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time" }
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
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, ytSearch: "Ka Solitary Refinement" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence" },
        { artist: "Errol Holden", title: "War Pig", album: "War Pig EP", year: 2025, ytSearch: "Errol Holden War Pig" },
        { artist: "Ka", title: "Dust", album: "Descendants of Cain", year: 2020, ytSearch: "Ka Dust Descendants of Cain" },
        { artist: "Styles P", title: "Time", album: "Styles David Ghost Your Enthusiasm", year: 2020, ytSearch: "Styles P Time" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal" }
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
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times" },
        { artist: "Errol Holden", title: "War Pig", album: "War Pig EP", year: 2025, ytSearch: "Errol Holden War Pig" },
        { artist: "Styles P", title: "Blow Your Mind", album: "G-Host", year: 2018, ytSearch: "Styles P Blow Your Mind" },
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Marci Enterprises" },
        { artist: "Errol Holden", title: "ZOMBIE PROTOCOL", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden ZOMBIE PROTOCOL" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, ytSearch: "Styles P The Life" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts" },
        { artist: "Errol Holden", title: "Rudy Ray Moore", album: "Rudy Ray Moore", year: 2025, ytSearch: "Errol Holden Rudy Ray Moore Black Thought" },
        { artist: "Styles P", title: "Phantom and the Ghost", album: "Phantom and the Ghost", year: 2014, ytSearch: "Styles P Phantom and the Ghost" }
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
        { artist: "Roc Marciano", title: "Remy Sings", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Remy Sings" },
        { artist: "Ka", title: "Peace Akhi", album: "Grief Pedigree", year: 2012, ytSearch: "Ka Peace Akhi" },
        { artist: "Errol Holden & Roc Marciano", title: "Perhaps in the Next", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Perhaps in the Next" },
        { artist: "Ka", title: "Seasons Change", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Seasons Change" },
        { artist: "Roc Marciano", title: "Waltz of the Clueless", album: "Marci Beaucoup", year: 2013, ytSearch: "Roc Marciano Waltz of the Clueless" },
        { artist: "Ka", title: "Decisions", album: "Languish Arts", year: 2022, ytSearch: "Ka Decisions Languish Arts" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, ytSearch: "Styles P Presence" },
        { artist: "Errol Holden", title: "Evelyn & North", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Evelyn North" },
        { artist: "Ka", title: "Searching (For Something)", album: "The Night's Gambit", year: 2013, ytSearch: "Ka Searching Night's Gambit" }
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
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, ytSearch: "Errol Holden Joe Frog" },
        { artist: "Roc Marciano", title: "Snow", album: "Marcberg", year: 2010, ytSearch: "Roc Marciano Snow Marcberg" },
        { artist: "Ka", title: "Mourn at Night", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Mourn at Night" },
        { artist: "Styles P", title: "Good Times (I Get High)", album: "A Gangster and a Gentleman", year: 2002, ytSearch: "Styles P Good Times" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, ytSearch: "Errol Holden Roc Marciano visvim vandal" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, ytSearch: "Ka Cold Facts" },
        { artist: "Styles P", title: "Warrior", album: "Float", year: 2013, ytSearch: "Styles P Warrior Float" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Styles P & Ka", title: "The KA-BA", album: "Woeful Studies", year: 2022, ytSearch: "Ka KA-BA Styles P" },
        { artist: "Errol Holden", title: "Mont Blanc Penmanship", album: "Supreme Magnetic", year: 2025, ytSearch: "Errol Holden Mont Blanc Penmanship" },
        { artist: "Roc Marciano", title: "Raw Deal", album: "Rosebudd's Revenge", year: 2017, ytSearch: "Roc Marciano Raw Deal" }
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
        { artist: "Roc Marciano", title: "Marci Enterprises", album: "Marcberg", year: 2010, era: "Les fondations (2010-2013)", ytSearch: "Roc Marciano Marci Enterprises Marcberg" },
        { artist: "Roc Marciano", title: "76", album: "Reloaded", year: 2012, era: "Les fondations (2010-2013)", ytSearch: "Roc Marciano 76 Reloaded" },
        { artist: "Ka", title: "I've Been Here Before", album: "Grief Pedigree", year: 2012, era: "Les fondations (2010-2013)", ytSearch: "Ka I've Been Here Before" },
        { artist: "Ka", title: "Searching", album: "The Night's Gambit", year: 2013, era: "La consolidation (2015-2018)", ytSearch: "Ka Searching Night's Gambit" },
        { artist: "Ka", title: "Cold Facts", album: "Honor Killed the Samurai", year: 2016, era: "La consolidation (2015-2018)", ytSearch: "Ka Cold Facts Honor Killed the Samurai" },
        { artist: "Styles P", title: "The Life", album: "The Life", year: 2016, era: "La consolidation (2015-2018)", ytSearch: "Styles P The Life" },
        { artist: "Styles P", title: "Presence", album: "Presence", year: 2019, era: "L'apogée (2019-2022)", ytSearch: "Styles P Presence album" },
        { artist: "Ka", title: "Solitary Refinement", album: "A Martyr's Reward", year: 2021, era: "L'apogée (2019-2022)", ytSearch: "Ka Solitary Refinement" },
        { artist: "Ka", title: "Wrapping Naked Wire", album: "Woeful Studies", year: 2022, era: "L'apogée (2019-2022)", ytSearch: "Ka Wrapping Naked Wire" },
        { artist: "Errol Holden", title: "Joe Frog", album: "Joe Frog", year: 2022, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden Joe Frog" },
        { artist: "Errol Holden & Roc Marciano", title: "visvim vandal", album: "Mulberry Silk Road", year: 2025, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden visvim vandal Roc Marciano" },
        { artist: "Errol Holden", title: "Supreme Magnetic", album: "Supreme Magnetic", year: 2025, era: "La nouvelle garde (2022–)", ytSearch: "Errol Holden Supreme Magnetic" }
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
