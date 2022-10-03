import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um error, tente novamente")
        })
    },[url])

    return(data)
}

export default useRequestData