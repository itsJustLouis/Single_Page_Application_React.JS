import React from "react";
import { Link } from "react-router-dom";
// import Theory from "../pages/Theory";
// import Design from "../pages/Design";
// import WebArt from "../pages/InternetArt";
// import Profile from "../pages/Profile";

function NavBar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/theory">Theory</Link></li>
            <li><Link to="/design">Design</Link></li>
            <li><Link to="/webart">WebArt</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    )
}
export default NavBar;