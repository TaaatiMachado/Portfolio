import NavBar from './components/NavBar'
import LandingHome from './components/Home'
import Profile from './components/Profile'
import Skills from './components/Skills'


import ScrollToHash from './components/ScrollToHash.js'
import { BrowserRouter } from 'react-router-dom'
import Projects from './components/Projects/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <NavBar />
        <LandingHome />
        <Profile />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </BrowserRouter>

    </>

  )
}

export default App
