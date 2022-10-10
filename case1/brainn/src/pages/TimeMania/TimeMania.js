import React from 'react'
import logoTimeMania from '../../assets/Timemania.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Body, Logo, NameStyle, ScreenContainerHeader, TextoFinal } from '../../styles/globals'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Concursos } from '../../components/Concursos'

const TimeMania = () => {
    const dataLoterias = useRequestData(`${BASE_URL}/loterias`)
    const dataConcursos = useRequestData(`${BASE_URL}/loterias-concursos`)

    var loteria = dataLoterias?.find(obj => {
        return obj.nome === 'timemania';
      });
    
    var concurso = dataConcursos?.find(obj => {
        return obj.loteriaId === loteria?.id;
    });

    const dataConcurso = useRequestData(`${BASE_URL}/concursos/${concurso?.concursoId}`)

    const date = new Date(dataConcurso?.data) 


    return(
        <>
        <ScreenContainerHeader category={loteria?.nome}>
            <BasicSelect loterias={dataLoterias}/>
            <Logo src={logoTimeMania} alt=''/>
            <NameStyle>{loteria?.nome.toUpperCase()}</NameStyle>
            <Concursos concursoId={concurso?.concursoId} diaConcurso={date} />
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte concurso={dataConcurso}/>
            <TextoFinal>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextoFinal>
        </Body>
        </>
    )
}

export default TimeMania