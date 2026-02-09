# Cours Complet : De React à Next.js - Hébergement, Alternatives et Progression

## **Titre du Cours :** 
"Du Développement React au Déploiement Professionnel : Next.js et l'Hébergement Web Moderne"

## **Prérequis :** 
Maîtrise de React (Quiz de validation de 50 questions)

---

# **Quiz de Validation React - 50 Questions**

## **Section 1 : Fondamentaux de React (10 questions)**

**1. React a été créé initialement par :**
A) Google pour Angular
B) Facebook pour Instagram
C) Microsoft pour TypeScript
D) Twitter pour Bootstrap

**2. Le JSX est :**
A) Un langage de programmation séparé
B) Une extension syntaxique qui ressemble à du HTML dans JavaScript
C) Un préprocesseur CSS
D) Un système de typage pour React

**3. Quelle est la principale caractéristique d'une SPA (Single Page Application) ?**
A) Elle ne charge qu'une seule fois toute l'application
B) Elle utilise plusieurs pages HTML
C) Elle nécessite un rechargement à chaque navigation
D) Elle n'utilise pas JavaScript

**4. Les composants React sont :**
A) Des fonctions ou classes qui retournent des éléments React
B) Des fichiers CSS uniquement
C) Des bases de données
D) Des serveurs backend

**5. Quelle est la différence entre composant fonctionnel et de classe ?**
A) Les composants fonctionnels utilisent des hooks, les classes utilisent le cycle de vie
B) Les composants fonctionnels sont plus rapides
C) Les composants de classe ne peuvent pas avoir d'état
D) Aucune différence

**6. Le Virtual DOM est :**
A) Une copie virtuelle du DOM réel pour optimiser les mises à jour
B) Un serveur distant
C) Une base de données virtuelle
D) Un système de routage

**7. Quel hook permet de gérer l'état local dans un composant fonctionnel ?**
A) useEffect
B) useContext
C) useState
D) useMemo

**8. Quel est le rôle de props dans React ?**
A) Passer des données de parent à enfant
B) Gérer l'état local
C) Créer des effets secondaires
D) Optimiser les performances

**9. Quelle méthode de cycle de vie est équivalente à useEffect avec un tableau de dépendances vide ?**
A) componentDidMount
B) componentDidUpdate
C) componentWillUnmount
D) shouldComponentUpdate

**10. Les keys dans les listes React servent à :**
A) Identifier de manière unique les éléments
B) Crypter les données
C) Stocker des valeurs secrètes
D) Optimiser le CSS

---

## **Section 2 : Hooks et États (10 questions)**

**11. Quelle sera la valeur de count après ce code ?**
```javascript
const [count, setCount] = useState(0);
setCount(5);
setCount(count + 1);
```
A) 0
B) 1
C) 5
D) 6

**12. useEffect avec un tableau de dépendances vide s'exécute :**
A) À chaque rendu
B) Une seule fois après le montage
C) À chaque mise à jour des props
D) Jamais

**13. Quel hook utiliser pour accéder au contexte ?**
A) useReducer
B) useContext
C) useRef
D) useCallback

**14. useRef peut être utilisé pour :**
A) Accéder à un élément DOM directement
B) Gérer l'état qui déclenche des re-rendus
C) Créer des effets secondaires
D) Toutes ces réponses

**15. Quelle est la différence entre useState et useReducer ?**
A) useState pour état simple, useReducer pour état complexe
B) useState est plus rapide
C) useReducer ne peut pas être utilisé dans les composants fonctionnels
D) Aucune différence

**16. Comment optimiser les performances avec useMemo ?**
A) En mémorisant des valeurs calculées coûteuses
B) En réduisant la taille du bundle
C) En compressant les images
D) En utilisant moins de composants

**17. Quel est le problème avec ce code ?**
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
}, []);
```
A) Il manque le cleanup
B) Il utilise setInterval incorrectement
C) Le tableau de dépendances devrait être rempli
D) Il n'y a pas de problème

**18. useCallback est utilisé pour :**
A) Mémoriser des fonctions entre les rendus
B) Appeler des APIs
C) Gérer les erreurs
D) Naviguer entre les pages

**19. Quelle est la sortie de ce code ?**
```javascript
const [state, setState] = useState({ count: 0 });
const increment = () => {
  setState({ count: state.count + 1 });
  console.log(state.count);
};
```
A) 0 puis 1
B) 1 puis 2
C) 0 puis 0
D) Une erreur

**20. Custom hooks permettent :**
A) D'extraire et réutiliser la logique des composants
B) De créer de nouveaux hooks natifs
C) D'améliorer les performances automatiquement
D) De remplacer tous les hooks natifs

---

## **Section 3 : JSX, Props et Rendering (10 questions)**

**21. Comment conditionnellement afficher un élément en JSX ?**
A) {condition && <Component />}
B) if(condition) <Component />
C) {{condition: <Component />}}
D) <Component if={condition} />

**22. Quelle est la bonne syntaxe pour passer une prop ?**
A) <Component prop="value">
B) <Component: prop="value">
C) <Component prop => "value">
D) <Component prop: "value">

**23. Comment passer des enfants à un composant ?**
A) <Component>children</Component>
B) <Component children="value">
C) <Component props.children="value">
D) Les enfants ne peuvent pas être passés

**24. Quelle est la différence entre props et state ?**
A) Props sont immutables, state est mutable
B) Props sont mutables, state est immutable
C) Aucune différence
D) Props sont pour les parents, state pour les enfants

**25. Comment rendre une liste d'éléments ?**
A) items.map(item => <li key={item.id}>{item.name}</li>)
B) items.forEach(item => <li>{item.name}</li>)
C) for(item of items) <li>{item.name}</li>
D) items.render(item => <li>{item.name}</li>)

**26. Que signifie "Lifting State Up" ?**
A) Déplacer l'état vers le parent commun le plus proche
B) Augmenter la valeur de l'état
C) Supprimer l'état
D) Dupliquer l'état dans plusieurs composants

**27. Quelle est la valeur de this dans un composant de classe ?**
A) L'instance du composant
B) Window object
C) Undefined
D) Le parent du composant

**28. Comment gérer les événements en React ?**
A) onClick={handleClick}
B) onclick="handleClick()"
C) onClick="handleClick"
D) on-click={handleClick}

**29. Quelle est la sortie de :**
```javascript
const element = <div className="test">Hello</div>;
console.log(typeof element);
```
A) "object"
B) "string"
C) "function"
D) "undefined"

**30. Les fragments React servent à :**
A) Grouper des éléments sans ajouter de nœud DOM supplémentaire
B) Séparer le CSS
C) Diviser les composants
D) Optimiser les images

---

## **Section 4 : Data Fetching et APIs (10 questions)**

**31. Quelle méthode HTTP est utilisée pour récupérer des données ?**
A) GET
B) POST
C) PUT
D) DELETE

**32. Quel code HTTP signifie "Créé" ?**
A) 200
B) 201
C) 400
D) 404

**33. Que signifie un code 401 ?**
A) Non autorisé
B) Non trouvé
C) Erreur serveur
D) Succès

**34. Comment faire une requête GET avec fetch ?**
A) fetch(url).then(response => response.json())
B) fetch(url, {method: 'GET'})
C) Les deux réponses
D) Aucune des réponses

**35. Quelle est la différence entre fetch et axios ?**
A) Axios a une syntaxe plus concise et gère automatiquement JSON
B) Fetch est plus rapide
C) Axios ne fonctionne pas avec React
D) Aucune différence

**36. Où placer les appels API dans un composant fonctionnel ?**
A) Dans useEffect
B) Directement dans le corps du composant
C) Dans le return JSX
D) Dans les props

**37. Comment gérer le chargement pendant un fetch ?**
A) Avec un état isLoading
B) Avec setTimeout
C) React le gère automatiquement
D) On ne peut pas gérer le chargement

**38. Quelle méthode utiliser pour envoyer des données à une API ?**
A) POST ou PUT
B) GET
C) DELETE
D) PATCH

**39. Comment gérer les erreurs de fetch ?**
A) .catch() ou try/catch avec async/await
B) Avec useEffect
C) React les gère automatiquement
D) On ne peut pas gérer les erreurs

**40. SWR/React Query sont des librairies pour :**
A) Gérer le cache et la synchronisation des données
B) Remplacer fetch
C) Créer des composants
D) Gérer le routing

---

## **Section 5 : React Router et Déploiement (10 questions)**

**41. Comment installer React Router ?**
A) npm install react-router-dom
B) npm install react-router
C) npm install router
D) React Router est inclus dans React

**42. Quel composant utiliser pour la navigation ?**
A) <Link to="/path">
B) <a href="/path">
C) <Navigate to="/path">
D) <Route path="/path">

**43. Comment définir une route dynamique ?**
A) <Route path="/users/:id">
B) <Route path="/users/{id}">
C) <Route path="/users/$id">
D) <Route path="/users/[id]">

**44. Comment accéder aux paramètres d'URL ?**
A) useParams()
B) useLocation()
C) useHistory()
D) useRoute()

**45. Quel hook utiliser pour la navigation programmatique ?**
A) useNavigate()
B) useHistory()
C) useRouter()
D) useNavigation()

**46. Comment faire un redirect ?**
A) <Navigate to="/new-path" />
B) <Redirect to="/new-path" />
C) Les deux selon la version
D) On ne peut pas redirect en React

**47. Quelle est la différence entre BrowserRouter et HashRouter ?**
A) BrowserRouter utilise l'URL normale, HashRouter utilise #
B) HashRouter est plus rapide
C) BrowserRouter ne fonctionne qu'avec HTTPS
D) Aucune différence

**48. Comment protéger une route ?**
A) Avec un composant PrivateRoute qui vérifie l'authentification
B) React Router le fait automatiquement
C) Avec CSS
D) On ne peut pas protéger les routes

**49. Pour déployer une React SPA, on a besoin :**
A) D'un serveur web qui sert index.html pour toutes les routes
B) D'un serveur Node.js
C) D'une base de données
D) D'un CDN seulement

**50. Quel est un service populaire pour héberger des React apps ?**
A) Vercel
B) Netlify
C) GitHub Pages
D) Toutes ces réponses

---

**Correction :**
1. B, 2. B, 3. A, 4. A, 5. A, 6. A, 7. C, 8. A, 9. A, 10. A,
11. B, 12. B, 13. B, 14. D, 15. A, 16. A, 17. A, 18. A, 19. C, 20. A,
21. A, 22. A, 23. A, 24. A, 25. A, 26. A, 27. A, 28. A, 29. A, 30. A,
31. A, 32. B, 33. A, 34. C, 35. A, 36. A, 37. A, 38. A, 39. A, 40. A,
41. A, 42. A, 43. A, 44. A, 45. A, 46. C, 47. A, 48. A, 49. A, 50. D

Score :
- 45-50 : Expert React
- 35-44 : Bonne maîtrise
- 25-34 : Bases solides
- < 25 : Revoir les fondamentaux

---

# **PARTIE 1 : Hébergement d'Applications React**

## **1.1 Pourquoi l'hébergement est différent pour les SPAs ?**

**Problème** : Les React SPA ont une particularité :
- Une seule `index.html`
- Le routing est géré côté client par JavaScript
- Si on rafraîchit `/dashboard`, le serveur cherche `dashboard.html` → 404

**Solution** : Configuration spéciale du serveur pour rediriger toutes les routes vers `index.html`

## **1.2 Options d'hébergement**

### **Option 1 : Services Spécialisés (Recommandé pour débutants)**

#### **Vercel** (Créateur de Next.js)
```bash
# Installation
npm i -g vercel

