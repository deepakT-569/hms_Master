const mysql = require("mysql2");

//Connecting to Database

const con = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'Ayush@14326',
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
var sql = "Create table Admin (A_ID Varchar(50) primary key , Name Varchar(50),DOB Varchar(50),Gender Varchar(50),Email Varchar(50),Mobile_No Varchar(50),Address Varchar(50))";
con.query(sql,callback);
}

module.exports.adminData = function(A_id,Name,DOB,Gender,Email,Mobile_no,Address,callback){
    var sql = "Insert into Admin(A_id,Name,DOB,Gender,Email,Mobile_no,Address) value ?";
    con.query(sql,[A_id,Name,DOB,Gender,Email,Mobile_no,Address],callback);
}

// module.exports.profile = function(Email,Password,callback){
//     var sql ="Select * from Admin where Email=? and Password=?";
//     con.query(sql,Email,Password,callback);
// }

//Doctor
module.exports.createDoctorTable=function(callback){
    var sql="Create table Doctor(D_Id VARCHAR(50) PRIMARY KEY,Name VARCHAR(50),Age INT,Gender VARCHAR(50),Specialization VARCHAR(50),Experience VARCHAR(50),Language VARCHAR(50),Email VARCHAR(50),Mobile VARCHAR(50),Schedule DATETIME)"
    con.query(sql,callback);
}

module.exports.doctorData =function(D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule,callback){
    var sql = "Insert into Doctor(D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule) value (?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule],callback);
}


//Patient

module.exports.createPatientTable = function(callback)
{
    var sql ="create table Patient(P_ID varchar(50) primary key,Name varchar(50) NOT NULL,DOB varchar(50) NOT NULL,Gender varchar(50) NOT NULL,Blood_Group varchar(50) NOT NULL,Email varchar(50),Address varchar(50) NOT NULL,Mobile_no varchar(20) NOT NULL)";
    con.query(sql,callback)
}

module.exports.getPatient =function(P_ID,callback)
   {
     var sql = "select * from patient where P_ID = ? ";
      con.query(sql,P_ID,callback);
   }


module.exports.createPatient =function(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no,callback)
{
    var sql ="insert into Patient(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no) VALUES ( ?,?,?,?,?,?,?,? )";
    con.query(sql,P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no,callback);
}


module.exports.updatePatient =function(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no,callback)
{
    var sql ="update Patient set Name=?,DOB=?,Gender=?,Blood_Group=?,Email=?,Address=?,Mobile_no=? where P_ID=?";
    con.query(sql,P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no,callback);
}

//Appointment

module.exports.createAppointmentTable = function(callback)
{
    var sql ="create table Appointment(P_ID varchar(50) primary key,Doctor_Name varchar(50) NOT NULL,Date date NOT NULL,Time time NOT NULL,Specialization varchar(50) NOT NULL,Consultant_Fee int NOT NULL)";
    con.query(sql,callback)
}


module.exports.getAppointment =function(P_ID,callback)
   {
     var sql = "select * from Appointment where P_ID = ? ";
      con.query(sql,P_ID,callback);
   }


module.exports.bookAppointment=function(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback)
{
    var sql ="insert into Appointment(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee) VALUES ( ?,?,?,?,?,? )";
    con.query(sql,P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback);
}


module.exports.updateAppointment =function(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback)
{
    var sql ="update Appointment set P_ID=? ,Doctor_Name=?,Date=?,Time=?,Specialization=?,Consultant_Fee=? where P_ID=?";
    con.query(sql,P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback);
}

module.exports.cancelAppointment =function(P_ID,callback)
{
    var sql ="delete from appointment where P_id= where P_ID=?";
    con.query(sql,P_ID,callback);
}
// module.exports =con;
