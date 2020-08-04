import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MarketContext } from "./MarketContainer";
import "./Market.css";

export default () => {
    const { 
        action
    } = useContext(MarketContext);

    return (
        <div>
            <div className="market_image text-center">
                <p style={{color:"white", fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Market
                </p>

            </div>
        </div>
    )
}