import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Header.css'
import Login from './login/Login'
import Navigation from './navigation/Navigation';



function Header() {
    return (
        <div className="Header">
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
            
        </div>
    );
}

export default Header;