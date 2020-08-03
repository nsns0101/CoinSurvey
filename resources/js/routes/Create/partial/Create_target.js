import React, {useContext} from "react";
import { SurveyCreateContext } from "../CreateContainer";
import { Link } from "react-router-dom";
import "../Create.css";
import Dropdown from "react-dropdown";

export default () => {
    const { 
        newSurveyForm, 
        setNewSurveyForm,
        gender_list,
        age_group_list,
        job_list,
        gender,
        SetGender,
        age,
        SetAge,
        job,
        SetJob,
    } = useContext(SurveyCreateContext);
    
    return (
        <div className="row">
                <div className="col-md-10" style={{
                    border: "3px solid black",
                    borderTop:"0px",
                    paddingBottom:"30px"
                }}>
                    {/* 대상 설정 */}
                    <div style={{marginTop:"30px"}}>
                        <span className="title_box_icon">1 단계</span>
                        <span style={{marginLeft:"10px", fontSize:"24px", fontWeight:"bold"}}>대상 설정</span>
                    </div>
                    <div className="row justify-content-around" style={{marginTop:"20px"}}>

                        {/* 성별 */}
                        <div className="col-md-3 text-center">
                            <div style={{width:"100%", border:"solid 2px black"}}>
                                {/* 글과 이미지 */}
                                <div style={{padding:"20px"}}>
                                    <p>성별</p>
                                    <img src="/icon/survey_create/gender.png" style={{width:"50%"}}/>
                                </div>
                                {/* 드롭다운 버튼 */}
                                <Dropdown options={gender_list}
                                    onChange={
                                        (data) => {
                                            SetGender(data.value);
                                        }
                                    }
                                value={gender} style={{width:"100%"}}/>
                            </div>
                        </div>

                        {/* 연령별 */}
                        <div className="col-md-3 text-center">
                            <div style={{width:"100%", border:"solid 2px black"}}>
                                {/* 글과 이미지 */}
                                <div style={{padding:"20px"}}>
                                    <p>연령층</p>
                                    <img src="/icon/survey_create/age_group.png" style={{width:"50%"}}/>
                                </div>
                                {/* 드롭다운 버튼 */}
                                <Dropdown options={age_group_list}
                                    onChange={
                                        (data) => {
                                            console.log(data.value);
                                            SetAge(data.value);
                                        }
                                    }
                                value={age} style={{width:"100%"}}/>
                            </div>
                        </div>

                        {/* 직업별 */}
                        <div className="col-md-3 text-center">
                            <div style={{width:"100%", border:"solid 2px black"}}>
                                {/* 글과 이미지 */}
                                <div style={{padding:"20px"}}>
                                    <p>직업</p>
                                    <img src="/icon/survey_create/job.png" style={{width:"50%"}}/>
                                </div>
                                {/* 드롭다운 버튼 */}
                                <Dropdown options={job_list}
                                    onChange={
                                        (data) => {
                                            SetJob(data.value);
                                        }
                                    }
                                value={job} style={{width:"100%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
    )
}