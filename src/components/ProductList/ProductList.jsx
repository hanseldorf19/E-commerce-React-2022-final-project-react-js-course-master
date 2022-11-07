import {Product} from '../Product/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css'
import React from 'react';

export const ProductList = ({items})=>{ 

return(
    <div className='w-75 girdPosition'>
        
        <div className='productsGird  d-flex flex-row mt-2 p-1 mx-2'>
        
       
            {
               
                
                items.map(producto=>(<Product key={producto.id} item={producto}/>))

            }
       

        </div>
    </div>
)

}

