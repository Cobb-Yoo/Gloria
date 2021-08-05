const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// Connection 객체 생성 
const db_info = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dkRmxdjqtsmsrhxhdfpTmrh@123',
    database: 'gloria'
};

module.exports = class {
    constructor(dbinfo) {
        dbinfo = dbinfo || db_info;
        this.pool = mysql.createPool(dbinfo);
    }

    connect() {
        return this.pool.getConnectionAsync().disposer(conn => {
            return conn.release();
        });
    }

    end() {
        this.pool.end();
    }
}