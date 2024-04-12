import './App.css'
import About from './components/about/About'
import AboutOne from './components/about_one/AboutOne'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div className='App'>
      <div className="container">
        <Header />
        <About/>
        <AboutOne/>
        <Skills/>
      </div>
    </div>
  )
}

export default App
