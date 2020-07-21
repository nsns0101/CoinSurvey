import React from "react";
import "./Service.css";
// import 

export default () => {
    return(
        <div>
            <div className="service_image text-center">
                <p style={{color:"white", fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Service
                </p>

            </div>

            <div className="row" style={{height:"53vh"}}>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8 text-center">
                    <p style={{fontSize:"32px", fontWeight:"bold",marginTop:"30px"}}>You can create many surveys</p>
                    <h3 style={{color: "blue"}}>──────</h3>
                    <div className="row">
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
                    
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
        </div>
    )
}