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
  DropdownItem,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button  } from 'reactstrap';
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
    <Container fluid className="">
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
                  <i className="fa fa-hotel fa-2x"></i>
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
      <div className="row banner">
        <button className="btn btn-info banner-button">View Photos</button>
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
        <Card className="room">
          <CardBody>
            <CardTitle><div className="row"><p className="col-md-9">Deluxe Room with lake view</p>
            <button className="col-md-3 btn btn-info">Room Photo</button></div></CardTitle>
            <div className="row room-properties">
              <div className="col-md-6 room-capacity">
              <span className="category fa fa-male fa-2x"></span> 3 
              <span className="category fa fa-child fa-2x"></span> 2
              <span className="category fa fa-bed fa-2x"></span> 2
              </div>
              <div className="col-md-6 room-price">
              <span className="fa fa-inr price-tag"> 2500 Per Room Night</span>
              </div>
            </div>
            <div className="clearfix"></div>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <div className="row ">
              <div className="col-md-4">
                ACCOMMODATION TYPE
              </div>
              <div className="col-md-4 ">
                Room
              </div>
              <div className="col-md-4 ">
               Amount
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
               Room Only
              </div>
              <div className="col-md-4 ">
                2
              </div>
              <div className="col-md-4 ">
               2400
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
               Room with breakfast 
              </div>
              <div className="col-md-4 ">
                2
              </div>
              <div className="col-md-4 ">
               2400
              </div>
            </div>
          </CardBody>
        </Card>
        
        </div>
        <div class="col-md-4">
        <Card>
          <CardBody>
            <CardTitle>Calendar</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
         </Card>
        </div>
        <div className="col-md-1">
        </div>
      </div>
    </Container>
    );
  }

}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default App;
