var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  const datas = req.body.param;
  const query = `insert into expen(elid, value, dates) select elid, '${datas.value}', now() from expenleaf where '${datas.elname}' = elname`;
  
  console.log(query);

  const mydb = new Mydb(pool);
  //할렐루야성가대보조

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      console.log(datas);
      res.send(result);
    });
  });
});
//crud
module.exports = router;