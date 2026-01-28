# Data Fetching en React

## 1. Introduction au problème fondamental

### Le contexte

En développement web moderne, nos applications React ont besoin de communiquer avec des serveurs distants pour récupérer ou envoyer des données. C'est ce qu'on appelle le data fetching.

### Le paradoxe vitesse/lenteur

JavaScript/React sont rapides :

· Exécution sur la machine cliente
· Pas de latence réseau
· Rendus instantanés
· Exemple : *console.log("Bonjour")* → affichage immédiat

### Internet est lent :

· Les données traversent des réseaux
· Latence variable (100ms à plusieurs secondes)
· Dépend de la distance, qualité réseau, charge serveur
· Exemple : fetch('https://api.com') → réponse après un délai

Conséquence

JavaScript ne peut pas "attendre" que les données arrivent. Il doit continuer à exécuter le code pendant que la requête voyage sur le réseau.


## 2. Les Promesses : La solution au problème d'asynchronisme

### Concept

Une Promesse (Promise) est un objet JavaScript qui représente l'état d'une opération asynchrone. Elle sert de "ticket d'attente" numérique.

#### Les 3 états d'une promesse

1. Pending (en attente) : L'opération est en cours d'exécution
2. Fulfilled (tenue) : L'opération a réussi avec un résultat
3. Rejected (rejetée) : L'opération a échoué avec une raison

#### Exemple

```javascript
// Création d'une promesse
const promesseRestaurant = new Promise((resolve, reject) => {
  // Simule la préparation d'une commande
  setTimeout(() => {
    const preparationReussie = Math.random() > 0.3; // 70% de chance de succès
    
    if (preparationReussie) {
      resolve("🍔 Votre burger est prêt !");
    } else {
      reject("❌ Désolé, incident en cuisine");
    }
  }, 2000); // 2 secondes de préparation
});
```

Utilisation

```javascript
promesseRestaurant
  .then(resultat => {
    console.log("Succès : " + resultat);
  })
  .catch(erreur => {
    console.log("Problème : " + erreur);
  })
  .finally(() => {
    console.log("Merci de votre visite");
  });
```

---

## 3. L'API Fetch : La méthode native

### Qu'est-ce que fetch() ?

fetch() est une API native des navigateurs modernes qui permet de faire des requêtes HTTP. Elle retourne une promesse.

### Syntaxe de base

```javascript
fetch(url, options)
  .then(response => response.json())
  .then(data => utiliserLesDonnees(data))
  .catch(error => gererErreur(error));
```

### Pourquoi .json() ?

Lorsque fetch() reçoit une réponse, celle-ci est "emballée". La méthode .json() permet de "déballer" le contenu JSON pour le transformer en objet JavaScript utilisable.

### Exemple avec gestion d'erreur

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Vérifier si la requête a réussi
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json(); // Convertir en JSON
  })
  .then(post => {
    console.log(`Titre : ${post.title}`);
  })
  .catch(error => {
    console.error(`Erreur : ${error.message}`);
  });
```


## 4. Axios : La bibliothèque améliorée

### Pourquoi utiliser Axios ?

Bien que fetch() soit natif, Axios offre plusieurs avantages :

· Conversion JSON automatique
· Meilleure gestion des erreurs HTTP
· Intercepteurs pour loguer ou modifier les requêtes
· Annulation des requêtes
· Support des anciens navigateurs

### Installation et utilisation basique

```bash
npm install axios
```

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log(response.data); // Données déjà parsées
    console.log(response.status); // Code HTTP
  })
  .catch(error => {
    console.error(error.response?.data || error.message);
  });
```

### Comparaison fetch vs Axios

Avec fetch :

· Plus verbeux
· Doit gérer les erreurs manuellement
· Doit appeler .json()

Avec Axios :

· Plus concis
· Gestion d'erreurs automatique
· JSON automatique
· Fonctionnalités avancées


## 5. Les verbes HTTP en pratique

### CRUD (Create, Read, Update, Delete)

Les applications web utilisent principalement 4 verbes HTTP :

GET - Lire des données

