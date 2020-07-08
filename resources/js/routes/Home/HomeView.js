import React, { Fragment } from 'react';
import "./Home.css";
import styled from "styled-components"
import Service from "./partial/Service";
// const Wrapper = styled.div`
//   min-height:90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

export default () => {
    return (
        <div>
            <div className="main_image text-center">
                {/* 글 */}
                <p style={{color:"white", fontSize:"88px", paddingTop:"300px", fontWeight:"bold"}}>Starting New Survey!</p>
                <p style={{color:"white", fontSize:"64px", paddingTop:"100px", fontWeight:"bold"}}>Easily create surveys,</p>
                <p style={{color:"white", fontSize:"64px", paddingTop:"30px", fontWeight:"bold"}}>share or trade with users</p>
                
                {/* 버튼 */}
                <div className="btn_group">
                    <button id="survey_btn" style={{marginRight:"20px"}}>Create</button>
                    <button id="market_btn">Market</button>
                </div>
            </div>
            <Service/>
        </div>

    )
}