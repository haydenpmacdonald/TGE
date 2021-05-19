import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app-container">
      <Router>
      <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

