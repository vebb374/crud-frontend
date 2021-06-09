import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search.component";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Search}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
