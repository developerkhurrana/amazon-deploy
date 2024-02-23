import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { useStateValue } from './providers/StateProviders';
import { auth } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

  }, [])


  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/checkout'>
            <Checkout/>
          </Route>
        <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
