import React, {useState, useEffect, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from "react-router-dom";
// import Axios from "axios";

//Layout
import Header from "../layout/Header";
// import Footer from "../layout/Footer";

//Routes


function App() {
    return (
        <Header/>
    );
}

export default App;

if (document.getElementById('app')) {
    console.log("good");
    ReactDOM.render(<App />, document.getElementById('app'));
}
