import './App.css';
import { useState } from 'react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final } from './components/Final';

function App() {
  const [etapaState, setEtapaState] = useState(1)
 
  const irParaProximaEtapa = () => {
    setEtapaState(etapaState + 1)
  }
  
  const renderizaEtapa = () => {
    
      switch (etapaState) {
        case 1:
          return(<Etapa1/>)
          break;
        case 2:
          return(<Etapa2/>)
          break;
        case 3:
          return(<Etapa3/>)
          break;
        case 4:
            return(<Final/>)
            break;

            
          default:
            break;
         
      }
    
  }


  return (
    <div className="App">
      {renderizaEtapa()}
      
      {
        etapaState < 4 ? 
        <button onClick={irParaProximaEtapa}>Próxima etapa</button> : " "
        }
    </div>
  );
}

export default App;
