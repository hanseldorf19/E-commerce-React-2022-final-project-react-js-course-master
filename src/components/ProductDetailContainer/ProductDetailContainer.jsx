
import './ProductDetailContainer.css'
import React from 'react'
import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ProductDetail } from '../ProductDetail/ProductDetail'



//firebase
import {db} from "../../utils/firebase";
import {doc,getDoc} from "firebase/firestore";

// /item/id
export const ProductDetailContainer = ()=>{

    const [loader, setLoader] = useState(true);

    const {id} = useParams();
    const [itemProduct, setItemProduct] = useState({});
 
    useEffect(()=>{
        const getProducto = async()=>{
           
            const queryRef = doc(db,"items",id);
          
            const response = await getDoc(queryRef);
            console.log(response)
            const newDoc = {
                ...response.data(),
                id:response.id
            }
        
            setItemProduct(newDoc)
            setLoader(false);
        }
        getProducto();
    },[id])

    return(
        <>
        { loader ? <div class="lds-heart"><div></div></div> :
        <div className="item-detail-container">
            <ProductDetail item={itemProduct}/>
        </div>
        }
        </>
    )
}


















