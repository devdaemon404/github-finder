import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <i className={icon} />
                {' ' + title}
            </a>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">
                        <Button variant="outline-light">Home</Button>
                    </Link>
                </li>

                <li style={{marginLeft:"10px"}}className="nav-item">
                    <Link to="/about">
                        <Button variant="outline-light">About</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
