import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import './RestaurantDetails.css'
import axios from 'axios'

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

function RestaurantDetails( {match} ) {
    const host = process.env.REACT_APP_BACKEND
    // const host = process.env.REACT_APP_HEROKU_BACKEND
    
    const id = match.params.id

    const [modalShow, setModalShow] = useState(false);

    const [restaurant, setRestaurant] = useState({});
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);
    const [restaurantHours, setRestaurantHours] = useState([]);
    const [restaurantAddress, setRestaurantAddress] = useState([])


    function getRestaurant() {
        const url = `${host}/restaurants/${id}`
        
        axios.get(url).then((response) => {
            setRestaurant(response.data)
            setRestaurantHours(response.data.operation_hours)
            setRestaurantAddress(response.data.address)
            setRestaurantMenuItems(response.data.menu_items)
        })
    }

    function deleteItem(itemId) {
        const menuItemId = itemId
        const url = `${host}/menu-items/${menuItemId}`

        console.log(url)
        axios.delete(url).then(res => (
            getRestaurant()
        ))
    }

    useEffect(() => {
        getRestaurant();
    }, [])

    return (
        <div className="restaurant-details">
            <header className="detail-page-header">
                <div className="restaurant-title">
                    <h1>{restaurant.name}</h1>
                    {restaurantAddress.map((address) => (
                        <p className="address" key={address.id}><span>{address.address_1}, {address.city}, {address.state} {address.zip_code}</span></p>
                    ))}
                </div>
                <Button className="favorite-button"> Favorite </Button>
                <Button className="update-button"> Update Restaurant </Button>
            </header>

            <div className="split-body">
                <div className="details">

                    <p>{restaurant.summary}</p>

                    <div>
                        <h2 className="vegan-option-title">Vegan Options 
                            <div>
                                <Button 
                                    className="Add-Menu-Item-Button" 
                                    variant="primary" 
                                    onClick={() => setModalShow(true)}
                                    > Add Menu Item
                                </Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => {setModalShow(false); getRestaurant();}}
                                    id={restaurant.id}
                                />
                            </div> 
                        </h2>
                        {restaurantMenuItems.map((item) => (
                            <div key={item.id}>
                                <h5> {item.item_name} 
                                    <Button 
                                        className="" 
                                        onClick={() => deleteItem(item.id)}
                                        > DELETE Item 
                                    </Button>
                                </h5>
                                <p>{item.description.map((i) => (
                                <span key={i.id}>{i}, </span>
                                ))}</p>
                                <br />
                            </div>
                        ))}
                    </div>

                    <div className="review-photo-buttons">
                        <Button className="add-review-button"> Add Review </Button>
                        <Button className="add-photo-button"> Add Photo </Button>
                    </div>
                    
                    <div className="contact-info">
                        <h4>Contact</h4>
                        <p>{restaurant.phone}</p>   
                    </div>

                    <div className="hours">
                        <h4> Hours of Operation </h4>
                        {restaurantHours.map((day) => (
                            <div key={day.id}>
                                {day}
                            </div>
                        ))}
                    </div>
   
                    <div>
                        <h1> Reviews </h1>
                        <div>
                            <h5> review title </h5>
                            <p> review body </p>
                            <div>
                                <Button> Comment </Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="map">
                    MAP
                </div>
            </div>

        </div>
    );
}

export default RestaurantDetails;