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
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about-us" render={props => <AboutUs {...props} />} />
      <Route path="/blog-post" render={props => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={props => <ContactUs {...props} />} />
      <Route path="/e-commerce" render={props => <Ecommerce {...props} />} />
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route path="/pricing" render={props => <Pricing {...props} />} />
      <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/sections" render={props => <Sections {...props} />} />

      <Route path="/login" render={props => <LoginPage {...props} />} />
      <Route path="/registration" render={props => <Registration {...props} />} />
      <Route path="/listings" render={props => <Listings {...props} />} />
      <Route path="/booking" render={props => <Booking {...props} />} />
      <Route path="/store" render={props => <Store {...props} />} />
      <Route path="/splash" render={props => <Splash {...props} />} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
