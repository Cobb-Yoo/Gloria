var express = require('express');
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require('../../db');
const pool = new Pool();

router.post('/', (req, res) => {
  var datas = {
    'uid': req.body.user.uid,
    'password': req.body.user.password,
    'uname': req.body.user.uname,
  }
  const mydb = new Mydb(pool);
  const query1 = `select * from user where uid = '${datas.uid}' and password = '${datas.password}'`;
  const query2 = `insert into user values('${datas.uid}','${datas.password}','${datas.uname}')`;

  mydb.execute(conn => {
    conn.query(query1, (err, rows) => {
      if (rows[0] == undefined) {
        mydb.execute(conn => {
          conn.query(query2, (err, result) => {
            res.json({
              success: true,
              message: 'SignUp Success!'
            })
          });
        });
      }
    });
  });
});
//crud
module.exports = router;