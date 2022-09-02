import express from 'express'
import { engine } from 'express-handlebars'
import methodOverride from 'method-override'
import helpers from '../helperHbs/helpers.js'

function config(app) {
    // Config Handlebars
    app.engine('.hbs', engine({
        extname: '.hbs',
        helpers: helpers
    }))
    app.set('view engine', '.hbs')
    app.set('views', 'src/resources/views')
    // Config Static file (Public)
    app.use(express.static('src/public'))
    // Config recieve Data POST
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(express.json())
    // Config overide method
    app.use(methodOverride('_method'))
}
export default config