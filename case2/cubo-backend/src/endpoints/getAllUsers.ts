
import { Request, Response } from 'express';
import {connection} from '../data/connection' 

 
export default async function getAllUsers (req: Request, res: Response): Promise<void> {
    try{
        const result = await connection("tb_User")
        res.send(result)
    
    }catch(error)  {
        res.status(400).send({message:'Bad request'})
}
}