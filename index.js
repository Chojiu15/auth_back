const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8000
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
const cors = require('cors')
app.use(cors())

const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')

app.get('/', (req, res) => {
    res.send('Welcome to my auth API')
})

app.use('/auth', authRouter )
app.use('/api', userRouter)



mongoose.connect(process.env.MONGO_URI)


app.listen(8000, () => {
    console.log(`Server running on port ${PORT}`)
})