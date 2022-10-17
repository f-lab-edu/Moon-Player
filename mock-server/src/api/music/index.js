const fs = require('fs')
const Router = require('koa-router');
const path = require('path');

const musicGenre = fs.readFileSync(path.join(process.cwd(), "mock-server/src/musicfile/music_genre.json"), 'utf-8')
const musicGenreData = JSON.parse(musicGenre);
const ncs_1_50 = fs.readFileSync(path.join(process.cwd(), "mock-server/src/musicfile/NCS_1-50.json"), 'utf-8')
const ncs_1_50Data = JSON.parse(ncs_1_50);





const musics = new Router()


musics.get('/genre', ctx => {

  ctx.body =
  {
    status: 'success',
    music: musicGenreData
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