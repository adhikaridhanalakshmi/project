var express = require('express');
const app =  express();
const flash = require('express-flash')
const session = require('express-session')
const bodyparser=require('body-parser')

app.set('view-engine','ejs')
app.use(express.static(__dirname+'/public/'))
app.use(bodyparser.urlencoded({extended:false}))

app.use(session({
    secret:"secret key",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:600000
    }
}))

app.use(flash())


app.get('/login',(req,res)=>{
    res.render("login.ejs",{messages:req.flash()});
})
app.post('/login',(req,res)=>{
    const{email,password}= req.body
    if(!email || !password){
        req.flash("error","Email and password are required")
        return res.redirect('/')

    }else if(password.length<8){
        req.flash("error","password must be at least 8 characters")
        return res.redirect('/login')
    }else {
        res.redirect('/dashboard')
    }
})
app.get('/forgetpassword',(req,res)=>{
    res.render("forget.ejs")
})
app.get('/dashboard',(req,res)=>{
    res.render("dashboard.ejs")
})
app.get('/box',(req,res)=>{
    res.render("box.ejs")
})
app.get('/chart',(req,res)=>{
    res.render("chart.ejs");
})
app.get('/main',(req,res)=>{
    res.render("main.ejs");
})


app.listen(8005);