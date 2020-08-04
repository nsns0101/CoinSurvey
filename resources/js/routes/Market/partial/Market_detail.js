import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MarketContext } from "../MarketContainer";
import "../Market.css";

export default () => {
    // const { 
    //     action
    // } = useContext(MarketContext);

    return (
<div className="container">
 
    <h3 className="text-success">A Demo of Porgress bar</h3>
    <div className="progress">
        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
    </div>
    

    <h5 className="text-success">
        By style attribute
    </h5>
    <div className="progress">
        <div className="progress-bar" style={{width:"64%"}} role="progressbar">
            64%
        </div>
    </div>
  
 </div>
    )
}