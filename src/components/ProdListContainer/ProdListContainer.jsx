import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ProductList } from '../ProductList/ProductList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


//firebase
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/firebase'


  // Productos
export const ProdListContainer = ()=> {

  const [loader, setLoader] = useState(true);
    
  const [productos, setProductos] = useState([]);

  

// Obtener docs - Conexión DB - Firebase + Filtros direct db

const { categoryId } = useParams();

useEffect(()=>{
    const getData = async()=>{
    let queryRef = '';

    if (categoryId) {
        queryRef = query(collection(db, "items"), where('categoria','==', categoryId));
    } else {
        queryRef = query(collection(db, "items"));
    }
     
     const response = await getDocs(queryRef);
     
     const documents = response.docs;
 
     const results = documents.map(elemento=>{
        return({
            ...elemento.data(),
            id: elemento.id,
        })
        
    });
    console.log('results', results);
    setProductos(results);
    setLoader(false);
}

getData();
},[categoryId])

    return (
        
        <div>
            <div className='text-center mt-5'>
                <div>
            { loader ? <div className="lds-heart centrar mx-5 mt-5"><div className='centrar' ></div></div> :
                <ProductList items={productos}/>
                }
                </div>
            </div> 
        </div>
        
        
    )
}