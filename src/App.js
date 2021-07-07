import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import AddForm from './components/notes/AddForm';
import EditForm from './components/notes/EditForm';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddForm} />
        <Route path="/notes/:id" component={NoteDetail} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/edit/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
