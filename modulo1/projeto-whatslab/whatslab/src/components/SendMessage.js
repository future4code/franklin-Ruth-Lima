import React from "react";
import styled from "styled-components";


const CaixaUsuario = styled.input`
   width: 60px;
   margin-right: 10px;
   margin-left: 15px;
`

const CaixaTexto = styled.input`
    width: 200px;
    margin-right: 5px;
`
function enviar() {
    let usuario = document.querySelector("#usuario")
    let texto = document.querySelector("#texto")

    let usuarioNome = usuario.value;
    let textoMensagem = texto.value;

    console.log(usuarioNome, textoMensagem);

}

function SendMessage () {


    return (
        <div>
            <CaixaUsuario  placeholder="usuário" id = "usuario"/>
            <CaixaTexto placeholder="mensagem" id = "texto"/>
            <input type="submit" onClick={enviar}/>
        </div>

        
    )
}

export { SendMessage }
export { enviar }