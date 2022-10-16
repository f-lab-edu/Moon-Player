const fs = require('fs')
const Router = require('koa-router');
const path = require('path');

const musicTitle = fs.readFileSync(path.join(process.cwd(), "mock-server/src/musicfile/music_title.json"), 'utf-8')
const musicTitleData = JSON.parse(musicTitle);
const ncs_1_50 = fs.readFileSync(path.join(process.cwd(), "mock-server/src/musicfile/NCS_1-50.json"), 'utf-8')
const ncs_1_50Data = JSON.parse(ncs_1_50);





const musics = new Router()


musics.get('/music_title', ctx => {

  ctx.body =
  {
    status: 'success',
    music: musicTitleData
  }

})
musics.get('/NCS_1-50', ctx => {

  ctx.body =
  {
    status: 'success',
    music: ncs_1_50Data
  }

})


module.exports = musics