import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import bars from '../public/images/bars.png';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <img id="logoImg" src={bars} alt="barsimage"/>
            </Navbar.Brand>
            </Navbar.Header>
    
          </Navbar>
      

      
        <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
      </div>
    );
  }
}

export default App;
