import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsHome from './Components/NewsHome'
import NavBar from './Components/NavBar'

function App() {
 

  return (
    <>
     <>
    <NavBar></NavBar>
    <NewsHome Title="News Home Page" ></NewsHome>   
    </>
     
    </>
  )
}

export default App
