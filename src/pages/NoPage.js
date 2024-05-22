import Header from "../components/Header";
import React from "react";
import NavBar from "../components/NavBar";

function NoPage() {
    return (
        <React.Fragment>
            <Header />
            <NavBar />
            <h2>Error 404: Not Found!</h2>
            <h3>Click the Link Below to return Home</h3>
        </React.Fragment>
    )
}
export default NoPage;
