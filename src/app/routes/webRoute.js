import courseRouter from './course.js'
import homeRouter from './home.js'
import userRouter from './user.js'

function webRoute(app) {
    app.use('/course',courseRouter)
    app.use('/user',userRouter)
    app.use('/',homeRouter)
}
export default webRoute
