import React from 'react'
import { LogoDiaDeSorte } from './styled'
import logoDiaDeSorte from '../../assets/logo-dia-de-sorte.png'
import { ScreenContainerHeader } from '../../styles/globals'

const DiaDeSorte = () => {
    return(
        <ScreenContainerHeader category='DiaDeSorte'>
            <LogoDiaDeSorte src={logoDiaDeSorte} alt=''/>
            <p>DiaDeSorte</p>
        </ScreenContainerHeader>
    )
}

export default DiaDeSorte