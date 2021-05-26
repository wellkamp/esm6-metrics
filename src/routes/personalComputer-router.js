import Router from 'koa-router'

import PersonalComputerController from '../controllers/personalComputer-controller'
import PersonalComputerValidate from '../validators/personalComputer-schema'


const router = new Router()

router.get('/pc', PersonalComputerController.index)
router.get('/pc/:id', PersonalComputerController.show)
router.post('/pc', PersonalComputerValidate.create(), PersonalComputerController.create)

export default router.routes()
