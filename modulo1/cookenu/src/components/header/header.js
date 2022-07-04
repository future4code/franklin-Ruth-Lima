import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from './styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }

    const handleListaDeReceitas = () => {
        navigate('/lista/receitas')
    }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={handleListaDeReceitas} color="inherit">Cookenu</Button>
          <Button onClick={handleLogin} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header
