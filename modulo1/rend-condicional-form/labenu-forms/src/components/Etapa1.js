import React, { useState } from "react";


const Etapa1 = () => {
    return(
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <form>
                <label for="fnome">1. Qual o seu nome?</label><br/><br/>
                <input type="texto" id="fnome" name="fnome"/><br/><br/>
                <label for="idade">2. Qual sua idade?</label><br/><br/>
                <input type="texto" id="idade" name="idade"/><br/><br/>
                <label for="email">3. Qual seu email?</label><br/><br/>
                <input type="text" id="email" name="email"/><br/><br/>
                <label for="email">4. Qual a sua escolaridade?</label><br/><br/>
                <select name="escolaridade" id="escolaridade">
                    <option value="escolaridade">Ensino Médio Incompleto</option>
                    <option value="escolaridade">Ensino Médio Completo</option>
                    <option value="escolaridade">Ensino Superior Incompleto</option>
                    <option value="escolaridade">Ensino Superior Completo</option>
                </select><br/><br/>
            </form>
        </div>
    )
}

export { Etapa1 }