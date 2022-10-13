const fs = require('fs')
const Router = require('koa-router');
const path = require('path');
const ncsMusicFile = fs.readFileSync(path.join(process.cwd(), "src/musicfile/ncs.json"), 'utf-8')
const ncsMusicData = JSON.parse(ncsMusicFile);



const musics = new Router()



musics.get('/ncs', ctx => {
  ctx.body = { music: ncsMusicData }
})


module.exports = musics