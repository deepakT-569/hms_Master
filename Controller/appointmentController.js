const express = require('express');
const con = require('../Database/db');
const router = express.Router();


module.exports.GetAppointment=(req,res)=>
{
   const P_ID = req.body.P_ID; 

  con.getAppointment=(P_ID,(err,results)=>
{
      if(err)
      {
        console.log("Error Occured : ",err);
      }
      else
      {
        res.json(results);
      }
})}


module.exports.BookAppointment=(req,res)=>
{
   const {P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee} = req.body; 

  con.bookAppointment=(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,(err,results)=>
{
  if(err)
  {
       if(err.code === 'ER_DUP_ENTRY' )
           {
           res.send({message:"Appointment Already Booked !"});
           }
       else if(err.code === 'ER_NO_SUCH_TABLE')
           {
           con.createAppointmentTable((err,result)=>{
           if(err)
               // throw err; 
               res.send({message:"Table Already exists !"});
            else
               res.send({message:"Appointment Booked Successfully !"});
               });
           }
   }
    else 
           res.send({message:"Appointment Added Successfully !"});
})}



module.exports.UpdateAppointment=(req,res)=>
{
   const {P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee} = req.body; 

  con.updateAppointment(P_Id,Doctor_Name,Date,Time,Specialization,Consultant_Fee,(err,results)=>
{
      if(err)
      {
        console.log("Error Occured : ",err);
      }
      else
      {
        res.json(results);
      }
})}


module.exports.CancelAppointment=(req,res)=>
{
   const P_ID = req.body.P_ID; 

  con.cancelAppointment(P_ID,(err,results)=>
{
      if(err)
      {
        console.log("Error Occured : ",err);
      }
      else
      {
        res.json(results);
      }
})}

