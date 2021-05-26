import Koa from 'koa'
import koaBody from 'koa-body'

import routes from './routes'


const app = new Koa()
app.use(koaBody({ multipart: true }))

app.use(routes.routes())
export default app