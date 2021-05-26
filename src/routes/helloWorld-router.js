import Router from 'koa-router'
import HelloWorld from '../controllers/helloWorld-controller'


const router = new Router()

router.get('helloWorld', HelloWorld.index)


export default router.routes()