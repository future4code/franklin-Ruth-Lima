import React from "react";
import { NumeroContainer, NumeroStyle, NumerosContainer } from "../styles/globals";



export const NumerosdaSorte = (props) => {
    var key = 0

    return(
        <>
           <NumerosContainer>        
           {props.concurso?.numeros.map((numero) => {
            return (
                    <NumeroContainer key={key += 1}>
                        <NumeroStyle>
                            {numero}
                        </NumeroStyle>
                    </NumeroContainer>)
           })}
           </NumerosContainer>
        </>
    )
    
}

