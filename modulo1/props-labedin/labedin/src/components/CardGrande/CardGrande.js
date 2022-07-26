import React from 'react';
import styled from 'styled-components'

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const PhotoRuth = styled.img`
    width: 70px;
    margin-right: 15px;
    border-radius: 50%;
`

const TitleCardGrande = styled.h4`
    margin-bottom: 15px;
`

const Bigcard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <PhotoRuth src={ props.imagem } />
            <Bigcard>
                <TitleCardGrande>{ props.nome }</TitleCardGrande>
                <p>{ props.descricao }</p>
            </Bigcard>
        </BigcardContainer>
    )
}

export default CardGrande;