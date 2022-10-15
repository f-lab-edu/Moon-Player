const fs = require('fs')
const Router = require('koa-router');
const path = require('path');
const ncsMusicFile = fs.readFileSync(path.join(process.cwd(), "mock-server/src/musicfile/ncs.json"), 'utf-8')
const ncsMusicData = JSON.parse(ncsMusicFile);




const musics = new Router()



musics.get('/ncs', ctx => {

  ctx.body =
  {
    status: 'success',
    music: ncsMusicData
  }

})


module.exports = musics