const express = require('express')
const app = express()
const dotenv = require('dotenv')
const tasks = require('./routes/tasks_route')

dotenv.config()

app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hello World!')
    }
)

app.use('/tasks', tasks)



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})
