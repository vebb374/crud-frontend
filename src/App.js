import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search.component";
import Actorview from "./pages/actorview/actorview.component";
import CreateActor from "./pages/create/create.component.jsx";
import About from "./pages/about/about.component.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/actor/:id" component={Actorview}></Route>
          <Route exact path="/create" component={CreateActor}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/" component={Search}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
