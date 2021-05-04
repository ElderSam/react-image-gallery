import React from 'react'

import logo from './logo.svg';
import { ReactComponent as DownCircle } from './chevron-down-circle_1.svg';
import './Header.css';

function Header() {
    return (
        <header className="App-header" id="home">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="links">
                    <a href="#home">HOME</a>
                    <a href="#imagens">IMAGENS</a>
                </div>
            </nav>

            <main>
                <h1>CALL TO ACTION</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsum has been the</p>
            </main>

            <a href="#imagens">
                <DownCircle fill="white" stroke="white" className="chevron-down-circle" />
            </a>
            
        </header>
    )
}

export default Header
