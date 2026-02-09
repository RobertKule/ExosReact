# 📚 COURS BACKEND NODE.JS POUR DÉBUTANTS COMPLETS

## **📝 QUIZ PRÉ-REQUIS (25 questions avec pièges)**

### **Questions sur le Frontend (HTML/CSS/JavaScript)**

1. **Que signifie HTML ?**
   A) Hyper Text Markup Language
   B) High Tech Modern Language
   C) Hyper Transfer Markup Language
   D) Home Tool Markup Language
   **Réponse : A**

2. **Quelle balise HTML crée un lien ?**
   A) `<link>`
   B) `<a>`
   C) `<href>`
   D) `<url>`
   **Réponse : B**

3. **En CSS, que fait `color: blue;` ?**
   A) Change la couleur de fond
   B) Change la couleur du texte
   C) Change la bordure
   D) Change la taille
   **Réponse : B**

4. **Quel code JavaScript affiche une alerte ?**
   A) `console.log("message")`
   B) `alert("message")`
   C) `print("message")`
   D) `show("message")`
   **Réponse : B**

5. **Que fait `document.getElementById("monId")` ?**
   A) Crée un nouvel élément
   B) Trouve un élément par son ID
   C) Supprime un élément
   D) Change le titre
   **Réponse : B**

### **Questions sur JavaScript**

6. **Quelle est la valeur de `typeof "42"` ?**
   A) "number"
   B) "string"
   C) "42"
   D) "text"
   **Réponse : B**

7. **Comment déclarer une variable en JavaScript moderne ?**
   A) `var x = 5;`
   B) `let x = 5;`
   C) `const x = 5;`
   D) Les trois sont valides
   **Réponse : D**

8. **Que retourne `[1, 2, 3].map(x => x * 2)` ?**
   A) `[2, 4, 6]`
   B) `6`
   C) `[1, 2, 3, 1, 2, 3]`
   D) Erreur
   **Réponse : A**

9. **Qu'est-ce qu'une fonction fléchée ?**
   A) `function() {}`
   B) `() => {}`
   C) `() {}`
   D) `arrow function() {}`
   **Réponse : B**

10. **Comment attendre qu'une promesse se termine ?**
    A) `.then()`
    B) `async/await`
    C) Les deux A et B
    D) `.wait()`
    **Réponse : C**

### **Questions sur React**

11. **Qu'est-ce que JSX ?**
    A) Un nouveau langage
    B) JavaScript XML
    C) Un framework CSS
    D) Une base de données
    **Réponse : B**

12. **Comment passe-t-on des données à un composant React ?**
    A) Avec `state`
    B) Avec `props`
    C) Avec `context`
    D) Avec `variables`
    **Réponse : B**

13. **Quel hook gère l'état local ?**
    A) `useEffect`
    B) `useState`
    C) `useContext`
    D) `useReducer`
    **Réponse : B**

14. **Que fait `useEffect(() => {}, [])` ?**
    A) S'exécute à chaque rendu
    B) S'exécute une seule fois
    C) Ne s'exécute jamais
    D) S'exécute quand un state change
    **Réponse : B**

15. **Comment importer un composant ?**
    A) `import Component from './Component';`
    B) `require('./Component');`
    C) `include './Component';`
    D) `load './Component';`
    **Réponse : A**

### **Questions sur Internet et Backend**

16. **Que signifie HTTP ?**
    A) HyperText Transfer Protocol
    B) High Tech Transfer Process
    C) Hyper Transfer Text Protocol
    D) Home Transfer Protocol
    **Réponse : A**

17. **Quel code HTTP signifie "Succès" ?**
    A) 200
    B) 404
    C) 500
    D) 301
    **Réponse : A**

18. **Qu'est-ce qu'une API ?**
    A) Application Programming Interface
    B) Advanced Programming Interface
    C) Application Process Interface
    D) Advanced Process Interface
    **Réponse : A**

19. **Que signifie CRUD ?**
    A) Create, Read, Update, Delete
    B) Code, Run, Update, Delete
    C) Create, Run, Update, Develop
    D) Code, Read, Update, Develop
    **Réponse : A**

20. **Quelle méthode HTTP sert à récupérer des données ?**
    A) GET
    B) POST
    C) PUT
    D) DELETE
    **Réponse : A**

### **Questions Pièges**

21. **Node.js peut exécuter du JavaScript :**
    A) Uniquement dans le navigateur
    B) Uniquement sur un serveur
    C) Sur un serveur et dans le navigateur
    D) Nulle part
    **Réponse : C**

22. **Lequel n'est PAS un framework backend JavaScript ?**
    A) Express
    B) React
    C) Koa
    D) Nest
    **Réponse : B**

23. **NPM signifie :**
    A) Node Package Manager
    B) New Package Manager
    C) Node Program Manager
    D) Network Package Manager
    **Réponse : A**

24. **Quelle commande installe un package ?**
    A) `npm get package`
    B) `npm add package`
    C) `npm install package`
    D) `npm download package`
    **Réponse : C**

25. **Un serveur local s'appelle :**
    A) `localhost`
    B) `127.0.0.1`
    C) Les deux A et B
    D) `localpc`
    **Réponse : C**

