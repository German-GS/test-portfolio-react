import React from 'react'
import logo from '../images/logo.png'
import "../css/header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <a href="/"><img src={logo} alt="foto" /></a>
                
                <div className="header__nav">
                    <nav>
                    <a href="/contact">Contacto</a>
                    <a href="/#proyectos">Proyectos</a>
                    <a href="https://github.com/German-GS">GitHub</a>
                    </nav>

                </div>

            </div>
            
        </div>
    )
}
