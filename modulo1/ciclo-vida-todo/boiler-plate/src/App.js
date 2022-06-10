import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([{
    id: Date.now(),
    texto: 'Texto da tarefa',
    completa: false
  },
{
    id: Math.random(),
    texto: 'Texto da segunda tarefa',
    completa: true
}]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("completas", "pendentes")
    
  useEffect(() => {
    criaTarefa(); 
    const storedTarefa = localStorage.setItem("tarefas")
    },
    []
  );

  useEffect(() => { 
    selectTarefa()
    const storedTarefa = localStorage.getItem("tarefas")
  }
   ,
    [setTarefa]
 );

  onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  criaTarefa = () => {
    localStorage.setItem("tarefas", tarefas)
    const novaTarefa = {
      id: Date.now(),
      texto: {tarefas},
      completa: false
    }

    const novaListaDeTarefas = [...tarefas, novaTarefa]
    setTarefa({tarefas: novaListaDeTarefas})
  }

  selectTarefa = (id) => {
    const storedTarefa = localStorage.getItem("tarefas")
    const alteraTarefa = tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          tarefa: !tarefa.id
        }
        return novaTarefa
      }
    })
  }

  onChangeFilter = (event) => {
    setFiltro(event.target.value)
  }

 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }


export default App
