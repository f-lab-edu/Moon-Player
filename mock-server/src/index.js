const Koa = require('koa');
const Router = require('koa-router')
const router = new Router()
const api = require('./api')

router.use('/api', api.routes())

const app = new Koa();
app.use(router.routes()).use(router.allowedMethods())


const PORT = 4000
app.listen(PORT, () => {
  console.log('server is listening to port 4000');
});
