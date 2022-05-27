import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ruth from './components/CardGrande/ruth.jpg';
import nasa from './components/CardGrande/nasa.jpg';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import mail from './components/CardPequeno/mail.png'
import location from './components/CardPequeno/location.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ruth}
          nome="Ruth" 
          descricao="Oi, eu me chamo Ruth. Sou aluna da Labenu e cheguei aqui através do Desenvolve. Adoro ler livros, dançar e assistir séries e estou iniciando a minha carreira profissional dentro do Grupo Boticário onde coloco em prática aquilo que estou aprendendo."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem={mail} 
        Email="ruth@labenu.com"
        />
        <CardPequeno
        imagem={location}
        Endereço="Rua Ruth Lima"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={nasa} 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
