# 📋 APIs GRATUITES COMPLÈTES

## 🎯 **1. JSONPlaceholder - Données de test**
```
URL de base : https://jsonplaceholder.typicode.com
```

**Routes disponibles (toutes supportent GET, POST, PUT, PATCH, DELETE) :**

### **Utilisateurs**
```
GET    /users                    → Tous les utilisateurs
GET    /users/1                  → Utilisateur avec ID 1
GET    /users/1/posts            → Posts de l'utilisateur 1
GET    /users/1/albums           → Albums de l'utilisateur 1
GET    /users/1/todos            → Todos de l'utilisateur 1
POST   /users                    → Créer un utilisateur
PUT    /users/1                  → Mettre à jour l'utilisateur 1
PATCH  /users/1                  → Modifier partiellement
DELETE /users/1                  → Supprimer l'utilisateur 1
```

### **Posts**
```
GET    /posts                    → 100 posts
GET    /posts/1                  → Post avec ID 1
GET    /posts/1/comments         → Commentaires du post 1
GET    /posts?userId=1           → Posts de l'utilisateur 1
POST   /posts                    → Créer un post
```

### **Commentaires**
```
GET    /comments                 → 500 commentaires
GET    /comments?postId=1        → Commentaires du post 1
```

### **Albums & Photos**
```
GET    /albums                   → 100 albums
GET    /albums/1                 → Album avec ID 1
GET    /albums/1/photos          → Photos de l'album 1
GET    /albums?userId=1          → Albums de l'utilisateur 1
```

### **Photos**
```
GET    /photos                   → 5000 photos
GET    /photos/1                 → Photo avec ID 1
GET    /photos?albumId=1         → Photos de l'album 1
```

### **Todos**
```
GET    /todos                    → 200 todos
GET    /todos/1                  → Todo avec ID 1
GET    /todos?userId=1           → Todos de l'utilisateur 1
```

### **Filtrage**
```
GET    /posts?userId=1&id=5      → Filtre multiple
GET    /posts?_limit=10          → Limite à 10 résultats
GET    /posts?_start=20&_limit=5 → Pagination
GET    /posts?_sort=id&_order=desc → Tri
```

**Exemple POST :**
```javascript
// Créer un nouvel utilisateur
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
  })
})
```

---

## 🎯 **2. Random User API - Utilisateurs aléatoires**
```
URL de base : https://randomuser.me/api/
```

**Routes et paramètres :**

### **Basique**
```
GET /api/                       → 1 utilisateur aléatoire
GET /api/?results=5             → 5 utilisateurs
GET /api/?gender=female         → Seulement femmes
GET /api/?gender=male           → Seulement hommes
GET /api/?nat=fr,us             → Nationalités spécifiques
```

### **Formatage**
```
GET /api/?format=pretty         → JSON indenté
GET /api/?noinfo                → Sans info supplémentaire
GET /api/?inc=name,email        → Inclure seulement name et email
GET /api/?exc=login,registered  → Exclure certains champs
```

### **Seed (pour résultats reproductibles)**
```
GET /api/?seed=foobar           → Même seed = mêmes résultats
```

### **Pages**
```
GET /api/?page=3&results=10     → Pagination
```

### **Exemples complets :**
```
GET /api/?results=10&gender=female&nat=fr
→ 10 utilisatrices françaises

GET /api/?inc=name,email,picture&results=3
→ 3 utilisateurs avec nom, email et photo

GET /api/?seed=abc&results=5&exc=login
→ 5 utilisateurs reproductibles sans login
```

**Exemple avec image :**
```javascript
// Récupérer 3 utilisateurs avec photos
fetch('https://randomuser.me/api/?results=3&inc=picture,name,email')
  .then(r => r.json())
  .then(data => {
    data.results.forEach(user => {
      console.log(`
        Nom: ${user.name.first} ${user.name.last}
        Email: ${user.email}
        Photo: ${user.picture.large}
      `)
    })
  })
```

---

## 🎯 **3. Dog CEO API - Photos de chiens**
```
URL de base : https://dog.ceo/api
```

**Routes disponibles :**