```javascript
// Récupérer tous les utilisateurs
axios.get('/api/users')

// Récupérer un utilisateur spécifique
axios.get('/api/users/123')
```

POST - Créer des données

```javascript
// Créer un nouvel utilisateur
axios.post('/api/users', {
  nom: 'Jean',
  email: 'jean@example.com',
  age: 25
})
```

PUT - Mettre à jour complètement

```javascript
// Mettre à jour TOUTES les données d'un utilisateur
axios.put('/api/users/123', {
  nom: 'Jean Modifié',
  email: 'jean.nouveau@example.com',
  age: 26
})
```

PATCH - Mettre à jour partiellement

```javascript
// Modifier seulement l'email
axios.patch('/api/users/123', {
  email: 'jean.nouveau@example.com'
})
```

DELETE - Supprimer des données

```javascript
// Supprimer un utilisateur
axios.delete('/api/users/123')
```


## 6. Data Fetching dans React

### Le défi React

React veut tout afficher immédiatement, mais les données arrivent plus tard. La solution : useState et useEffect.

useState - Gérer l'état des données

```javascript
// 3 états à gérer
const [donnees, setDonnees] = useState(null);       // Les données
const [chargement, setChargement] = useState(true); // État de chargement
const [erreur, setErreur] = useState(null);         // Éventuelle erreur
```

useEffect - Exécuter au bon moment

```javascript
useEffect(() => {
  // Code exécuté après le premier rendu
  chargerDonnees();
}, []); // Tableau vide = une seule exécution
```

Pattern complet

```javascript
function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUtilisateurs(response.data);
        setChargement(false);
      })
      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <div>Chargement en cours...</div>;
  if (erreur) return <div>Erreur : {erreur}</div>;

  return (
    <ul>
      {utilisateurs.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 7. Bonnes pratiques

### Gestion des 3 états

Toujours gérer ces 3 états dans vos composants :

1. Chargement : Afficher un spinner ou indicateur
2. Erreur : Afficher un message clair à l'utilisateur
3. Données : Afficher le contenu

### Annulation des requêtes

Si un composant est démonté avant la fin d'une requête, il faut l'annuler pour éviter les erreurs.

Optimisation des performances

· Éviter les re-rendus inutiles
· Mettre en cache les données
· Limiter les requêtes répétitives

Sécurité

· Valider les données reçues du serveur
· Protéger les tokens d'authentification
· Gérer les CORS (Cross-Origin Resource Sharing)


## 8. Outils modernes

### React Query

Gère automatiquement le cache, la synchronisation, les erreurs et le chargement.

```javascript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(res => res.json())
});
```

### SWR (Stale-While-Revalidate)

Bibliothèque légère de Vercel pour le data fetching.

```javascript
import useSWR from 'swr';

const { data, error } = useSWR('/api/users', 
  url => fetch(url).then(res => res.json())
);
```

### Quand utiliser ces outils ?

· Applications complexes avec beaucoup de données
· Besoin de caching avancé
· Synchronisation en temps réel
· Optimisation de performance


## 9. Conclusion et prochaines étapes

### Points clés à retenir

1. Internet est lent → Les données arrivent avec un délai
2. Promesses → Solution JavaScript pour l'asynchrone
3. fetch() → Méthode native, verbeuse mais puissante
4. Axios → Bibliothèque simplifiée avec plus de fonctionnalités
5. React → Utilise useState + useEffect pour gérer l'asynchrone
6. Bonnes pratiques → Toujours gérer chargement/erreur/données

### Pour aller plus loin

1. Pratiquer avec des APIs publiques (JSONPlaceholder, OpenWeatherMap)
2. Explorer GraphQL comme alternative à REST
3. Apprendre WebSockets pour les données temps réel
4. Étudier les tests de composants avec data fetching

### Ressources recommandées

· Documentation MDN sur les Promises
· Documentation React sur les Hooks
· Documentation Axios
· APIs publiques pour s'entraîner

Le data fetching est une compétence fondamentale pour tout développeur React. En maîtrisant ces concepts, vous pourrez créer des applications robustes qui communiquent efficacement avec des serveurs distants.