---

## **📊 ÉVALUATION DU QUIZ**

### **Niveaux :**

**🎯 21-25 bonnes réponses : EXPERT DES BASES**
Vous maîtrisez parfaitement les concepts frontend et backend. Node.js sera naturel pour vous !

**🥇 16-20 bonnes réponses : TRÈS BONNES CONNAISSANCES**
Vous comprenez bien JavaScript et les concepts web. Parfait pour commencer Node.js.

**🥈 11-15 bonnes réponses : CONNAISSANCES MOYENNES**
Vous avez les bases mais certaines notions sont floues. Ce cours va tout clarifier.

**🥉 6-10 bonnes réponses : DÉBUTANT MOTIVÉ**
Vous connaissez quelques concepts. Ce cours va vous apprendre depuis le début.

**🎯 0-5 bonnes réponses : NOUVEAU COMPLET**
Parfait ! Vous allez tout apprendre ensemble, sans mauvaises habitudes.

---

## **🎯 PARTIE 1 : INTRODUCTION AU BACKEND**

### **Théorie : Qu'est-ce que le Backend ?**

**Analogie du Restaurant :**
```
🏠 FRONTEND (Salle du restaurant)
├── Décor beau (HTML/CSS)
├── Menu interactif (JavaScript)
├── Clients (Utilisateurs)
└→ Ce que VOUS voyez

👨‍🍳 BACKEND (Cuisine)
├── Stock (Base de données)
├── Recettes (Logique métier)
├── Chefs (Serveurs)
└→ Ce qui se passe EN COULISSES

📞 API = Le serveur qui fait le lien
```

### **Le Problème Historique :**

**Avant 2009 : La Tour de Babel du Développement**
```javascript
// Un développeur devait connaître :
FRONTEND : JavaScript ✅
BACKEND : PHP ❌ (langage différent!)
           ou Java ❌ (encore différent!)
           ou Python ❌ (toujours différent!)
           ou Ruby ❌ (oh non!)

// Problèmes :
1. Apprendre 2+ langages différents
2. Context switch constant
3. Communautés séparées
4. Outils incompatibles
```

**Conséquence :** Les équipes étaient divisées :
- **Frontend Devs** = Les "artistes" JavaScript
- **Backend Devs** = Les "ingénieurs" PHP/Java

---

## **✏️ À VOTRE TOUR - Exercice 1**

**Réflexion :** 
Imaginez-vous être chef de projet. Pourquoi pensez-vous qu'avoir le même langage (JavaScript) pour le frontend et le backend serait un avantage ?

**Écrivez 3 avantages :**
1. ________________________________
2. ________________________________
3. ________________________________

---

## **📝 MINI-QUIZ 1 (5 questions aléatoires)**

### **1. Le backend gère principalement :**
A) L'apparence des pages
B) La logique et les données
C) Les animations CSS
D) Le design
**Réponse : B**

### **2. Avant Node.js, un développeur JavaScript devait :**
A) Apprendre un autre langage pour le backend
B) Utiliser seulement JavaScript
C) Écrire en Java pour le frontend
D) Rien de spécial
**Réponse : A**

### **3. L'API dans un restaurant représente :**
A) La cuisine
B) Le serveur qui communique
C) Les clients
D) Le menu
**Réponse : B**

### **4. Le frontend s'exécute dans :**
A) Le navigateur
B) Le serveur
C) La base de données
D) Le terminal
**Réponse : A**

### **5. CRUD signifie :**
A) Create, Read, Update, Delete
B) Code, Run, Update, Debug
C) Create, Run, Use, Delete
D) Code, Read, Update, Develop
**Réponse : A**

---

## **🎯 PARTIE 2 : LES ORIGINES DE NODE.JS**

### **Théorie : Le Créateur et Son Problème**

**L'Homme : Ryan Dahl** 🇺🇸
- **Date :** 2009
- **Problème observé :** Les serveurs web étaient lents avec plusieurs connexions simultanées
- **Son idée géniale :** "Et si on utilisait JavaScript, qui est excellent pour faire plusieurs choses en même temps (asynchrone), pour faire tourner des serveurs ?"

### **Pourquoi JavaScript pour les Serveurs ?**

**Le Super-pouvoir de JavaScript : Asynchrone**
```javascript
// JavaScript sait attendre sans bloquer :
setTimeout(() => {
    console.log("Après 2 secondes");
}, 2000);

console.log("Tout de suite!");
// Affiche : "Tout de suite!" puis "Après 2 secondes"
// Le programme continue pendant l'attente !
```

**Les Serveurs Traditionnels :** Comme un restaurant avec UN seul serveur qui s'occupe d'UN client à la fois.

**Node.js :** Comme un restaurant avec UN serveur super efficace qui prend plusieurs commandes en même temps.

### **La Naissance de Node.js**

```
2009 : Ryan Dahl présente Node.js
      = JavaScript + Moteur V8 de Chrome + API système

V8 = Moteur ultra-rapide de Chrome qui exécute JavaScript
API système = Accès aux fichiers, réseau, etc.
```

