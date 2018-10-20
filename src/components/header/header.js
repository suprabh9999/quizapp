import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import TechObj from '../topics.json';
const header = ()=>{
    const technologies = Object.keys(TechObj).map((tech, index)=>(
        <li key={index} className="flexItem"><Link to={`/${tech}`}>{tech.toUpperCase()}</Link></li>
    ));
    return(
            <div>
                <ul className="headerContainer">
                    { technologies }
                </ul>
               
            </div>
        // </Router>
    );   
}
export default header;