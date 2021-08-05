var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  const query = `select expen.elid, elname, value, date_format(dates, '%Y-%m-%d') as dates from expen, expenleaf where expenleaf.elid = expen.elid;`;
  
  const mydb = new Mydb(pool);

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });
});
//crud
module.exports = router;