**Premières réactions :**
- "JavaScript sur un serveur ? Ridicule !"
- "Ça ne marchera jamais !"
- "Pourquoi réinventer la roue ?"

**Mais... ça a marché !** Pourquoi ?
1. **Un seul langage** = Productivité ×2
2. **Asynchrone** = Performances excellentes
3. **NPM** = Énorme bibliothèque de packages

---

## **✏️ À VOTRE TOUR - Exercice 2**

**Comprenez l'asynchrone :**
Dans quel ordre s'affichent ces messages ?

```javascript
console.log("1. Début");

setTimeout(() => {
    console.log("2. Timeout");
}, 0);

console.log("3. Fin");

// Ordre réel : ______, ______, ______
```

---

## **📝 MINI-QUIZ 2 (5 questions aléatoires)**

### **1. Node.js a été créé en :**
A) 2005
B) 2009
C) 2012
D) 2015
**Réponse : B**

### **2. Le créateur de Node.js est :**
A) Mark Zuckerberg
B) Ryan Dahl
C) Brendan Eich
D) Elon Musk
**Réponse : B**

### **3. Node.js utilise le moteur :**
A) SpiderMonkey
B) V8
C) JavaScriptCore
D) Chakra
**Réponse : B**

### **4. L'asynchrone signifie que JavaScript peut :**
A) Attendre sans bloquer
B) Lire des fichiers
C) Écrire du HTML
D) Créer des animations
**Réponse : A**

### **5. Avant Node.js, JavaScript s'exécutait :**
A) Uniquement dans le navigateur
B) Sur les serveurs
C) Sur mobile
D) Nulle part
**Réponse : A**

---

## **🎯 PARTIE 3 : REACT VS NODE - OÙ S'EXÉCUTENT-ILS ?**

### **Théorie : Deux Environnements Différents**

**React = JavaScript dans le Navigateur**
```javascript
// Code React (dans le navigateur)
function App() {
    // Ce code tourne chez l'UTILISATEUR
    // Sur SON ordinateur, dans SON Chrome/Firefox
    return <h1>Bonjour!</h1>;
}
```

**Node.js = JavaScript dans le Terminal/Serveur**
```javascript
// Code Node.js (dans le terminal)
const fs = require('fs');
// Ce code tourne sur le SERVEUR
// Sur NOTRE ordinateur, dans le terminal
```

### **Votre Premier Code Node.js (MAINTENANT !)**

#### **Étape 1 : Vérifier l'installation**
```bash
# Ouvrez le terminal (CMD sur Windows, Terminal sur Mac)
node --version
# Doit afficher : v18.x.x ou v20.x.x
```

#### **Étape 2 : Créer un fichier JavaScript**
```bash
# Créez un fichier
touch mon-premier-node.js
# Ou créez-le avec VS Code
```

#### **Étape 3 : Écrire du code Node.js**
```javascript
// mon-premier-node.js
console.log("🎉 Mon premier code Node.js!");

// Calcul simple
let prix = 100;
let quantite = 3;
let total = prix * quantite;
console.log(`Total : ${total}€`);

// Date et heure
console.log("Date actuelle :", new Date());

// Lecture système
console.log("Dossier actuel :", process.cwd());
console.log("Arguments :", process.argv);
```

#### **Étape 4 : Exécuter**
```bash
node mon-premier-node.js
# Résultat :
🎉 Mon premier code Node.js!
Total : 300€
Date actuelle : 2024-01-15T10:30:00.000Z
Dossier actuel : /Users/votre-nom
Arguments : [...]
```

### **Différences Clés :**

| **React (Navigateur)** | **Node.js (Serveur)** |
|----------------------|----------------------|
| `document.getElementById()` | `fs.readFile()` |
| `window.alert()` | `console.log()` |
| `fetch()` pour les APIs | Crée des APIs avec `http` |
| Manipule le DOM | Manipule les fichiers |
| Pas d'accès aux fichiers | Accès complet au système |

---

## **✏️ À VOTRE TOUR - Exercice 3**

**Créez un mini-programme Node.js qui :**
1. Affiche votre nom et prénom
2. Calcule votre âge (année actuelle - année de naissance)
3. Affiche le nom du dossier où vous êtes
4. Affiche un message différent selon l'heure (matin/après-midi/soir)

**Exemple de sortie :**
```
👋 Bonjour John Doe !
📅 Vous avez 25 ans
📁 Vous êtes dans : /Users/john
⏰ Bon après-midi !
```

---

## **📝 MINI-QUIZ 3 (5 questions aléatoires)**

### **1. React s'exécute dans :**
A) Le terminal
B) Le navigateur
C) Le serveur
D) La base de données
**Réponse : B**

### **2. `console.log()` dans Node.js affiche dans :**
A) Le navigateur
B) Le terminal
C) Un fichier
D) L'écran de l'utilisateur
**Réponse : B**

### **3. Pour exécuter un fichier Node.js :**
A) `run fichier.js`
B) `node fichier.js`
C) `execute fichier.js`
D) `start fichier.js`
**Réponse : B**

### **4. Node.js peut accéder aux :**
A) Fichiers du système
B) Éléments HTML
C) Animations CSS
D) Rien
**Réponse : A**

