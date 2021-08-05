var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
    const datas = req.body.param

    const query = `insert into gloria.expenroot (ername) values('${datas}')`;
  
    const mydb = new Mydb(pool);

    mydb.execute(conn => {
        conn.query(query, (err, result) => {
            res.send(result);
        });
    });
});
//crud
module.exports = router;