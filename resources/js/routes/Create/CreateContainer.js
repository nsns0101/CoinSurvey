import React, { useState, createContext, useContext } from "react";
import CreateView from "./CreateView";

export const SurveyCreateContext = createContext();
export default () => {
    //새 질문 버튼을 눌렀는지
    const [newQuestionForm, setNewQuestionForm] = useState(false);
    return (
        <SurveyCreateContext.Provider value={{
            newQuestionForm,
            setNewQuestionForm
        }}>
            <CreateView/>
        </SurveyCreateContext.Provider>
    );
}