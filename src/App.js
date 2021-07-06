import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notes/:id" component={NoteDetail} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
