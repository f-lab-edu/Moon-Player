const fs = require('fs')
const Router = require('koa-router');
const path = require('path');

const musicGenre = fs.readFileSync(path.join(process.cwd(), "server/src/musicfile/music_genre.json"), 'utf-8')
const musicGenreData = JSON.parse(musicGenre);




const musics = new Router()

musics.get('/genre', ctx => {
  ctx.body =
  {
    status: 'success',
    music: musicGenreData
  }
})
musics.get('/genre/:genre_id', ctx => {
  const genre_id = ctx.request.params.genre_id
  let genreData = fs.readFileSync(path.join(process.cwd(), `server/src/musicfile/${genre_id}.json`), 'utf-8')
  genreData = JSON.parse(genreData)
  ctx.body =
  {
    status: 'success',
    music: genreData
  }
})


module.exports = musics