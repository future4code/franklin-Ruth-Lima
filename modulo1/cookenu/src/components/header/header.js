import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from "./styled";
import { useNavigate } from 'react-router-dom';

 const Header = () => {
   const navigate = useNavigate()

   const vaParaListaDeReceitas = () => {
      navigate('/lista/receitas')
   }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={vaParaListaDeReceitas} color="inherit">
            Cookenu
          </Button>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header 