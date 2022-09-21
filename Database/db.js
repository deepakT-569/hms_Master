const mysql = require("mysql2");

//Connecting to Database

const con = mysql.createConnection({
          host:'localhost',
          user:'babu',
          password:'Deesql@1996',
          database : "HMS",
});
    con.connect((err)=>{
        if(err) throw err;
        console.log("Connected Successfully !!!!!!!");
    })

module.exports.create_database = function(callback){
con.query("CREATE DATABASE HMS",callback);
}
    

//LOGIN AND REGISTRATION

module.exports.createRegisterTable = function(callback){
    var sql ="Create table UserReg(Name VARCHAR(50),Email VARCHAR(50),Password VARCHAR(50))";
    con.query(sql,callback)
}

module.exports.signup = function(Name,Email,Password,callback){
    var sql = "Insert into UserReg(Name,Email,Password) value (?,?,?)";
    con.query(sql,[Name,Email,Password],callback);
}

module.exports.login = function(Email,Password,callback){
    var sql = "Select * from UserReg where Email= ? and Password=?";
    con.query(sql,[Email,Password],callback);
}


//ADMIN 

module.exports.createAdminTable= function(callback){
var sql = "Create table Admin (A_ID Varchar(50) primary key , Name Varchar(50),DOB Varchar(50),Gender Varchar(50),Email_ID Varchar(50),Mobile_No Varchar(50),Address Varchar(50))";
con.query(sql,callback);
}

module.exports.adminData = function(A_id,Name,DOB,Gender,Email_ID,Mobile_no,Address,callback){
    var sql = "Insert into Admin(A_id,Name,DOB,Gender,Email_ID,Mobile_no,Address) value ?";
    con.query(sql,[A_id,Name,DOB,Gender,Email_ID,Mobile_no,Address],callback);
}

module.exports.profile = function(Email,Password,callback){
    var sql ="Select * from Admin where Email=? and Password=?";
    con.query(sql,Email,Password,callback);
}

//Doctor
module.exports.createDoctorTable=function(callback){
    var sql="Create table Doctor(D_Id VARCHAR(50) PRIMARY KEY,Name VARCHAR(50),Age INT,Gender VARCHAR(50),Specialization VARCHAR(50),Experience VARCHAR(50),Language VARCHAR(50),Email VARCHAR(50),Mobile VARCHAR(50),Schedule DATETIME)"
    con.query(sql,callback);
}

module.exports.doctorData =function(D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule,callback){
    var sql = "Insert into Doctor(D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule) value (?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule],callback);
}


// module.exports =con;
