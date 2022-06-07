import React, { useState } from "react";


const Etapa3 = () => {
    return(
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <form>
                <label for="curso">5. Por que você não terminou um curso de graduação?</label><br/><br/>
                <input type="texto" id="curso" name="curso"/><br/><br/>
                <label for="unidade"> 6. Você fez algum curso complementar?</label><br/><br/>
                <select name="cursoComplementar" id="cursoComplementar">
                    <option value="escolaridade">nenhum</option>
                    <option value="escolaridade">Curso técnico</option>
                    <option value="escolaridade">Curso de inglês</option>
                </select><br/><br/>
            </form>
        </div>
    )
}

export { Etapa3 }