import React from 'react'
import logoTimeMania from '../../assets/Timemania.png'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'

const TimeMania = () => {
    return(
        <ScreenContainerHeader category='TimeMania'>
            <Logo src={logoTimeMania} alt=''/>
            <NameStyle>TIMEMANIA</NameStyle>
        </ScreenContainerHeader>
    )
}

export default TimeMania