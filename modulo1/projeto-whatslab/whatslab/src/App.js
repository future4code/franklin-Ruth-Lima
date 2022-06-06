import { useState } from 'react';
import './reset.css';
import styled from 'styled-components';
import arrowBlue from './arrowBlue.png';


const MainContainer = styled.div`
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:127vw;
    background-color: rgb(204, 255, 204);
  }
`

const EstiloCaixaMensagens = styled.div`
  background: rgb(255, 204, 153);
  margin: 10px;
  border-radius: 5px;
`

const CampoInput = styled.div`
  margin-left: 20px;
  position: fixed;
  margin-top: 470px;
 
`
const CampoNome = styled.input`
margin-right: 5px;
width: 70px;
height: 20px;
margin-top: 10px;
border-radius: 5px;
border-color: rgb(102, 255, 255);
`
const CampoTexto = styled.input`
border-radius: 5px;
margin-right: 5px;
width: 240px;
height: 20px;
border-color: rgb(102, 255, 255);

`
const ImageArrow = styled.img`
width: 16px;
hight: 16px;
`
const ImagemButton = styled.button`
text-decoration: none;
border: none;
background: none;
`

function App() {

  const [inputNome, setInputNome] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')
  const [inputId, setInputId] = useState('')
  const [mensagem, setMensagem] = useState([
      {
        id: 1,
        nome: " ",
        mensagem: " "
      }
    ])

    const handleInputNome = (event) => {
      setInputNome(event.target.value)
    }

    const handleInputMensagem = (event) => {
      setInputMensagem(event.target.value)
    }

    const adicionaTexto = () => {
      const novasMensagens = { id : inputId, nome: inputNome, mensagem: inputMensagem }
      const novaMensagem = [...mensagem];
      novaMensagem.push(novasMensagens)
      setMensagem(novaMensagem);
    }
    
    const mensagensEnviadas = mensagem.map((mensagem) => {
      return <div>
        <h3 key={mensagem.id}><p>{mensagem.nome}</p><p>{mensagem.mensagem}</p></h3>
      </div>
    })

  /*const limparCampos = () => {
    setInputNome('')
    setInputMensagem('')
   }*/

  return (
    
    <MainContainer>
      <EstiloCaixaMensagens>
        {mensagensEnviadas}
      </EstiloCaixaMensagens>
      <CampoInput>
        <CampoNome value={inputNome} onChange={handleInputNome} placeholder='nome'/>
        <CampoTexto value={inputMensagem} onChange={handleInputMensagem} placeholder='mensagem'/>
        <ImagemButton onClick={adicionaTexto}><ImageArrow src={arrowBlue}/></ImagemButton>
      </CampoInput>
    </MainContainer >
 
  );
}

export default App;
