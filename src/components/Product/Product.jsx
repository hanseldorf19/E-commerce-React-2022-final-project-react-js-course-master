import './product.css';
import React from 'react';
import {Link} from 'react-router-dom'
export const Product = ({item})=>{
return(
    <div className="productCard">
        <img className='rounded' src={item.picUrl} alt={item.picUrl}></img>
        <h4>{item.title}</h4>
        <h5>{item.price}</h5>
        <Link to={`/item/${item.id}`}><button className='btn btn-dark'>Ver Detalles</button></Link>
    </div>
)

}

