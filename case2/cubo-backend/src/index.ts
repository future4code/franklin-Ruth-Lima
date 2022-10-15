import { app } from './app';
import createUser from "./endpoints/createUser";
import { IdGenerator } from "./services/IdGenerator";
import getAllUsers from '../src/endpoints/getAllUsers';

const generator = new IdGenerator().generateId()
console.log(generator)

app.get("/users", getAllUsers)
app.post("/users",(req, res) => {
    createUser(req, res)
})