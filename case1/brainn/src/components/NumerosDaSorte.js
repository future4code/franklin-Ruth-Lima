import React from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { NumeroContainer, NumeroStyle } from "../styles/globals";



export const NumerosdaSorte = () => {
    
    const data = useRequestData(`${BASE_URL}/concursos/2359`)

    return(
        <>
           {data?.numeros.map((numero) => {
            return (<NumeroContainer>
                        <NumeroStyle>
                            {numero}
                        </NumeroStyle>
                    </NumeroContainer>)
           })}
        </>
    )
    
}

