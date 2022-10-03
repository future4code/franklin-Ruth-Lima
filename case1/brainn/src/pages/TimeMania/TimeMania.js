import React from 'react'
import { LogoTimemania } from './styled'
import logoTimeMania from '../../assets/Timemania.png'
import { ScreenContainerHeader } from '../../styles/globals'

const TimeMania = () => {
    return(
        <ScreenContainerHeader category='TimeMania'>
            <LogoTimemania src={logoTimeMania} alt=''/>
            <p>Timemania</p>
        </ScreenContainerHeader>
    )
}

export default TimeMania