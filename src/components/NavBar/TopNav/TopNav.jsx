import './TopNav.css'
import React from 'react'
import { Link } from 'react-router-dom'
export const TopBar = ()=>{
    return( 
        <div className="topNavigation">
            <ul>
                <li href="#">Blog</li>
                <li><Link to="/contacto">Contacto</Link></li>
                
                <li href="#">Entrar</li>
            </ul>
        </div>
    )
}