### **5. `process.cwd()` donne :**
A) Le dossier actuel
B) La date
C) L'heure
D) La mémoire utilisée
**Réponse : A**

---

## **🎯 PARTIE 4 : INITIATION ET SYNTAXE NODE.JS**

### **Théorie : Modules Node.js**

Node.js fonctionne avec des **modules** = morceaux de code réutilisables.

**Trois types de modules :**
1. **Modules natifs** (fournis par Node.js) : `fs`, `http`, `path`
2. **Modules tiers** (installés via NPM) : `express`, `mongoose`
3. **Modules personnels** (vos propres fichiers)

### **Syntaxe des Modules :**

#### **Importer un module :**
```javascript
// CommonJS (Node.js traditionnel)
const fs = require('fs');
const monModule = require('./mon-module.js');

// ES Modules (JavaScript moderne)
import fs from 'fs';
import monModule from './mon-module.js';
```

#### **Créer son propre module :**
```javascript
// calculs.js
function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

// Exporte les fonctions
module.exports = {
    addition,
    multiplication
};

// Ou en ES Modules :
export { addition, multiplication };
```

#### **Utiliser son module :**
```javascript
// app.js
const calculs = require('./calculs.js');

console.log(calculs.addition(5, 3)); // 8
console.log(calculs.multiplication(5, 3)); // 15
```

### **Modules Natifs Importants :**

**`fs` = File System (Système de fichiers)**
```javascript
const fs = require('fs');

// Lire un fichier
fs.readFile('fichier.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Écrire un fichier
fs.writeFile('nouveau.txt', 'Bonjour!', (err) => {
    if (err) throw err;
    console.log('Fichier créé!');
});
```

**`path` = Manipulation de chemins**
```javascript
const path = require('path');

console.log(path.join('/dossier', 'sous-dossier', 'fichier.txt'));
// /dossier/sous-dossier/fichier.txt

console.log(path.extname('document.pdf')); // .pdf
```

**`os` = Informations système**
```javascript
const os = require('os');

console.log(os.platform()); // linux, win32, darwin (mac)
console.log(os.totalmem()); // Mémoire totale
console.log(os.freemem()); // Mémoire libre
```

---

## **✏️ À VOTRE TOUR - Exercice 4**

**Créez un système de notes avec modules :**

1. **module-note.js** :
   - Fonction `creerNote(titre, contenu)` → retourne un objet note
   - Fonction `afficherNote(note)` → affiche la note formatée

2. **app.js** :
   - Importe votre module
   - Crée 3 notes
   - Les affiche toutes

3. **Utilisez `fs`** pour sauvegarder les notes dans un fichier `notes.json`

---

## **📝 MINI-QUIZ 4 (5 questions aléatoires)**

### **1. Pour importer le module fs :**
A) `import fs from 'fs';`
B) `const fs = require('fs');`
C) `load fs;`
D) A ou B
**Réponse : D**

### **2. `fs.readFile()` lit :**
A) Une page web
B) Un fichier
C) Une base de données
D) La mémoire
**Réponse : B**

### **3. `path.join()` combine :**
A) Des chaînes de caractères
B) Des chemins de fichiers
C) Des nombres
D) Des tableaux
**Réponse : B**

### **4. `module.exports` sert à :**
A) Importer
B) Exporter
C) Supprimer
D) Cacher
**Réponse : B**

### **5. Node.js utilise par défaut :**
A) CommonJS
B) ES Modules
C) AMD
D) UMD
**Réponse : A**

---

## **🎯 PARTIE 5 : ÉVOLUTION DES FRAMEWORKS NODE.JS**

### **Théorie : Chronologie des Frameworks**

#### **2010 : Express.js - Le Pioneer**
**Créateur :** TJ Holowaychuk  
**Problème résolu :** Node.js natif était trop bas niveau
```javascript
// AVANT (Node.js natif)
if (req.url === '/') {
    // Accueil
} else if (req.url === '/contact') {
    // Contact
} // ... très verbeux!

// APRÈS (Express.js)
app.get('/', (req, res) => {
    // Accueil
});
app.get('/contact', (req, res) => {
    // Contact
});
```

#### **2013 : Koa.js - Le Successeur**
**Créé par :** L'équipe Express  
**Pourquoi :** Express vieillissait, besoin de modernité  
**Innovation :** Utilise `async/await` nativement

#### **2014 : Hapi.js - L'Entreprise**
**Créateur :** Walmart Labs  
**Pourquoi :** Besoin de stabilité pour l'e-commerce  
**Spécialité :** Configuration over code, idéal pour grosses apps

#### **2015 : Meteor.js - Le Tout-en-Un**
**Innovation :** Réactivité temps réel, full-stack JavaScript  
**Pour qui :** Débutants qui veulent tout faire rapidement

#### **2016 : Fastify - Le Rapide**
**Objectif :** Être le framework le plus rapide  
**Spécialité :** Schema-based validation, performances extrêmes

#### **2017 : Nest.js - L'Architecte**
**Inspiré de :** Angular (TypeScript, architecture)  
**Pour qui :** Grosses applications d'entreprise  
**Avantage :** Architecture organisée, évolutive

