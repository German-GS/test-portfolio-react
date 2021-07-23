import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>

          </Route>
        </Switch>
      </Router>
      
      
      <Footer/>


    </div>
  );
}

export default App;
