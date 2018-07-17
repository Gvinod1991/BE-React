import React from 'react';
import DateRangePicker from 'react-daterange-picker';
import GoogleMapReact from 'google-map-react';
import Header from './common/Header';
import Footer from './common/Footer';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
//import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {Container,Card, CardText, CardBody,
  CardTitle, Button  } from 'reactstrap';
  //import axios from 'axios';
  const MapStaticComponent = ({ text }) => <div>{ text }</div>;
class App extends React.Component  {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  state = {
    date: [new Date(), new Date()],
  }
  onChange = date => this.setState({ date })
  constructor(props) {
    super(props);
      this.state = {
      };
     }
 
  render() {
    return (
    <Container fluid className="">
     <Header></Header>
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
        <div className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle>Calendar</CardTitle>
            <DateRangePicker dateFormat="DD/MM/YYYY"
          onChange={this.onChange}
          value={this.state.date}
        />
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
         </Card>
        </div>
        <div className="col-md-1">
        </div>
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
      <Card className="room">
          <CardBody>
            <CardTitle>Amenities</CardTitle>
            <div className="row room-properties">
              <div className="col-md-8 room-capacity">
                <div className="amenities-block">
              <span className="category fa fa-cutlery fa-2x"></span> Resturant
              <span className="category fa fa-bath fa-2x"></span> Bath Room
              </div>
              <div className="amenities-block">
              <span className="category fa fa-wifi fa-2x"></span> Wifi
              <span className="category fa fa-cutlery fa-2x"></span> Resturant
              </div>
              <div className="amenities-block">
              <i className="category fa fa-bath fa-2x"></i> Bath Room
              
              <i className="category fa fa-wifi fa-2x"></i> Wifi
              </div>
              <Button className="btn btn-info">More Amenities</Button>
              </div>
              <div className="col-md-4 room-price">
              <span className="fa fa-singin price-tag">Checkin 12 AM</span>
              <br/>
              <span className="fa fa-singout price-tag">CheckOut 12 AM</span>
              </div>
            </div>
            <div className="clearfix"></div>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
           </CardBody>
        </Card>
        <div className="col-md-1"></div>
      </div>
      
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
          <Card className="room">
              <CardBody>
                <CardTitle>About Booking Engine</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
          </Card>
          </div>
      <div className="col-md-1"></div>
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
          <Card className="room">
              <CardBody>
                <CardTitle>Rules and Policies</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
          </div>
      <div className="col-md-1"></div>
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
          <Card className="room">
              <CardBody>
                <CardTitle>Map</CardTitle>
                <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <MapStaticComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'maps' }
          />
        </GoogleMapReact>
      </div>
                </CardBody>
            </Card>
          </div>
      <div className="col-md-1"></div>
      </div>
      <Footer></Footer>
    </Container>
    );
  }

}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default App;
