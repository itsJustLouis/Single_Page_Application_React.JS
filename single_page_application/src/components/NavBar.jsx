import React from "react";
import { Link } from "react-router-dom";
// import '../css/nav.css';

function NavBar() {
    return (
    <nav className="navigation">
   
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/theory">Theory</Link></li>
            <li><Link to="/design">Design</Link></li>
            <li><Link to="/webart">WebArt</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </nav>
    )
}
export default NavBar;