import React from 'react';
import './layout.css';
import Header from '../header/header';
import LeftNav from '../leftnav/leftNav';
import MainContent from '../mainContent/mainContent';
const layout = ()=>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <div className="contentArea">
                <div className="leftNav">
                    <LeftNav/>
                </div>
                <div className="mainContent">
                    <MainContent />
                </div>
            </div>
        </div>
    );
};
export default layout;