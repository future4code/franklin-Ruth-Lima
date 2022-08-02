import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { LoginPage } from "../pages/Login/Login";
import { ListaDeReceitas } from '../pages/ListaDeReceitas/ListaDeReceitas';
import { DetalhesDaReceita } from "../pages/DetalheDaReceita/DetalheDaReceita";
import { AdicionarReceita } from "../pages/AdicionarReceitas/AdicionarReceita";

const Router = () => {
    return(
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/lista/receitas" element={<ListaDeReceitas/>}/>
                <Route path="/detalhes/:id" element={<DetalhesDaReceita/>}/>
                <Route path="/adicionar/receita" element={<AdicionarReceita/>}/>
            </Routes>
    )
}

export {Router}