### **Pourquoi Express est Toujours le Plus Populaire ?**

1. **Simplicité :** Apprentissage en 1 journée
2. **Minimaliste :** Ajoutez ce dont vous avez besoin
3. **Middleware :** Système puissant et flexible
4. **Communauté :** Plus grande communauté, plus de ressources
5. **Maturité :** 13 ans de développement, très stable

**Statistiques 2024 :**
- Express : 60% du marché
- Nest.js : 20%
- Fastify : 10%
- Autres : 10%

---

## **✏️ À VOTRE TOUR - Exercice 5**

**Recherche rapide :**
Pour chaque framework, trouvez :
1. Son année de création
2. Son créateur principal
3. Son principal avantage

| Framework | Année | Créateur | Avantage Principal |
|-----------|-------|----------|-------------------|
| Express.js | 2010 | TJ Holowaychuk | Simplicité |
| Koa.js | _____ | __________ | __________ |
| Nest.js | _____ | __________ | __________ |
| Fastify | _____ | __________ | __________ |

---

## **📝 MINI-QUIZ 5 (5 questions aléatoires)**

### **1. Le plus ancien framework Node.js est :**
A) Express
B) Koa
C) Nest
D) Fastify
**Réponse : A**

### **2. Koa.js a été créé par :**
A) L'équipe Express
B) Facebook
C) Google
D) Microsoft
**Réponse : A**

### **3. Nest.js est inspiré de :**
A) React
B) Angular
C) Vue
D) jQuery
**Réponse : B**

### **4. Fastify se spécialise dans :**
A) La simplicité
B) La vitesse
C) La sécurité
D) L'apprentissage
**Réponse : B**

### **5. Le framework le plus utilisé est :**
A) Express
B) Koa
C) Nest
D) Fastify
**Réponse : A**

---

## **🎯 PARTIE 6 : EXPRESS.JS - NOTRE CHOIX**

### **Théorie : Pourquoi Express pour Débutants ?**

#### **Installation Express (2 minutes) :**
```bash
# 1. Créez un dossier
mkdir mon-app-express
cd mon-app-express

# 2. Initialisez NPM
npm init -y

# 3. Installez Express
npm install express

# 4. Installez Nodemon (redémarrage auto)
npm install -D nodemon
```

#### **Notre Premier Serveur Express :**

```javascript
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route GET simple
app.get('/', (req, res) => {
    res.send('<h1>Bonjour Express! 👋</h1>');
});

// Route avec paramètre
app.get('/bonjour/:nom', (req, res) => {
    const nom = req.params.nom;
    res.send(`<h1>Bonjour ${nom}! 😊</h1>`);
});

// Route API JSON
app.get('/api/message', (req, res) => {
    res.json({
        success: true,
        message: 'API Express fonctionne!',
        timestamp: new Date()
    });
});

// Route 404 (doit être la dernière)
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page non trouvée</h1>
        <p>Désolé, cette page n'existe pas.</p>
    `);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`
    =================================
    🚀 Express démarré!
    👉 http://localhost:${PORT}
    
    Routes disponibles:
    - GET  /              (Page d'accueil)
    - GET  /bonjour/:nom  (Bonjour personnalisé)
    - GET  /api/message   (API JSON)
    =================================
    `);
});
```

#### **package.json pour Nodemon :**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

#### **Exécution :**
```bash
# Mode développement (redémarrage auto)
npm run dev

# Mode production
npm start
```

### **Concepts Express Clés :**

#### **1. Routes = URLs + Méthodes HTTP**
```javascript
// GET    : Lire
// POST   : Créer  
// PUT    : Mettre à jour
// DELETE : Supprimer

app.get('/users', (req, res) => {
    // Lire les utilisateurs
});

app.post('/users', (req, res) => {
    // Créer un utilisateur
});
```

#### **2. Middleware = Fonctions intermédiaires**
```javascript
// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date()} - ${req.method} ${req.url}`);
    next(); // Continue
});

// Middleware pour parser JSON
app.use(express.json());
```

#### **3. `req` et `res` = Requête et Réponse**
```javascript
// req = Ce qui vient du client
req.params    // Paramètres d'URL (:id)
req.query     // Query strings (?search=test)
req.body      // Corps de la requête (JSON/formulaire)
req.headers   // En-têtes HTTP

