import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'
import './AddMenuItem.css'

function MyVerticallyCenteredModal( props ) {
    const host = process.env.REACT_APP_BACKEND
    // const host = process.env.REACT_APP_HEROKU_BACKEND

    const addItem = (e) => {
        e.preventDefault()
        const url = `${host}/menu-items/`
        const formData = e.target

        const descriptionArray = formData.description.value.split(", ")

        const newItem = {
            item_name: formData.itemname.value,
            price: formData.price.value,
            restaurant_id: props.id,
            description: descriptionArray,
        }
        console.log(newItem)
        axios.post(url, newItem).then(response => (
            console.log(response)
        ))
    }
    
    return (
        <Modal
            {...props}
            size=""
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login / Register
                </Modal.Title>
            </Modal.Header>
                
            <Modal.Body>
                <div>
                    <h3> Add Another Menu Item </h3>
                    <Form onSubmit={addItem}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Item Name"
                                name="itemname"
                            />
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="float"
                                placeholder="Price"
                                name="price"
                            />
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Desctiption (seperated by commas)"
                                name="description"
                            />
                        </Form.Group>


                        <Button 
                            variant="primary" 
                            type="submit" 
                            onClick={props.onHide}
                            > Add Item
                        </Button>
                        
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function AddMenuItem( props ) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Button className="Add-Menu-Item-Button" variant="primary" onClick={() => setModalShow(true)}>
                Add Menu Item
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={props.id}
            />
        </div>
    );
}

export default AddMenuItem;