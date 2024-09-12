
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Character from './pages/Character'

export default function App() {
  

  return (
    <>
    
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Character' element={<Character/>}/>
    </Routes>
    <Footer/>
  
    </>
  )
}
