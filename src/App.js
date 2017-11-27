import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './App.css';
import bars from '../public/images/bars.png';
import Luminar from '../public/images/Luminar.png';


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

            <Nav pullRight>
              <NavItem eventKey={1} href="#">SDK</NavItem>
              <NavItem eventKey={2} href="#">Firmware</NavItem>
              <NavItem eventKey={3} href="#">Sample Data</NavItem>
              <NavItem eventKey={4} href="#">Product Info Guide</NavItem>
              <NavItem eventKey={5} href="#">Help</NavItem>
              <NavItem eventKey={6} href="#">FAQs</NavItem>
            </Nav>
    
          </Navbar>
          <div id="titlePic">
            <img id="Luminar" src={Luminar} alt="titlePic"/>
          </div>

          

      <div className="center">
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
      </div>
    );
  }
}

export default App;
