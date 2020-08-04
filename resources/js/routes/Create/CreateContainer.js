import React, { useState, createContext, useContext } from "react";
import CreateView from "./CreateView";

export const SurveyCreateContext = createContext();
export default () => {
    //새 질문 버튼을 눌렀는지
    const [newSurveyForm, setNewSurveyForm] = useState(false);

    //타켓설정 페이지인지 설문 작성 페이지인지
    const action = location.pathname.split('/')[3];

    //타겟 그룹(성별, 연령, 직업)
    const gender_list = ["무관", "남자", "여자"];
    const age_group_list = ["무관", "10대", "20대", "30대", "40대", "50대", "60대 이상"];
    const job_list = ["무관", "학생", "회사원"];

    //타겟 선택
    const [gender, SetGender] = useState("무관");
    const [age, SetAge] = useState("무관");
    const [job, SetJob] = useState("무관");

    //필수 옵션
    const [max_res, setMax_res] = useState("");
    const [closing_date, setClosing_date] = useState("");
    const [res_coin, setRes_coin] = useState("");

    return (
        <SurveyCreateContext.Provider value={{
            newSurveyForm,
            setNewSurveyForm,
            action,
            gender_list,
            age_group_list,
            job_list,
            gender,
            SetGender,
            age,
            SetAge,
            job,
            SetJob,
            max_res,
            setMax_res,
            closing_date,
            setClosing_date,
            res_coin,
            setRes_coin,
        }}>
            <CreateView/>
        </SurveyCreateContext.Provider>
    );
}