import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import Home from "./components/main-page/home/Home";
import RestaurantDetails from "./components/main-page/restaurant-details/RestaurantDetails";
import UserProfile from "./components/main-page/user-profile/UserProfile";
import About from './components/main-page/about/About'
import AddListing from './components/main-page/add-listing/AddListing'

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/add-listing" component={AddListing} />
        <Route path="/restaurant/:id" render={routerProps => (
          <RestaurantDetails match={routerProps.match} />
        )}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/about" component={About} />
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
