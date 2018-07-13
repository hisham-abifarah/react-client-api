// check sublime shortcut for adding function component
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="ui container">
        <h1>Home Page </h1>
        {/* inside to="/" is the route, need to create it in app.js */}
        <Link to="/login"> Login </Link> 
    </div>
);


export default HomePage;