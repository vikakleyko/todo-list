import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to='/' style={linkStyle}>Home</Link> |
            <Link to='/about' style={linkStyle}>About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
}

const headerStyle = {
    background: 'rgb(36, 37, 37)',
    color: 'white',
    textAlign: 'center',
    padding: '5px 10px',
}

export default Header
