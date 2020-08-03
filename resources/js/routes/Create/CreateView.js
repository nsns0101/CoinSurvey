import React, {useContext} from "react";
import { SurveyCreateContext } from "./CreateContainer";
import Navigation from "./partial/Navigation.js";
import Create_survey from "./partial/Create_survey.js";
import Create_target from "./partial/Create_target.js";
export default () => {
    const { 
        action
    } = useContext(SurveyCreateContext);

    return (
        <div className="row">
            {/*  선택 메뉴 */}
            <div className="col-md-3">
                <Navigation/>
            </div>
            <div className="col-md-9">
                {action == "survey" ? (
                    <Create_survey/>
                ) : (
                    <Create_target/>
                )}
            </div>
        </div>
    );
}