# Déploiement
vercel
# ou
npx vercel
```
**Avantages** :
- Gratuit pour les projets personnels
- Déploiement continu depuis GitHub
- SSL automatique
- Optimisé pour React/Next.js

#### **Netlify**
```bash
# Avec Netlify CLI
npm i -g netlify-cli
netlify deploy
```
**Avantages** :
- Formulaires statiques gratuits
- Fonctions serverless
- Intégration Git

#### **GitHub Pages**
```json
// package.json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
```bash
npm install --save-dev gh-pages
npm run deploy
```

### **Option 2 : Hébergement Traditionnel**

#### **Serveur Web (Apache/Nginx)**
```nginx
# Configuration Nginx pour React SPA
server {
    listen 80;
    server_name mon-site.com;
    root /var/www/mon-site/build;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### **Serveur Node.js avec Express**
```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques du build React
app.use(express.static(path.join(__dirname, 'build')));

// Rediriger toutes les routes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
```

### **Option 3 : Cloud Providers**

#### **AWS S3 + CloudFront**
```bash
# 1. Build l'application
npm run build

# 2. Copier vers S3
aws s3 sync build/ s3://mon-bucket

# 3. Configurer S3 pour l'hébergement web statique
```

#### **Firebase Hosting**
```bash
# Installation
npm install -g firebase-tools
firebase login

# Initialisation
firebase init hosting

# Déploiement
firebase deploy
```

## **1.3 Comparatif des solutions**

| Solution | Coût | Facilité | Performance | Fonctionnalités |
|----------|------|----------|-------------|-----------------|
| **Vercel** | Gratuit (limité) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | CI/CD, Analytics, Edge Functions |
| **Netlify** | Gratuit (limité) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Forms, Functions, Split Testing |
| **GitHub Pages** | Gratuit | ⭐⭐⭐⭐ | ⭐⭐⭐ | Basique, intégration GitHub |
| **AWS S3** | Payant à l'usage | ⭐⭐ | ⭐⭐⭐⭐⭐ | Scalable, sécurisé |
| **Firebase** | Gratuit (limité) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Hosting, Database, Auth |

## **1.4 Étapes communes de déploiement**

**Étape 1 : Préparer l'application**
```bash
# Build de production
npm run build

# Vérifier le dossier build/
# Contient index.html et les assets optimisés
```

**Étape 2 : Configurer le router pour le déploiement**
```javascript
// Si vous utilisez React Router avec BrowserRouter
<BrowserRouter basename={process.env.PUBLIC_URL}>
```

**Étape 3 : Variables d'environnement**
```env
# .env.production
REACT_APP_API_URL=https://api.monsite.com
PUBLIC_URL=https://monsite.com
```

**Étape 4 : Déployer**
```bash
# Avec Vercel (recommandé)
npx vercel --prod

# Avec Netlify
netlify deploy --prod
```



# **PARTIE 2 : Les Alternatives à React - Panorama Complet de l'Écosystème**

## **Introduction : Pourquoi Explorer au-delà de React ?**

**Définition** : React est une **bibliothèque UI** créée par Facebook en 2013 pour construire des interfaces utilisateur. C'est comme avoir un **moteur de voiture** très performant, mais sans la carrosserie, les sièges ou le volant.

**Analogie** :
- **React** = Moteur de voiture
- **Framework complet** = Voiture entière avec toutes les fonctionnalités

**Problème** : Pour construire une application complète avec React seul, vous devez ajouter :
- ✅ Système de routage (React Router)
- ✅ Gestion d'état avancée (Redux, Zustand)
- ✅ Gestion des formulaires (Formik, React Hook Form)
- ✅ Requêtes HTTP (Axios, React Query)
- ✅ Tests (Jest, React Testing Library)
- ✅ Build configuration (Webpack, Babel)

---

## **Catégorie 1 : Frameworks Frontend Web**

### **1.1 Angular - Le Framework d'Entreprise**

**Définition** : Angular est un **framework TypeScript complet** créé par Google en 2016 (successeur d'AngularJS). C'est une **boîte à outils tout-en-un** avec une architecture MVC (Model-View-Controller) imposée.

**Caractéristiques** :
- **Two-way data binding** : Synchronisation automatique entre modèle et vue
- **Dependency Injection** : Gestion des dépendances intégrée
- **CLI puissante** : Outils de développement complets
- **Architecture modulaire** : Tout est organisé en modules

**Installation** :
```bash
# Installation du CLI Angular
npm install -g @angular/cli

# Création d'un nouveau projet
ng new mon-projet-angular

# Options typiques :
# ✔ Would you like to add Angular routing? Yes
# ✔ Which stylesheet format would you like to use? CSS
```

**Structure de projet** :
```
src/
├── app/
│   ├── components/     # Composants réutilisables
│   ├── services/       # Logique métier
│   ├── models/         # Types et interfaces
│   ├── app.module.ts   # Module principal
│   └── app.component.ts
├── assets/             # Images, polices
└── index.html          # Point d'entrée
```

**Exemple de composant** :
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nom du composant dans le HTML
  template: `
    <h1>{{ title }}</h1>
    <button (click)="onClick()">Clique-moi</button>
    <p>Compteur: {{ count }}</p>
  `,
  styles: [`
    h1 { color: blue; }
  `]
})
export class AppComponent {
  title = 'Mon Application Angular';
  count = 0;

  onClick() {
    this.count++;
  }
}
```

**Cas d'usage** :
- ✅ Applications d'entreprise complexes
- ✅ Projets avec équipes nombreuses
- ✅ Applications nécessitant une architecture stricte
- ❌ Petits projets rapides
- ❌ Débutants en développement web

---

### **1.2 Vue.js - Le Framework Progressif**

**Définition** : Vue.js est un **framework JavaScript progressif** créé par Evan You en 2014. "Progressif" signifie que vous pouvez l'utiliser **un peu** ou **beaucoup** selon vos besoins.

**Caractéristiques** :
- **Syntaxe simple** : HTML, CSS, JavaScript séparés
- **Réactivité fine** : Mise à jour automatique du DOM
- **Écosystème modulaire** : Vue Router, Vuex, Pinia
- **Courbe d'apprentissage douce**

**Installation** :
```bash
# Méthode 1 : CDN (début)
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

# Méthode 2 : Vue CLI
npm install -g @vue/cli
vue create mon-projet-vue

# Méthode 3 : Vite (moderne)
npm create vue@latest
```

**Structure SFC (Single File Component)** :
```vue
<!-- HelloWorld.vue -->
<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="increment">Compteur: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bonjour Vue!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style scoped>
.hello {
  color: #42b983;
}
</style>
```

**Exemple Composition API (moderne)** :
```vue
<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const message = ref('Bonjour Vue 3!');

const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Compteur: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>
```

**Cas d'usage** :
- ✅ Prototypes rapides
- ✅ Applications de taille petite à moyenne
- ✅ Équipes débutant avec les frameworks
- ✅ Intégration progressive dans des projets existants

---

### **1.3 Svelte - Le Compiler Innovant**

**Définition** : Svelte est un **compiler JavaScript** créé par Rich Harris en 2016. Au lieu de s'exécuter dans le navigateur comme React/Vue, Svelte **compile** votre code en JavaScript vanilla optimisé.

**Innovation** : Pas de Virtual DOM ! Le code est compilé en opérations DOM directes.

**Installation** :
```bash
# Méthode 1 : Template de base
npx degit sveltejs/template mon-projet-svelte
cd mon-projet-svelte
npm install

# Méthode 2 : Vite (recommandée)
npm create vite@latest mon-app -- --template svelte
cd mon-app
npm install
```

**Exemple de composant** :
```svelte
<!-- App.svelte -->
<script>
  let count = 0;
  let name = 'Monde';
  
  // Les variables réactives avec $:
  $: doubled = count * 2;
  $: console.log(`Le compteur est: ${count}`);
  
  function handleClick() {
    count += 1;
  }
</script>

<main>
  <h1>Bonjour {name}!</h1>
  
  <!-- Liaison directe -->
  <input bind:value={name} placeholder="Entrez votre nom">
  
  <p>Compteur: {count}</p>
  <p>Double: {doubled}</p>
  
  <!-- Événements -->
  <button on:click={handleClick}>
    Cliquez {count} fois
  </button>
  
  <!-- Style scopé -->
  <style>
    h1 {
      color: #ff3e00;
    }
    button {
      background-color: #ff3e00;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</main>
```

**Avantages** :
- **Bundle plus petit** : Moins de JavaScript envoyé au navigateur
- **Pas de Virtual DOM** : Pas de surcoût runtime
- **Syntaxe intuitive** : Moins de code boilerplate
- **Réactivité intégrée** : Pas besoin de hooks spéciaux

**Cas d'usage** :
- ✅ Applications nécessitant des performances élevées
- ✅ Sites avec connexion Internet lente
- ✅ Développeurs aimant le JavaScript vanilla
- ✅ Prototypes devant être extrêmement légers

---

## **Catégorie 2 : Meta-Frameworks (Frameworks de Frameworks)**

### **2.1 Next.js - Le Framework React Full-Stack**

**Définition** : Next.js est un **framework React** créé par Vercel en 2016. C'est un **meta-framework** qui ajoute des fonctionnalités de production à React.

**Fonctionnalités clés** :
- **Rendu côté serveur (SSR)** : HTML généré sur le serveur
- **Génération de site statique (SSG)** : Pages pré-générées au build
- **API Routes** : Backend dans le même projet
- **File-system routing** : Routes basées sur la structure de fichiers

**Installation** :
```bash
# Création avec toutes les options modernes
npx create-next-app@latest mon-app

# Options recommandées :
# ✔ TypeScript: Yes
# ✔ ESLint: Yes
# ✔ Tailwind CSS: Yes
# ✔ src/ directory: Yes
# ✔ App Router: Yes
```

**Structure App Router** :
```
app/
├── layout.js           # Layout racine
├── page.js            # Page d'accueil (/)
├── about/
│   └── page.js       # /about
├── blog/
│   └── [slug]/
│       └── page.js   # /blog/:slug
└── api/
    └── route.js      # API endpoint
```

