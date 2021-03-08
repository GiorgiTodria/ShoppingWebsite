var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    parser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user");
const { Db, MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const user = require("./models/user");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("Images"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://GiorgiTodria:Giorgi777@cluster0.qyisq.mongodb.net/Test1?retryWrites=true&w=majority"
,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:" ));
db.once("open", function(){
    console.log("MongoDb Connected")
});


var RevoltAdminsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  var RevoltImagesSchema = new mongoose.Schema({
    name: String,
    Image: String,
  });

  var Images = mongoose.model("revoltimages", RevoltImagesSchema);

  Images.create({
    name:"the Test",
    Image: "https://images.unsplash.com/photo-1600353068218-27240d813841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    },function(err,images){
        if(err){
            console.log(err);
        }else {
            console.log("Image Successful");
            console.log(images);
            }
        });

        app.post("/NewImg", function (req, res) {
            Images.create(req.body.Images, function (err, newimage) {
              res.redirect("/NewImg");
            });
          });

app.get("/", function(req,res){
    res.render("index")
})

app.get("/home", function(req,res){
    res.render("index")
})

app.get("/registration", function(req,res){
    res.render("signup")
})

app.get("/mouse", function(req,res){
    res.render("mouse")
})

app.get("/admin", function(req,res){
    res.render("admin")
})

app.get("/adminpanel", function(req,res){
    res.render("adminpanel")
})

app.get("/controller", function(req,res){
    res.render("controller")
})

app.get("/pc", function(req,res){
    res.render("pc")
})
app.get("/phone", function(req,res){
    res.render("phone")
})
app.get("/headset", function(req,res){
    res.render("headset")
})
app.get("/all", function(req,res){
    res.render("allproducts")
})

app.get("/all/home", function(req,res){
    res.render("index")
})

app.get("/all/registration" , function(req,res){
    res.render("signup")
})

app.get("/all/all" , function(req,res){
    res.render("allproducts")
})

app.get("/all/logitech", function(req,res){
    res.render("product1")
})

app.get("/all/razer", function(req,res){
    res.render("product2")
})

app.get("/all/corsair", function(req,res){
    res.render("product3")
})

app.get("/all/nacon", function(req,res){
    res.render("product4")
})

app.get("/all/astro", function(req,res){
    res.render("product5")
})

app.get("/all/scuf", function(req,res){
    res.render("product6")
})

app.get("/all/mouse", function(req,res){
    res.render("mouse")
})

app.get("/all/pc", function(req,res){
    res.render("pc")
})

app.get("/all/controller", function(req,res){
    res.render("controller")
})

app.get("/all/headset", function(req,res){
    res.render("headset")
})

app.get("/all/phone", function(req,res){
    res.render("phone")
})

app.get("/all/asus", function(req,res){
    res.render("product7")
})

app.get("/all/logitech-headset", function(req,res){
    res.render("product8")
})

app.get("/all/steelseries", function(req,res){
    res.render("product9")
})

app.get("/NewImg", function(req,res){
    res.render("show")
})




app.listen(3000, function (){
    console.log("Server Started!!!")
})
