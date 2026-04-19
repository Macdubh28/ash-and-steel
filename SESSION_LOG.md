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
