import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import './AddListing.css'

function AddListing( props ) {
    const host = process.env.REACT_APP_BACKEND
    // const host = process.env.REACT_APP_HEROKU_BACKEND

    function addLocation(e) {
        const url = `${host}/restaurants/`

        e.preventDefault()
        const formData = e.target
        const newLocation = {
            name: formData.name.value,
            phone: formData.phonenumber.value,
            summary: formData.summary.value,
            image_url: formData.imageurl.value,
        }

        axios.post(url, newLocation).then(res => {
            console.log(res)
        })
    }

    return (
        <div className="add-listing-form">
            <h4> Add A New Location </h4>
            <Form onSubmit={addLocation}>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationCustom02">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Optional"
                        name="phonenumber"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Optional"
                        name="summary"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Optional"
                        name="imageurl"
                    />
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={() => props.history.goBack()}>
                    Submit
                </Button>
            
 
            

            </Form>
        </div>
    );
}

export default AddListing;