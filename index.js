const Koa = require('koa');
const app = new Koa();
const dbCommand = require('./db/dbCommand')

app.use(async ctx => {
    let name = ctx.request.query.name;
    if (name === undefined) {
        name = '代币'
    }
    const dd = await dbCommand.test()
    ctx.body = `Hello world\n你好世界\nfuck you world\n你好${name}\n${JSON.stringify(dd)}`
})

app.listen(3399)