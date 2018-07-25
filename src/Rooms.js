import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Container,Card, CardText, CardBody,
    CardTitle, Button ,Modal, ModalHeader, ModalBody,ModalFooter   } from 'reactstrap';
    class Rooms extends React.Component  {
    rooms=[];
    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
        rooms:[]
        };
        console.log(props);
        this.getInventory(props.hotel_id,props.api_key,this);
        }
        getInventory(hotel_id,api_key,self)
        {
          axios.get(
            'http://api.bookingjini.com/bookingEngine/get-inventory/'+api_key+'/'+hotel_id+'/2018-07-24/2018-07-25'
            ).then(function(resp){
            const rooms = resp.data.data;
            self.setState({ rooms });
              //self.state.logo=;
            }).catch(function(err){
              console.log(err);
            }).then(function(){
          
          });
        }
    render(){
        return(
            <div>{
                this.state.rooms.map(room =>
           
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
       )}
      </div>
        );
    }
    }
export default Rooms;
