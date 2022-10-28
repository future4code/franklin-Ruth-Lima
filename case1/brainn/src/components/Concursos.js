import React from "react";
import { ConcursoStyle, DataConcurso } from "../styles/globals";


export const Concursos = (props) => {

    return(
        <>
        <ConcursoStyle>CONCURSO N° {props.concursoId}<DataConcurso> - {props.diaConcurso?.toLocaleDateString()}</DataConcurso></ConcursoStyle>     
        </>
    )
}