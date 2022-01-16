import './App.css';
import './Responsive.css'
import NavbarComp from './Component/Navbar/NavbarComp';
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Route exact path="/"> <Home /></Route>
        <Route exact path="/about"> <About /></Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
