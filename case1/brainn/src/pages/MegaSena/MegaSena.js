import React from 'react'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'
import LogoSena from '../../assets/Logo_Sena.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Concursos } from '../../components/Concursos'




const MegaSena = () => {
    return(
        <>
        <ScreenContainerHeader category='MegaSena'>
            <BasicSelect/>
            <Logo src={LogoSena} alt=''/>
            <NameStyle>MEGA-SENA</NameStyle>
            <Concursos/>
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte />
        </Body>
        </>
    )
}

export default MegaSena