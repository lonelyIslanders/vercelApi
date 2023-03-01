const dbconfig = require('./dbconfig');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    database: dbconfig.database,
    port: dbconfig.port,
    password: dbconfig.password
})

module.exports = {
    async test() {
        return new Promise((res, rej) => {
            let sql = `select * from test`;
            db.query(sql, (err, result) => {
                if (err) {
                    console.error(sql)
                    rej(err)
                } else {
                    res(result)
                }
            })
        })
    },

    async tryW() {
        return new Promise((res, rej) => {
            const xin = '王向供热广泛服务范围广分法人股'
            const min = '俄国哦法国发热规划夫人同仁堂人岁的哦积极鸡气温额外夫人xxx'
            const names = xin[Math.floor(Math.random() * xin.length)] + min[Math.floor(Math.random() * min.length)] + min[Math.floor(Math.random() * min.length)]
            let sql = `insert into test values(null,'${names}')`
            db.query(sql, (err, result) => {
                if (err) {
                    console.error(sql)
                    rej(err)
                } else {
                    res(result)
                }
            })
        })
    }
}