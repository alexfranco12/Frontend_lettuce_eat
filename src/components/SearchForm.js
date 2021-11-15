import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import image from '../assets/cover-photo2.jpg'
import { Form, Button } from 'react-bootstrap'

export const SearchForm = () => {
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    return (
        <SearchFormStyled>
            <h3 className="search-title">
                Search for your favorite restaurant:
            </h3>
            <Form className="search-bar">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        onChange={handleChange}
                        className="form-control" 
                        name="search" 
                        placeholder="Search By Name" 
                        aria-label="Restaurant Name" 
                        aria-describedby="button-addon2" 
                    />
                    <Link to={`/search-results/${searchInput}`}>
                        <Button 
                            className="btn btn-primary" 
                            type="button" 
                            id="button-addon2" 
                            > Submit
                        </Button>
                    </Link>
                </div>
            </Form>
        </SearchFormStyled>
    );
};

const SearchFormStyled = styled.div`
  margin: auto auto 10px auto;
  padding: 150px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  text-align: center;
  .search-title {
      color: white;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .search-bar {
      display: flex;
  }
  .input {
      min-width: 300px;
  }
`;