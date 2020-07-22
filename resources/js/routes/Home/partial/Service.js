import React from "react";

export default () => {
    return (
        <div className="row" style={{height:"100vh"}}>
            <div className="col-lg-2 col-md-2 col-sm-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                {/* Text */}
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <p style={{fontSize:"16px", fontWeight:"500",marginTop:"30px"}}>
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
    )
}