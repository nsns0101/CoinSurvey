import React, {useEffect, useState, useContext, createContext} from "react";
import ResponseView from "./ResponseView";

export const ResponseContext = createContext();

export default () => {
    return (
        <ResponseContext.Provider value={{

        }}>
            <ResponseView/>
        </ResponseContext.Provider>
    );
}