import React from 'react'
import { LogoLotofacil} from './styled'
import logoLotoFacil from '../../assets/logo-lotofacil.png'
import { ScreenContainerHeader } from '../../styles/globals'

const LotoFacil = () => {
    return(
        <ScreenContainerHeader category='LotoFacil'>
            <LogoLotofacil src={logoLotoFacil} alt=''/>
            <p>Lotofacil</p>
        </ScreenContainerHeader>
    )
}

export default LotoFacil