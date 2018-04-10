//因为没有任何的变量所以可以直接引用该模块
//引入mongoose 模块

var mongoose=require("mongoose");
//链接数据库
mongoose.connect("mongodb://localhost/mongoose_test");
//监听数据库开启
mongoose.connection.once("open",function () {
    console.log("数据库链接成功！");
});

