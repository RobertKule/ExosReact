import React from 'react'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
function App() {
  const [posts, setposts] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const titre=useRef('');
  const contenu=useRef('');
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setposts(response.data);
        setChargement(false);
      })
      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <div>Chargement en cours...</div>;
  if (erreur) return <div>Erreur : {erreur}</div>;
function creer() {
  
}

  return (
    <>
    <input ref={titre} className='border-2 text-md w-64 m-2' type="text" name="title" id="title" />
    <textarea ref={contenu} className='border-2 text-md w-64 m-2' name="body" id="body"></textarea>
  <button onClick={creer} type="submit"></button>
    <ul>
      {posts.map(post => (
        <li  className="p-2 text-lg border-b-2 "key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>

  );
}
  

export default App
