import { useState, useEffect } from "react"
export const ContactPage = ()=> {

   const [isMobile, setIsMobile] = useState(false);

    const hacerClick = (event)=>{
        console.log("hiciste click", event)
    }
  

    useEffect(()=>{
        const verificarResolucion = ()=> {
            console.log(window.innerWidth);
            if (window.innerWidth<320) {
                setIsMobile(true) 
            } 
                else {
                setIsMobile(false)
            }
        }
        verificarResolucion();
        window.addEventListener('load', verificarResolucion)
        return()=>{
            window.removeEventListener('load', verificarResolucion)
        }

    },[])

    return(
        <div style={{background: "pink", height: "20em" }}>
            <h3 onClick={hacerClick}>Referencia a una funcion</h3>

            
               { isMobile === true ? <p>soy un movil</p> : <p>Soy una laptop</p> }
            

        </div>
    )
}   