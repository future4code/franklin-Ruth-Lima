import React from "react";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls"
import ActionAreaCard from "../../components/header/CardDeReceitas/CardDeReceitas";
import {ListaDeReceitasContainer} from './styled'
import { useEffect, useState } from "react";
 import axios from 'axios'

const ListaDeReceitas = () => {

    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const useRequestData = (initialData, url) => {
        const [data, setData] = useState(initialData)
   
        useEffect(() => {
            axios.get(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
                alert('Ocorreu um erro, tente novamente')
            })
        }, [url])
        return (data)
    }
    
    const CardDeReceita = recipes.map((recipe) => {
        return (
            <ActionAreaCard
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => null}
            />
        )
    }) 

    return(
        <ListaDeReceitasContainer>
            {CardDeReceita}
        </ListaDeReceitasContainer>
        
        
    )
}

export {ListaDeReceitas}