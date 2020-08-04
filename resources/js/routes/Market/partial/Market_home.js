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
                <p style={{color:"white", fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Market
                </p>
            </div>

            {/* 설문조사 판매 */}
            <div className="row justify-content-around" style={{backgroundColor:"white"}}>
                <div className="col-lg-10 col-md-10 col-sm-10">
                    {/*  */}
                    <div className="row" style={{marginBottom:"50px", marginTop:"50px"}}>
                        <div className="col-xl-4 col-lg-4 col-md-4" style={{ boxShadow:"6px 6px 6px 6px rgba(0, 0, 0, .2)"}}>
                            <Link to ="/service/create/survey">
                                <div className="card-body">
                                    <div className="market_survey_image"/>
                                    <div className="card-header">
                                        <p>대구광역시 영진 전문 고등학교를 대상으로한 청소년 학교폭력 실태조사</p>
                                        {/* Progress bar */}
                                        <h5 className="text-success">
                                            설문조사 진척도
                                        </h5>
                                        <div className="progress" style={{backgroundColor:"black"}}>
                                            <div className="progress-bar" style={{width:"64%"}} role="progressbar">
                                                64%
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}