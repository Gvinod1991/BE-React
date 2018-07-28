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
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false,
        hotels:[],
        hotel_name:"",
        //logo:""
        };
        this.url=window.location.href;
        const protocol=window.location.protocol;
        this.url=this.url.slice(protocol.length+2,this.url.length-1);//Get only exact URL Without protocol
        this.getAccess(this);
        }
        getAccess(self)
        {
          axios.get(
            self.props.config.api_url+'bookingEngine/auth/'+self.url
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
            self.props.config.api_url+'/hotel_admin/hotels_by_company/'+comp_hash+'/'+company_id
            ).then(function(resp){
            const hotels = resp.data.data;
              self.setState({ hotels });
              self.setState({ hotel_name:hotels[0].hotel_name });
              self.setState({logo:self.logo_url+hotels[0].exterior_image});
              const needData={"hotel_id":hotels[0].hotel_id,"api_key":api_key};
              self.sendDataToParent(needData);
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
                          this.state.hotels.map((hotel,index) =>
                          <DropdownItem key={'drop'+ index}  ><a href="/hotel/{hotel.hotel_id}">{hotel.hotel_name}</a></DropdownItem>
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