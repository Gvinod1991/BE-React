import React from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import {Card, CardText, CardBody,
    CardTitle} from 'reactstrap';
    class Rooms extends React.Component  {
    rooms=[];
    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
        rooms:[]
        };
        this.getInventory(props.hotel_id,props.api_key,this);
        }
        getInventory(hotel_id,api_key,self)
        {
          axios.get(
            self.props.config.api_url+'bookingEngine/get-inventory/'+api_key+'/'+hotel_id+'/2018-07-28/2018-07-29'
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
                this.state.rooms.map((room,
                  index) => {
                return(
        <Card key={'room' + index} className="room">
          <CardBody>
            <CardTitle><div className="row"><p className="col-md-9">{room.room_type}</p>
            <button className="col-md-3 btn btn-info">Room Photo</button></div></CardTitle>
            <div className="row room-properties">
              <div className="col-md-6 room-capacity">
              <span className="category fa fa-male fa-2x"></span> {room.max_people}
              <span className="category fa fa-child fa-2x"></span> {room.max_child}
              <span className="category fa fa-bed fa-2x"></span> {room.extra_person}
              </div>
              <div className="col-md-6 room-price">
              <span className="fa fa-inr price-tag"  > {room.min_room_price} Per Room Night</span>
              </div>
            </div>
            <div className="clearfix"></div>
            <CardText dangerouslySetInnerHTML={{__html: room.description}}></CardText>
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
            { room.rate_plans ? room.rate_plans.map((rate_plan,index) => {
              return (
                <div key={'mykey' + index} className="row ">
                <div className="col-md-4">
                 {rate_plan.plan_name}
                </div>
                <div className="col-md-4 ">
                  2
                </div>
                <div className="col-md-4 ">
                {rate_plan.bar_price}
                </div>
              </div>
              );
            })
            :  <div >'Not Available'</div>}
          </CardBody>
        </Card>
       ) }
                )}
      </div>
   
        );
    }
    }
export default Rooms;
