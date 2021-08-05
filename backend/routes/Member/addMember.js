var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  var datas = {
    'mname': req.body.params.mname,  
  }

  const query = `insert into gloria.member (mname) values('${datas.mname}')`;

  const mydb = new Mydb(pool);
  
  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });

});
//crud
module.exports = router;