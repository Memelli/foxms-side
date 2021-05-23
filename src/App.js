import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import CPanel from './pages/cpanel'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/painel" component={CPanel} exact />
        </Switch>
      </Router>
  );
}

export default App;
