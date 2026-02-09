import React from 'react'
import About from './page/About'
import Home from './page/Home'
import Contact from './page/Contact'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PasTrouve from './page/PasTrouve'
import ContactMe from './ContactMe'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact/:nom" element={<ContactMe/>} />
        <Route path="*" element={<PasTrouve />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
