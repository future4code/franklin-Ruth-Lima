import { Navigate } from "react-router-dom"

export const vaParaLogin = () => {
    Navigate('/')
}

export const vaParaCadastro = () => {
    Navigate('/cadastro')
}

export const vaParaListaDeReceitas = () => {
    Navigate('/lista/receitas')
}

export const vaParaDetalheDaReceita = () => {
    Navigate('/detalhes/:id')
}

export const vaParaAdicionarReceita = () => {
    Navigate('/adicionar/receita')
}



