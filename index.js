const Koa = require('koa');
const app = new Koa();
const dbCommand = require('./db/dbCommand')

app.use(async ctx => {
    await dbCommand.tryW();
    const dd = await dbCommand.test();
    const len = dd.length;
    const i = Math.floor(Math.random() * len)
    let names = dd[i].name;
    ctx.body = `Hello world\n你好世界\nfuck you world\n你好${names}\n\n${JSON.stringify(dd)}`
})

app.listen(3399)