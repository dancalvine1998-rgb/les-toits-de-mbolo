# Les Toits de Mbolo : mise en ligne et installation

## 1. Mettre le jeu en ligne (GitHub Pages, gratuit)
1. Sur github.com, cliquez sur « New repository ». Nom : `les-toits-de-mbolo`. Visibilité : Public. Cliquez sur « Create repository ».
2. Sur la page du dépôt, cliquez sur « uploading an existing file ».
3. Glissez tout le contenu de ce dossier : `index.html`, `manifest.webmanifest`, `sw.js`, le dossier `icones`, et ce fichier. Cliquez sur « Commit changes ».
4. Ouvrez Settings, puis Pages. Dans « Build and deployment », choisissez « Deploy from a branch », la branche `main` et le dossier `/ (root)`, puis cliquez sur Save.
5. Après une à deux minutes, le jeu est en ligne à l'adresse : `https://VOTRE-PSEUDO.github.io/les-toits-de-mbolo/`

## 2. Installer le jeu
- **Android (Chrome)** : ouvrez le lien, puis touchez « Installer le jeu sur cet appareil » sur l'écran d'accueil du jeu, ou menu ⋮, puis « Installer l'application ».
- **iPhone et iPad (Safari)** : ouvrez le lien dans Safari, touchez Partager, puis « Sur l'écran d'accueil ».
- **Windows (Edge ou Chrome)** : ouvrez le lien, puis cliquez sur l'icône d'installation dans la barre d'adresse, ou sur le bouton du jeu. Le jeu apparaît ensuite dans le menu Démarrer.

Une fois installé, le jeu s'ouvre en plein écran depuis son icône et fonctionne sans connexion.

## 3. Mettre à jour
Remplacez `index.html` et `sw.js` dans le dépôt (« Add file », puis « Upload files ») par ceux de la nouvelle version. Les appareils récupèrent la mise à jour au lancement suivant, s'ils sont connectés.
