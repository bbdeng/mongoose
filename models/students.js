//定义一个student模型

//引入mongoose模块
var mongoose=require("mongoose");
//将mongoose.Schema赋值给一个变量
var Schema=mongoose.Schema;
//创建Schema(模式)对象 来约束集合
var studentSchema=new Schema({
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

var StudentModel=mongoose.model("student", studentSchema);

//将Stumodel暴露出去

module.exports=StudentModel;

