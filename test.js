const dbCommand = require('./db/dbCommand');

(async () => {
    const a = await dbCommand.test();
    const b = await dbCommand.tryW();
    console.log(a.length)
})()