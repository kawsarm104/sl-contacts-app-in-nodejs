const express = require('express')
const morgan = require('morgan')

const contactRoutes = require('./contactRoutes')

const app = express()

app.set('view engine','ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json()) //accepting both html and json data

// app.use('/contacts', contactRoutes)

// app.get('*', (req, res) => {
//         res.send("please use the correct routes")
// })
app.get('/', (req, res) => {
    let post = {
        title: "test title",
        body: "test body",
            published:true,
    }
    let posts = [
        {
            title: "title 1 ",
            author: "kawsar"
        },
        {
            title: "title 2 ",
            author: "kawsar 2"
        },
        {
            title: "title 3 ",
            author: "kawsar 3"
        }
    ]
    res.render('pages/index', {
      
        title: "ejs template engine",
        post,
        posts
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about',{title:"about page"})
})
app.get('/help', (req, res) => {
    res.render('pages/help',{title:"help page"})
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