import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
