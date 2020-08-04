import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
// import 

export default () => {
    return(
        <div>
            <div className="service_image text-center">
                <p style={{color:"white", fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Service
                </p>

            </div>

            <div className="row justify-content-around" style={{backgroundColor:"white"}}>
                <div className="col-lg-8 col-md-8 col-sm-8 text-center">
                    {/*  */}
                    <div className="row" style={{marginBottom:"50px", marginTop:"50px"}}>
                        {/* <div className="col-lg-12 col-md-12 col-sm-12">
                            <p style={{fontSize:"32px", fontWeight:"bold",marginTop:"30px"}}>
                                Use Services
                            </p>
                            <h3 style={{color: "green"}}>──────</h3>
                        </div> */}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <Link to ="/service/create/survey">
                                <div className="card-body">
                                    <div className="survey_create_image text-center"/>
                                    <div className="card-header">
                                        {/* <p style={{fontSize:"16px", fontWeight:"500", color:"blue"}}> */}
                                            설문조사 만들기
                                        {/* </p> */}
                                    </div>
                                </div> 
                            </Link>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <Link to ="/service/response">
                                <div className="card-body">
                                    <div className="survey_see_image text-center"/>
                                    <div className="card-header">
                                        설문조사 응답하기
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 여백 */}
            </div>  
        </div>
        

    
        

    )
}