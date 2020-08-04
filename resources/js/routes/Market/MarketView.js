import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MarketContext } from "./MarketContainer";
import "./Market.css";

import Market_home from "./partial/Market_home";
import Market_detail from "./partial/Market_detail";

export default () => {
    const { 
        action
    } = useContext(MarketContext);

    return action ? (
            <Market_detail/>
        ) : (
            <Market_home/>
    )
}