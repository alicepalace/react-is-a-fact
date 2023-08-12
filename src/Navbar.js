import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Sickly E-Girl</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/myexercises">My Exercises</Link>
                <Link to="/addexercise">Add A New Exercise</Link>
            </div>
        </nav>
    );
}

export default Navbar;