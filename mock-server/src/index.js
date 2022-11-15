const Koa = require('koa');
const Router = require('koa-router')
const cors = require('@koa/cors')

let corsOptions = {
  origin: process.env.CLIENT_HOST,
  credentials: true,
}


const router = new Router()
const api = require('./api')

router.use('/api', api.routes())

const app = new Koa();

app.proxy = true
app.use(cors(corsOptions))
app.use(router.routes()).use(router.allowedMethods())

const PORT = 4001
app.listen(PORT, () => {
  console.log('server is listening to port 4001');
});
