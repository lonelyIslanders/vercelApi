const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let time=Date.now();
    ctx.body = `Hello world\n${time}`
})

app.listen(3399)
