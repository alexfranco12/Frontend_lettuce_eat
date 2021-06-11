import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <Link to={"/about"}>
                <h5>About</h5>
            </Link>
            
        </div>
    );
}

export default Navigation;