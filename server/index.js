// const mysql = require('mysql2/promise')
// const config = require('./config')          // file and not a library, hence the "./"
// const db = require("./services/db")

const express = require('express')
const cors = require('cors')
const todoRouter = require("./routes/todo")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/", todoRouter)

const port = 3001

// middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({error: err.message})
    return
})

app.listen(port)

/*
app.get("/", async function (req, res) {
    try {
    // const connection = await mysql.createConnection(config.db) -1)
    // const [result,] = await connection.execute('select * from task') -1)
    // const result = await db.query("select * from task") -2)
    
    const result = await todo.getAllTasks()     // -3) final version
    if (!result) result = []                    // if there is no data, return empty array
    res.status(200).json(result)
    } catch(err) {
        // Return status code 500 and error message to the client
        res.status(500).json({error: err.message})
    }
})

app.post("/new", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db)
        // Execute prepared statement   -1)
        // const [result,] = await connection.execute("insert into task (description) values (?) ", [req.body.description]) -1)
        // const result = await db.query("insert into task (description) values (?) ", [req.body.description])  -2)
        
        const result = await todo.addTask(req.body)     // -3) final version
        res.status(200).json({id:result.insertId})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.delete("/delete/:id", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db)
        // Execute prepared statement
        // await connection.execute("delete from task where id = ? ",[req.params.id])   -1)
        // await db.query("delete from task where id = ? ",[req.params.id]) -2)
        
        await todo.removeTask(req.params.id)        // -3)
        res.status(200).json({id:req.params.id})
    } catch(err) {
        res.status(500).json({error:err.message})
    }
})

app.listen(port) */