import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../css/nav.css';
import '../css/global.css';
import Blackhole from "../components/sub/blackhole";
import HomeContent from "../components/sub/HomeContent";

function Home() {
    return (
        <main className="h-full w-full">
            <section className="flex flex-col h-[850px] gap-20" >

                <Blackhole />
                <HomeContent />
                {/* <h2>Home Page</h2> */}
                {/* <NavBar /> */}
                {/* <Header /> */}


            </section>
        </main>
    )
}
export default Home;