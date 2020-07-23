import React, {useContext} from "react";
import { SurveyCreateContext } from "../CreateContainer";
import "../Create.css";
export default () => {
    const { newQuestionForm } = useContext(SurveyCreateContext);

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

            {/* 내용 */}
            <div className="col-md-10" style={{
                border: "3px solid black",
                borderTop:"0px",
                paddingBottom:"30px"
            }}>
                <div className="row">
                    <div className="col-md-1"/>
                    <div className="col-md-10">
                        <div className="card-body text-center new_question" onClick={()=>console.log("good")}>
                            <br/>
                            <img src="/icon/survey_create/add_question.svg" style={{width:"4%"}}/>
                            <span style={{fontSize:"20px", fontWeight:"bold"}}> 새 질문</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}