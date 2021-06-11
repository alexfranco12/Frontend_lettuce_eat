import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Image, Card } from 'react-bootstrap'
import SearchForm from './search-form/SearchForm';
import './Home.css'

function Home() {
    const host = process.env.REACT_APP_BACKEND
    // const host = process.env.REACT_APP_HEROKU_BACKEND
    
    const [restaurants, setRestaurants] = useState([])

    function getRestaurants() {
        const url = `${host}/restaurants/`
        
        axios.get(url).then((response) => {
            console.log(response.data)
            setRestaurants(response.data)
        })
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return (
        <div className="Home-Page">
            <SearchForm/>

            <h4> Featured Restaurants </h4>
            <div className="featured-restaurants">
                {restaurants.map((restaurant) => (
                    // <Card style={{ width: '15rem' }}>
                    //     <Card.Img variant="top" src={restaurant.image_url} />
                    //     <Card.Body>
                    //         <Card.Title>{restaurant.name}</Card.Title>
                    //         <Card.Text>
                    //             Some quick example text to build on the card title and make up the bulk of
                    //             the card's content.
                    //         </Card.Text>
                    //         {/* <Button variant="primary">Go somewhere</Button> */}
                    //     </Card.Body>
                    // </Card>
                    <div className="restaurant-card" key={restaurant.id}>
                        <Link to={`/restaurant/${restaurant.id}`}>
                            <h5 className="restaurant-name">{restaurant.name}</h5>
                            <div className="restaurant-image">
                                <Image alt="" src={restaurant.image_url} thumbnail />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Home;