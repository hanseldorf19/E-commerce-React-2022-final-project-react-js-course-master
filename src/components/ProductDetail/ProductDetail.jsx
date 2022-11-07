import './ProductDetail.css';
import '../../App.css'
import React from 'react';
import { useContext } from 'react';
import { ItemCounter } from '../itemCounter/itemCounter';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';



export const ProductDetail = ({item})=> {

    const [contador, setContador] = useState(0)
    const {addProduct} = useContext(CartContext)
   
    const agregarProducto = (quantity)=>{
        addProduct(item,quantity)
        setContador(quantity)
        console.log(quantity)
    }

    return(
        <div className="d-flex flex-row">
            <div className="ProductContainer">
            
                <div className='Product'>
                <h3 className='mt-5'>{item.title}</h3>
                    <img className='imgLarge rounded' src={item.picUrlLarge} alt={item.title}/>
                        <p className='descripContainer'>{item.descripcion}</p>
                </div>
                <div>
                    
                <h5 className='mt-5 text-white bg-dark rounded p-2'>{item.price} €</h5>

                    <div className='mt-5'>

                        <ItemCounter initial={1} stock={5} onAdd={agregarProducto} />
                
                        {
                            contador >= 1 ? <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} to='/cart'>
                                <button className='btn btn-dark'>Terminar Compra</button></NavLink> : ''
                        }
                    
                    </div>
                </div>
            </div>
            
        </div>
            

    )
}

