# ✅ CORRIGÉS – Mini-exercices Point 3

*(JSX, JS, événements simples, map, CSS)*

---

## ✅ Exercice 1 — JSX & variables

### Énoncé rappel

Afficher : **Bonjour, votre nom** à partir d’une variable JS.

### Corrigé

```jsx
function Hello() {
  const name = "RK";
  return <h1>Bonjour, {name}</h1>;
}

export default Hello;
```

🧠 Ce qu’on vérifie :

* JSX
* `{}` pour afficher une variable
* Composant fonctionnel simple

---

## ✅ Exercice 2 — Événement simple (sans state)

### Énoncé rappel

Bouton qui affiche une alerte au clic.

### Corrigé

```jsx
function ButtonClick() {
  function handleClick() {
    alert("Bouton cliqué !");
  }

  return <button onClick={handleClick}>Clique ici</button>;
}

export default ButtonClick;
```

🧠 Points clés :

* `onClick` en camelCase
* On passe **une fonction**, pas `handleClick()`

---

## ✅ Exercice 3 — Liste dynamique avec `map()`

### Énoncé rappel

Afficher 3 langages avec `map()`.

### Corrigé

```jsx
function Langages() {
  const langages = ["HTML", "CSS", "JavaScript"];

  return (
    <ul>
      {langages.map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  );
}

export default Langages;
```

🧠 Points clés :

* `map()`
* `key` obligatoire
* JSX dans une boucle

---

## ✅ Exercice 4 — Afficher un objet dans un tableau

### Énoncé rappel

Afficher les infos d’un objet dans un `<table>`.

### Corrigé

```jsx
function PersonTable() {
  const person = {
    nom: "Kule",
    prenom: "Robert",
    age: 25,
    metier: "Développeur",
  };

  return (
    <table border="1">
      <tbody>
        <tr>
          <td>Nom</td>
          <td>{person.nom}</td>
        </tr>
        <tr>
          <td>Prénom</td>
          <td>{person.prenom}</td>
        </tr>
        <tr>
          <td>Âge</td>
          <td>{person.age}</td>
        </tr>
        <tr>
          <td>Métier</td>
          <td>{person.metier}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PersonTable;
```

🧠 Points clés :

* Accès aux propriétés d’un objet
* JSX + HTML classique
* Organisation des données

---

## ✅ Exercice 5 — CSS dans React

### Énoncé rappel

Styliser un titre et un paragraphe.

### Corrigé (CSS classique)

**App.css**

```css
.title {
  color: blue;
  text-align: center;
}

.text {
  margin: 20px;
  font-size: 16px;
}
```

**Composant**

```jsx
import "./App.css";

function StyledComponent() {
  return (
    <>
      <h1 className="title">Bienvenue</h1>
      <p className="text">Ceci est un paragraphe stylisé</p>
    </>
  );
}

export default StyledComponent;
```

🧠 Points clés :

* `className` ≠ `class`
* Import CSS
* Séparation style / logique
