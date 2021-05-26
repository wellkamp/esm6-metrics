import Router from 'koa-router'

import PersonalComputerController from '../controllers/personalComputer-controller'


const router = new Router()

router.get('/pc', PersonalComputerController.index)
router.get('/pc/:id', PersonalComputerController.show)
router.post('/pc', PersonalComputerController.create)

export default router.routes()
