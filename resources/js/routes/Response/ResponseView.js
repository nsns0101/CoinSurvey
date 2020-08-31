import React, {useState, useContext} from "react";
import "./Response.css";

export default () => {
    return (
        <div>
            {/* 백그라운드 이미지 */}
            <div className="response_image">
                <p style={{color:"white", textShadow:"black 12px 0px 3px",fontSize:"88px", paddingTop:"150px", fontWeight:"bold"}}>
                    Response
                </p>
            </div>
        </div>
    )
}