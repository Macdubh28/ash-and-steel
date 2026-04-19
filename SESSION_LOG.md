# ASH & STEEL — Session Log

## 📖 But de ce fichier

Journal technique des sessions de travail sur ASH & STEEL.
Chaque session ajoute une entrée en haut (ordre antéchronologique).
En début de nouvelle session, lire la dernière entrée pour reprendre le fil.

---

## Session du 19 avril 2026 — Mission Bios

### 🎯 Objectif
Créer 4 pages artistes dédiées avec biographies longues, citations, discographies, playlists filtrées, et éléments spéciaux (mémorial Ka, bloc Filiation Styles P).

### ✅ Livré

**Données (`data.js`, désormais 43 382 caractères)**
- Champ `bioLong` pour les 4 artistes (4 paragraphes chacun, sources web vérifiées)
- Champ `quote` + `quoteSource` (citation signature par artiste)
- Champ `whyHere` ("Pourquoi dans ASH & STEEL")
- Champs `memorial` + `memorialTribute` + `memorialTributeSource` (uniquement pour Ka)
- Champ `filiation` (uniquement pour Styles P — reconnaissance du blaze Ghost)

**4 pages HTML dédiées**
- `ka.html` — couleur #4a6741 (vert forêt), avec bloc In Memoriam (Kaseem Ryan 1972–2024, hommage d'Alchemist)
- `holden.html` — couleur #8b1a1a (rouge sang)
- `marciano.html` — couleur #b8960c (or)
- `stylesp.html` — couleur #2a4a6b (bleu nuit), avec bloc Filiation qui reconnaît Styles P comme parrain symbolique du blaze Ghost (Macdubh / GHOST-2 / Ghost mode)

**`index.html` modifié**
- Fonction `renderArtists()` patchée : les 4 cartes artistes renvoient vers leur page dédiée (`href="ka.html"` etc.) au lieu du scroll interne
- Indicateur visuel ajouté : "N sorties cataloguées · Voir la page →" dans la couleur de l'artiste

### 🔧 Workflow technique validé

1. **Backup systématique** avant toute modification de `data.js` : `cp data.js data.js.backup`
2. **`.gitignore`** créé pour exclure `*.backup` du repo
3. **Python pour injections chirurgicales** dans `data.js` (idempotent : détection de doublon avant ajout)
4. **Terminal heredoc** (`cat > file << 'EOF' ... EOF`) pour création des fichiers HTML
5. **Cowork NON utilisé** (filesystem isolé, ne peut pas écrire dans le repo local)
6. **Test local systématique** (`open fichier.html`) avant commit
7. **Commits sans accents ni `!`** pour éviter les bugs zsh

### 📝 Structure technique du système de bios

Les pages artistes sont **purement data-driven** : tout le contenu est lu depuis `ASH_DATA.artists[id]` au runtime via JavaScript. Aucune duplication de données. Modifier `data.js` met à jour les 4 pages automatiquement.

Schéma par artiste dans `data.js` :

---

## Session — 2026-04-19 — Backlog v1.0 cleared

**Contexte :** reprise d'ASH & STEEL après le build initial et la PWA. Trois items backlog à clore : YouTube IDs réels, Service Worker iPhone-ready, interconnexion avec le Ghost ecosystem dashboard.

### 1. YouTube IDs réels dans data.js
- **Méthode :** `yt-dlp --get-id --no-playlist "ytsearch1:QUERY"` via Terminal local (évite le quota Chrome MCP)
- **Script :** `~/Desktop/fetch_ytids.py` → lit les 47 tracks uniques, produit `~/Desktop/ytids.json`
- **Résultat :** 42/47 IDs trouvés en 2 min. Les 5 manquants sont tous Ka/Roc sans upload dédié (catalogue ultra-underground) — `ytSearch` fallback conservé
- **Injection :** `~/Desktop/patch_data.py` avec regex non-greedy sur les blocs track → **133 `ytId` injectés** dans les 155 entrées de playlists (certaines tracks apparaissent dans plusieurs playlists)
- **Commit :** 8ffca1e — `feat: inject 133 real YouTube IDs into tracks`
- **Validation live :** le player (index.html l.144-150) lit déjà `track.ytId` en priorité, fallback `ytSearch` — aucun patch JS nécessaire

