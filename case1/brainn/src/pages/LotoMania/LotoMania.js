import React from 'react'
import logoLotoMania from '../../assets/logo-lotomania.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const LotoMania = () => {
    return(
        <>
        <ScreenContainerHeader category='LotoMania'>
            <BasicSelect/>
            <Logo src={logoLotoMania} alt=''/>
            <NameStyle>LOTOMANIA</NameStyle>
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte/>
        </Body>
    </>
    )
}

export default LotoMania