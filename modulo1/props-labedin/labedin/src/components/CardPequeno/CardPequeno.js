import React from "react";
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="container-mail">
            <img src={props.imagem}/>
                <p>{props.Email}</p>
            <div className="container-address">
            
                <p>{props.Endereço}</p>
            </div>
        </div>
    );
}

export { CardPequeno }