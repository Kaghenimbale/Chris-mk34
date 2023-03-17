import './App.css';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './Projects/Projects';

import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Projects />
    </>
  )
}

export default App
