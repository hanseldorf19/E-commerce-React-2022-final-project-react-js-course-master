import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './CartContainer.css'
import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CartContainer = ()=>{



     // Muestra Productos
     const value = useContext(CartContext);

     const {prodCarrito, getTotalPrice, getTotalProducts,removeProduct, clear} = value;
     

     // Cupon descuento

     const [newPrice, setNewPrice]= useState(0)

     const [cuponDto, setCuponDto] = useState('');

     const aplicaCupon = (e)=>{
        e.preventDefault(); 
        if (cuponDto === 'Lan022') {

        const priceCuponDto = getTotalPrice() - (getTotalPrice() * 0.05);
        setNewPrice(priceCuponDto)
        console.log(priceCuponDto)
        
        } else if (cuponDto === '') {
            alert('puede introducir un cupon')
            
        } else {

         alert('Este cupon no tiene descuento')
        }
    }

    // Alerta Orden de Compra

    const displayMsg = () => {
    
    const MySwal = withReactContent(Swal)
    
      MySwal.fire({
        html: <div><p>Gracias por su compra</p>
        {compraId && <p>Su compra fue realizada con el numero de orden {compraId}</p>}
        <button className='btn btn-dark' onClick={clear}>Vaciar Carrito</button>
        </div>,
      })

    }

      const [compraId, setCompraId] = useState('');


    // Mandar Orden de Compra


    const SendOrder = (evt)=>{
        evt.preventDefault(); 
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items: prodCarrito,
            total: getTotalPrice()
        }  
        
        // Crear y subir a Firestore
        const queryRef = collection(db,'orders')
      
        addDoc(queryRef,compra).then((resultado)=>{
            setCompraId(resultado.id)
           
        })
        .catch((error) => console.log(error));

        

    }
    

    return(
       
        <div className='CartContainer d-flex bd justify-content-center flex-row '>
            <div className='d-block mx-5'>
            

            {

                prodCarrito.map((producto)=>(
                    <div className='ProductCard'>
                        <div className='innerProd'>
                            <img src={producto.picUrl} alt={producto.title}/>
                            <h3>{producto.title}</h3>
                            <h4>Precio unidad {producto.price} €</h4>
                            <p className='mt-2'>Cantidad: <strong>{producto.quantity}</strong></p>
                            <button className='mt-2 mx-2 btn btn-outline-dark disabled'>{producto.quantity}</button>
                            <button className='mt-2 btn btn-dark' onClick={()=>removeProduct(producto.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            

            }  
            
        
            </div>
       
            
        {

        prodCarrito.length >= 1 ?
            
            <div className='mt-5 mx-5'>
                <p><strong>Precio Total: </strong>{getTotalPrice()} €</p>
                <p><strong>Productos: </strong>{getTotalProducts()}</p>

                <div className='aplicaCupon'>
                    <form className='d-block mx-5 text-center'>
                        <label>Cupón Dto del 5%</label>
                        <input type='text' className='d-block mt-2y' placeholder="Aplica Cupón Dto" onChange={(e)=>setCuponDto(e.target.value)}/>
                        <button type="submit" onClick={aplicaCupon} className=' mt-3 mx-5 btn btn-dark d-block'>Aplicar</button>
                    </form>
                </div>
                <p><strong>Precio Final:</strong></p> 

                    {
                    newPrice > 0 ? 
                    <div><p className='precioTachado'>{getTotalPrice()}</p> <h5 className=''><stong>{newPrice} €</stong></h5>
                    </div> : <h5>{getTotalPrice()} €</h5>
                }

                <h4 className='titFinCompra'><strong>Finalizar Compra</strong></h4>
                <form className='formCompra form-group mt-3 mr-3 text-center' required= "required" onSubmit={SendOrder}>
                    <label>Nombre</label>
                    <input   type='text' className='form-control' placeholder="Nombre"  maxLength="45"/>
                    <label>Apellidos</label>
                    <input   type='text' className='form-control' placeholder="Apellidos"  maxLength="45"/>
                    <label>Dirección</label>
                    <input   type='text' className='form-control' placeholder="Dirección"  maxLength="100" />
                    <label>Codigo Postal</label>
                    <input   type='number' className='form-control' maxLength='5' placeholder="Código Postal"/>
                    <label>Teléfono</label>
                    <input   type='tel' className='form-control' maxLength="11" placeholder="Teléfono"/>
                    <label>Correo</label>
                    <input   type='mail' className='form-control' placeholder="Correo Electrónico"/>
                    <div className='butCenter'>
                        <button className='d-block mt-5 btn btn-dark' type="Submit" onClick={displayMsg}>Comprar</button>
                    </div>
                </form>
                
            </div>

            : <h5 className='mt-5 mx-5 text-center'>No tione productos en el carrito</h5>
        }

        </div>
        
        
    )
}
