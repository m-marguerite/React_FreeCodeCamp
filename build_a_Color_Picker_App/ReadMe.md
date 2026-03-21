# 🎨 Color Picker

Une application React interactive qui permet de sélectionner une couleur via un input natif HTML5, et d'appliquer cette couleur dynamiquement comme fond du conteneur en temps réel.

## 🚀 Fonctionnalités

- Sélection de couleur via un `<input type="color">` natif HTML5
- Mise à jour en temps réel du fond du conteneur selon la couleur choisie
- Gestion de l'état local avec le Hook React `useState`
- Transition CSS fluide lors du changement de couleur (`transition: background-color 0.3s ease`)
- Styles inline appliqués directement via JSX

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- [npm](https://www.npmjs.com/) v9 ou supérieur (inclus avec Node.js)
- Connaissance de base de React et des composants fonctionnels

## 📂 Structure du projet

```
color-picker/
│── index.html        # Point d'entrée HTML — monte le composant React dans le DOM
│── ColorPicker.jsx   # Composant principal — logique et rendu de l'application
│── README.md         # Documentation
```

## 🛠️ Technologies utilisées

- **React 18** — Bibliothèque JavaScript pour construire des interfaces utilisateur basées sur des composants
- **JSX** — Syntaxe d'extension JavaScript permettant d'écrire du HTML directement dans du code React
- **Hook `useState`** — Hook React natif pour gérer l'état local d'un composant fonctionnel
- **HTML5 `<input type="color">`** — Élément natif du navigateur qui ouvre le sélecteur de couleur système
- **CSS inline via JSX** — Application de styles directement dans le JSX via l'attribut `style` sous forme d'objet JavaScript

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/m-marguerite/color-picker.git

# 2. Se déplacer dans le dossier du projet
cd color-picker

# 3. Installer les dépendances
npm install

# 4. Lancer l'application en mode développement
npm start
```

L'application sera accessible à l'adresse : `http://localhost:3000`

### Autres commandes disponibles

| Commande | Description |
|---|---|
| `npm start` | Lance le serveur de développement avec rechargement automatique |
| `npm run build` | Compile le projet pour la production dans le dossier `/build` |
| `npm test` | Lance les tests unitaires via Jest |
| `npm run eject` | Expose la configuration Webpack/Babel (action irréversible) |

## 🎯 Objectif pédagogique

Ce projet illustre les bases fondamentales de React à travers un cas concret et interactif :

- **`useState`** : Initialisation et mise à jour d'un état local dans un composant fonctionnel avec le destructuring de tableau (`const [color, setColor] = useState("#ffffff")`)
- **Gestion des événements** : Utilisation du gestionnaire `onChange` pour capturer la valeur d'un champ `<input>` en temps réel via l'objet événement (`e.target.value`)
- **Styles dynamiques** : Application de styles CSS conditionnels via l'attribut `style` JSX, où la valeur de `backgroundColor` est pilotée directement par l'état React
- **Composant fonctionnel exporté** : Utilisation du mot-clé `export` sur un composant fonctionnel fléché pour le rendre importable dans d'autres modules
- **Réactivité React** : Comprendre le cycle de rendu — chaque appel à `setColor` déclenche un nouveau rendu du composant avec la valeur d'état mise à jour

## 📧 Contact

Auteur : **m-marguerite**  
Projet réalisé dans le cadre du cursus [Certified Full Stack Developer — FreeCodeCamp](https://www.freecodecamp.org/learn/full-stack-developer/)
