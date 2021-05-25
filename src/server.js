import Koa from 'koa'
import koaBody from 'koa-body'


const app = new Koa()
app.use(koaBody({ multipart: true }))



export default app