### **Races disponibles**
```
GET /breeds/list/all           → Liste de toutes les races
GET /breeds/list               → Liste simple
```

### **Photos par race**
```
GET /breed/hound/images        → Toutes les photos de chiens de chasse
GET /breed/hound/images/random → 1 photo aléatoire de chien de chasse
GET /breed/hound/images/random/3 → 3 photos aléatoires
```

### **Photos aléatoires**
```
GET /breeds/image/random       → 1 photo aléatoire
GET /breeds/image/random/10    → 10 photos aléatoires
```

### **Sous-races**
```
GET /breed/hound/list          → Toutes les sous-races de chiens de chasse
GET /breed/hound/afghan/images → Photos de lévrier afghan
```

### **Exemples :**
```javascript
// Toutes les races
fetch('https://dog.ceo/api/breeds/list/all')

// 5 photos aléatoires
fetch('https://dog.ceo/api/breeds/image/random/5')

// Tous les labradors
fetch('https://dog.ceo/api/breed/labrador/images')

// Une photo spécifique d'un sous-type
fetch('https://dog.ceo/api/breed/hound/afghan/images/random')
```

---

## 🎯 **4. Picsum Photos - Images aléatoires**
```
URL de base : https://picsum.photos
```

**Routes :**

### **Images simples**
```
GET /200/300                   → Image 200x300 pixels
GET /200/300?random=1          → Image aléatoire
GET /200/300?grayscale         → Noir et blanc
GET /200/300?blur=5            → Flou (1-10)
GET /200/300.jpg               → Format spécifique
```

### **Liste d'images avec infos**
```
GET /v2/list                   → Liste avec métadonnées
GET /v2/list?page=2&limit=10   → Pagination
GET /v2/list?limit=5           → Limiter résultats
```

### **Image spécifique**
```
GET /id/0/200/300             → Image ID 0, taille 200x300
GET /id/0/200/300?grayscale   → Même image en noir et blanc
```

### **Seed (image reproductible)**
```
GET /seed/picsum/200/300      → Même seed = même image
```

### **Exemples :**
```javascript
// 10 images avec informations
fetch('https://picsum.photos/v2/list?limit=10')
  .then(r => r.json())
  .then(images => {
    images.forEach(img => {
      console.log(`
        ID: ${img.id}
        Auteur: ${img.author}
        URL: https://picsum.photos/id/${img.id}/400/300
        Original: ${img.download_url}
      `)
    })
  })
```

---

## 🎯 **5. REST Countries - Données des pays**
```
URL de base : https://restcountries.com/v3.1
```

**Routes :**

### **Tous les pays**
```
GET /all                      → Tous les pays (250+)
GET /all?fields=name,capital  → Seulement nom et capitale
```

### **Recherche**
```
GET /name/france              → Pays par nom
GET /name/fra                 → Recherche partielle
GET /name/united              → Tous les pays avec "united"
```

### **Filtres**
```
GET /region/europe            → Par région
GET /subregion/western-europe → Par sous-région
GET /capital/paris            → Par capitale
GET /lang/fr                  → Par langue
GET /currency/eur             → Par devise
```

### **Codes**
```
GET /alpha/col                → Par code alpha-3 (COL)
GET /alpha?codes=col,pe,at    → Plusieurs codes
GET /alpha/co                 → Par code alpha-2 (CO)
```

### **Champs spécifiques**
```
GET /name/france?fields=name,capital,population,flags
```

### **Exemple complet :**
```javascript
// France avec drapeau
fetch('https://restcountries.com/v3.1/name/france?fields=name,capital,population,flags,currencies')
  .then(r => r.json())
  .then(data => {
    const france = data[0]
    console.log(`
      Pays: ${france.name.common}
      Capitale: ${france.capital[0]}
      Population: ${france.population.toLocaleString()}
      Drapeau: ${france.flags.png}
      Devise: ${Object.keys(france.currencies)[0]}
    `)
  })
```

---

## 🎯 **6. PokéAPI - Pokémon**
```
URL de base : https://pokeapi.co/api/v2
```

**Routes principales :**

