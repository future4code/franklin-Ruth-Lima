import React from 'react'
import logoTimeMania from '../../assets/Timemania.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const TimeMania = () => {
    return(
        <>
        <ScreenContainerHeader category='TimeMania'>
            <BasicSelect/>
            <Logo src={logoTimeMania} alt=''/>
            <NameStyle>TIMEMANIA</NameStyle>
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte/>
        </Body>
        </>
    )
}

export default TimeMania