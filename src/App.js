import './App.css';
import './Responsive.css'
import NavbarComp from './Component/Navbar/NavbarComp';
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Pages/About';
import InformationCenter from './Pages/InformationCenter';
import Hero from './Component/Hero/Hero';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Hero />
        <Route exact path="/"> <Home /></Route>
        <Route exact path="/about"> <About /></Route>
        <Route exact path="/information-center"> <InformationCenter /></Route>
        <Route exact path="/contact"> <Contact /></Route>
      </Router>
    </div>
  );
}

export default App;
