
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import Products from "./Components/Products";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import MyFooter from "./Components/MyFooter";
import './App.css';
import Feedback from "./Components/Feedback";

function App() {
  return (
    <>
      <Router>
        <MyNavbar></MyNavbar>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Products'>
            <Products />
          </Route>
          <Route exact path='/About'>
            <About />
          </Route>
          <Route exact path='/Contact'>
            <Contactus />
          </Route>
          <Route exact path='/Products'>
            <Feedback />
          </Route>
        </Switch>
        <MyFooter></MyFooter>
      </Router>
    </>
  );
}

export default App;