// res = Ce qu'on envoie au client
res.send()    // Envoie HTML/texte
res.json()    // Envoie JSON
res.status()  // Définit le code HTTP
res.redirect() // Redirige
```

---

## **✏️ À VOTRE TOUR - Exercice 6**

**Créez un mini-site avec Express :**
1. Page d'accueil (`/`) avec navigation
2. Page À propos (`/about`)
3. Page Contact (`/contact`) avec formulaire simulé
4. API calculatrice (`/api/calc/add/:a/:b`) qui retourne la somme en JSON
5. Page 404 personnalisée
6. Middleware qui log toutes les visites

**Testez avec votre navigateur :**
- http://localhost:3000
- http://localhost:3000/about
- http://localhost:3000/api/calc/add/5/3
- http://localhost:3000/une-page-qui-nexiste-pas

---

## **📝 MINI-QUIZ 6 (5 questions aléatoires)**

### **1. `app.get()` gère les requêtes :**
A) GET
B) POST
C) PUT
D) DELETE
**Réponse : A**

### **2. `req.params` contient :**
A) Les query strings
B) Les paramètres d'URL
C) Le corps JSON
D) Les en-têtes
**Réponse : B**

### **3. `res.json()` envoie :**
A) Du HTML
B) Du JSON
C) Du texte
D) Un fichier
**Réponse : B**

### **4. Nodemon sert à :**
A) Redémarrer automatiquement
B) Compiler TypeScript
C) Optimiser les images
D) Tester le code
**Réponse : A**

### **5. `next()` dans un middleware :**
A) Arrête la requête
B) Passe au suivant
C) Renvoie une erreur
D) Rien
**Réponse : B**

---

## **🎯 PARTIE 7 : SYSTÈME D'AUTHENTIFICATION PAS À PAS**

### **Étape 1 : Structure du Projet**

```
mon-app-auth/
├── package.json
├── server.js
├── users.json (notre base de données temporaire)
└── public/
    └── index.html (interface frontend)
```

### **Étape 2 : Installation**

```bash
npm init -y
npm install express bcryptjs
npm install -D nodemon
```

### **Étape 3 : Code Serveur Complet**

```javascript
// server.js
const express = require('express');
const fs = require('fs').promises;
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Base de données simple (fichier JSON)
const DB_FILE = 'users.json';

// Fonctions utilitaires
async function readUsers() {
    try {
        const data = await fs.readFile(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return []; // Fichier vide = tableau vide
    }
}

async function saveUsers(users) {
    await fs.writeFile(DB_FILE, JSON.stringify(users, null, 2));
}

// ========== ROUTES ==========

// 1. PAGE D'ACCUEIL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// 2. INSCRIPTION (POST /api/register)
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        
        // Validation
        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: 'Email, mot de passe et nom requis'
            });
        }
        
        const users = await readUsers();
        
        // Vérifier si email existe déjà
        if (users.find(u => u.email === email)) {
            return res.status(400).json({
                success: false,
                message: 'Email déjà utilisé'
            });
        }
        
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Créer l'utilisateur
        const newUser = {
            id: Date.now(),
            email,
            password: hashedPassword,
            name,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        await saveUsers(users);
        
        // Réponse (sans le mot de passe)
        res.status(201).json({
            success: true,
            message: 'Compte créé avec succès',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name
            }
        });
        
    } catch (error) {
        console.error('Erreur inscription:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur'
        });
    }
});

// 3. CONNEXION (POST /api/login)
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email et mot de passe requis'
            });
        }
        
        const users = await readUsers();
        const user = users.find(u => u.email === email);
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Email ou mot de passe incorrect'
            });
        }
        
        // Vérifier le mot de passe
        const validPassword = await bcrypt.compare(password, user.password);
        
        if (!validPassword) {
            return res.status(401).json({
                success: false,
                message: 'Email ou mot de passe incorrect'
            });
        }
        
        // Succès
        res.json({
            success: true,
            message: 'Connexion réussie',
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
        
    } catch (error) {
        console.error('Erreur connexion:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur'
        });
    }
});

// 4. PROFIL (GET /api/profile/:id)
app.get('/api/profile/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const users = await readUsers();
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        res.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                createdAt: user.createdAt
            }
        });
        
    } catch (error) {
        console.error('Erreur profil:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur'
        });
    }
});

