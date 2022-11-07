
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CardWidget = ()=>{
    
    const {getTotalProducts} = useContext(CartContext);

    return(
    
    <div>
    <p className='ml-5' ><FontAwesomeIcon icon={faBagShopping} className='ml-5 mr-2 text-white'/>
    <span style={{textDecoration: 'none', fontSize: '0.5em', color: 'black', backgroundColor: 'white', marginLeft: '1em', padding: '0.25em', borderRadius: '5px'}}>{getTotalProducts()}</span>
    </p>
    </div>
)
}