const koa = require('koa');
const router = require('koa-router')
const app = new koa();

const _ = router()

_.get('/', function getIndex(ctx, next) {
  ctx.body = "<h1>Index sayfasına Hoşgeldiniz!</h1>"
})
_.get('/about', function getAbout(ctx, next) {
  ctx.body = "<h1>About sayfasına Hoşgeldiniz!</h1>"
})
_.get('/contact', function getContact(ctx, next) {
  ctx.body = "<h1>Contact sayfasına Hoşgeldiniz!</h1>"
})


// response
app.use(_.routes())

app.listen(3000);