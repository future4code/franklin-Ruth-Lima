import React from 'react'
import { LogoLotoMania } from './styled'
import logoLotoMania from '../../assets/logo-lotomania.png'
import { ScreenContainerHeader } from '../../styles/globals'

const LotoMania = () => {
    return(
        <ScreenContainerHeader category='LotoMania'>
            <LogoLotoMania src={logoLotoMania} alt=''/>
            <p>Lotomania</p>
        </ScreenContainerHeader>
    )
}

export default LotoMania