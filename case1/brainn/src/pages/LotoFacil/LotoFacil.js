import React from 'react'
import logoLotoFacil from '../../assets/logo-lotofacil.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const LotoFacil = () => {
    return(
        <>
        <ScreenContainerHeader category='LotoFacil'>
            <BasicSelect/>
            <Logo src={logoLotoFacil} alt=''/>
            <NameStyle>LOTOFACIL</NameStyle>
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte/>
        </Body>
        </>
    )
}

export default LotoFacil