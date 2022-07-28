import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import img_paulinha from './img/img_paulinha.jpg'
import img_joao from './img/img_joao.jpg'
import img_ana from './img/img_ana.jpg'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={img_paulinha}
            fotoPost={'https://picsum.photos/200/160'}
          />
          <Post
            nomeUsuario={'João_Pedro'}
            fotoUsuario={img_joao}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'AnaBeatriz_35'}
            fotoUsuario={img_ana}
            fotoPost={'https://picsum.photos/200/170'}
          />
  </MainContainer>
)

}


export default App;
