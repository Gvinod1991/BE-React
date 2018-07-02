import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import {Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
class App extends React.Component  {
   
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <Container fluid>
      <div className="header">
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/policies">Policies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/map">Map</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i class="fa fa-hotel fa-2x"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Hotel 1
                  </DropdownItem>
                  <DropdownItem>
                    Hotel 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Container>
    );
  }

}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default App;
