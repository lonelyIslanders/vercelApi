const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const p = ctx.request.query;
    if (!p) {
        const p = new Object();
        p.name = '代币'
    }
    ctx.body = `Hello world\n你好世界\nfuck you world\n你好${p.name}`
})

app.listen(3399)