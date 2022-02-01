import { faBars } from '@fortawesome/free-solid-svg-icons';
//react fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import '../CSS/nav.css';

const Navbar = () => {
    return (
        <nav className="navbar sticky navbar-expand-lg navbar-light bg-dark" >
            <div className="container-bootstrap" id="about-me">
                <a className="navbar-brand" href="#"></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#about-me">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#my-recent-projects">My Recent Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#my-journey">My Journey</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#my-thoughts">My Thoughts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-me">Contact Me</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar