import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./SearchResults.css"

function SearchResults( {match} ) {
    const host = process.env.REACT_APP_BACKEND
    // const host = process.env.REACT_APP_HEROKU_BACKEND

    console.log(match.params)
    const [searchRestaurants, setSearchRestaurants] = useState([])

    function getSearchRestaurants() {

        const url = `${host}/restaurant/${match.params.search}`
        console.log(url)
        axios.get(url).then((response) => {
            console.log(response.data)
            setSearchRestaurants(response.data)
        })
    }
    
    useEffect(() => {
        getSearchRestaurants();
    }, [])

    return (
        <div className="search-results">
            <h4>Search Results</h4>
            {searchRestaurants.map((restaurant) => (
                <Link to={`/restaurant/${restaurant.id}`}>
                    <div className="restaurant-card">
                        <img className="result-image" alt="" src={restaurant.image_url} />
                        <h5 className="search-name">{restaurant.name}</h5>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SearchResults;