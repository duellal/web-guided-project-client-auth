import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth'

import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = './login'
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
            {/* Makes the protected page link "invisible" until the user logs in - right now it needs to be refreshed, but there should be a rerender when login happens in order for it to show w/o refreshing */}
            {localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>}
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
