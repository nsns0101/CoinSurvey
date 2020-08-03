import React, {useContext} from "react";
import { SurveyCreateContext } from "../CreateContainer";
import { Link } from "react-router-dom";

import "../Create.css";

export default () => {
    const { 
        newSurveyForm, 
        setNewSurveyForm,
    } = useContext(SurveyCreateContext);
    
    return (
        <div className="row" style={{marginTop:"5%"}}>
            {/* 제목 */}
            <div className="col-md-10" style={{backgroundColor:"green"}}>
                <input className="survey_title" name="survey_title" placeholder="설문조사 제목" />
            </div>
            <div className="col-md-2" style={{padding:0, margin:0}}/>

            {/* 설명 */}
            <div className="col-md-10" style={{
                border:"1px solid rgb(209, 211, 226)",
                backgroundColor:"#F7F7F7",
                margin:0,
                padding:0
            }}>
                <input className="survey_description" name="survey_description" placeholder="소 제목을 적어주세요."/>
            </div>
            <div className="col-md-2" style={{padding:0, margin:0}}/>

            {/* 다음 버튼 */}
            <div className="col-md-10 text-center" style={{marginTop:"20px"}}>
                <Link to="/service/create/target">
                    <button className="btn btn-primary">저장</button>
                </Link>
                <button className="btn btn-danger" style={{marginLeft:"10px"}}>취소</button>
            </div>
        </div>
    )
}