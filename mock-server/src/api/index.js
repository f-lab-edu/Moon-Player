
const Router = require('koa-router');
const api = new Router();
const musics = require('./music')

api.use('/musics', musics.routes())
module.exports = api;