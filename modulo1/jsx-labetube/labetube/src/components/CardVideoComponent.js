import React from 'react'

function CardVideoComponent (props) {
    return (
        <div className="box-pagina-principal media1" onClick={props.reproduzVideo}>
             <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{props.titulo}</h4>
        </div>
    )
}

export { CardVideoComponent }