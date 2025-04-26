import { useState } from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Pricing from './page/Pricing'
import Contact from './page/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

      </Routes>
    </>
  )
}

export default App
