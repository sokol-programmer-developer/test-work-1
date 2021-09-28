import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Blogger from './pages/Blogger';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Avatar from "./pages/Avatar";

const App = () => {

  return (
      <>
        <Router>
          <Navbar/>
          <Switch>
            <div className="app-section" >
                <Route path='/' exact component={Blogger}   />
                <Route path='/Avatar' exact component={Avatar}   />
            </div>
          </Switch>
           <Footer/>
        </Router>
      </>
  );
}

export default App;