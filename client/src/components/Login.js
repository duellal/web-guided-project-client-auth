import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: 'bloom',
      password: 'tech'
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //Make an axios call on the localhost:5001/api/login
    //Pass in the user/pass
    //Console.log the token that is returned
    //console.log the error if returned
    axios
      .post('http://localhost:5001/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        //Redirect user to protected page:
        this.props.history.push('/protected')
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;