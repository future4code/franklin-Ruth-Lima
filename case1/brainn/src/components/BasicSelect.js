import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMegaSena, goToQuina, goToTimeMania } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';


export default function BasicSelect() {
 const navigate = useNavigate()
  const data = useRequestData(`${BASE_URL}/loterias`)
  
  const navigatePages = (id) => {
    if(id === 0) {
      return (() => goToMegaSena(navigate))
    }
    if(id === 1) {
      return (() => goToQuina(navigate))
    }
    if(id === 2) {
      return (() => goToLotoFacil(navigate))
    }
    if(id === 3) {
      return (() => goToLotoMania(navigate))
    }
    if(id === 4) {
      return (() => goToTimeMania(navigate))
    }
    if(id === 5) {
      return (() => goToDiaDeSorte(navigate))
    }
  }

  return (
    <Box sx={{
      position: 'absolute',
      width:'233px',
      height:'53px',
      left: '27.7%',
      top: '6.97%',
      bottom: '87.38%'
        }}>
      <FormControl fullWidth >
        <Select
        sx={{
          borderColor: 'white',
          backgroundColor:'white', 
          borderRadius: 2
        }}
          id="demo-simple-select"
          placeholder='mega-sena'
         
        >
          {data?.map((loteria) => {
            return( 
              <MenuItem key={loteria.id} onClick={navigatePages(loteria.id)}>{loteria.nome.toUpperCase()}</MenuItem>
            )
          })}
        
        </Select>
      </FormControl>
    </Box>
  );
}