// 5. MODIFIER PROFIL (PUT /api/profile/:id)
app.put('/api/profile/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const { name, email } = req.body;
        
        let users = await readUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Mettre à jour
        users[userIndex] = {
            ...users[userIndex],
            name: name || users[userIndex].name,
            email: email || users[userIndex].email
        };
        
        await saveUsers(users);
        
        res.json({
            success: true,
            message: 'Profil mis à jour',
            user: {
                id: users[userIndex].id,
                email: users[userIndex].email,
                name: users[userIndex].name
            }
        });
        
    } catch (error) {
        console.error('Erreur modification:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur'
        });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`
    ============================================
    🔐 SERVEUR D'AUTHENTIFICATION DÉMARRÉ
    👉 http://localhost:${PORT}
    
    ENDPOINTS :
    - POST   /api/register     (Inscription)
    - POST   /api/login        (Connexion)
    - GET    /api/profile/:id  (Profil)
    - PUT    /api/profile/:id  (Modifier profil)
    ============================================
    `);
});
```

### **Étape 4 : Interface Frontend (public/index.html)**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Système d'Authentification</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            width: 100%;
            max-width: 900px;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .header p {
            opacity: 0.9;
        }
        
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 30px;
        }
        
        @media (max-width: 768px) {
            .content {
                grid-template-columns: 1fr;
            }
        }
        
        .section {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 25px;
            transition: transform 0.3s;
        }
        
        .section:hover {
            transform: translateY(-5px);
        }
        
        .section h2 {
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section h2 i {
            color: #667eea;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 500;
        }
        
        input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            width: 100%;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
        }
        
        .result {
            margin-top: 30px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            border-left: 5px solid #667eea;
        }
        
        .result h3 {
            color: #333;
            margin-bottom: 10px;
        }
        
        .result pre {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            font-size: 14px;
            margin-top: 10px;
        }
        
        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
        }
        
        .user-details h4 {
            color: #333;
            margin-bottom: 5px;
        }
        
        .user-details p {
            color: #666;
            font-size: 14px;
        }
        
        .status {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 5px;
        }
        
        .success {
            background: #d4edda;
            color: #155724;
        }
        
        .error {
            background: #f8d7da;
            color: #721c24;
        }
        
        .loading {
            text-align: center;
            padding: 20px;
            color: #666;
        }
        
        .loading::after {
            content: '...';
            animation: dots 1.5s infinite;
        }
        
        @keyframes dots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1><i class="fas fa-lock"></i> Système d'Authentification</h1>
            <p>Node.js + Express + bcrypt</p>
        </div>
        
        <div class="content">
            <!-- Section Inscription -->
            <div class="section">
                <h2><i class="fas fa-user-plus"></i> Inscription</h2>
                <div class="form-group">
                    <label for="register-name"><i class="fas fa-user"></i> Nom complet</label>
                    <input type="text" id="register-name" placeholder="Votre nom">
                </div>
                <div class="form-group">
                    <label for="register-email"><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="register-email" placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label for="register-password"><i class="fas fa-key"></i> Mot de passe</label>
                    <input type="password" id="register-password" placeholder="Minimum 8 caractères">
                </div>
                <button onclick="register()">
                    <i class="fas fa-user-plus"></i> Créer mon compte
                </button>
            </div>
            
            <!-- Section Connexion -->
            <div class="section">
                <h2><i class="fas fa-sign-in-alt"></i> Connexion</h2>
                <div class="form-group">
                    <label for="login-email"><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="login-email" placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label for="login-password"><i class="fas fa-key"></i> Mot de passe</label>
                    <input type="password" id="login-password" placeholder="Votre mot de passe">
                </div>
                <button onclick="login()">
                    <i class="fas fa-sign-in-alt"></i> Se connecter
                </button>
            </div>
            
            <!-- Section Profil -->
            <div class="section">
                <h2><i class="fas fa-id-card"></i> Profil utilisateur</h2>
                <div class="form-group">
                    <label for="profile-id"><i class="fas fa-id-badge"></i> ID utilisateur</label>
                    <input type="number" id="profile-id" placeholder="Votre ID (ex: 123456)">
                </div>
                <button onclick="getProfile()">
                    <i class="fas fa-search"></i> Voir mon profil
                </button>
            </div>
            
            <!-- Section Modification -->
            <div class="section">
                <h2><i class="fas fa-edit"></i> Modifier le profil</h2>
                <div class="form-group">
                    <label for="update-id"><i class="fas fa-id-badge"></i> ID utilisateur</label>
                    <input type="number" id="update-id" placeholder="Votre ID">
                </div>
                <div class="form-group">
                    <label for="update-name"><i class="fas fa-user"></i> Nouveau nom</label>
                    <input type="text" id="update-name" placeholder="Nouveau nom">
                </div>
                <div class="form-group">
                    <label for="update-email"><i class="fas fa-envelope"></i> Nouvel email</label>
                    <input type="email" id="update-email" placeholder="nouveau@email.com">
                </div>
                <button onclick="updateProfile()">
                    <i class="fas fa-save"></i> Mettre à jour
                </button>
            </div>
        </div>
        
        <!-- Zone des résultats -->
        <div class="result" id="result">
            <h3><i class="fas fa-info-circle"></i> Résultats</h3>
            <p>Utilisez les formulaires ci-dessus pour tester le système.</p>
            <p>Les données seront affichées ici.</p>
        </div>
    </div>

    <script>
        const resultDiv = document.getElementById('result');
        
        // Fonction générique pour appeler l'API
        async function callAPI(url, method, data = {}) {
            resultDiv.innerHTML = '<div class="loading">Chargement</div>';
            
            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                let html = `<h3><i class="fas fa-${result.success ? 'check-circle' : 'exclamation-circle'}"></i> ${result.message}</h3>`;
                
                if (result.success && result.user) {
                    html += `
                        <div class="user-info">
                            <div class="avatar">${result.user.name.charAt(0)}</div>
                            <div class="user-details">
                                <h4>${result.user.name}</h4>
                                <p>${result.user.email}</p>
                                <p>ID: ${result.user.id}</p>
                                ${result.user.createdAt ? `<p>Créé le: ${new Date(result.user.createdAt).toLocaleDateString()}</p>` : ''}
                            </div>
                        </div>
                    `;
                }
                
                html += `
                    <div class="status ${result.success ? 'success' : 'error'}">
                        ${result.success ? 'SUCCÈS' : 'ERREUR'}
                    </div>
                    <h4 style="margin-top: 15px;">Réponse complète:</h4>
                    <pre>${JSON.stringify(result, null, 2)}</pre>
                `;
                
                resultDiv.innerHTML = html;
                
            } catch (error) {
                resultDiv.innerHTML = `
                    <h3 style="color: #dc3545;"><i class="fas fa-exclamation-triangle"></i> Erreur</h3>
                    <p>Une erreur s'est produite:</p>
                    <pre>${error.message}</pre>
                `;
            }
        }
        
        // Fonctions spécifiques
        function register() {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            callAPI('/api/register', 'POST', { name, email, password });
        }
        
        function login() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            callAPI('/api/login', 'POST', { email, password });
        }
        
        function getProfile() {
            const id = document.getElementById('profile-id').value;
            
            if (!id) {
                resultDiv.innerHTML = '<p style="color: #dc3545;">Veuillez entrer un ID</p>';
                return;
            }
            
            callAPI(`/api/profile/${id}`, 'GET');
        }
        
        function updateProfile() {
            const id = document.getElementById('update-id').value;
            const name = document.getElementById('update-name').value;
            const email = document.getElementById('update-email').value;
            
            if (!id) {
                resultDiv.innerHTML = '<p style="color: #dc3545;">Veuillez entrer un ID</p>';
                return;
            }
            
            callAPI(`/api/profile/${id}`, 'PUT', { name, email });
        }
        
        // Chargement initial
        document.addEventListener('DOMContentLoaded', () => {
            resultDiv.innerHTML = `
                <h3><i class="fas fa-info-circle"></i> Bienvenue !</h3>
                <p>Ce système d'authentification utilise:</p>
                <ul style="margin: 10px 0 10px 20px; color: #666;">
                    <li>Node.js comme serveur</li>
                    <li>Express.js comme framework</li>
                    <li>bcrypt pour le hachage sécurisé des mots de passe</li>
                    <li>Fichier JSON comme base de données temporaire</li>
                </ul>
                <p>Testez les différentes fonctionnalités ci-dessus.</p>
            `;
        });
    </script>
</body>
</html>
```

