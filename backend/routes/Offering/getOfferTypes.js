var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  const query = `select * from offertable`;
  
  const mydb = new Mydb(pool);

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });
});
//crud
module.exports = router;