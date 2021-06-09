import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search.component";
import Actorview from "./pages/actorview/actorview.component";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/actor/:id" component={Actorview}></Route>
          <Route exact path="/" component={Search}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
