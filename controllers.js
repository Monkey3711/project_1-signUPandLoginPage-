
const signUp_model = require("./sign_data");

exports.SignUp_data = async(req,res)=>{
    const data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       }
    const user = await signUp_model.insertMany(data);
    res.render("login.hbs");
}
exports.SignUp_page = (req,res)=>{
    res.render('signup.hbs');
}
exports.login = async(req,res)=>{
    res.render('login2.hbs');
}
exports.check_Users = async(req,res)=>{
    const user_email = await signUp_model.findOne({email:req.body.email});
    const user_password = await sigUp_model.findOne({email:req.body.password});
    if(!user_email || !user_password){
       res.status(404).json({
        status :"failed",
        message :"could not find such email or password"
       })
    }
    if(user_email && user_password){
        res.render("home.hbs");
    }
} 
