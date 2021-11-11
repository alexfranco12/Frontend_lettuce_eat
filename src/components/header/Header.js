import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Login from './login/Login'
import Navigation from './navigation/Navigation';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link className="site-name" to={'/'}>
          <h1> Lettuce Eat </h1>
      </Link>
      
      <div className='Navigation'>
          <Navigation/>
      </div>

      <div className='AddListing'>
          <Link to="/add-listing">
              <Button>Add Listing</Button>
          </Link>
          
      </div>

      <div className='Login'>
          <Login />
      </div>
        
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1;
  display: flex;
`;