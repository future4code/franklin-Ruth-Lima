import React from 'react'
import logoDiaDeSorte from '../../assets/logo-dia-de-sorte.png'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const DiaDeSorte = () => {
    return(
        <ScreenContainerHeader category='DiaDeSorte'>
            <Logo src={logoDiaDeSorte} alt=''/>
            <NameStyle>DIA DE SORTE</NameStyle>
        </ScreenContainerHeader>
    )
}

export default DiaDeSorte