import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import TVshows from "./pages/TVshows";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Top 10 Favorite Movies & TV Shows</h1>
          <p>
            The Taco Boyz top 10 movies and TV shows brought to you by taco bell
            and del taco
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Movies">Movies</Link>
              </li>
              <li>
                <Link to="/TVshows">TV Shows</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Movies" component={Movies} />
            <Route path="/TVshows" component={TVshows} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