**Exemple avec Server Components** :
```jsx
// app/products/page.js
// Ce composant s'exécute sur le SERVEUR
async function getProducts() {
  // Fetch côté serveur - pas de CORS, secrets sécurisés
  const res = await fetch('https://api.mon-site.com/products', {
    headers: { 'Authorization': `Bearer ${process.env.API_SECRET}` }
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  // Pas de useEffect, useState - rendu pur côté serveur
  return (
    <div>
      <h1>Produits</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
}
```

---

### **2.2 Nuxt.js - Le Framework Vue Full-Stack**

**Définition** : Nuxt.js est à Vue ce que Next.js est à React. Créé en 2016, c'est un **framework Vue.js** avec SSR/SSG intégré.

**Installation** :
```bash
# Création d'un projet
npx create-nuxt-app mon-projet-nuxt

# Ou avec la nouvelle version (Nuxt 3)
npx nuxi init mon-app
cd mon-app
npm install
```

**Structure** :
```
pages/
  index.vue          # / - Page d'accueil
  about.vue          # /about
  users/
    _id.vue          # /users/:id - Route dynamique

store/               # État global (Vuex)
components/          # Composants réutilisables
middleware/          # Middleware
```

**Exemple de page** :
```vue
<!-- pages/index.vue -->
<template>
  <div>
    <h1>Bienvenue sur Nuxt.js</h1>
    <p>Compteur: {{ count }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script>
export default {
  // Données de la page
  data() {
    return {
      count: 0
    }
  },
  
  // Méthodes
  methods: {
    increment() {
      this.count++;
    }
  },
  
  // SEO
  head() {
    return {
      title: 'Page d\'accueil',
      meta: [
        { hid: 'description', name: 'description', content: 'Ma page Nuxt' }
      ]
    }
  }
}
</script>
```

---

### **2.3 SvelteKit - Le Framework Svelte Full-Stack**

**Définition** : SvelteKit est le **framework officiel Svelte** (équivalent Next.js/Nuxt.js).

**Installation** :
```bash
# Création d'un projet
npm create svelte@latest mon-projet-sveltekit
cd mon-projet-sveltekit
npm install
npm run dev
```

**Exemple avec chargement de données** :
```svelte
<!-- src/routes/+page.svelte -->
<script>
  // Le fichier +page.js charge les données
  export let data;
  
  // Les données viennent du load function
  const { products } = data;
</script>

<h1>Produits</h1>

{#each products as product}
  <div>
    <h2>{product.name}</h2>
    <p>{product.price}€</p>
  </div>
{/each}
```

```javascript
// src/routes/+page.js
// Fonction de chargement côté serveur
export async function load({ fetch }) {
  const response = await fetch('/api/products');
  const products = await response.json();
  
  return {
    products
  };
}
```

---

## **Catégorie 3 : Frameworks Mobile**

### **3.1 React Native - Applications Mobiles avec React**

**Définition** : React Native (créé par Facebook en 2015) permet de créer des **applications mobiles natives** en utilisant React.

**Principe** : Vos composants React sont compilés en composants iOS/Android natifs.

**Installation** :
```bash
# Méthode 1 : Expo (recommandée pour débuter)
npx create-expo-app mon-app-mobile
cd mon-app-mobile
npx expo start

# Méthode 2 : CLI React Native (plus avancé)
npx react-native init MonApp
cd MonApp
npx react-native run-ios  # Pour iOS
npx react-native run-android  # Pour Android
```

**Structure typique** :
```
src/
├── components/     # Composants réutilisables
├── screens/        # Écrans/Pages de l'app
├── navigation/     # Navigation (React Navigation)
├── utils/          # Fonctions utilitaires
└── assets/         # Images, polices
```

**Exemple de composant** :
```javascript
import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bonjour React Native!</Text>
      <Text style={styles.counter}>Compteur: {count}</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Incrémenter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
```

**Avantages** :
- ✅ Code partagé entre iOS et Android (≈ 80-90%)
- ✅ Performance native (pas de WebView)
- ✅ Accès aux APIs mobiles (camera, GPS, notifications)
- ✅ Écosystème React connu

---

### **3.2 Flutter - Framework Mobile de Google**

**Définition** : Flutter (Google, 2017) est un **SDK UI** qui utilise le langage **Dart** pour créer des applications natives.

**Différence avec React Native** :
- **React Native** : JavaScript → Composants natifs
- **Flutter** : Dart → Dessine directement sur le canvas (pas de composants natifs)

**Installation** :
```bash
# Télécharger Flutter SDK
# https://flutter.dev/docs/get-started/install

# Créer un projet
flutter create mon_app_flutter
cd mon_app_flutter
flutter run
```

**Exemple Dart** :
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Demo'),
        ),
        body: Center(
          child: MyHomePage(),
        ),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          'Compteur:',
        ),
        Text(
          '$_counter',
          style: Theme.of(context).textTheme.headline4,
        ),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Incrémenter'),
        ),
      ],
    );
  }
}
```

**Avantages Flutter** :
- ✅ Performance excellente (60fps garantis)
- ✅ Hot reload incroyablement rapide
- ✅ UI cohérente sur toutes les plateformes
- ✅ Widgets personnalisables à l'infini

---

### **3.3 Ionic - Applications Web dans des conteneurs natifs**

**Définition** : Ionic (2013) permet de créer des **applications hybrides** avec HTML, CSS, JavaScript.

**Principe** : Une application web emballée dans un conteneur natif (Cordova/Capacitor).

**Installation** :
```bash
# Avec Angular
npm install -g @ionic/cli
ionic start mon-app tabs --type=angular

# Avec React
ionic start mon-app tabs --type=react

# Avec Vue
ionic start mon-app tabs --type=vue
```

**Exemple Ionic + React** :
```jsx
import React from 'react';
import { 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton 
} from '@ionic/react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mon Application</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h1>Bienvenue dans Ionic!</h1>
          <IonButton expand="block" onClick={() => alert('Hello!')}>
            Clique-moi
          </IonButton>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
```

**Avantages Ionic** :
- ✅ Un seul code pour web + iOS + Android
- ✅ Utilise les technologies web connues
- ✅ Accès aux APIs mobiles via Capacitor
- ✅ UI native-like avec les composants Ionic

---

## **Catégorie 4 : Frameworks Backend**

### **4.1 Express.js - Framework Node.js Minimaliste**

**Définition** : Express (2010) est un **framework web minimaliste** pour Node.js. C'est la **bibliothèque standard** pour créer des APIs et serveurs web en Node.js.

**Installation** :
```bash
mkdir mon-api
cd mon-api
npm init -y
npm install express
```

**Serveur de base** :
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
  res.json({ message: 'API Express fonctionne!' });
});

// Route avec paramètres
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId, name: 'John Doe' });
});

// Route POST
app.post('/users', (req, res) => {
  const userData = req.body;
  // Ici, vous sauvegarderiez en base de données
  res.status(201).json({ 
    success: true, 
    user: userData 
  });
});

// Middleware d'erreur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur' });
});

app.listen(PORT, () => {
  console.log(`Serveur Express sur http://localhost:${PORT}`);
});
```

---

### **4.2 NestJS - Framework Node.js TypeScript**

**Définition** : NestJS (2017) est un **framework progressif Node.js** inspiré d'Angular. Il utilise TypeScript et l'architecture MVC.

**Installation** :
```bash
npm install -g @nestjs/cli
nest new mon-projet-nest
cd mon-projet-nest
npm run start:dev
```

**Structure** :
```
src/
├── main.ts              # Point d'entrée
├── app.module.ts        # Module racine
├── app.controller.ts    # Contrôleur
├── app.service.ts       # Service
└── users/
    ├── users.module.ts
    ├── users.controller.ts
    ├── users.service.ts
    └── dto/
        └── create-user.dto.ts
```

**Exemple de contrôleur** :
```typescript
// users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') // Route de base: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post() // POST /users
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

---

### **4.3 Fastify - Framework Web Ultra-Rapide**

**Définition** : Fastify (2016) est un **framework web Node.js** axé sur la **performance** et l'**expérience développeur**.

**Benchmark** : Fastify est ≈ 2x plus rapide qu'Express.

**Installation** :
```bash
npm install fastify
```

**Exemple** :
```javascript
const fastify = require('fastify')({ logger: true });

// Route simple
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Route avec validation de schéma
fastify.post('/users', {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        age: { type: 'number' }
      }
    }
  }
}, async (request, reply) => {
  const { name, email, age } = request.body;
  return { 
    success: true, 
    user: { name, email, age } 
  };
});

// Démarrer le serveur
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Serveur Fastify démarré sur port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

---

## **Catégorie 5 : Librairies de Visualisation de Données**

### **5.1 D3.js - La Puissance Pure**

**Définition** : D3.js (Data-Driven Documents, 2011) est une **librairie de manipulation de documents basée sur les données**. C'est l'outil le plus puissant pour créer des visualisations personnalisées.

**Principe** : Vous manipulez directement le SVG/Canvas.

**Installation** :
```bash
npm install d3
```

**Exemple de graphique simple** :
```javascript
import * as d3 from 'd3';

// Données
const data = [30, 70, 110, 150, 190];

// Créer un SVG
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', 400)
  .attr('height', 300);

// Créer des barres
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 80)
  .attr('y', d => 300 - d)
  .attr('width', 75)
  .attr('height', d => d)
  .attr('fill', 'steelblue');

// Ajouter des étiquettes
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d)
  .attr('x', (d, i) => i * 80 + 35)
  .attr('y', d => 300 - d - 5)
  .attr('text-anchor', 'middle')
  .attr('fill', 'white');
```

---

### **5.2 Chart.js - Simplicité et Beauté**

**Définition** : Chart.js (2013) est une **librairie de graphiques simple** avec de belles visualisations prédéfinies.

**Installation** :
```bash
npm install chart.js
```

**Exemple** :
```javascript
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'bar', // Type: bar, line, pie, doughnut, etc.
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Ventes 2024',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Graphique des ventes'
      }
    }
  }
});
```

---

## **Catégorie 6 : Librairies 3D et Jeux**

### **6.1 Three.js - 3D WebGL**

**Définition** : Three.js (2010) est une **librairie 3D WebGL** pour créer des scènes 3D dans le navigateur.

**Installation** :
```bash
npm install three
```

**Exemple de scène simple** :
```javascript
import * as THREE from 'three';

// Créer la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer un cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();
```

---

### **6.2 React Three Fiber - Three.js pour React**

**Définition** : React Three Fiber est un **renderer React pour Three.js**. Il permet d'utiliser Three.js avec la syntaxe React.

**Installation** :
```bash
npm install three @react-three/fiber @react-three/drei
```

**Exemple** :
```jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      <OrbitControls />
    </>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
