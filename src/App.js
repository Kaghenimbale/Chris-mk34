import './App.css';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
