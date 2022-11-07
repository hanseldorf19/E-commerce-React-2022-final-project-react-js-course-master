

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const ItemCounter = ({ initial, stock, onAdd }) => {

    const value = useContext(CartContext)
    console.log('value', value)
    const [counter, setCounter] = useState(parseInt(initial));

    const Add = () => {
        setCounter(counter - 1);
    }

    const Remove = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setCounter(parseInt(initial));
    }, [initial])

    return (
        <div>
            <button disabled={counter <= 1} className=" btn btn-dark mx-1 " onClick={Add}>-</button>
            <h5>{counter}</h5>
            <button disabled={counter >= stock} className=" btn btn-dark mx-1  " onClick={Remove}>+</button>

           <div>
                <button disabled={stock <= 0}  className="agregar btn btn-dark my-2" onClick = {()=>onAdd(counter)}>Agregar al Carrito</button>
            </div>

        </div>
    )
}
