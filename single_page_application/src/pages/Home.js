import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Home() {
    return (
        <React.Fragment>
            <h2>Home Page</h2>
            <NavBar />
            <Header />
        </React.Fragment>
    )
}
export default Home;