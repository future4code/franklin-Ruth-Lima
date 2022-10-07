import React from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";



export const Concursos = (props) => {
    const data = useRequestData(`${BASE_URL}/loterias-concursos`)

    const Concurso = data.slice(props, props)
    
    return(
        <>
        <p>CONCURSO N° {Concurso.concursoId}</p>
        </>
    )
}