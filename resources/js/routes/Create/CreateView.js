import React from "react";

import Create_Navigation from "./partial/Create_Navigation.js"
import Create_Question from "./partial/Create_Question.js"
export default () => {
    return (
        <div className="row">
            {/*  선택 메뉴 */}
            <div className="col-md-3">
                <Create_Navigation/>
            </div>
            <div className="col-md-9">
                <Create_Question/>
            </div>
        </div>
    );
}