const Koa = require('koa');
const app = new Koa();
const dbCommand = require('./db/dbCommand')

app.use(async ctx => {
    await dbCommand.tryW();
    const dd = await dbCommand.test();
    const len = dd.length;
    let names = dd[0].name;
    ctx.body = `Hello world\n你好世界\nfuck you world\n你好${names}\n${len}\n${JSON.stringify(dd)}`
})

app.listen(3399)