import React, {useState, useContext} from "react";

export default () => {
    return (
        <div>
            {/* 백그라운드 이미지 */}
            <div className="response_image">
                <p style={{color:"white", textShadow:"black 12px 0px 3px",fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Response
                </p>
            </div>

            <div className="row text-center">
                <div className="col-md-1"/>
                <img className="pin_img" src="/icon/response/pin1.png"/>
                <p className="response_help_p">현재 <span>5개</span>의 설문조사가 진행중입니다.</p>
            </div>
            {/* 설문조사 카드 */}

            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10" style={{borderRadius:"20px",boxShadow:"6px 6px 6px 6px rgba(0, 0, 0, .2)"}}>
                    {/* <Link to ="/service/create/survey"> */}
                    <div className="row card-body">
                        <div className="col-md-9 text-center">
                            good
                        </div>
                        <div className="col-md-3" style={{borderLeft:"1px solid black"}}>
                            good
                            good
                            good
                        </div>
                    </div>
                {/* </Link> */}
                </div>
            </div>
        </div>
    )
}