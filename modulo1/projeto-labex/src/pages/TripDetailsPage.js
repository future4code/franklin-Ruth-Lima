import axios from 'axios';
import React, { useEffect } from 'react';

function TripDetailsPage() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/trip/:id', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data.token);
        }).catch((error) => {
            console.log(error.response)
        })
    }, [])

    return(
        //mostrar a list trip que for acessada, os candidatos pendentes e os candidatos aprovados (lista)
        <div>
            <button>Voltar</button>
        </div>
    )
}

export {TripDetailsPage}
