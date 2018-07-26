import React from 'react';
import ReactDOM from 'react-dom';
import DateRangePicker from 'react-daterange-picker';
import GoogleMapReact from 'google-map-react';
import Header from './common/Header';
import Footer from './common/Footer';
import Rooms from './Rooms';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import banner from './banner.jpg';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
//import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {Container,Card, CardText, CardBody,
  CardTitle, Button ,Modal, ModalHeader, ModalBody,ModalFooter  } from 'reactstrap';
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
      modal: false,
      backdrop: true
    };
    this.toggle = this.toggle.bind(this);
     }
     toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    myCallback = (dataFromChild) => {
      this.setState({ hotel_id:dataFromChild.hotel_id, api_key:dataFromChild.api_key});
    }
  render() {
    const head="Data to header";
    return (
    <Container fluid className="">
     <Header hotel_id={this.state.hotel_id} api_key={this.state.api_key} dataFromParent={head} callBackFromParent={this.myCallback}></Header>
     <div>
     <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} backdrop={this.state.backdrop} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <Carousel axis="vertical"  showIndicators={false} emulateTouch showThumbs={false}>
                    <div>
                        <img src={banner} />
                        
                    </div>
                    <div>
                        <img src={banner} />
                        
                    </div>
                    <div>
                        <img src={banner} />
                        
                    </div>
            </Carousel>
          </ModalBody>
        </Modal>
      </div>
      <div className="row banner">
        <button onClick={this.toggle} className="btn btn-info banner-button">View Photos</button>
      </div>
      <div className="row book-room">
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
        { this.state && this.state.hotel_id &&
          <Rooms hotel_id={this.state.hotel_id} api_key={this.state.api_key} ></Rooms>   
        }       
        </div>
        <div className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle>Calendar</CardTitle>
            <DateRangePicker dateFormat="DD/MM/YYYY"
                  onChange={this.onChange}
                  value={this.state.date} />
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
