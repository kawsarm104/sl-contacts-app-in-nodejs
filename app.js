const express = require('express')
const morgan = require('morgan')

const contactRoutes = require('./contactRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json()) //accepting both html and json data

app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
        res.send("please use the correct routes")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

//Planning 
/*
    1. Handle Some Route
    2. for handling routes we need controller
    3. Contacts is the only object sometime it will update get ... 

*/