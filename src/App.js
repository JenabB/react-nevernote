import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact pat="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
