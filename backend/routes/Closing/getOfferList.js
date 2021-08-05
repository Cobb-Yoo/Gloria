var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  const mydb = new Mydb(pool);

  const query = `select offerType, sum(amount) as amount from offering, offertable where offertable.offerTeg = offering.offerteg group by offerType;`;

  mydb.execute(conn => {
    conn.query(query, (err, result) => {
      res.send(result);
    });
  });
});
//crud
module.exports = router;