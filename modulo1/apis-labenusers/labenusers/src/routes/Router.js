import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastroUsuario } from "../components/CadastroUsuario";
import { ListaDeUsuarios } from "../components/ListaDeUsuarios";


function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CadastroUsuario/>}/>
                <Route path="/lista" element={<ListaDeUsuarios/>}/>
            </Routes>
        </BrowserRouter>
    )
	
}

export {Router}