### **Étape 5 : Test Complet**

#### **Lancez l'application :**
```bash
npm run dev
```

#### **Testez dans l'ordre :**
1. **Inscription** : Créez un compte
2. **Connexion** : Connectez-vous avec le même compte
3. **Profil** : Utilisez l'ID reçu pour voir votre profil
4. **Modification** : Changez votre nom ou email

---

## **📝 MINI-QUIZ 7 (5 questions aléatoires)**

### **1. `bcrypt.hash()` sert à :**
A) Crypter un mot de passe
B) Hacher un mot de passe
C) Compresser des données
D) Signer un token
**Réponse : B**

### **2. `express.json()` est un middleware pour :**
A) Servir des fichiers
B) Parser le JSON
C) Logger les requêtes
D) Authentifier
**Réponse : B**

### **3. Le code 201 signifie :**
A) Succès
B) Créé
C) Non trouvé
D) Erreur
**Réponse : B**

### **4. `fs.promises` permet d'utiliser :**
A) `async/await`
B) Les callbacks
C) Les promesses
D) A et C
**Réponse : D**

### **5. Pour une erreur d'authentification, on renvoie :**
A) Code 200
B) Code 400
C) Code 401
D) Code 500
**Réponse : C**

---

## **🎓 CONCLUSION DU COURS**

### **Ce que vous avez accompli :**

✅ **Compris** l'histoire et l'évolution de Node.js  
✅ **Créé** votre premier serveur Node.js natif  
✅ **Découvert** pourquoi Express.js simplifie tout  
✅ **Appris** la chronologie des frameworks  
✅ **Maîtrisé** la syntaxe Express de base  
✅ **Implémenté** un système d'authentification complet  
✅ **Créé** une interface utilisateur élégante  

### **Votre Parcours en Résumé :**

```
Étape 1 : Quiz pré-requis → Évaluation de vos connaissances
Étape 2 : Histoire → Comprendre pourquoi Node.js existe
Étape 3 : Premiers pas → Votre premier code Node.js
Étape 4 : Modules → Organisation du code
Étape 5 : Frameworks → Écosystème Node.js
Étape 6 : Express → Framework principal
Étape 7 : Projet complet → Système d'authentification
```

### **Prochaines Étapes Recommandées :**

1. **Ajouter une vraie base de données** (MongoDB avec Mongoose)
2. **Implémenter les JWT** (JSON Web Tokens) pour les sessions
3. **Ajouter la validation avancée** (Joi ou Zod)
4. **Écrire des tests** avec Jest
5. **Configurer le déploiement** sur Render ou Railway

### **Ressources pour Continuer :**

- **Documentation officielle :** [nodejs.org](https://nodejs.org)
- **Express Guide :** [expressjs.com](https://expressjs.com/)
- **Cours gratuit :** freeCodeCamp Backend Development
- **Communauté :** StackOverflow, Reddit r/node

### **Mot de la Fin :**

> "Le backend, c'est comme les fondations d'un bâtiment. Invisible mais essentiel. Sans de bonnes fondations, le plus beau frontend du monde ne tiendra pas longtemps."

**Vous avez maintenant les bases solides pour construire des applications backend professionnelles avec Node.js et Express.**

**Continuez à pratiquer, à coder, à apprendre. Le voyage ne fait que commencer !** 🚀

**Félicitations pour avoir complété ce cours !** 🎉