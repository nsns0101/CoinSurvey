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
            <div className="row">
                {/* 내용 */}
                <div className="col-md-10" style={{
                    border: "3px solid black",
                    borderTop:"0px",
                    paddingBottom:"30px"
                }}>
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10">
                            {newSurveyForm ? (
                                <div className="row writing_question">
                                    {/* 질문 제목*/}
                                    <div className="col-md-2">
                                        <div className="title_box_icon">1차 질문</div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="question_title"></input>
                                    </div>
                                    {/* 객관식 */}
                                    <div className="col-md-2"/>
                                    <div className="col-md-10" style={{marginBottom:"40px"}}>
                                        <input type="radio" style={{marginTop:"20px"}}/> 
                                            <span className="question_choice">자주 그렇다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">대체로 그렇다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">보통</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">대체로 그렇지 않다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">그렇지 않다</span><br/>
                                    </div>
                                    {/* 질문 제목*/}
                                    <div className="col-md-2">
                                        <div className="title_box_icon">2차 질문</div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="question_title"></input>
                                    </div>
                                    {/* 객관식 */}
                                    <div className="col-md-2"/>
                                    <div className="col-md-10" style={{marginBottom:"40px"}}>
                                        <input type="radio" style={{marginTop:"20px"}}/> 
                                            <span className="question_choice">자주 그렇다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">대체로 그렇다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">보통</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">대체로 그렇지 않다</span><br/>
                                        <input type="radio"/> 
                                            <span className="question_choice">그렇지 않다</span><br/>
                                    </div>
                                    {/*  */}
                                    
                                </div>
                                // 
                                
                            ) : (
                                <div className="card-body text-center new_question" onClick={()=> setNewSurveyForm(true)}>
                                    <br/>
                                    <img src="/icon/survey_create/add_question.svg" style={{width:"4%"}}/>
                                    <span style={{fontSize:"20px", fontWeight:"bold"}}> 왼쪽에 있는 질문 추가 메뉴를 통해 질문을 추가하세요!</span>
                                </div>
                            )}
                        </div>
                        <div className="col-md-1"/>
                    </div>
                </div>
                <div className="col-md-2"/>
            </div>
            
    )
}