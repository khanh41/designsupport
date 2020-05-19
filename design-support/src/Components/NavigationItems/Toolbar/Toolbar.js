import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';

const toolbar = (props) =>{
    return (
        <header className="Toolbar">
                <Logo></Logo>
            <nav className="DesktopOnly">
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}

export default toolbar;