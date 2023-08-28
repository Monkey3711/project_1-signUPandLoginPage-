const express = require("express");
const app = express();
const Route = express.Router();
const controllers = require("./controllers")


Route.route("/SignUp")
.get(controllers.SignUp_page)
.post(controllers.SignUp_data)
Route.route("/login")
.get(controllers.login)
.post(controllers.check_Users);

module.exports = Route;