### 2. Service Worker v2 — iPhone-ready
- **Diagnostic v1 :** cache incomplet (4 assets seulement : /, index.html, style.css, data.js). Manquait pages artistes, manifest, icons
- **v2 implémenté :** 11 assets cachés (racine + 5 HTML + CSS + data.js + manifest + 2 icons), stratégie différenciée :
  - **HTML / navigate** : network-first avec fallback cache (updates fraîches sans attendre)
  - **CSS / JS / images / JSON** : cache-first (perf)
  - **YouTube / ytimg / ggpht** : skip total (le player gère)
- **Bump :** `ash-steel-v1` → `ash-steel-v2`, ancien cache purgé à l'activate
- **Commit :** d62ae8a — `feat(sw): v2 - cache complete assets, network-first HTML, iPhone-ready`

### 3. Ghost ecosystem dashboard interconnexion
**Bidirectionnel :**

**a. Dashboard → ASH & STEEL** (config.json v1.2.0 → v1.4.0) :
- Ajout bloc `ash-and-steel` avec nav (4 artistes), citation Styles P, couleur #8b1a1a, icône 🔥
- Ordre préservé : `[hegemonikon, marc-aurele, ash-and-steel, dashboard]`
- Script : `~/Desktop/patch_dashboard_config.py`
- Commit dashboard : 9c045ed

**b. ASH & STEEL → Dashboard** (footer link) :
- Ajout `.footer-ecosystem > .footer-link` avec icône ⚡, texte "Ghost Ecosystem"
- Style cohérent : `var(--acier)` opacité 0.6 au repos, `var(--sang)` au hover
- Scripts : `patch_footer.py` (HTML) + `patch_footer_css.py` (CSS avant @media mobile)
- Commit : a67b0a0

**c. Hotfix v1.4.1 — `quoteOfDay` alias** :
- **Bug détecté en live :** dashboard affichait "Erreur : Cannot read properties of undefined (reading 'text')" et fallback sur config hardcodé v1.2.0 (3 plateformes au lieu de 4)
- **Cause :** code JS attend `config.global.quoteOfDay`, mais config.json utilise `citationDuJour`
- **Fix choisi :** non-destructif côté config (dupliquer en alias `quoteOfDay`) plutôt que patcher le code dashboard
- Commit dashboard : 44ad73a

### Validation finale live
- ✅ Player YouTube lit bien les `ytId` (vérifié via console : Joe Frog → `wwLtUmaxRLw`)
- ✅ SW v2 actif, cache nommé `ash-steel-v2` avec 11 entrées (l'ancien v1 purgé)
- ✅ Dashboard affiche 4 cards : HEGEMONIKON / Aurelius Secundus / **ASH & STEEL** / GHOST-2 Dashboard
- ✅ Footer ASH & STEEL : lien `⚡ Ghost Ecosystem` pointant vers `macdubh28.github.io/dashboard/`

### Leçons / patterns à retenir
- **Terminal + yt-dlp** : plus efficace que Chrome MCP pour le scraping batch (évite quota + rate-limit auto). À réutiliser pour OBSCURO, HEGEMONIKON si besoin de data externe
- **Network-first pour HTML, cache-first pour assets** : bonne stratégie PWA par défaut. Évite le piège du "app stuck on old version" typique des SW cache-first naïfs
- **Contract entre config.json et consumers** : toujours versionner le schema, et quand on renomme un champ, garder l'ancien en alias pendant au moins 1-2 versions
- **Ordre des plateformes dans config** : `dashboard` reste en dernier par convention (c'est le hub, pas une plateforme comme les autres)

### État final v1.0 — ASH & STEEL
Plus aucun item au backlog v1.0. Écosystème pleinement interconnecté. Prêt pour v1.1 (idées futures : badges d'écoute, stats personnelles localStorage, nouvelle playlist "Hermit & Recluse" Ka × Animoss).

