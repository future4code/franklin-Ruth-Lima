import React from 'react'
import { Body, BoxSelect, Logo, NameStyle, ScreenContainerHeader, TextoFinal } from '../styles/globals'
import LogoSena from '../assets/Logo_Sena.png'
import { NumerosdaSorte } from '../components/NumerosDaSorte'
import { Concursos } from '../components/Concursos'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'



const Loteria = () => {
    const dataLoterias = useRequestData(`${BASE_URL}/loterias`)
    const dataConcursos = useRequestData(`${BASE_URL}/loterias-concursos`) 

    const [nomeloteria, setNomeLoteria] = useState('mega-sena')
    const [placeholder, setPlaceholder] = useState('0');

    var loteria = dataLoterias?.find(obj => {
        return obj.nome === nomeloteria;
      });
    
    var concurso = dataConcursos?.find(obj => {
        return obj.loteriaId === loteria?.id;
    });

    const handleChange = (event) => {
        setPlaceholder(event.target.value);
      };

    const dataConcurso = useRequestData(`${BASE_URL}/concursos/${concurso?.concursoId}`)

    const date = new Date(dataConcurso?.data) 

    return(
        <>
        <ScreenContainerHeader category={loteria?.nome}>
        <BoxSelect>
      <Box>
        <FormControl fullWidth >
          <Select
          sx={{
            borderColor: 'white',
            backgroundColor:'white', 
            borderRadius: 2
          }}
            id="demo-simple-select"
            onChange={handleChange}
            value= {placeholder}
          >
            {dataLoterias?.map((loteria) => {
              return( 
                <MenuItem key={loteria.id} value={loteria.id} onClick={() => setNomeLoteria(loteria.nome)}>{loteria.nome.toUpperCase()}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
    </BoxSelect>
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

export default Loteria