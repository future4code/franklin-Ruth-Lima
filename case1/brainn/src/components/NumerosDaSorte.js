import React from "react";
import { NumeroContainer, NumeroStyle, NumerosContainer } from "../styles/globals";



export const NumerosdaSorte = (props) => {

    return(
        <>
           <NumerosContainer>        
           {props.concurso?.numeros.map((numero) => {
            return (
                    <NumeroContainer>
                        <NumeroStyle>
                            {numero}
                        </NumeroStyle>
                    </NumeroContainer>)
           })}
           </NumerosContainer>
        </>
    )
    
}

