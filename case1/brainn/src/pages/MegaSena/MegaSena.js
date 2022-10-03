import React from 'react'
import { NameStyle, ScreenContainerHeader } from '../../styles/globals'
import LogoSena from '../../assets/Logo_Sena.png'



const MegaSena = (props) => {
    return(
        <ScreenContainerHeader category='MegaSena'>
            <img src={LogoSena} alt=''/>
            <NameStyle>MEGA-SENA</NameStyle>
        </ScreenContainerHeader>
       
    )
}

export default MegaSena