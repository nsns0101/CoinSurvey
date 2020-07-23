import React from "react";

export default () => {
    return (
        <div>
            <div className="row" style={{height:"100vh"}}>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    {/* Text */}
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <p style={{fontSize:"16px", fontWeight:"500",marginTop:"80px"}}>
                            Professional Survey
                        </p>
                        <p style={{fontSize:"32px", fontWeight:"bold"}}>
                            Advantages of Online Survey
                        </p>
                        <h3 style={{color: "green"}}>──────</h3>
                    </div>

                    {/*  */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                            {/* 1 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px", marginTop:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8" style={{marginTop:"100px"}}>
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    온라인 설문조사
                                </p>
                                <p>
                                    온라인 설문조사를 통해<br/>
                                    많은 사람들에게<br/>
                                    정보를 얻을 수 있습니다.
                                </p>
                            </div>
                            {/* 2 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    빠른 설문조사
                                </p>
                                <p>
                                    쉽고 간편한 설문조사를 통해<br/>
                                    부담없이 설문조사를 <br/>
                                    받을 수 있습니다.
                                </p>
                            </div>
                            {/* 3 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    디자인 커스텀
                                </p>
                                <p>
                                    설문조사 Form을<br/>
                                    유저가 원하는 디자인으로<br/>
                                    만들 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="/img/survey.svg" style={{width:"400px", marginTop:"100px"}}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                            {/* 1 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px", marginTop:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8" style={{marginTop:"100px"}}>
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    설문조사 판매
                                </p>
                                <p>
                                    자신이 생성한 설문조사를<br/>
                                    여러 사용자에게 공유하거나<br/>
                                    판매를 할 수 있습니다.
                                </p>
                            </div>
                            {/* 2 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    설문조사 구매
                                </p>
                                <p>
                                    다른 사용자가 만든 설문조사를<br/>
                                    쉽고 간편하게<br/>
                                    구입을 할 수 있습니다.
                                </p>
                            </div>
                            {/* 3 */}
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center" style={{marginBottom:"100px"}}>
                                <img src="/icon/service_menu/employees-and-hr.svg"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <p style={{fontSize:"16px", fontWeight:"bold"}}>
                                    여러 템플릿 제공
                                </p>
                                <p>
                                    CoinSurvey에서는<br/>
                                    사용자가 많이 사용하는<br/>
                                    템플릿을 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">설문조사 만들러 가기</button>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>

            </div>
            <div className="row" style={{marginBottom:"50px"}}>
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
            </div>

        </div> 
    )
}