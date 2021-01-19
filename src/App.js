import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
