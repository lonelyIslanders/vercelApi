const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let name = ctx.request.query.name;
    if (name === undefined) {
        name = '代币'
    }
    ctx.body = `Hello world\n你好世界\nfuck you world\n你好${name}\n`
})

app.listen(3399)