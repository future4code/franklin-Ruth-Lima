import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

 const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            navigate('/')
        } 
    }, [navigate])
}

export default useUnprotectedPage