import React from 'react'
import logoLotoFacil from '../../assets/logo-lotofacil.png'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const LotoFacil = () => {
    return(
        <ScreenContainerHeader category='LotoFacil'>
            <Logo src={logoLotoFacil} alt=''/>
            <NameStyle>LOTOFACIL</NameStyle>
        </ScreenContainerHeader>
    )
}

export default LotoFacil