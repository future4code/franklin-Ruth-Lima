import React from 'react'
import logoLotoMania from '../../assets/logo-lotomania.png'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const LotoMania = () => {
    return(
        <ScreenContainerHeader category='LotoMania'>
            <Logo src={logoLotoMania} alt=''/>
            <NameStyle>LOTOMANIA</NameStyle>
        </ScreenContainerHeader>
    )
}

export default LotoMania