import React from "react";
import "./App.css";
import Home from "./Home"
import Header from "./Header"
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      
      <Router>
        <Header/>
        <Home/>
        <Switch>

          <SearchPage/>

      </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
