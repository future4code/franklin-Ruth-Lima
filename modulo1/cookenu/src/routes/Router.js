import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Login } from "../pages/Login/Login";
import { ListaDeReceitas } from '../pages/ListaDeReceitas/ListaDeReceitas';
import { DetalhesDaReceita } from "../pages/DetalheDaReceita/DetalheDaReceita";
import { AdicionarReceita } from "../pages/AdicionarReceitas/AdicionarReceita";
import Header from "../components/header/header";

const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/lista/receitas" element={<ListaDeReceitas/>}/>
                <Route path="/detalhes/:id" element={<DetalhesDaReceita/>}/>
                <Route path="/adicionar/receita" element={<AdicionarReceita/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {Router}