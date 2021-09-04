const express = require("express")
const app = express()
const db = require('./models')
const expressValidator = require('express-validator')


app.use(express.json())
app.use(expressValidator())

// Import Router
const contactRouter = require('./routes/Contact')

//Route
app.use('/contact', contactRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log(" server runing")
    })
})