```

---

## **Catégorie 7 : IA et Machine Learning dans le Navigateur**

### **7.1 TensorFlow.js - ML avec TensorFlow**

**Définition** : TensorFlow.js permet d'exécuter des **modèles de machine learning** directement dans le navigateur.

**Installation** :
```bash
npm install @tensorflow/tfjs
```

**Exemple de régression linéaire** :
```javascript
import * as tf from '@tensorflow/tfjs';

// Données d'entraînement
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Créer le modèle
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compiler
model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
});

// Entraîner
await model.fit(xs, ys, {
  epochs: 250,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
    }
  }
});

// Prédire
const prediction = model.predict(tf.tensor2d([5], [1, 1]));
console.log('Prédiction pour 5:', prediction.dataSync()[0]);
```

---

### **7.2 ML5.js - ML Simplifié**

**Définition** : ML5.js est une **interface simplifiée** pour le machine learning dans le navigateur.

**Exemple de classification d'images** :
```javascript
// Avec ml5 en CDN
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
  console.log('Modèle chargé!');
}

// Classifier une image
const img = document.getElementById('image');
classifier.classify(img, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(results);
  // Résultat: [{label: "chien", confidence: 0.98}, ...]
});
```

---

## **Tableau Récapitulatif : Quel Framework Choisir ?**

| Type de Projet | Solution Recommandée | Alternative |
|----------------|---------------------|-------------|
| **Site vitrine/blog** | Next.js (SSG) | Gatsby (React), Nuxt.js (Vue) |
| **Application web complexe** | Next.js (App Router) | Angular, Vue 3 + Vite |
| **Application mobile** | React Native (Expo) | Flutter, Ionic |
| **Prototype rapide** | Vue.js + Vite | Svelte, Preact |
| **Dashboard admin** | React + TanStack | Vue 3 + PrimeVue |
| **API REST** | Express.js | Fastify, NestJS |
| **Application temps réel** | Socket.io + Express | Fastify + WebSockets |
| **Visualisation données** | D3.js (puissant) | Chart.js (simple), Recharts (React) |
| **Graphique 3D** | Three.js | React Three Fiber (React) |
| **Machine Learning frontend** | TensorFlow.js | ML5.js (simplifié) |

---

## **Conclusion : L'Écosystème JavaScript en 2024**

### **Tendances actuelles :**
1. **Meta-frameworks dominants** : Next.js, Nuxt.js, SvelteKit
2. **Full-stack avec un langage** : TypeScript partout
3. **Edge computing** : Exécution proche de l'utilisateur
4. **Server Components** : Moins de JavaScript client
5. **Performance by default** : Optimisations automatiques

### **Recommandations pour les débutants :**
1. **Commencez avec React** → Bonne base conceptuelle
2. **Passez à Next.js** → Framework de production
3. **Explorez Vue.js** → Différente philosophie
4. **Testez Svelte** → Approche innovante
5. **Choisissez selon le projet** → Pas de "meilleur" framework universel

### **Ressources d'apprentissage :**
- **Next.js** : [nextjs.org/learn](https://nextjs.org/learn) (gratuit, interactif)
- **Vue.js** : [vuejs.org/tutorial](https://vuejs.org/tutorial)
- **Angular** : [angular.io/tutorial](https://angular.io/tutorial)
- **React Native** : [reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)

**Prochaine étape** : Nous allons maintenant approfondir Next.js et créer un projet complet ensemble !














# **COURS COMPLET : Les Prérequis Essentiels pour Next.js**

## **Introduction : Pourquoi ces Concepts sont Cruciaux ?**

**Avant de sauter dans Next.js**, nous devons comprendre **POURQUOI** il a été créé et **QUELS PROBLÈMES** il résout. Ces problèmes sont liés à des concepts fondamentaux du web moderne.

---

## **PARTIE 1 : Les Problèmes Fondamentaux de React Vanilla**

### **Problème 1 : Le Dilemme du "Blank Screen"**
```javascript
// React Classique - Problème d'UX
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);
  
  // Ce que voit l'utilisateur d'abord ⬇️
  if (loading) {
    return <div>Chargement...</div>; // OU pire : rien du tout!
  }
  
  // Ce qui apparaît APRÈS le chargement
  return <div>Contenu intéressant</div>;
}
```

**Résultat** : L'utilisateur voit une page blanche ou "Chargement..." pendant 2-3 secondes. Mauvaise expérience!

### **Problème 2 : Le Casse-tête du SEO**
```html
<!-- Ce que Google voit en arrivant sur une React SPA -->
<html>
  <head>
    <title>Mon Site</title>
  </head>
  <body>
    <div id="root"></div> <!-- CONTENU VIDE! -->
    <script src="bundle.js"></script>
  </body>
</html>

<!-- Google doit attendre que JavaScript charge et s'exécute -->
<!-- Problème : Googlebot a un temps limité! -->
```

---

## **PARTIE 2 : Les Concepts Fondamentaux**

### **2.1 SEO (Search Engine Optimization) - Optimisation pour les Moteurs de Recherche**

**Définition** : Le SEO c'est l'art et la science de **rendre votre site visible** dans Google, Bing, etc. 

**Analogie** : Imaginez que Google est un **bibliothécaire**. Votre site est un **livre**. Le bibliothécaire doit pouvoir lire rapidement le contenu de votre livre pour le classer correctement.

**Pourquoi c'est important** :
- 93% des expériences en ligne commencent par un moteur de recherche
- La première page de Google reçoit 92% du trafic
- Position #1 = 33% des clics

**Exemple concret** :
```javascript
// MAUVAIS pour le SEO (React SPA classique)
function ProductPage() {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    // Données chargées APRÈS que la page soit affichée
    fetchProduct().then(setProduct);
  }, []);
  
  return product ? (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  ) : <div>Chargement...</div>;
}

// BON pour le SEO (Contenu immédiatement disponible)
// Le contenu est déjà dans le HTML envoyé par le serveur
```

---

### **2.2 CSR (Client-Side Rendering) - Rendu Côté Client**

**Définition** : Le **rendu se fait dans le navigateur** avec JavaScript. Le serveur envoie un fichier HTML presque vide + un gros fichier JavaScript.

**Processus CSR** :
```
Étape 1 : Navigateur → Serveur : "Donne-moi index.html"
Étape 2 : Serveur → Navigateur : <div id="root"></div> + bundle.js (2MB)
Étape 3 : Navigateur exécute JavaScript (2-5 secondes)
Étape 4 : Page enfin visible!
```

**Visualisation** :
```bash
# Fichiers envoyés au navigateur :
index.html          # 1KB - Presque vide!
bundle.js           # 2MB - Tout le code React
style.css           # 50KB - Styles

# Total : ~2MB à télécharger AVANT de voir la page
```

**Problèmes du CSR** :
1. **LCP (Largest Contentful Paint) lent** : Temps pour voir le contenu principal
2. **SEO médiocre** : Google doit exécuter JavaScript pour voir le contenu
3. **Dépendance à JavaScript** : Si JS est désactivé = page blanche

---

### **2.3 SSR (Server-Side Rendering) - Rendu Côté Serveur**

**Définition** : Le **serveur génère le HTML COMPLET** et l'envoie au navigateur. Le JavaScript s'exécute APRÈS.

**Analogie** : Au restaurant :
- **CSR** : On vous apporte les ingrédients crus + une recette, vous cuisinez à table
- **SSR** : Le plat est déjà cuit en cuisine, on vous l'apporte prêt à manger

**Processus SSR** :
```
Étape 1 : Navigateur → Serveur : "Donne-moi /products"
Étape 2 : Serveur exécute React, génère HTML COMPLET avec les produits
Étape 3 : Serveur → Navigateur : HTML complet (produits déjà visibles)
Étape 4 : Navigateur affiche IMMÉDIATEMENT le contenu
Étape 5 : JavaScript charge en arrière-plan pour l'interactivité
```

**Exemple technique** :
```javascript
// CÔTÉ SERVEUR (Next.js fait ça automatiquement)
function renderPageOnServer() {
  // 1. Récupérer les données (côté serveur, rapide)
  const products = database.getProducts();
  
  // 2. Générer le HTML
  const html = `
    <html>
      <head><title>Mes Produits</title></head>
      <body>
        <h1>Nos produits</h1>
        ${products.map(p => `<div>${p.name} - ${p.price}€</div>`).join('')}
      </body>
    </html>
  `;
  
  // 3. Envoyer au navigateur
  return html;
}
```

**Avantages du SSR** :
```javascript
// Chiffres réels (site e-commerce) :
CSR:  LCP = 4.2s  |  TTFB = 100ms  |  SEO = Mauvais
SSR:  LCP = 1.1s  |  TTFB = 200ms  |  SEO = Excellent

// TTFB = Time To First Byte (temps premier octet)
// LCP = Largest Contentful Paint (temps contenu principal)
```

**Cas d'usage SSR** :
- ✅ Sites e-commerce (produits doivent être indexables)
- ✅ Blogs/articles (contenu textuel important)
- ✅ Pages publiques (landing pages, documentation)
- ✅ Applications avec contenu dynamique fréquent

---

### **2.4 SSG (Static Site Generation) - Génération de Site Statique**

**Définition** : Les pages sont **générées au moment du BUILD** (pas à chaque requête). Le résultat : des fichiers HTML/CSS/JS statiques.

**Analogie** :
- **SSR** : Cuisinier qui prépare chaque plat à la commande
- **SSG** : Plats préparés à l'avance, juste à réchauffer

**Processus SSG** :
```bash
# Au moment du BUILD (déploiement)
npm run build  # → Génère tous les fichiers HTML

# Résultat :
out/
├── index.html          # Page d'accueil PRÉ-GÉNÉRÉE
├── about.html          # Page /about PRÉ-GÉNÉRÉE
├── blog/
│   ├── post-1.html    # Page blog PRÉ-GÉNÉRÉE
│   └── post-2.html    # Page blog PRÉ-GÉNÉRÉE
└── assets/
    ├── bundle.js
    └── style.css
```

**Exemple avec données** :
```javascript
// Dans Next.js - getStaticProps
export async function getStaticProps() {
  // Cette fonction s'exécute AU BUILD TIME
  const products = await fetch('https://api.com/products');
  
  return {
    props: {
      products, // Données injectées dans la page
    },
  };
}

