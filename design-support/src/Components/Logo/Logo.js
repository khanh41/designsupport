import React from 'react';
import designIdea from '../../static/logo.png';
import './Logo.css'

const logo = (props) =>{
    return (
        <div className="Logos" style={{height: props.height}}>
            <img src={designIdea} alt="My Burger logo"></img>
        </div>
    );
}

export default logo;