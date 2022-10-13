const Router = require('koa-router');

const musicData = [
  { id: 1, name: '유저1' },
  { id: 2, name: '유저2' },
  { id: 3, name: '유저3' }
]

const musics = new Router()



musics.get('/', ctx => {
  ctx.body = { ok: true, musics: musicData }
})

module.exports = musics