function ProductsPage({ products }) {
  // Les produits sont déjà disponibles!
  // Pas de chargement, pas d'état
  return (
    <div>
      <h1>Produits</h1>
      {products.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  );
}
```

**Avantages du SSG** :
```
Performance : ⭐⭐⭐⭐⭐ (100/100 sur Pagespeed)
Coût hébergement : ⭐⭐⭐⭐⭐ (fichiers statiques = quasi gratuit)
Sécurité : ⭐⭐⭐⭐⭐ (pas de serveur = pas d'attaques)
SEO : ⭐⭐⭐⭐⭐ (contenu immédiatement disponible)
```

**Cas d'usage SSG** :
- ✅ Sites vitrines (entreprise, portfolio)
- ✅ Blogs, documentation
- ✅ Landing pages marketing
- ✅ Sites avec contenu peu fréquemment mis à jour
- ✅ Catalogue produits (si produits changent rarement)

---

### **2.5 ISR (Incremental Static Regeneration) - Régénération Statique Incrémentielle**

**Définition** : Mélange de SSG et SSR. Les pages sont statiques MAIS peuvent être **régénérées en arrière-plan** à intervalle régulier.

**Analogie** : Un distributeur de boissons :
- Les boissons sont déjà dans le distributeur (statique)
- Toutes les 24h, on remplit les stocks qui ont baissé (régénération)

**Comment ça marche** :
```javascript
// Next.js - revalidate option
export async function getStaticProps() {
  const products = await fetchProducts();
  
  return {
    props: { products },
    revalidate: 60, // ← MAGIE! Régénère toutes les 60 secondes
  };
}

// Scénario :
// 1. Premier visiteur → Page statique (rapide)
// 2. 61 secondes plus tard → Deuxième visiteur voit l'ancienne page
// 3. EN MÊME TEMPS → Next.js régénère la page en arrière-plan
// 4. Prochain visiteur → Nouvelle page fraîche!
```

**Exemple réel - Blog avec ISR** :
```javascript
export async function getStaticProps({ params }) {
  const post = await getPostFromDatabase(params.slug);
  
  return {
    props: { post },
    revalidate: 3600, // Régénère toutes les heures
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  
  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: 'blocking', // Génère les nouvelles pages à la volée
  };
}
```

**Avantages de l'ISR** :
- ✅ Performance du SSG (pages statiques)
- ✅ Fraîcheur des données (mise à jour régulière)
- ✅ Pas de pic de charge serveur (régénération progressive)
- ✅ Meilleur des deux mondes!

---

### **2.6 Hydratation (Hydration)**

**Définition** : Processus où React **reprend le contrôle** d'une page HTML statique pour ajouter l'interactivité.

**Analogie** : Une statue en argile :
- **SSR/SSG** : Statue déjà formée (HTML)
- **Hydratation** : On ajoute les articulations pour la faire bouger (JavaScript)

**Processus** :
```javascript
// Étape 1 : HTML statique arrive (SSR ou SSG)
<div id="root">
  <button>Compteur: 0</button> <!-- HTML statique -->
</div>

// Étape 2 : JavaScript charge et "hydrate"
ReactDOM.hydrate(
  <App />,          // Composant React avec useState, onClick, etc.
  document.getElementById('root') // Reprend l'HTML existant
);

// Étape 3 : Le bouton devient interactif!
// Clicks, états, effets → Tout fonctionne
```

**Problème de l'hydratation** :
```javascript
// Si le contenu diffère entre serveur et client :
// SERVEUR : <div>Compteur: 0</div>
// CLIENT après hydratation : <div>Compteur: 1</div>

// ERREUR : Warning d'hydratation!
// Solution avec Next.js : 'use client' pour les composants interactifs
```

---

## **PARTIE 3 : Autres Concepts Importants**

### **3.1 TTFB vs FCP vs LCP**

**Définition** : Métriques de performance web critiques.

**1. TTFB (Time To First Byte)** :
```bash
# Temps entre la requête et la réception du premier octet
Navigateur : "Donne-moi la page!"
Serveur : "..." (traitement)
Serveur : "Voici le premier octet!" ← TTFB mesuré ici

# Bon TTFB : < 200ms
# Mauvais TTFB : > 600ms
```

**2. FCP (First Contentful Paint)** :
```bash
# Moment où le PREMIER élément de contenu apparaît
Page blanche → <div>Chargement...</div> ← FCP

# Bon FCP : < 1.8s
# Critique pour l'UX
```

**3. LCP (Largest Contentful Paint)** :
```bash
# Moment où le CONTENU PRINCIPAL apparaît
<h1>Produit iPhone 15 Pro Max</h1> ← LCP
<img src="iphone.jpg"> ← LCP si image plus grande

# Bon LCP : < 2.5s
# Impact direct sur le SEO (Google le mesure!)
```

**Comparaison des stratégies** :
```javascript
// Mesures réelles (même application) :

// CSR (React seul)
TTFB: 100ms  FCP: 2.1s  LCP: 4.3s  SEO: ❌

// SSR (Next.js)
TTFB: 300ms  FCP: 0.8s  LCP: 1.2s  SEO: ✅

// SSG (Next.js)
TTFB: 50ms   FCP: 0.5s  LCP: 0.8s  SEO: ✅✅
```

---

### **3.2 First-Party vs Third-Party Code**

**Définition** :
- **First-Party** : Votre code, vos API, votre base de données
- **Third-Party** : Code externe (analytics, publicités, widgets)

**Impact sur le SSR** :
```javascript
// PROBLÈME : Third-party code bloque le rendu
async function renderPage() {
  // Votre code rapide
  const products = await yourDatabase.getProducts(); // 100ms
  
  // Code tiers SLOW
  const analytics = await thirdParty.getUserData(); // 2 secondes!
  const ads = await adNetwork.getAds(); // 1.5 secondes
  
  // Résultat : TTFB = 3.6s! (trop lent)
}

// SOLUTION Next.js : Streaming SSR
// Envoie d'abord VOTRE contenu, puis le reste
```

---

### **3.3 CDN (Content Delivery Network)**

**Définition** : Réseau de serveurs distribué géographiquement pour servir du contenu plus rapidement.

**Comment ça marche avec Next.js** :
```bash
# Sans CDN (serveur unique à Paris)
Utilisateur Tokyo → Paris → Tokyo : 300ms
Utilisateur NY → Paris → NY : 150ms
Utilisateur Sydney → Paris → Sydney : 400ms

# Avec CDN Vercel (Next.js)
Utilisateur Tokyo → CDN Tokyo : 30ms
Utilisateur NY → CDN New York : 20ms
Utilisateur Sydney → CDN Sydney : 40ms
```

**SSG + CDN = Performance Maximale** :
```
Votre ordinateur → Build → Fichiers statiques → Poussés sur 100+ CDN
Utilisateur → CDN la plus proche → Page en 50ms
```

---

## **PARTIE 4 : Problèmes Résolus par Next.js**

### **4.1 Problèmes de React Vanilla et Solutions Next.js**

| Problème React | Solution Next.js | Comment |
|----------------|------------------|---------|
| **SEO médiocre** | SSR/SSG natif | Contenu dans le HTML initial |
| **Performance initiale lente** | Pré-rendering | HTML prêt immédiatement |
| **Configuration complexe** | Zero-config | Tout inclus, prêt à l'emploi |
| **Pas de structure standard** | File-system routing | Routes basées sur les dossiers |
| **Pas de backend intégré** | API Routes | API dans le même projet |
| **Images non optimisées** | Image Component | Optimisation automatique |
| **Pas de i18n** | Internationalisation intégrée | Traduction prête |
| **Déploiement compliqué** | Vercel intégré | `vercel` = déployé |

### **4.2 Comparaison Technique Détail**

**Exemple : Page produit e-commerce**

**Avec React seul** :
```javascript
// ProductPage.jsx
function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchProduct()
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <Skeleton />;
  if (error) return <Error />;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

// Problèmes :
// 1. Page blanche pendant le chargement
// 2. Image non optimisée (trop lourde)
// 3. SEO médiocre (contenu chargé après)
```

**Avec Next.js** :
```javascript
// app/product/[id]/page.js
import Image from 'next/image';

async function getProduct(id) {
  // Fetch côté SERVEUR (rapide, sécurisé)
  const res = await fetch(`https://api.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      {/* Image optimisée automatiquement */}
      <Image 
        src={product.image}
        width={800}
        height={600}
        alt={product.name}
        priority // Charge en priorité
      />
      <p>{product.description}</p>
      {/* Client Component pour l'interactivité */}
      <AddToCartButton productId={product.id} />
    </div>
  );
}

// Avantages :
// 1. HTML complet immédiatement
// 2. Image optimisée (WebP, taille réduite)
// 3. SEO parfait (contenu dans HTML)
// 4. Code splitting automatique
```

---

## **PARTIE 5 : Quiz de Validation des Concepts**

### **Questions (20 questions)**

**1. Que signifie SEO ?**
A) Search Engine Optimization
B) Site Effectively Optimized
C) Server Execution Order
D) System Error Optimization

**2. Quelle est la principale différence entre CSR et SSR ?**
A) CSR rend côté client, SSR côté serveur
B) CSR est plus rapide que SSR
C) SSR n'utilise pas JavaScript
D) Aucune différence

**3. Dans SSG, quand les pages sont-elles générées ?**
A) À chaque requête utilisateur
B) Au moment du build
C) Toutes les heures
D) Jamais, elles sont dynamiques

**4. Quel problème résout principalement le SSR ?**
A) La sécurité des données
B) Le SEO des Single Page Applications
C) Le coût d'hébergement
D) La complexité du code

**5. Qu'est-ce que l'hydratation en React ?**
A) Processus d'ajout d'interactivité à du HTML statique
B) Compression des images
C) Chargement des polices
D) Mise en cache des données

**6. Quelle métrique mesure le temps d'apparition du contenu principal ?**
A) TTFB
B) FCP
C) LCP
D) CLS

**7. L'ISR permet :**
A) De régénérer des pages statiques périodiquement
B) De désactiver JavaScript
C) De compresser les images
D) De crypter les données

**8. Pour un site e-commerce, quelle stratégie est optimale ?**
A) CSR pour toutes les pages
B) SSR pour les pages produits, SSG pour le blog
C) Pas de JavaScript
D) Uniquement SSG

**9. Quel est l'avantage principal du SSG ?**
A) Performance maximale
B) Données en temps réel
C) Pas besoin de build
D) JavaScript obligatoire

**10. Pourquoi Google préfère-t-il le SSR/SSG ?**
A) Parce qu'il n'exécute pas JavaScript
B) Parce qu'il voit le contenu immédiatement
C) Parce que c'est moins cher
D) Parce que c'est plus sécurisé

**11. Que signifie TTFB ?**
A) Time To First Byte
B) Total Time For Building
C) Technical Test For Browsers
D) Time To Final Build

**12. Quel est l'inconvénient du CSR pour le SEO ?**
A) Google doit exécuter JavaScript pour voir le contenu
B) Les pages sont trop légères
C) Trop de HTML est envoyé
D) Pas d'inconvénient

**13. Dans Next.js, les API Routes permettent :**
A) De créer un backend dans le même projet
B) D'optimiser les images
C) De générer des PDF
D) De compresser le CSS

**14. Quel est le rôle d'un CDN avec Next.js ?**
A) Servir le contenu depuis l'emplacement géographique le plus proche
B) Exécuter le code côté serveur
C) Générer les pages dynamiques
D) Stocker la base de données

