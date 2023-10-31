var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res)=> {
    console.log(req.body);
    var responseObj={};
  if(req.body.accountId =="admin" && req.body.password=="hello"){
    responseObj.msg ='valid';
  }else{
    responseObj.msg ='Invalid';

  }
  res.send(JSON.stringify(responseObj));
});

module.exports = router;