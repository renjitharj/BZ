const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const userRoute = require('./routes/user.routes')
const bookRoute = require('./routes/book.routes')
const genreRoute = require('./routes/genre.routes')

const mongoose = require('mongoose')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/users',userRoute)
app.use('/books',bookRoute)
app.use('/genres',genreRoute)

mongoose.connect('mongodb+srv://book_arrow:book_arrow@cluster0.x5gnu.mongodb.net/test')
    .then(() => {
        console.log('Database connections succesful')
    }
    )
    .catch(err => {
        console.error(err)
        console.error('Database connection error')
    }
    )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})