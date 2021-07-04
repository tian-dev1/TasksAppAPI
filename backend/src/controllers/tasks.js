//Funciones que se ejecutan cuando visitan una ruta en especifico
import {connect} from '../database'

export const getTasks = async (req, res) =>{
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM task')
    res.json(rows)
}

export const getTask = async (req, res) =>{
    const connection = await connect()
    const [rows] = await connection.query("SELECT * FROM task  WHERE id = ?", [req.params.id,]);
    console.log(rows[0])
    res.send('Hello World!!')
}

export const getTasksCount = (req, res) =>{
    res.send('Hello World!!')
}

export const saveTask = (req, res) =>{
    res.send('Hello World!!')
}

export const deleteTask = (req, res) =>{
    res.send('Hello World!!')
}

export const updateTask = (req, res) =>{
    res.send('Hello World!!')
}