### **Pokémon**
```
GET /pokemon                  → Liste de Pokémon
GET /pokemon?limit=20&offset=0 → Pagination
GET /pokemon/pikachu          → Pokémon spécifique
GET /pokemon/25               → Par ID (Pikachu = 25)
```

### **Types**
```
GET /type                     → Tous les types
GET /type/4                   → Type avec ID 4
GET /type/fire                → Type feu
```

### **Capacités**
```
GET /ability                  → Toutes les capacités
GET /ability/65               → Capacité spécifique
```

### **Évolutions**
```
GET /evolution-chain          → Chaînes d'évolution
GET /evolution-chain/1        → Chaîne spécifique
```

### **Items**
```
GET /item                     → Tous les items
GET /item/1                   → Item spécifique
```

### **Exemple :**
```javascript
// Récupérer Pikachu avec ses sprites
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(r => r.json())
  .then(pokemon => {
    console.log(`
      Nom: ${pokemon.name}
      ID: ${pokemon.id}
      Taille: ${pokemon.height / 10}m
      Poids: ${pokemon.weight / 10}kg
      
      Types: ${pokemon.types.map(t => t.type.name).join(', ')}
      
      Sprite normal: ${pokemon.sprites.front_default}
      Sprite shiny: ${pokemon.sprites.front_shiny}
      
      Statistiques:
      ${pokemon.stats.map(stat => 
        `  ${stat.stat.name}: ${stat.base_stat}`
      ).join('\n')}
    `)
  })
```

---

## 🎯 **7. APIs avec POST gratuites (Sans clé)**

### **JSONPlaceholder** (déjà vu)
- Toutes les routes supportent POST
- Les données sont simulées (pas vraiment sauvegardées)
- Parfait pour tester

### **ReqRes API** (alternative)
```
URL: https://reqres.in/api
```
**Routes :**
```
POST /api/users                → Créer utilisateur
POST /api/register             → S'inscrire (simulé)
POST /api/login                → Se connecter (simulé)
```

**Exemple :**
```javascript
// Créer un utilisateur
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "morpheus",
    job: "leader"
  })
})
.then(r => r.json())
.then(data => {
  console.log(`ID créé: ${data.id}`) // ID généré
  console.log(`Date: ${data.createdAt}`)
})
```

### **JSON Server Online** (pour tests avancés)
```
URL: https://my-json-server.typicode.com
```
1. Crée un repo GitHub avec un `db.json`
2. Utilise : `https://my-json-server.typicode.com/ton-user/ton-repo`

**Exemple de db.json :**
```json
{
  "posts": [
    { "id": 1, "title": "Post 1", "author": "John" }
  ],
  "comments": [
    { "id": 1, "body": "Comment 1", "postId": 1 }
  ]
}
```
**Utilisation :**
```javascript
fetch('https://my-json-server.typicode.com/ton-user/ton-repo/posts')
fetch('https://my-json-server.typicode.com/ton-user/ton-repo/posts/1')
```

---

## 📋 **RÉSUMÉ RAPIDE**

| API | Images | POST | Authentification | Données |
|-----|--------|------|-----------------|---------|
| **JSONPlaceholder** | ❌ | ✅ | ❌ | Données test |
| **Random User** | ✅ (photos) | ❌ | ❌ | Utilisateurs |
| **Dog CEO** | ✅ (chiens) | ❌ | ❌ | Photos chiens |
| **Picsum Photos** | ✅ | ❌ | ❌ | Photos stock |
| **REST Countries** | ✅ (drapeaux) | ❌ | ❌ | Pays |
| **PokéAPI** | ✅ (sprites) | ❌ | ❌ | Pokémon |
| **ReqRes** | ❌ | ✅ | ❌ | Users test |

---

## 💡 **RECOMMANDATIONS**

**Pour commencer :** JSONPlaceholder  
**Pour les images :** Picsum Photos ou Dog CEO  
**Pour les données réelles :** REST Countries  
**Pour POST sans clé :** JSONPlaceholder ou ReqRes  
**Pour données complexes :** PokéAPI

**Toutes ces APIs :**
- ✅ 100% gratuites
- ✅ Pas de clé API nécessaire
- ✅ Documentation complète
- ✅ Parfaites pour apprendre