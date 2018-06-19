var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    db.query('select * from spider ORDER BY `time` DESC', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('content', {title: '北京IT活动与会议', datas: []});  // this renders "views/persons.html"
        } else {

            res.render('content', {title: '北京IT活动与会议', datas: rows});
        }
    })
});

module.exports = router;