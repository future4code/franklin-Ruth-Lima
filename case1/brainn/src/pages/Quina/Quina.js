import React from 'react'
import logoQuina from '../../assets/logo-quina.png'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const Quina = () => {
    return(
        <ScreenContainerHeader category='Quina'>
            <Logo src={logoQuina} alt=''/>
            <NameStyle>QUINA</NameStyle>
        </ScreenContainerHeader>
    )
}

export default Quina