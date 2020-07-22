import React, {useState, useEffect, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Axios from 'axios';

//Layout
import Header from "../layout/Header";
// import Footer from "../layout/Footer";

//routes
import Home from "../routes/Home/HomeView.js";
import Login from "../routes/Auth/AuthContainer";
import Service from "../routes/Service/ServiceContainer";
import Create from "../routes/Create/CreateContainer";
import Response from "../routes/Response/ResponseContainer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/auth" component={Login}/>
            <Route path="/service" exact={true} component={Service}/>
            <Route path="/service/create" component={Create}/>     
            <Route path="/service/response" component={Response}/>     
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
