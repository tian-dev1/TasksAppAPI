//Funciones que se ejecutan cuando visitan una ruta en especifico
import {connect} from '../database'

export const getTasks = async (req, res) =>{
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM task')
    res.json(rows)
}

export const getTask = async (req, res) =>{
    const connection = await connect()
    const [rows] = await connection.query("SELECT * FROM task  WHERE id = ?", [req.params.id,])
    res.json(rows[0])
}

export const getTasksCount = async (req, res) =>{
    const connection = await connect()
    const [rows] = await connection.query("SELECT COUNT(*) FROM task")
    res.json(rows[0]["COUNT(*)"])
}

export const saveTask = async (req, res) =>{
    const connection = await connect()
    const [results] = await connection.query("INSERT INTO task(title, description) VALUES (?,?)",[
        req.body.title,
        req.body.description
    ])
    res.json({
        id: results.insertId,
        ...req.body,

    })
}

export const deleteTask = async (req, res) =>{
    const connection = await connect()
    await connection.query("DELETE FROM task WHERE id = ?",[req.params.id])
    res.sendStatus(204)
}

export const updateTask = async (req, res) =>{
    const connection = await connect()
    const results = await connection.query("UPDATE task SET ? WHERE id = ?",[
        req.body,
        req.params.id
    ])
    console.log(results);
    res.sendStatus(204)

}