**15. Pour un blog avec 1000 articles, quelle stratégie ?**
A) SSG avec regeneration incrémentielle
B) CSR pour tous les articles
C) SSR à chaque visite
D) Pas de pré-rendering

**16. Qu'est-ce que le "fold above the fold" ?**
A) Contenu visible sans scroller
B) Temps de chargement
C) Taille du bundle
D) Nombre de requêtes

**17. Pourquoi l'hydratation peut-elle causer des erreurs ?**
A) Si le HTML serveur diffère du HTML client
B) Si JavaScript est désactivé
C) Si le CSS est mal chargé
D) Si les images sont trop lourdes

**18. Quel hook React est problématique dans les Server Components ?**
A) useState et useEffect
B) useRef
C) useMemo
D) useCallback

**19. Que permet le streaming SSR dans Next.js ?**
A) D'envoyer des parties de la page au fur et à mesure
B) De diffuser des vidéos
C) De compresser les données
D) De crypter les requêtes

**20. Pour une page avec données mises à jour toutes les 5 minutes :**
A) ISR avec revalidate: 300
B) SSG sans revalidation
C) CSR uniquement
D) SSR à chaque requête

---

**Correction** :
1. A, 2. A, 3. B, 4. B, 5. A, 6. C, 7. A, 8. B, 9. A, 10. B,
11. A, 12. A, 13. A, 14. A, 15. A, 16. A, 17. A, 18. A, 19. A, 20. A

---

## **PARTIE 6 : Préparation pour Next.js**

### **Ce que vous savez maintenant :**

1. **Les problèmes de React vanilla** : SEO, performance initiale, configuration
2. **Les solutions existantes** : SSR, SSG, ISR
3. **Les métriques importantes** : TTFB, FCP, LCP
4. **Les compromis** : Fraîcheur vs Performance

### **Ce que Next.js apporte :**

```javascript
// Next.js = React + toutes ces solutions INTÉGRÉES

const NextJS = {
  routing: 'File-system based',
  rendering: ['SSR', 'SSG', 'ISR', 'CSR'], // Toutes les options!
  optimization: {
    images: 'Automatic',
    fonts: 'Automatic',
    scripts: 'Automatic'
  },
  features: {
    apiRoutes: true,
    middleware: true,
    i18n: true,
    analytics: true
  },
  deployment: 'One command to Vercel'
};
```

### **Prochaines étapes :**

1. **Installation de Next.js**
2. **Comprendre l'App Router vs Pages Router**
3. **Server Components vs Client Components**
4. **Créer notre premier projet avec :**
   - Page statique (SSG)
   - Page dynamique (SSR)
   - API Route
   - Optimisation d'images

**Prêt à commencer ?** 🚀

```bash
# La commande magique :
npx create-next-app@latest
```

**Dans le prochain module :** Nous allons installer Next.js et créer notre premier projet ensemble, en appliquant tous ces concepts!


# **COURS COMPLET : Next.js - Du Début à la Maîtrise**

## **Module 1 : Installation et Premiers Pas**

### **1.1 Pourquoi Next.js ? Le Constat Final**

**Rappel des problèmes React** :
```javascript
// AVEC REACT SEUL - 7 problèmes majeurs
const problèmes = [
  "1. Page blanche au chargement (CSR)",
  "2. SEO catastrophique (Google voit une page vide)",
  "3. Configuration manuelle (Webpack, Babel, Router...)",
  "4. Pas de structure imposée → anarchie dans les projets",
  "5. Pas de backend intégré → 2 projets à gérer",
  "6. Images non optimisées → site lent",
  "7. Déploiement complexe → configuration serveur nécessaire"
];

// AVEC NEXT.JS - Solutions intégrées
const solutions = [
  "1. SSR/SSG par défaut → contenu immédiat",
  "2. HTML complet envoyé → SEO parfait",
  "3. Zero-config → tout est pré-configuré",
  "4. File-system routing → structure claire",
  "5. API Routes → backend dans le même projet",
  "6. Image Component → optimisation auto",
  "7. Vercel → déploiement en 1 commande"
];
```

### **1.2 Installation - 3 Méthodes**

#### **Méthode 1 : Create Next App (Recommandée)**
```bash
# Crée un projet avec interface interactive
npx create-next-app@latest

# Questions posées :
? What is your project named? › mon-projet
? Would you like to use TypeScript? › No / Yes
? Would you like to use ESLint? › No / Yes
? Would you like to use Tailwind CSS? › No / Yes
? Would you like to use `src/` directory? › No / Yes
? Would you like to use App Router? (recommended) › No / Yes
? Would you like to customize the default import alias (@/*)? › No / Yes
```

#### **Méthode 2 : Installation manuelle**
```bash
# Création manuelle étape par étape
mkdir mon-projet-nextjs
cd mon-projet-nextjs

# Initialisation npm
npm init -y

# Installation des dépendances
npm install next react react-dom

# Création des dossiers de base
mkdir app public

# Fichier package.json modifié
```

**package.json** :
```json
{
  "name": "mon-projet-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

#### **Méthode 3 : Avec TypeScript et Tailwind**
```bash
# Tout en une commande
npx create-next-app@latest mon-app \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-eslint \
  --no-experimental-app

# Démarrer
cd mon-app
npm run dev
```

### **1.3 Structure du Projet**

```
mon-projet-nextjs/
├── app/                    # NOUVEAU : App Router (Next.js 13+)
│   ├── layout.js         # Layout racine - présent sur toutes les pages
│   ├── page.js          # Page d'accueil (/)
│   ├── about/
│   │   └── page.js      # Page /about
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.js  # Page dynamique /blog/:slug
│   └── api/
│       └── route.js     # API endpoint (/api/*)
├── pages/               # ANCIEN : Pages Router (toujours supporté)
│   ├── _app.js         # Ancien layout
│   └── index.js        # Ancienne page d'accueil
├── public/             # Fichiers statiques (images, fonts, favicon)
│   ├── favicon.ico
│   └── images/
├── components/         # Composants réutilisables
├── lib/               # Utilitaires, fonctions helpers
├── styles/            # Fichiers CSS globaux
├── next.config.js     # Configuration Next.js
├── package.json
└── README.md
```

### **1.4 Premier Fichier : app/layout.js**

**Définition** : Le `layout.js` est le **template de base** qui enveloppe TOUTES vos pages. C'est comme le cadre d'une photo.

```jsx
// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

// Charger une police Google optimisée
const inter = Inter({ subsets: ['latin'] });

// Métadonnées pour le SEO
export const metadata = {
  title: 'Mon Application Next.js',
  description: 'Créée avec Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Header présent sur toutes les pages */}
        <header style={styles.header}>
          <nav>
            <a href="/">Accueil</a>
            <a href="/about">À propos</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        
        {/* Contenu de la page actuelle */}
        <main style={styles.main}>
          {children}
        </main>
        
        {/* Footer présent sur toutes les pages */}
        <footer style={styles.footer}>
          <p>© 2024 - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  header: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '1rem',
  },
  main: {
    minHeight: '80vh',
    padding: '2rem',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    textAlign: 'center',
  },
};
```

### **1.5 Première Page : app/page.js**

```jsx
// app/page.js
export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue sur Next.js !</h1>
      
      <div style={styles.grid}>
        <Card 
          title="Performant" 
          description="Chargement ultra-rapide avec le pré-rendering"
          icon="⚡"
        />
        <Card 
          title="SEO Optimisé" 
          description="Contenu indexable par les moteurs de recherche"
          icon="🔍"
        />
        <Card 
          title="Full-Stack" 
          description="Frontend + backend dans un seul projet"
          icon="🚀"
        />
      </div>
      
      <section style={styles.section}>
        <h2>Pourquoi Next.js ?</h2>
        <ul style={styles.list}>
          <li>✅ Pas de page blanche au chargement</li>
          <li>✅ HTML complet envoyé par le serveur</li>
          <li>✅ Routes basées sur les fichiers</li>
          <li>✅ API intégrée dans le projet</li>
          <li>✅ Images optimisées automatiquement</li>
          <li>✅ Déploiement en 1 commande</li>
        </ul>
      </section>
    </div>
  );
}

// Composant réutilisable
function Card({ title, description, icon }) {
  return (
    <div style={cardStyles.container}>
      <div style={cardStyles.icon}>{icon}</div>
      <h3 style={cardStyles.title}>{title}</h3>
      <p style={cardStyles.description}>{description}</p>
    </div>
  );
}

// Styles inline (dans un vrai projet, utilisez CSS Modules ou Tailwind)
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#0070f3',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  section: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
  },
  list: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
  },
};

const cardStyles = {
  container: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  description: {
    color: '#666',
    lineHeight: '1.6',
  },
};
```

### **1.6 Démarrer le Serveur**

```bash
# Développement (avec hot reload)
npm run dev
# ➜ Local: http://localhost:3000

# Build pour production
npm run build
# Génère les fichiers optimisés

# Démarrer en mode production
npm start
# ➜ Production: http://localhost:3000

# Vérifier la structure générée
.next/
├── server/           # Pages SSR
├── static/           # Assets statiques
└── build-manifest.json
```

---

## **Module 2 : Le Routage dans Next.js**

### **2.1 File-System Routing - Le Concept Magique**

**Définition** : Dans Next.js, **les fichiers = routes**. Pas de configuration manuelle !

```
app/
├── page.js              → /
├── about/
│   └── page.js         → /about
├── products/
│   ├── page.js         → /products
│   └── [id]/
│       └── page.js     → /products/123
└── dashboard/
    ├── page.js         → /dashboard
    └── settings/
        └── page.js     → /dashboard/settings
