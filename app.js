const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

const port = 5000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
            app.listen(port, console.log(`Server is Listening on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()


