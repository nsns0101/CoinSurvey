import React from "react";

export default () => {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7" style={{marginTop:"30%"}}>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>설문조사 생성</p>
                {/*  */}
                <div className="card-header text-center" style={{marginTop:"30px"}}>
                    <div className="row" style={{border:"solid 1px black"}}>
                        <div className="col-md-6">
                            <img src="/icon/survey_create/create.svg" style={{width:"30%", marginTop:"5px"}}/>
                            <p style={{marginTop:"10px"}}>설문지 생성</p>
                        </div>
                        <div className="col-md-6" style={{borderLeft:"solid 1px black"}}>
                            <img src="/icon/survey_create/target.svg"  style={{width:"30%", marginTop:"5px"}}/>
                            <p style={{marginTop:"10px"}}>타겟 설정</p>
                        </div>
                    </div>
                </div>
                <div className="card-header text-center" style={{backgroundColor:"black"}}>
                    <p style={{color:"white", padding:0, margin:0}}>질문 추가 메뉴↓</p>
                </div>

                {/*  */}
                <div className="card-header text-center">
                    객관식
                </div>
                <div className="card-header text-center">
                    주관식
                </div>
                <div className="card-header text-center">
                    체크박스
                </div>
                <div className="card-header text-center">
                    라디오
                </div>
            </div>
        </div>
    )
}