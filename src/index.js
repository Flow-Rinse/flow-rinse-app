/*!

=========================================================
* Now UI Kit PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import history from './history';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

// custom styles
import "assets/custom-scss/custom.scss";

// pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
// others

// flowrinse
import Registration from 'views/Registration.js';
import LoginPage from "views/LoginPage.js";
import Listings from "views/Listings.js";
import Booking from "views/Booking.js";
import Store from "views/Store.js";
import Splash from "views/Splash.js";
import Dashboard from "views/Dashboard.js";

export default function App (props) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/registration" render={props => <Registration {...props} />} />
        <Route path="/listings" render={props => <Listings {...props} />} />
        <Route path="/booking" render={props => <Booking {...props} />} />
        <Route path="/store" render={props => <Store {...props} />} />
        <Route path="/splash" render={props => <Splash {...props} />} />
        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        <Redirect from="*" to="/splash" />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
