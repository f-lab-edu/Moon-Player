
const Router = require('koa-router');
const api = new Router();
const musics = require('./music')

api.use('/music', musics.routes())
module.exports = api;