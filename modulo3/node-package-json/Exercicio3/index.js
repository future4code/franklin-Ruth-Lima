//Exercicio 3

const listaDeTarefas = () => {
    const tarefas = [
      "estudar",
      "fazer o exercicio",
      "comer"
    ]

    tarefas.map((tarefa) => {
        const novaTarefa = [...tarefas];
        novaTarefa.push(process.argv[2]);
        console.log("Tarefa adicionada com sucesso!")
        console.log(tarefa)
    })
}

console.log(listaDeTarefas())