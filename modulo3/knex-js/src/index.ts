import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

// funcao que buscar actor by id

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
        res.status(500).send("Unexpected error")
  }
}) 

 // funcao que busca ator pelo name

app.get("/actor/:name", async (req: Request, res: Response) => {
  const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
    return result[0][0]
  }

  try {
   const name = req.params.name
    console.log(await getActorByName(name))
    res.send(await getActorByName(name))
  } catch (error) {
    console.log(error)
  }
})

// funcao que criar um novo ator

app.post("/actor", async (req: Request, res: Response) => {
  try {
  await connection.raw(`
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
  ${Date.now().toString()},
  "${req.body.name}",
  ${req.body.salary},
  "${req.body.birth_date}",
  "${req.body.gender}"
  )
  `)
  
  res.status(201).send("Success!")
  } catch (error) {
  console.log(error)
  res.status(500).send("An unexpected error occurred")
  }
  })

  // funcao que busca ator pelo gender

  app.get("/actor/:gender", async (req: Request, res: Response) => {
    const countActors = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = "${gender}"
      `);
      const resultado = result[0][0];
      return resultado;
    }

    try {
      const gender = req.params.gender
      console.log(await countActors(gender))
     // res.send(await countActors(gender))

  } catch (error) {
    console.log(error)
    }
  })

  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

// funcao altera o salario do actor com o id selecionado 

  app.put("/actor/salary/:id",  async (req: Request, res: Response) => {
    
   try {
      await connection("Actor")
      .update({
        salary: req.body.salary
      })
      .where({
        id: req.params.id
      })
    
    res.send("Sucess!")

  } catch (error) {
    console.log(error)
    }
  })

  // funcao que deleta actor by id
  
  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      const linhasDeletadas = await connection("Actor")
      .delete()
      .where({
        id: req.params.id
      })

      if(linhasDeletadas === 0) {
        throw new Error()
      }

      res.send("Success!") 
    }
    catch (error) {
      console.log(error)
      res.status(500).send("An unexpected error occurred")
    }
  })

