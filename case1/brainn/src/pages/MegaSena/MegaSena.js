import React from 'react'
import { Logo, NameStyle, ScreenContainerHeader } from '../../styles/globals'
import LogoSena from '../../assets/Logo_Sena.png'



const MegaSena = () => {
    return(
        <ScreenContainerHeader category='MegaSena'>
            <Logo src={LogoSena} alt=''/>
            <NameStyle>MEGA-SENA</NameStyle>
        </ScreenContainerHeader>
       
    )
}

export default MegaSena