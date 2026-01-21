import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import User from "./User";

function App() {
  const tableau=[
    {
      nom:"Amina",
      description:"developpeur FullStack"
    },
    {
      nom:"Fidele",
      description:"developpeur FullStack"
    },
    {
      nom:"Robert",
      description:"developpeur FullStack"
    },
    {
      nom:"Grady",
      description:"developpeur FullStack"
    },
    {
      nom:"Alex",
      description:"developpeur FullStack"
    },
    {
      nom:"Benjamin",
      description:"developpeur FullStack"
    },
  ]
  const tableau2=[
    {
      nom:"Amina",
      description:"Designeur FullStack"
    },
    {
      nom:"Fidele",
      description:"Designeur FullStack"
    },
    {
      nom:"Robert",
      description:"Designeur FullStack"
    },
    {
      nom:"Grady",
      description:"Designeur FullStack"
    },
    {
      nom:"Alex",
      description:"Designeur FullStack"
    },
    {
      nom:"Benjamin",
      description:"Designeur FullStack"
    },
  ]
  return (
    // <>
    //   <Footer nom="Fidele">
    //     <div className="p-4">
    //       Est un est un chef de projet
    //     </div>
    //     <ul>
    //       <li className="text-blue-400">Web</li>
    //       <li className="text-blue-400">Codeur</li>
    //       <li className="text-blue-400">Ingenieur</li>
    //       <li className="text-blue-400">Full Stack</li>
    //     </ul>
    //     </Footer>
    //   <Footer nom="Alex"> 
    //     Est un developpeur Full-Stack de Afrix
    //     </Footer>
    // </>
    <Fragment>
    <User titre="Users List" tableau= {tableau} />
    <User titre="Designers List" tableau= {tableau2} />
    </Fragment>
  );
}

export default App;
