var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
    const datas = req.body.param;

  console.log(datas);
    const query = `insert into gloria.expenleaf(erid, elname) select erid, '${datas.elname}' from expenroot where ername = '${datas.ername}';`;
  
    const mydb = new Mydb(pool);

    mydb.execute(conn => {
        conn.query(query, (err, result) => {
          res.send(result);
        });
    });
});
//crud
module.exports = router;