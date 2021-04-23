import ComparisonCard from "./components/ComparisonCard";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MapCard from "./components/MapCard";

const header = {
  color: "#23796a",
  border: "solid black 1px"
};

const App = () => {
  return (
    <Router>
      <div style={header}>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Map</Link>
            </li>
            <li>
              <Link to="/comparison" style={{ color: 'inherit', textDecoration: 'inherit'}}>Comparison</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={MapCard}/>
          <Route exact path="/comparison" component={ComparisonCard}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
