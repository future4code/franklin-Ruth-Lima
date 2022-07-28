import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const useProtectedPage = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        const navigate = useNavigate

        if(token === null) {
            navigate('/login')
        }
    } , [])
    
}


function TripDetailsPage() {

    useProtectedPage()
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/trip/C4hojfMk0L2i6yI0K3ls', {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log('deu erro: ',error.response)
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
