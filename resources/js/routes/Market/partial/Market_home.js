import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MarketContext } from "../MarketContainer";
import "../Market.css";

export default () => {
    // const { 
    //     action
    // } = useContext(MarketContext);

    return (
        <div>
            {/* 백그라운드 이미지 */}
            <div className="market_image">
                <p style={{color:"white", textShadow:"black 12px 0px 3px",fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Market
                </p>
            </div>
            <div className="row justify-content-around">
                <div className="col-lg-8 col-md-8 col-sm-8" style={{marginTop:"10px", marginBottom:"10px"}}>
                    <h3 style={{fontSize:"24px"}}>총 <span style={{color:"red"}}>6</span>개의 설문조사가 판매되고 있습니다.</h3>
                </div>
            </div>
            {/* 설문조사 판매 3개씩 페이지네이팅하기 */}
            <div className="row justify-content-around">
                <div className="col-lg-1 col-md-1 col-sm-1"/>

                <div className="col-lg-10 col-md-10 col-sm-10">
                    {/*  */}
                    <div className="row justify-content-around">
                        {/* 설문조사 카드 */}
                        <div className="col-xl-3 col-lg-3 col-md-3" style={{borderRadius:"20px",boxShadow:"6px 6px 6px 6px rgba(0, 0, 0, .2)"}}>
                            {/* <Link to ="/service/create/survey"> */}
                                <div className="card-body">
                                    <div className="violence_survey_image"/>
                                    <div className="card-header" style={{margin:0, padding:0}}>
                                        <p style={{margin:0, padding:0, marginTop:"15px",fontSize:"20px", fontWeight:"bold", color:"black", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            영진 고등학교 학교폭력 실태조사
                                        </p>
                                        <p style={{fontSize:"14px", fontWeight:"bold", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            대구 광역시 영진 고등학교를 대상으로한 학교 폭력 실태조사입니다.
                                        </p>
                                        {/* 설문조사 진척도 */}
                                        <div>
                                            <h5 style={{color:"", fontWeight:"bold"}}>
                                                설문조사 진척결과
                                            </h5>
                                            <div className="progress" style={{backgroundColor:"rgb(0, 182, 255, 0.3)"}}>
                                                <div className="progress-bar" style={{width:"64%"}} role="progressbar">
                                                    64%   (64/100명)
                                                </div>
                                            </div>
                                        </div>
                                        {/* 응답 코인 */}
                                        <div className="row">
                                            <div className="col-md-8" style={{color:"black", fontWeight:"bold"}}>
                                                판매가
                                            </div>
                                            <div className="col-md-4 text-right">
                                                <p>95000 Coin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>

                        {/* 설문조사 카드 */}
                        <div className="col-xl-3 col-lg-3 col-md-3" style={{borderRadius:"20px",boxShadow:"6px 6px 6px 6px rgba(0, 0, 0, .2)"}}>
                            {/* <Link to ="/service/create/survey"> */}
                                <div className="card-body">
                                    <div className="student_survey_image"/>
                                    <div className="card-header" style={{margin:0, padding:0}}>
                                        <p style={{margin:0, padding:0, marginTop:"15px",fontSize:"20px", fontWeight:"bold", color:"black", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            고산 초등학교 학생 장래희망 조사
                                        </p>
                                        <p style={{fontSize:"14px", fontWeight:"bold", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            대구 광역시 영진 전문대학교를 대상으로한 학생들의 관심도 조사입니다.
                                        </p>
                                        {/* 설문조사 진척도 */}
                                        <div>
                                            <h5 style={{color:"", fontWeight:"bold"}}>
                                                설문조사 진척도
                                            </h5>
                                            <div className="progress" style={{backgroundColor:"rgb(0, 182, 255, 0.3)"}}>
                                                <div className="progress-bar" style={{width:"80%"}} role="progressbar">
                                                    80%   (80/100명)
                                                </div>
                                            </div>
                                        </div>
                                        {/* 응답 코인 */}
                                        <div className="row">
                                            <div className="col-md-8" style={{color:"black", fontWeight:"bold"}}>
                                                판매가
                                            </div>
                                            <div className="col-md-4 text-right">
                                                <p>148000 Coin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>

                        {/* 설문조사 카드 */}
                        <div className="col-xl-3 col-lg-3 col-md-3" style={{borderRadius:"20px",boxShadow:"6px 6px 6px 6px rgba(0, 0, 0, .2)"}}>
                            {/* <Link to ="/service/create/survey"> */}
                                <div className="card-body">
                                    <div className="sms_survey_image"/>
                                    <div className="card-header" style={{margin:0, padding:0}}>
                                        <p style={{margin:0, padding:0, marginTop:"15px",fontSize:"20px", fontWeight:"bold", color:"black", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            서울 특별시 SMS 조사
                                        </p>
                                        <p style={{fontSize:"14px", fontWeight:"bold", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                            서울 특별시 전체를 대상으로 실시한 SMS 관심도 조사입니다.
                                        </p>
                                        {/* 설문조사 진척도 */}
                                        <div>
                                            <h5 style={{color:"", fontWeight:"bold"}}>
                                                설문조사 진척도
                                            </h5>
                                            <div className="progress" style={{backgroundColor:"rgb(0, 182, 255, 0.3)"}}>
                                                <div className="progress-bar" style={{width:"100%"}} role="progressbar">
                                                    100%   (150/150명)
                                                </div>
                                            </div>
                                        </div>
                                        {/* 응답 코인 */}
                                        <div className="row">
                                            <div className="col-md-8" style={{color:"black", fontWeight:"bold"}}>
                                                판매가
                                            </div>
                                            <div className="col-md-4 text-right">
                                                <p>240000 Coin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"/>

            </div>
            {/* 페이지 넘기기 */}
            <div className="row" style={{marginTop:"30px"}}>
                <div class="col-sm-12 col-lg-12 text-center">
                    <a class="btn btn-primary" href="/market?page=1" style={{marginLeft:"10px"}}>1</a>
                    <a class="btn btn-primary" href="/market?page=2" style={{marginLeft:"10px"}}>2</a>
                </div>
            </div>
        </div>
    )
}