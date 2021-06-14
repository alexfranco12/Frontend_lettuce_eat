import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SearchForm.css'
import { Form, Button } from 'react-bootstrap'

function SearchForm() {
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    return (
        <div className="Search-Form">
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
        </div>
    );
}

export default SearchForm;