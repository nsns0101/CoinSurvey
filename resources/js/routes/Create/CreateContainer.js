import React, { useState, createContext, useContext } from "react";
import CreateView from "./CreateView";

export const SurveyCreateContext = createContext();
export default () => {
    //새 질문 버튼을 눌렀는지
    const [newSurveyForm, setNewSurveyForm] = useState(false);

    //타켓설정 페이지인지 설문 작성 페이지인지
    const action = location.pathname.split('/')[3];
    return (
        <SurveyCreateContext.Provider value={{
            newSurveyForm,
            setNewSurveyForm,
            action
        }}>
            <CreateView/>
        </SurveyCreateContext.Provider>
    );
}