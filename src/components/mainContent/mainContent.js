import React from 'react';
import './mainContent.css';
import questions from '../questions.json';
const mainContent = ()=>{
    const pathNames = window.location.pathname.split('/');
    let ques = null;
    if(pathNames.length>3)  {
        const path1 = pathNames[2];
        const path2 = pathNames[3];
        const questionsArray = questions[path1][path2].questions;
        ques = questionsArray.map((questionObj, index)=>(
            <h3 key={index}>{questionObj.ques}</h3>
        ));
    };
    return(
        <div className="mainContent">
            {ques || 'Please choose a topics from your left.'}
        </div>
    );
};

export default mainContent;