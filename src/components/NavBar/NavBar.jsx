import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenLogo from '../../assets/logo-mejor-horchata.png'
import { CardWidget } from '../CardWidget/CardWidjet';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ()=>{
    const categories=[{url:"horchatas", name:"Horchatas"}, {url:"fartons", name:"Fartons"},
    {url:"chufadelight", name:"Chufa Delights"}, {url:"frutossecos", name:"Frutos Secos"},
    {url:"bebidas-vegetales", name:"Bebidas Vegetales"}, {url:"cacaoychoco", name:"Cacao y Choco"},
    {url:"coco", name:"Coco"},{url:"mas-productos", name:"..."}
] 
    return( 
        <nav className='navigation '>
            <Link to="/"><img src={ImagenLogo} className='logoImg' alt="Mejor Horchata"></img></Link>
            <ul className='list mt-4 pt-1'>
                
                {
                 categories.map(category=>{
                    return(
                    <li><NavLink to={`/category/${category.url}`}>{category.name}</NavLink></li>
                    )
                })

                 }
                  

            </ul>
            <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} to='/cart'>
            <CardWidget/>
            </NavLink>
        </nav>
    )
}