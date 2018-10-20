import React from 'react';
import './leftNav.css';
import data from '../topics.json';
import { NavLink } from 'react-router-dom';

const leftNav = () =>{
    const pathParam = window.location.pathname.split('/')[1];
    const topics = data[pathParam] ? data[pathParam].topics : [] ;

    const listOfTopics = topics.map((topic,index)=><li title={topic} key={index} className="topic">
        <NavLink style={{color:'white'}}
         to={`/${pathParam}/${topic.split(' ').join('').toLowerCase()}`}>{topic.toUpperCase()}</NavLink></li>);
    return(
            <ul className="leftNavCont">
                { listOfTopics }

            </ul>

    );
};

export default leftNav;