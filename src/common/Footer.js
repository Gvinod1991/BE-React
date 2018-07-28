import React from 'react';
//import logo from '../logo.svg';
import '../App.css';
//import PropTypes from 'prop-types';
import {Container } from 'reactstrap';
    class Footer extends React.Component  {
    hotels=[];

    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
        hotels:[]
        };
        }
        

    render(){
        return(
            <Container fluid className="">
            <div className="row footer">
                <div className="col-md-4">
                    <p>&copy;Booking Engine Inc.</p>
                </div>
                <div className="col-md-4">
                    <p></p>
                </div>
                <div className="col-md-4 pull-right">
                    <p >Made By ME</p>
                </div>
            </div>
            </Container>
        );
    }
    }
export default Footer;