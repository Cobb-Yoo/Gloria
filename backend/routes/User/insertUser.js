var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  var datas = {
    'uid' : '',
    'uname': req.body.user.uname,
    'money': req.body.user.money,
  }

  const mydb = new Mydb(pool);
  const query = `insert into user values('${datas.uid}','${datas.uname}','${datas.money}')`

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });
});
//crud
module.exports = router;