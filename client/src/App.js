import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth'

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('http://localhost:5001/api/logout')
      .then(res => {
        localStorage.removeItem('token')
      })
      .catch(err => {
        console.log(err)})
  }

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={GasPrices} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
