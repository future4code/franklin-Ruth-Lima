import React from "react";
import styled from "styled-components";

const MailContainer = styled.div`
    display: flex;
    width: 40vw;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const Icon = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const AddressContainer = styled.div`
display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`


function CardPequeno (props) {
    return (
        <MailContainer>
            <Icon src={props.imagem}/>
                <p>{props.Email}</p>
            <AddressContainer>
                <p>{props.Endereço}</p>
            </AddressContainer>
        </MailContainer>
    );
}

export { CardPequeno }