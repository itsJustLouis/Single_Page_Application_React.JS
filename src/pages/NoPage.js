import React from "react";
import "../css/noPage.scss";
import NavBar from "../components/NavBar";

function NoPage() {
    return (
        <React.Fragment>
            <NavBar />
            <section className="center-container">
                <h2 className="err">Error 404: Page Not Found!</h2>
            </section>
        </React.Fragment>
    )
}
export default NoPage;