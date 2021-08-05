var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  var datas = {
    'mname': req.body.offering.mname,
    'offerteg':req.body.offering.offerteg,
    'amount':req.body.offering.amount,
  }
  const mydb = new Mydb(pool);

  const query = `insert into offering(mid, offerteg, amount, dates) SELECT mid, offerteg, ${datas.amount}, now() from member join offertable on member.mname = '${datas.mname}' and offertable.offertype = '${datas.offerteg}'`;

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      console.log(query);
      res.send(result);
    });
  });
});
//crud
module.exports = router;