import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Login } from './Login';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link className="site-name" to={'/'}>
          <h1> Lettuce Eat </h1>
      </Link>
      
      <div className='links'>
        <div className='link'>
            <Link to="/add-listing">Add Listing</Link>
        </div>

        <div className='link'>
            <Login />
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .links {
    display: flex;
    align-items: center;
    & :not(:last-child) {
      margin-right: 2rem;
    }
  }
`;