import React from 'react'
import { LogoQuina } from './styled'
import logoQuina from '../../assets/logo-quina.png'
import { ScreenContainerHeader } from '../../styles/globals'

const Quina = () => {
    return(
        <ScreenContainerHeader category='Quina'>
            <LogoQuina src={logoQuina} alt=''/>
            <p>Quina</p>
        </ScreenContainerHeader>
    )
}

export default Quina