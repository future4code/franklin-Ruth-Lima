import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMegaSena, goToQuina, goToTimeMania } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { BoxSelect } from '../styles/globals';


export default function BasicSelect(props) {
 const navigate = useNavigate()
  
  
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
            placeholder='mega-sena'
          >
            {props.loterias?.map((loteria) => {
              return( 
                <MenuItem key={loteria.id} onClick={navigatePages(loteria.id)}>{loteria.nome.toUpperCase()}</MenuItem>
              )
            })}
          
          </Select>
        </FormControl>
      </Box>
    </BoxSelect>
  );
}
