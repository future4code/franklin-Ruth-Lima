import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loteria from '../pages/Loteria'



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Loteria />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router