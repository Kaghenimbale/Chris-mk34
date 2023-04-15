import './App.css';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';

const App = () => {
  return (
    <Router>
      <Header />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
