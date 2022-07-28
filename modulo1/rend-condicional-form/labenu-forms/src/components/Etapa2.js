import React, { useState } from "react";


const Etapa2 = () => {
    return(
        <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <form>
                <label for="curso">5. Qual curso?</label><br/><br/>
                <input type="texto" id="curso" name="curso"/><br/><br/>
                <label for="unidade"> 6. Qual a unidade de ensino?</label><br/><br/>
                <input type="texto" id="unidade" name="unidade"/><br/><br/>
            </form>
        </div>
    )
}

export { Etapa2 }