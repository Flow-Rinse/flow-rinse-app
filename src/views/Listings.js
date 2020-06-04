import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { getData, postData } from '../utils/api';

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";

// sections for this page
import Cards from "./page-components/ListingsCards.js";
import SearchBar from "./page-components/SearchBar.js";
import FillterButton from "./page-components/FillterButton.js";
import RangeSlider from "./page-components/RangeSlider.js";

import { getGeolocation } from '../service/geolocation';

const staticBusiness = [{
  "id": 1,
  "name": "Bench Fix",
  "photo": "bench-fix.jpeg",
  "description": "Your hair salon of choice.",
  "location": "Rockwell Business Center, Ortigas Avenue, Ugong, Pasig City 1604 Metro Manila",
  "city": "Pasic City",
  "longitude": "121.067719",
  "latitude": "14.58763",
  "landline": "63 (2) 8 570 7733",
  "website": "",
  "start_time": "09:00:00",
  "close_time": "17:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:56",
  "updated_at": "2020-06-04 12:03:56",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/bench-fix.jpeg"
}, {
  "id": 2,
  "name": "119 Hair Station",
  "photo": "119HairStation.jpg",
  "description": "Salon lorem ipsum dolor sit amet",
  "location": "L.P. Leviste Street, Makati City 1200 Metro Manila",
  "city": "Makati City",
  "longitude": "121.024204",
  "latitude": "14.560228",
  "landline": "63 (2) 8 819 5138",
  "website": "",
  "start_time": "09:00:00",
  "close_time": "17:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:56",
  "updated_at": "2020-06-04 12:03:56",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/119HairStation.jpg"
}, {
  "id": 3,
  "name": "Affinity Dental Clinics Makati",
  "photo": "affinitydentalmakati.jpg",
  "description": "Best rated in Makati. Excellent Customer service",
  "location": "2nd Floor, Plaza 100, 100 V.A. Rufino St, Legazpi Village, Makati, 1229 Metro Manila",
  "city": "Makati City",
  "longitude": "121.0158503",
  "latitude": "14.556985",
  "landline": "0917 872 8297",
  "website": "affinitydentalclinics.com",
  "start_time": "09:00:00",
  "close_time": "19:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/affinitydentalmakati.jpg"
}, {
  "id": 4,
  "name": "Tooth Options Dental Clinic, Makati",
  "photo": "toothoptions.jpg",
  "description": "A smile for everybody",
  "location": "Suite 604-E Legaspi Tower 200, 107 Paseo de Roxas Street, Legazpi Village, Makati, 1226 Metro Manila",
  "city": "Makati City",
  "longitude": "121.019594",
  "latitude": "14.555127",
  "landline": "63277520029",
  "website": "toothoptions.com.ph",
  "start_time": "10:00:00",
  "close_time": "18:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/toothoptions.jpg"
}, {
  "id": 5,
  "name": "D & A Dental Clinic",
  "photo": "dadentalclinic.jpg",
  "description": "White smile for everyone.",
  "location": "1861 Evangelista, Makati, 1233 Metro Manila",
  "city": "Makati City",
  "longitude": "121.0084253",
  "latitude": "14.550197",
  "landline": "(02) 8871 5470",
  "website": "",
  "start_time": null,
  "close_time": null,
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/dadentalclinic.jpg"
}, {
  "id": 6,
  "name": "Wisty Laundry Shop",
  "photo": "wistylaundry.jpg",
  "description": "A registered and most reliable full laundry service provider.",
  "location": "1048 Metropolitan Ave, Makati, 1205 Metro Manila",
  "city": "Makati City",
  "longitude": "121.0118372",
  "latitude": "14.5658402",
  "landline": "(02) 8824 6556",
  "website": "wistylaundry.business.site",
  "start_time": "10:00:00",
  "close_time": "18:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/wistylaundry.jpg"
}, {
  "id": 7,
  "name": "Panda Cleaners",
  "photo": "pandacleaners.png",
  "description": "The Philippine's only eco-laundry chain",
  "location": "L.P. Leviste Street, Makati, Metro Manila",
  "city": "Makati City",
  "longitude": "121.022323",
  "latitude": "14.5595542",
  "landline": "63289867326",
  "website": "",
  "start_time": "10:00:00",
  "close_time": "18:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img\/pandacleaners.png"
}, {
  "id": 8,
  "name": "Slick Barbers Co.",
  "photo": "",
  "description": "",
  "location": "Yague, Makati, Metro Manila",
  "city": "Makati City",
  "longitude": "121.0153095",
  "latitude": "14.567598",
  "landline": "0935 715 2488",
  "website": "",
  "start_time": "10:00:00",
  "close_time": "22:00:00",
  "deleted_at": null,
  "created_at": "2020-06-04 12:03:58",
  "updated_at": "2020-06-04 12:03:58",
  "photo_url": "http:\/\/flowrinse-api.test\/img"
}]

function Listings(props) {

  const [geolocation, setGeolocation] = React.useState(null);
  const [business, setBusiness] = React.useState(null);

  React.useEffect(()=> {
    /** Get User Location */
    getUserLocation();
  },[])

  function getUserLocation(){
    getGeolocation().then((value)=> {
      console.log('user location -> ', value)
      setGeolocation(value);
      getAllBusiness(value);
    })
  }

  async function getAllBusiness(value){
    const response = await getData('/api/business?latitude='+value.lat+'&longitude='+value.lon+'&distance=100000').then(function(res){
      return res;
    }).catch(function(e){
      return e; 
    })
    console.log(response);

    if(response && response.data && response.data.data && response.data.data.businesses){
      setBusiness(response.data.data.businesses);
    }
  }

  function routeChange(path) {  
    props.history.push(path);
  };

  React.useEffect(() => {
    document.body.classList.add("listings-page");
    // document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function() {
        new Rellax(".rellax", {
          center: true
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });

  function renderCards(){
    return(
      staticBusiness && staticBusiness.map((value, index) => {
        console.log('value', value)
        return(
          <Cards key={index} value={value} routeChange={routeChange}/>
        )
      })
    )
  }

  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <SearchBar />
        <FillterButton />
        <RangeSlider />
        
        <div className="section-card-listings">
          <Container>
            <Row>
            {
              renderCards()
            }
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Listings;
