import React, {useContext} from "react";
import { SurveyCreateContext } from "../CreateContainer";
import { Link } from "react-router-dom";
import "../Create.css";
import Dropdown from "react-dropdown";
import DataPicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment"

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
        max_res,
        setMax_res,
        closing_date,
        setClosing_date,
        res_coin,
        setRes_coin
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
                                    <p style={{fontSize:"20px", fontWeight:"bold"}}>성별</p>
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
                                    <p style={{fontSize:"20px", fontWeight:"bold"}}>연령층</p>
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
                                    <p style={{fontSize:"20px", fontWeight:"bold"}}>직업</p>
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


                    <div style={{marginTop:"30px"}}>
                        <span className="title_box_icon">2 단계</span>
                        <span style={{marginLeft:"10px", fontSize:"24px", fontWeight:"bold"}}>필수 옵션</span>
                    </div>
                    <div className="row justify-content-around" style={{marginTop:"20px"}}>
                        <div className="required_option col-xl-6 col-lg-11 col-md-11 col-sm-11" style={{border:"2px solid black"}}>
                            {/*  */}
                            <div style={{margin:"20px"}}>
                                <span style={{fontSize:"16px", fontWeight:"bold"}}>최대 응답자 수</span>
                                {/* <span style={{float:"right", marginLeft:"10px", fontSize:"16px"}}>명</span> */}
                                <input 
                                    style={{float:"right"}} 
                                    onChange={
                                        (e) => {
                                            setMax_res(e.target.value);
                                        }
                                    }
                                    value={max_res}
                                />
                                <p className="text-danger" style={{fontSize:"12px"}}>마감일에 상관없이 응답수를 만족하면 조사가 종료됩니다.</p>

                            </div>
                            {/*  */}
                            <div style={{margin:"20px"}}>
                                <span style={{fontSize:"16px", fontWeight:"bold"}}>마감 일</span>
                                {/* <span style={{float:"right", marginLeft:"10px", fontSize:"16px"}}></span> */}
                                {/* <input style={{float:"right"}} placeholder=""/> */}
                                {/* <!-- 시작시 기본 날짜 설정은 value를 이용 --> */}
                                <DataPicker 
                                    onChange={
                                        (date) => {
                                            setClosing_date(moment(date).format("YYYY-MM-DD"));
                                        }
                                    } value={closing_date}
                                />
                            </div>
                            {/*  */}
                            <div style={{margin:"20px"}}>
                                <span style={{fontSize:"16px", fontWeight:"bold"}}>응답 코인</span>
                                {/* <span style={{float:"right", marginLeft:"10px", fontSize:"16px"}}>COIN</span> */}
                                <input 
                                    style={{float:"right"}} 
                                    onChange={
                                        (e) => {
                                            setRes_coin(e.target.value);
                                            console.log(res_coin);
                                        }
                                    }
                                    value={res_coin}
                                />                                
                                <p className="text-danger" style={{fontSize:"12px"}}>응답자에게 부여할 코인입니다.</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
            
    )
}



