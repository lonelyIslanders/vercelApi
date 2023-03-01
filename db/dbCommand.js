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
    }
}