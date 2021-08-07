var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
    var data = req.body.param;
    const mydb = new Mydb(pool);

    const query = `delete from gloria.offering where oid = '${data}'`;

    mydb.execute(conn => {
        conn.query(query, (err, result) => {
            console.log(query);
            res.send(result);
        });
    });
});
//crud
module.exports = router;