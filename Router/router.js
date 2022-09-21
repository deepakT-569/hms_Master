const express = require('express') ;
const Router = express.Router();
const Register = require("../Controller/registerController");
const Login = require("../Controller/loginContoller");
const {AddAdmin,AddDoctor,Profile} = require("../Controller/adminController");
const {CreatePatient,GetPatient,UpdatePatient} = require("../Controller/patientController");
const {BookAppointment,GetAppointment,UpdateAppointment,CancelAppointment} = require("../Controller/appointmentController");


Router.route("/register").post(Register);
Router.route("/login").post(Login);
Router.route("/add/Doctor").post(AddDoctor);
Router.route("/add/Admin").post(AddAdmin);
Router.route("/get/admin/profile").get(Profile);
Router.route("/add/Patient").post(CreatePatient);
Router.route("/get/Patient").get(GetPatient);
Router.route("/update/Patient").get(UpdatePatient);
Router.route("/book/Appointment").post(BookAppointment);
Router.route("/get/Appointment").get(GetAppointment);
Router.route("/update/Appointment").get(UpdateAppointment);
Router.route("/cancel/Appointment").get(CancelAppointment);

module.exports = Router;
