import React from 'react';
import logo from '../logo.svg';
import '../App.css';
//import PropTypes from 'prop-types';
import axios from 'axios';
import {Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem  } from 'reactstrap';
    class Header extends React.Component  {
    hotels=[];
    logo_url="http://api.bookingjini.com/public";
    constructor(props) {
        super(props);
        console.log(props.dataFromParent);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false,
        hotels:[],
        hotel_name:"",
        logo:""
        };
        this.getAccess(this);
        console.log(props);
        }
        getAccess(self)
        {
          axios.get(
            'http://api.bookingjini.com/bookingEngine/auth/192.168.43.156:3000'
            ).then(function(resp){
              
              self.getHotels(resp.data.data.api_key,resp.data.data.company_id,resp.data.data.comp_hash,self);
              
            }).catch(function(err){
              console.log("error");
            }).then(function(){
      
            });
        }
        getHotels(api_key,company_id,comp_hash,self)
        {
            
          axios.get(
            'http://api.bookingjini.com/hotel_admin/hotels_by_company/'+comp_hash+'/'+company_id
            ).then(function(resp){
            const hotels = resp.data.data;
              self.setState({ hotels });
              self.setState({ hotel_name:hotels[0].hotel_name });
              self.setState({logo:self.logo_url+hotels[0].exterior_image});
              const needData={"hotel_id":hotels[0].hotel_id,"api_key":api_key};
              self.sendDataToParent(needData);
              //self.state.logo=;
            }).catch(function(err){
              console.log(err);
            }).then(function(){
          
          });
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        sendDataToParent=(DataToParent)=>{
            this.props.callBackFromParent(DataToParent);
        }
    render(){
        return(
            <Container fluid className="">
            <div className="header">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"> <img src={logo} className="App-logo" alt="logo" />{ this.state.hotel_name}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        <i className="fa fa-hotel hotel-icon"></i>
                      </DropdownToggle>
                      <DropdownMenu right>
                          {
                          this.state.hotels.map(hotel =>
                          <DropdownItem ><a href="/hotel/{hotel.hotel_id}">{hotel.hotel_name}</a></DropdownItem>
                          )}
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
export default Header;