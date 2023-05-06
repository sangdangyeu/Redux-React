import React from "react";
import Header from "./Header";
import CreateUser from "./CreactUser";
import TablerUser from "./TableUser";

const Home = (props) => {
    return (
        <>
            <Header />
            <CreateUser />
            <TablerUser />
        </>
    )
}

export default Home;