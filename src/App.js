import React from "react";
import './App.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
     
     <Router>
     <Switch>
     <Route path="/search">
       <SearchPage />
     </Route>
     <Route path="/">
       <Home/>
     </Route>
     </Switch>
     </Router>

     {/*Home page (the one with the search on )*/}
     
     {/*Result page (the page showing actual results from google ) */}
      
    </div>
  );
}

export default App;