```

### **2.2 Créer nos Premières Routes**

#### **Route 1 : Page About (Statique)**
```jsx
// app/about/page.js
export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1>À propos de nous</h1>
      
      <div style={styles.content}>
        <section style={styles.section}>
          <h2>Notre Histoire</h2>
          <p>
            Fondée en 2024, notre entreprise s'est spécialisée dans 
            le développement d'applications web modernes avec Next.js.
          </p>
        </section>
        
        <section style={styles.section}>
          <h2>Notre Équipe</h2>
          <div style={styles.teamGrid}>
            <TeamMember 
              name="Alice Dupont"
              role="Développeuse Frontend"
              bio="Spécialiste React et Next.js"
            />
            <TeamMember 
              name="Bob Martin"
              role="Développeur Backend"
              bio="Expert en Node.js et bases de données"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamMember({ name, role, bio }) {
  return (
    <div style={memberStyles.container}>
      <h3 style={memberStyles.name}>{name}</h3>
      <p style={memberStyles.role}>{role}</p>
      <p style={memberStyles.bio}>{bio}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  content: {
    marginTop: '2rem',
  },
  section: {
    marginBottom: '3rem',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '1rem',
  },
};

const memberStyles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #eee',
  },
  name: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#0070f3',
  },
  role: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: '1rem',
  },
  bio: {
    color: '#444',
    lineHeight: '1.6',
  },
};
```

#### **Route 2 : Page Contact (Avec Formulaire)**
```jsx
// app/contact/page.js
'use client'; // Important : Ce composant a besoin d'interactivité

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulation d'envoi à une API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulation délai
      
      // Ici, vous enverriez à votre API Route
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser après 3 secondes
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Contactez-nous</h1>
      
      <div style={styles.grid}>
        <div style={styles.info}>
          <h2>Nos Coordonnées</h2>
          <p><strong>Email:</strong> contact@monsite.com</p>
          <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
          <p><strong>Adresse:</strong> 123 Rue de Next.js, Paris</p>
        </div>
        
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={styles.textarea}
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === 'loading'}
              style={{
                ...styles.button,
                backgroundColor: status === 'loading' ? '#ccc' : '#0070f3',
              }}
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            
            {status === 'success' && (
              <p style={styles.success}>Message envoyé avec succès !</p>
            )}
            
            {status === 'error' && (
              <p style={styles.error}>Une erreur est survenue. Réessayez.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
    marginTop: '2rem',
  },
  info: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  success: {
    color: 'green',
    backgroundColor: '#e6ffe6',
    padding: '1rem',
    borderRadius: '4px',
    marginTop: '1rem',
  },
  error: {
    color: 'red',
    backgroundColor: '#ffe6e6',
    padding: '1rem',
    borderRadius: '4px',
    marginTop: '1rem',
  },
};
```

### **2.3 Routes Dynamiques**

**Définition** : Routes avec paramètres variables (ex: `/products/123`, `/blog/mon-article`)

#### **Exemple : Page Produit Dynamique**
```jsx
// app/products/[id]/page.js
// Ceci est un Server Component par défaut

// Fonction pour récupérer un produit (simulé)
async function getProduct(id) {
  // Dans un vrai projet, ça viendrait d'une base de données
  const products = {
    '1': { id: 1, name: 'iPhone 15 Pro', price: 1299, description: 'Le dernier iPhone' },
    '2': { id: 2, name: 'MacBook Air M2', price: 1499, description: 'Ultra fin et puissant' },
    '3': { id: 3, name: 'AirPods Pro', price: 299, description: 'Écouteurs sans fil' },
  };
  
  // Simuler un délai réseau
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return products[id] || null;
}

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  // Définit quels produits seront pré-générés au build
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    return (
      <div style={styles.container}>
        <h1>Produit non trouvé</h1>
        <p>Le produit que vous cherchez n'existe pas.</p>
      </div>
    );
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.product}>
        <div style={styles.imagePlaceholder}>
          <span style={styles.imageText}>Image du produit</span>
        </div>
        
        <div style={styles.details}>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.price}>{product.price}€</p>
          <p style={styles.description}>{product.description}</p>
          
          {/* Client Component pour l'interactivité */}
          <AddToCart productId={product.id} />
          
          <div style={styles.features}>
            <h3>Caractéristiques :</h3>
            <ul>
              <li>Livraison gratuite</li>
              <li>Garantie 2 ans</li>
              <li>Retour sous 30 jours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Client pour l'interactivité
function AddToCart({ productId }) {
  // Note: En réalité, ce serait un composant séparé avec 'use client'
  return (
    <button style={addToCartStyles.button}>
      🛒 Ajouter au panier
    </button>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  product: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  imagePlaceholder: {
    backgroundColor: '#f5f5f5',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
  },
  imageText: {
    color: '#999',
    fontSize: '1.2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
  },
  price: {
    fontSize: '2rem',
    color: '#0070f3',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
  },
  features: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '8px',
    marginTop: '1rem',
  },
};

const addToCartStyles = {
  button: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
    justifyContent: 'center',
  },
};
```

### **2.4 Navigation entre Pages**

Next.js fournit deux façons de naviguer :

#### **Option 1 : Link Component (Optimisé)**
```jsx
// Dans un composant
import Link from 'next/link';

function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>
        Accueil
      </Link>
      <Link href="/about" style={styles.link}>
        À propos
      </Link>
      <Link href="/products" style={styles.link}>
        Produits
      </Link>
      <Link href="/products/1" style={styles.link}>
        iPhone 15
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
  },
  link: {
    textDecoration: 'none',
    color: '#0070f3',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};
```

#### **Option 2 : useRouter Hook (Navigation programmatique)**
```jsx
// app/dashboard/page.js
'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  
  const handleLogout = () => {
    // Simulation de déconnexion
    console.log('Déconnexion...');
    
    // Redirection vers la page d'accueil
    router.push('/');
  };
  
  const goToSettings = () => {
    router.push('/dashboard/settings');
  };
  
  return (
    <div style={styles.container}>
      <h1>Tableau de bord</h1>
      
      <div style={styles.grid}>
        <Card 
          title="Vue d'ensemble"
          onClick={() => router.push('/dashboard/overview')}
        />
        <Card 
          title="Paramètres"
          onClick={goToSettings}
        />
        <Card 
          title="Statistiques"
          onClick={() => router.push('/dashboard/stats')}
        />
      </div>
      
      <button onClick={handleLogout} style={styles.logoutButton}>
        Déconnexion
      </button>
    </div>
  );
}

