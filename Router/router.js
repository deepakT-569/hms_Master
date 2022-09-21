const express = require('express') ;

const Router = express.Router();

const Register = require("../Controller/registerController");
const Login = require("../Controller/loginContoller");
const {AddAdmin,AddDoctor,Profile} = require("../Controller/adminController");
Router.route("/register").post(Register);
Router.route("/login").post(Login);
Router.route("/add/Doctor").post(AddDoctor);
Router.route("/add/Admin").post(AddAdmin);
Router.route("/get/admin/profile").get(Profile);

module.exports = Router;
