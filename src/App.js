import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
