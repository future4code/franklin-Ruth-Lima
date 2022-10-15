
import { Request, Response } from 'express'
import {connection} from '../data/connection' 
import {IdGenerator} from '../services/IdGenerator'
import { User } from '../classes/User'


export default async function createUser (req: Request, res: Response): Promise<void> {
    const id: string = new IdGenerator().generateId()

    try{
       const user =  new User(id, req.body.name, req.body.last_name, req.body.participation)
        await connection("tb_User").insert(user)
        res.status(201).send("Sucess!")
    }catch(error){
        res.status(400).send({message:'Bad request'})
    }
}