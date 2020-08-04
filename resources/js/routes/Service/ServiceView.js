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

            <div className="row" style={{backgroundColor:"white"}}>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
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
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>  

            {/* You can create many surveys */}
            {/* <div className="row" style={{marginBottom:"50px"}}>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8 text-center">    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p style={{fontSize:"32px", fontWeight:"bold",marginTop:"30px"}}>You can create many surveys</p>
                        <h3 style={{color: "blue"}}>──────</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/csat.svg"/>
                        <p className="service_title">
                            Customer satisfaction
                        </p>
                        <p className="main_service_text">
                            Get real-time feedback to improve products,<br/>
                            services, and business overall.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/education.svg"/>
                        <p className="service_title">
                            Employee engagement
                        </p>
                        <p className="main_service_text">
                            Understand how to retain the best talent and<br/> build a healthy company culture.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/employees-and-hr.svg"/>
                        <p className="service_title">
                            Market research
                        </p>
                        <p className="main_service_text">
                            Keep track of industry and market trends to stay<br/> ahead of the competition.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/event-planning.svg"/>
                        <p className="service_title">
                            Event planning
                        </p>
                        <p className="main_service_text">
                            Gather feedback before, during (in real time!),<br/> and after your events.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/healthcare.svg"/>
                        <p className="service_title">
                            Education and schools
                        </p>
                        <p className="main_service_text">
                            Get answers to improve programs, processes, <br/>and academic achievement.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{marginBottom:"20px"}}>
                        <img src="/icon/service_menu/market-research.svg"/>
                        <p className="service_title">
                            Healthcare
                        </p>
                        <p className="main_service_text">
                            Support patient-provider communication <br/>by getting feedback.                            
                        </p>
                    </div>
                </div>


            </div>  */}
        </div>
        

    
        

    )
}