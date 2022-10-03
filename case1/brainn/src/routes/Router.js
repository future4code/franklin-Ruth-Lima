import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSorte'
import LotoFacil from '../pages/LotoFacil/LotoFacil'
import LotoMania from '../pages/LotoMania/LotoMania'
import MegaSena from '../pages/MegaSena/MegaSena'
import Quina from '../pages/Quina/Quina'
import TimeMania from '../pages/TimeMania/TimeMania'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<MegaSena />}/>
                <Route path='/quina' element = {<Quina />}/>
                <Route path='/loto-facil' element = {<LotoFacil />}/>
                <Route path='/loto-mania' element = {<LotoMania />}/>
                <Route path='/time-mania' element = {<TimeMania />}/>
                <Route path='/dia-de-sorte' element = {<DiaDeSorte />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router