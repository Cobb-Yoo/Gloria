var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
    var data = req.body.param;
    const mydb = new Mydb(pool);

    console.log(data);
    const query = `insert into gloria.offertable (offerType) values('${data}')`;

    mydb.execute(conn => {
        conn.query(query, (err, result) => {
            console.log(query);
            res.send(result);
        });
    });
});
//crud
module.exports = router;