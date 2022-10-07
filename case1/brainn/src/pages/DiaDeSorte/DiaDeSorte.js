import React from 'react'
import logoDiaDeSorte from '../../assets/logo-dia-de-sorte.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const DiaDeSorte = () => {
    return(
        <>
            <ScreenContainerHeader category='DiaDeSorte'>
                <BasicSelect/>
                <Logo src={logoDiaDeSorte} alt=''/>
                <NameStyle>DIA DE SORTE</NameStyle>
            </ScreenContainerHeader>
            <Body before={''}>
                <NumerosdaSorte/>
            </Body>
        </>
    )
}

export default DiaDeSorte