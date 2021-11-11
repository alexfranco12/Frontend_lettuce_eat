import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/main-page/home/Home";
import RestaurantDetails from "./components/main-page/restaurant-details/RestaurantDetails";
import UserProfile from "./components/main-page/user-profile/UserProfile";
import About from './components/main-page/about/About'
import AddListing from './components/main-page/add-listing/AddListing'
import SearchResults from "./components/main-page/search-results/SearchResults";

import { MainLayout } from './layouts'

function App() {
  return (
    <MainLayout>
      <AppStyled>
        <Route exact path="/" component={Home} />
        <Route path="/search-results/:search" render={routerProps => (
          <SearchResults match={routerProps.match} />
        )}/>
        <Route path="/add-listing" component={AddListing} />
        <Route path="/restaurant/:id" render={routerProps => (
          <RestaurantDetails match={routerProps.match} />
        )}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/about" component={About} />
      </AppStyled>
    </MainLayout>
  );
}

export default App;

const AppStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 2;
`;
