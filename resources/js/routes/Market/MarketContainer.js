import React, { useState, createContext } from "react";

import MarketView from "./MarketView.js";

export const MarketContext = createContext();

export default () => {
    // [2]가 있으면 마켓 세부페이지 아니면 마켓 홈
    const [action, setAction] = useState(location.pathname.split("/")[2] ? true : false);
    console.log(action);
    return (
        <MarketContext.Provider value={{
            action
        }}>
            <MarketView/>
        </MarketContext.Provider>
    )
}