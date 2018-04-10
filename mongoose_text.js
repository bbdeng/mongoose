//1.下载安装mongoose
//        npm install mongoose --save
//2.引入mongoose 模块
//var mongoose=require("mongoose");
//3.链接mongoose数据库
//mongoose.connect('mongodb://数据库IP地址：端口号/数据库名',{useMongoClient:true})
//如果端口号默认是27017，则可以不用填写
//监听mongodb数据库的链接状态
//在mongoose对象中，有一个属性叫做connection,该对象表示就是数据库链接
//通过监视该对象的状态，可以来监听数据库的链接与断开
//4.断开数据库链接(一般不需要调用)
//mongoose.disconnect();

//引入mongoose
var mongoose=require("mongoose");
//链接数据库mongoose_test
mongoose.connect('mongodb://localhost/mongoose_test');
mongoose.connection.once("open",function () {
    console.log("数据库链接成功!");
});

//将mongoose.Schema赋值给一个变量
var Schema=mongoose.Schema;
//创建Schema(模式)对象
var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"female"
    },
    address:String
});
//创建Model，Model表示数据库里面的集合
//2个参数，第1个表示集合的名字，第2个表示用哪个对象来约束集合
var StuModel=mongoose.model("students",stuSchema);

//向数据库中插入文档
//2个参数，第1个doc内容，第2个回调函数

// StuModel.create([
//     {
//     name:"猪八戒",
//     age:28,
//     gender:"男",
//     address:"高老庄"
//     },
//     {
//         name:"红孩儿",
//         age:8,
//         gender:"男",
//         address:"地洞"
//
//     },
//     {
//         name:"沙和尚",
//         age:38,
//         gender:"男",
//         address:"流沙河"
//
//     },
//     {
//         name:"唐僧",
//         age:16,
//         gender:"男",
//         address:"女儿国"
//
//     }
//
// ],function (err) {
//     if (!err){
//         console.log("插入数据成功！");
//     }
// });

//查询Model.find(conditions,[projection],[options],callback)
//    Model.findById(id,[projection],[options],callback)
//    Model.findOne(conditions,[projection],[options],callback)
//     -conditions 查询的条件
//     -projection 投影  传统{name:1,_id:0}  另一种"name -_id_"
//     -options 查询选项(skip  limit )
// StuModel.find({name:"唐僧"},"name -_id",function (err, docs) {
//     if (!err){
//         console.log(docs);
//         //console.log(docs[0].name);
//     }
// });

//修改 Model.update(conditions ,doc ,[options] ,callback)
//     Model.updateMany(conditions ,doc ,[options] ,callback)
//      Model.updateOne(conditions ,doc ,[options] ,callback)

// StuModel.updateOne({name:"唐僧"},{$set:{age:18}},function (err) {
//     if (!err){
//         console.log("修改成功将16岁改成18岁!");
//     }
// });

//删除 Model.remove(conditions,callback)
//     Model.deleteOne(conditions,callback)
//     Model.deleteMany(conditions,callback)

// StuModel.deleteOne({name:"唐僧"},function (err) {
//     if(!err){
//         console.log("删除唐僧成功！");
//     }
// });

//统计 Model.count(conditions,callback)
// StuModel.count({},function (err,count) {
//     if (!err){
//         console.log(count);
//     }
//
// });

//updata(updata,[options],callback)
//先查询对象，然后在修改,最后在保存
//通过document来获取
StuModel.findOne({},function (err,doc) {
    if (!err){
        doc.update({$set:{age:19}},function (err) {
            if (!err){
                console.log("修改第1个数据成功，改为19!");
            }
        })
    }
});