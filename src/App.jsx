import React from 'react'
import About from './page/About'
import Home from './page/Home'
import {Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PasTrouve from './page/PasTrouve'

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<PasTrouve />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
