import React from 'react'
import { Body, Logo, NameStyle, ScreenContainerHeader, TextoFinal } from '../../styles/globals'
import LogoSena from '../../assets/Logo_Sena.png'
import { NumerosdaSorte } from '../../components/NumerosDaSorte'
import BasicSelect from '../../components/BasicSelect'
import { Concursos } from '../../components/Concursos'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'




const MegaSena = () => {
    const dataLoterias = useRequestData(`${BASE_URL}/loterias`)
    const dataConcursos = useRequestData(`${BASE_URL}/loterias-concursos`) 

    

    var loteria = dataLoterias?.find(obj => {
        return obj.nome === 'mega-sena';
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
            <Logo src={LogoSena} alt=''/>
            <NameStyle>{loteria?.nome.toUpperCase()}</NameStyle>
            <Concursos concursoId={concurso?.concursoId} diaConcurso={date} />
        </ScreenContainerHeader>
        <Body before={''}>
            <NumerosdaSorte concurso={dataConcurso} />
            <TextoFinal>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextoFinal>
        </Body>
        </>
    )
}

export default MegaSena