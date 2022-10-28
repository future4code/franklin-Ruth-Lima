import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = ( url) => {
    const [data, setData] = useState()

    useEffect(() => {
      const fetchData = async () => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })}
    
        fetchData();
    },[url])

    return data
}

export default useRequestData