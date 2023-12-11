import './app.scss'
import About from './components/about/About'
import Greeting from './components/greeting/Greeting'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Mystory from './pages/mystory/Mystory'
import Skills from './pages/skills/Skills'
import Education from './pages/education/Education'
import Services from './pages/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Greeting/>
        <Routes>
          <Route path='/' element={<About/>}>
            <Route path='/mystory' element={<Mystory/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/' element={<Services/>}/>
          </Route>
        </Routes>
        <Projects/>
        <Contact/>
      </BrowserRouter>
    </>
  )
}

export default App
