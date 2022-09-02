import express from 'express'
import config from './config/config.js'
import webRoute from './app/routes/webRoute.js'
import connectMongo from './app/modal/MongoDB/connectMongo.js'
import sortable from './app/middleware/sortable.js'

const app = express()
// Config 
config(app)
// Connect to DB
connectMongo()
//Middleware custom
app.use(sortable)
// Web Router
webRoute(app)
// NotFound 404
app.use((req, res) => {
    res.render('notFound')
})
// Listen at PORT:8080
const PORT = 8080
app.listen(PORT, console.log('Server is running'))