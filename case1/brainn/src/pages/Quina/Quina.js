import React from 'react'
import logoQuina from '../../assets/logo-quina.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'
import { Concursos } from '../../components/Concursos'

const Quina = () => {
    
    return(
        <>
        <ScreenContainerHeader category='Quina'>
            <BasicSelect/>
            <Logo src={logoQuina} alt=''/>
            <NameStyle>QUINA</NameStyle>
            <Concursos props={1}/>
        </ScreenContainerHeader>
         <Body before={''}>
         <NumerosdaSorte/>
     </Body>
     </>
    )
}

export default Quina