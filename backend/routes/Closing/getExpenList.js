var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  const mydb = new Mydb(pool);

  const query = `select expen.elid, elname, sum(expen.value) as value from expen, expenleaf where expen.elid = expenleaf.elid group by expenleaf.elname;`;

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });
});
//crud
module.exports = router;