import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
    display: flex;
    height: 120vw;
`

const NomeUsuario = styled.h3`
    margin-right: 15px;
`
const MensagemUsuario = styled.p`
    margin-top: 23px;
`


function MessageList () {
    
    return(
        <MessageContainer> 
            <NomeUsuario></NomeUsuario>
            <MensagemUsuario></MensagemUsuario>
        </MessageContainer>
    )
  
}

export { MessageList }