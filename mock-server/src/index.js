const Koa = require('koa');
const Router = require('koa-router')
const router = new Router()
const app = new Koa();
const api = require('./api')

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
  console.log('server is listening to port 4000');
});
