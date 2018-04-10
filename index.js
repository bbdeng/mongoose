//引入链接数据库的模块connect-mongoose
require("./connect/connect-mongoose");
var students=require("./models/students");

students.find({name:"猪八戒"},function (err,doc) {
    if (!err) {
        console.log(doc);
    }
});
