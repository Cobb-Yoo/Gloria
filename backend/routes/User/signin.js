var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  var datas = {
    'uid' : req.body.params.uid,
    'password': req.body.params.password
  }
  
  const mydb = new Mydb(pool);
  const query = `select * from user where uid = '${datas.uid}' and password = '${datas.password}'`;

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });
});
//crud
module.exports = router;