var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();


router.post('/', (req, res) => {
  const query = `SELECT oid, mname, offertype, amount, date_format(dates, '%Y-%m-%d') as dates FROM offering left JOIN member ON offering.mid= member.mid JOIN offertable on offering.offerteg = offertable.offerteg order by oid desc;`;
  
  const mydb = new Mydb(pool);

  mydb.execute(conn => {
    conn.query(query, (err, rows) => {
      res.send(rows);
    });
  });
});

module.exports = router;