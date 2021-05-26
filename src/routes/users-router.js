import Router from 'koa-router'

import UserController from '../controllers/users-controller'
import UserValidate from '../validators/user-schema'

const router = new Router()

router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users', UserValidate.create(), UserController.create)

export default router.routes()
