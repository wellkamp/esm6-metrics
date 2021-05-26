import Router from 'koa-router'
import HelloWorld from './helloWorld-router'
import UserRouter from './users-router'
import PersonalComputerRouter from './personalComputer-router'

const router = new Router()
const api = new Router()


api.use(HelloWorld)
api.use(UserRouter)
api.use(PersonalComputerRouter)


router.use('', api.routes())

export default router