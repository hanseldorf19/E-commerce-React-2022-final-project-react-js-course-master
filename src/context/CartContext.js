import React, {useState, createContext} from "react"


export const CartContext = createContext()

export const CartProvider = ({children})=>{

    const [prodCarrito, setProdCarrito] = useState([]);
    
    
    const isInCart = (id)=>{
        
        const prodExist = prodCarrito.some((elemento)=>elemento.id === id);
       
        return prodExist;
    }
    
    const addProduct = (item, quantity)=>{
        const productosCartCopy = [...prodCarrito];
        
        const newProduct= {
            ...item, 
            quantity: quantity,
            quantityPrice: item.price * quantity,
            };
       
        if(isInCart(item.id)) {
            const posProduct = productosCartCopy.findIndex((elemento)=> elemento.id === item.id)
            productosCartCopy[posProduct].quantity += quantity;
            productosCartCopy[posProduct].quantityPrice = productosCartCopy[posProduct].quantity * 
            productosCartCopy[posProduct].price;

            setProdCarrito(productosCartCopy);
        } else {
        
         
        productosCartCopy.push(newProduct)
        setProdCarrito(productosCartCopy)
        }
      
    
    }

    const getTotalPrice = ()=>{
      

        const precioTotal = prodCarrito.reduce((acc,curr)=>acc + curr.quantityPrice,0)
        
        return precioTotal;
    }

    const getTotalProducts = ()=>{
        const totalProducts = prodCarrito.reduce((acc, curr)=>acc + curr.quantity,0)
        return totalProducts;
    }

    const removeProduct = (id)=>{
        const newProducts = prodCarrito.filter((elemento)=>elemento.id !== id)
        setProdCarrito(newProducts)

    }

    const clear = () => {
        setProdCarrito([])
    }

    return(

        <CartContext.Provider value={{prodCarrito, addProduct, getTotalPrice, getTotalProducts, removeProduct, clear}}>
            {children} 
        </CartContext.Provider>

    )
}