function Card({ title, onClick }) {
  return (
    <div onClick={onClick} style={cardStyles.container}>
      <h3>{title}</h3>
      <p>Cliquez pour voir</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    margin: '2rem 0',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const cardStyles = {
  container: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};
```

---

## **Module 3 : Data Fetching et API Routes**

### **3.1 Data Fetching dans Next.js**

Next.js propose 4 façons de récupérer des données :

#### **1. fetch() API (Recommandé)**
```jsx
// Server Component
async function getProducts() {
  // fetch avec cache par défaut
  const response = await fetch('https://api.example.com/products');
  
  // fetch sans cache (données fraîches)
  // const response = await fetch('https://api.example.com/products', {
  //   cache: 'no-store',
  // });
  
  // fetch avec revalidation
  // const response = await fetch('https://api.example.com/products', {
  //   next: { revalidate: 60 }, // Revalide toutes les 60 secondes
  // });
  
  if (!response.ok) {
    throw new Error('Échec du chargement des produits');
  }
  
  return response.json();
}
```

#### **2. Dans Server Components (Simple)**
```jsx
// app/products/page.js
async function ProductsPage() {
  // Fetch DIRECTEMENT dans le composant (côté serveur)
  const products = await fetch('https://api.example.com/products').then(res => res.json());
  
  return (
    <div>
      <h1>Produits</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### **3. getStaticProps (Pages Router)**
```javascript
// Ancienne méthode (Pages Router)
export async function getStaticProps() {
  const products = await fetchProducts();
  
  return {
    props: { products },
    revalidate: 60, // ISR: régénère toutes les 60 secondes
  };
}
```

#### **4. getServerSideProps (SSR)**
```javascript
// Ancienne méthode (Pages Router)
export async function getServerSideProps(context) {
  const { req, res, query } = context;
  
  const products = await fetchProducts();
  
  return {
    props: { products },
  };
}
```

### **3.2 Créer notre première API Route**

**Définition** : Une API Route dans Next.js = un endpoint backend dans votre projet frontend.

#### **API Route de base**
```javascript
// app/api/hello/route.js
export async function GET(request) {
  return Response.json({ 
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
    method: 'GET'
  });
}

export async function POST(request) {
  const body = await request.json();
  
  return Response.json({
    message: 'Données reçues avec succès!',
    receivedData: body,
    timestamp: new Date().toISOString(),
    method: 'POST'
  });
}
```

**Test avec curl** :
```bash
# GET request
curl http://localhost:3000/api/hello
# Réponse: {"message":"Hello from Next.js API!","timestamp":"2024-01-01T10:00:00Z","method":"GET"}

# POST request
curl -X POST http://localhost:3000/api/hello \
  -H "Content-Type: application/json" \
  -d '{"name":"John","age":30}'
```

#### **API Route avec base de données simulée**
```javascript
// app/api/users/route.js
// Base de données simulée en mémoire
let users = [
  { id: 1, name: 'Alice Dupont', email: 'alice@example.com' },
  { id: 2, name: 'Bob Martin', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

// GET /api/users
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  
  let filteredUsers = users;
  
  if (name) {
    filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  // Simuler un délai réseau
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return Response.json(filteredUsers);
}

// POST /api/users
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validation
    if (!body.name || !body.email) {
      return Response.json(
        { error: 'Nom et email requis' },
        { status: 400 }
      );
    }
    
    // Créer un nouvel utilisateur
    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    return Response.json(
      { 
        success: true, 
        user: newUser,
        message: 'Utilisateur créé avec succès'
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// GET /api/users/[id]
export async function GET_ID(request, { params }) {
  const userId = parseInt(params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return Response.json(
      { error: 'Utilisateur non trouvé' },
      { status: 404 }
    );
  }
  
  return Response.json(user);
}

// PUT /api/users/[id]
export async function PUT(request, { params }) {
  try {
    const userId = parseInt(params.id);
    const body = await request.json();
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return Response.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }
    
    // Mettre à jour l'utilisateur
    users[userIndex] = {
      ...users[userIndex],
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    return Response.json({
      success: true,
      user: users[userIndex],
      message: 'Utilisateur mis à jour'
    });
  } catch (error) {
    return Response.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id]
export async function DELETE(request, { params }) {
  const userId = parseInt(params.id);
  const initialLength = users.length;
  
  users = users.filter(u => u.id !== userId);
  
  if (users.length === initialLength) {
    return Response.json(
      { error: 'Utilisateur non trouvé' },
      { status: 404 }
    );
  }
  
  return Response.json({
    success: true,
    message: 'Utilisateur supprimé'
  });
}
```

#### **Utilisation dans un composant**
```jsx
// app/users/page.js
'use client';

import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  
  // Charger les utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setNewUser({ name: '', email: '' });
        fetchUsers(); // Recharger la liste
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création');
    }
  };
  
  const handleDelete = async (userId) => {
    if (!confirm('Supprimer cet utilisateur ?')) return;
    
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        alert('Utilisateur supprimé');
        fetchUsers(); // Recharger la liste
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };
  
  if (loading) {
    return <div>Chargement des utilisateurs...</div>;
  }
  
  return (
    <div style={styles.container}>
      <h1>Gestion des Utilisateurs</h1>
      
      {/* Formulaire d'ajout */}
      <div style={styles.formContainer}>
        <h2>Ajouter un utilisateur</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Nom"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>
            Ajouter
          </button>
        </form>
      </div>
      
      {/* Liste des utilisateurs */}
      <div style={styles.listContainer}>
        <h2>Liste des utilisateurs ({users.length})</h2>
        <div style={styles.userGrid}>
          {users.map(user => (
            <div key={user.id} style={styles.userCard}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>Créé le: {new Date(user.createdAt).toLocaleDateString()}</p>
              <button 
                onClick={() => handleDelete(user.id)}
                style={styles.deleteButton}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  formContainer: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '3rem',
  },
  form: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-end',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '6px',
    border: '1px solid #eee',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};
```

---

## **Module 4 : Rendering Strategies (SSR, SSG, ISR)**

### **4.1 Comparaison Détaillée**

| Stratégie | Quand utiliser ? | Code | Performance | Fraîcheur |
|-----------|------------------|------|-------------|-----------|
| **Static (SSG)** | Contenu qui change rarement | `fetch()` sans cache | ⭐⭐⭐⭐⭐ | ❌ |
| **Dynamic (SSR)** | Contenu personnalisé par user | `fetch('...', { cache: 'no-store' })` | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **ISR** | Contenu qui change périodiquement | `fetch('...', { next: { revalidate: 60 } })` | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### **4.2 Exemple Pratique : Blog avec 3 Stratégies**

#### **Structure du blog**
```
app/blog/
├── page.js                    # Liste articles (ISR)
├── [slug]/
│   └── page.js              # Article individuel (SSG + ISR)
└── latest/
    └── page.js              # Derniers articles (SSR)
```

#### **1. Page liste articles (ISR)**
```jsx
// app/blog/page.js
async function getBlogPosts() {
  // Revalidation toutes les 60 secondes
  const response = await fetch('https://api.example.com/blog/posts', {
    next: { revalidate: 60 }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return response.json();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div style={styles.container}>
      <h1>Blog</h1>
      <p style={styles.subtitle}>
        Dernière mise à jour: {new Date().toLocaleTimeString()}
      </p>
      
      <div style={styles.grid}>
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <a href={`/blog/${post.slug}`} style={cardStyles.link}>
      <div style={cardStyles.container}>
        <div style={cardStyles.image}></div>
        <div style={cardStyles.content}>
          <h3 style={cardStyles.title}>{post.title}</h3>
          <p style={cardStyles.excerpt}>{post.excerpt}</p>
          <div style={cardStyles.meta}>
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
```

#### **2. Page article individuel (SSG + ISR)**
```jsx
// app/blog/[slug]/page.js
async function getPost(slug) {
  // SSG avec revalidation
  const response = await fetch(`https://api.example.com/blog/posts/${slug}`, {
    next: { revalidate: 3600 } // 1 heure
  });
  
  if (!response.ok) {
    return null;
  }
  
  return response.json();
}

export async function generateStaticParams() {
  // Génère les 100 premiers articles au build
  const posts = await fetch('https://api.example.com/blog/posts?limit=100').then(res => res.json());
  
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return (
      <div style={styles.container}>
        <h1>Article non trouvé</h1>
        <p>L'article que vous cherchez n'existe pas.</p>
      </div>
    );
  }
  
  return (
    <article style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{post.title}</h1>
        <div style={styles.meta}>
          <span>Par {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime} min de lecture</span>
        </div>
      </header>
      
      <div style={styles.imagePlaceholder}></div>
      
      <div style={styles.content}>
        {post.content}
      </div>
      
      <footer style={styles.footer}>
        <p>Dernière mise à jour: {new Date().toLocaleString()}</p>
      </footer>
    </article>
  );
}
```

#### **3. Page derniers articles (SSR)**
```jsx
// app/blog/latest/page.js
async function getLatestPosts() {
  // Pas de cache - données fraîches à chaque requête
  const response = await fetch('https://api.example.com/blog/posts/latest', {
    cache: 'no-store',
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}` // Securisé côté serveur
    }
  });
  
  return response.json();
}

export default async function LatestPostsPage() {
  const posts = await getLatestPosts();
  const timestamp = new Date().toISOString();
  
  return (
    <div style={styles.container}>
      <h1>Derniers Articles</h1>
      <p style={styles.timestamp}>
        Généré à: {new Date(timestamp).toLocaleTimeString()}
      </p>
      
      <div style={styles.grid}>
        {posts.map(post => (
          <div key={post.id} style={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>Publié il y a {post.timeSincePublished}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## **Module 5 : Optimisations et Déploiement**

### **5.1 Optimisation des Images**

**Problème** : Les images non optimisées ralentissent le site.
**Solution** : Le composant `next/image`.

```jsx
import Image from 'next/image';

function OptimizedImage() {
  return (
    <div style={styles.container}>
      {/* MAUVAIS (image non optimisée) */}
      {/* <img src="/photo.jpg" alt="Photo" width={800} height={600} /> */}
      
      {/* BON (image optimisée par Next.js) */}
      <Image
        src="/photo.jpg"
        alt="Description de la photo"
        width={800}
        height={600}
        priority // Pour les images LCP (au-dessus du fold)
        quality={85} // Qualité réduite (85% par défaut)
        sizes="(max-width: 768px) 100vw, 50vw" // Responsive
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      
      <p>Cette image sera automatiquement :</p>
      <ul>
        <li>Convertie en WebP si le navigateur le supporte</li>
        <li>Redimensionnée aux dimensions spécifiées</li>
        <li>Chargée en lazy loading par défaut</li>
        <li>Servie depuis un CDN si déployé sur Vercel</li>
      </ul>
    </div>
  );
}
```

### **5.2 Optimisation des Polices**

```jsx
// app/layout.js
import { Inter, Roboto_Mono } from 'next/font/google';

// Pré-charger les polices
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

// Utilisation
function TextComponent() {
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-inter)' }}>
        Texte en Inter (police principale)
      </p>
      <code style={{ fontFamily: 'var(--font-roboto-mono)' }}>
        // Code en Roboto Mono
      </code>
    </div>
  );
}
```

### **5.3 Déploiement sur Vercel**

```bash
# Étape 1 : Build local (test)
npm run build

# Vérifier la sortie
ls .next/

# Étape 2 : Déployer sur Vercel
npm i -g vercel  # Installer Vercel CLI

# Premier déploiement
vercel

# Questions :
? Set up and deploy ~/projects/my-app? (Y/n) Y
? Which scope do you want to deploy to? (mon-organisation)
? Link to existing project? (y/N) N
? What's your project's name? mon-app
? In which directory is your code located? ./

# Étape 3 : Déploiement en production
vercel --prod

# Ou avec Git (recommandé)
git init
git add .
git commit -m "Initial commit"
git push origin main

# Lier à Vercel
vercel git connect
```

### **5.4 Configuration Next.js (next.config.js)**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration de base
  reactStrictMode: true,
  
  // Redirections
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // Réécritures (proxying, etc.)
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://api.external.com/:path*',
      },
    ];
  },
  
  // Headers HTTP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  
  // Variables d'environnement exposées au client
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // Compression
  compress: true,
  
  // Images
  images: {
    domains: ['images.unsplash.com', 'example.com'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Webpack
  webpack: (config, { dev, isServer }) => {
    // Modifications Webpack si nécessaire
    return config;
  },
};

module.exports = nextConfig;
```

---

## **Module 6 : Projet Complet - Site E-commerce**

### **Structure du projet**
```
app/
├── layout.js
├── page.js
├── products/
│   ├── page.js
│   └── [id]/
│       └── page.js
├── cart/
│   └── page.js
├── checkout/
│   └── page.js
├── api/
│   ├── products/
│   │   └── route.js
│   ├── cart/
│   │   └── route.js
│   └── orders/
│       └── route.js
└── components/
    ├── Header.js
    ├── Footer.js
    ├── ProductCard.js
    └── CartProvider.js
```

### **Code complet simplifié**

#### **Layout principal avec Provider**
```jsx
// app/layout.js
import { CartProvider } from '@/components/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Boutique Next.js',
  description: 'Site e-commerce moderne avec Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
```

#### **Page d'accueil**
```jsx
// app/page.js
import ProductGrid from '@/components/ProductGrid';

async function getFeaturedProducts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/featured`, {
    next: { revalidate: 3600 } // Cache 1 heure
  });
  
  return response.json();
}

export default async function HomePage() {
  const products = await getFeaturedProducts();
  
  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Boutique Next.js</h1>
        <p style={styles.heroSubtitle}>Produits de qualité, performance garantie</p>
      </section>
      
      <section style={styles.featured}>
        <h2 style={styles.sectionTitle}>Produits en vedette</h2>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
```

#### **Composant ProductCard optimisé**
```jsx
// components/ProductCard.js
'use client';

import Image from 'next/image';
import { useCart } from './CartProvider';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          style={styles.image}
        />
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <div style={styles.price}>${product.price}</div>
        
        <button 
          onClick={() => addToCart(product)}
          style={styles.button}
        >
          🛒 Ajouter au panier
        </button>
      </div>
    </div>
  );
}
```

---

## **Résumé et Prochaines Étapes**

### **Ce que vous avez appris :**

✅ **Installation et configuration** de Next.js  
✅ **File-system routing** et navigation  
✅ **Server Components vs Client Components**  
✅ **Data fetching** (SSR, SSG, ISR)  
✅ **API Routes** (backend intégré)  
✅ **Optimisations** (images, polices, performance)  
✅ **Déploiement** sur Vercel  

### **Prochaines étapes d'apprentissage :**

1. **Authentification** avec NextAuth.js
2. **Base de données** avec Prisma + PostgreSQL
3. **Paiements** avec Stripe
4. **Tests** avec Jest et Cypress
5. **Performance monitoring** avec Vercel Analytics

### **Commandes importantes :**
```bash
# Développement
npm run dev

# Build
npm run build

# Production
npm start

# Déploiement Vercel
npx vercel --prod

# Analyse du bundle
npx @next/bundle-analyzer
```

### **Ressources :**

📚 **Documentation** : [nextjs.org/docs](https://nextjs.org/docs)  
🎓 **Tutoriel interactif** : [nextjs.org/learn](https://nextjs.org/learn)  
💬 **Communauté** : [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)  
🐦 **Twitter** : [@nextjs](https://twitter.com/nextjs)  

---

## **Exercice Final : Créer un Portfolio Personnel**

**Objectif** : Créer un site portfolio avec :
- Page d'accueil (SSG)
- Page À propos (SSG)
- Page Projets (ISR - revalide chaque jour)
- Page Contact (Client Component avec formulaire)
- API Route pour le formulaire de contact
- Déploiement sur Vercel

**Bonus** :
- Ajouter un blog (SSG + ISR)
- Intégrer Google Analytics
- Ajouter un thème sombre/clair
- Optimiser toutes les images

**Commencez maintenant** :
```bash
npx create-next-app@latest mon-portfolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --no-eslint

cd mon-portfolio
npm run dev
```

**Félicitations !** 🎉 Vous maîtrisez maintenant Next.js et êtes prêt à créer des applications web modernes et performantes !
