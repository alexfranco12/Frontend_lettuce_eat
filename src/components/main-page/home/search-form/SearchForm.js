import React from 'react';
import './SearchForm.css'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function SearchForm() {
    function handleSubmit() {
    
    }
    return (
        <div className="Search-Form">
            <h3>
                Search for your favorite restaurant:
            </h3>
            <Form className="searchBar" onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search By Name"
                        aria-label="Restaurant Name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    );
}

export default SearchForm;