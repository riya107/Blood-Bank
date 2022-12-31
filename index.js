const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
const connectDB = require("./models/db");
app.use(bodyParser.urlencoded({extended: true}));

const {hospital} = require("./models/model")
const Donor =require("./models/donormodel");

app.get("/",function(req,res){

    res.render("home");
    
});

app.get("/donor",function(req,res){
    res.render("donor");
});

app.post("/requirement",function(req,res){
    let bloodtype = req.body.bloodtype;
    let city = req.body.city;

    let hospitals=hospital.find({city:city});
    let CompBlood = getCompatibleBloodTypes(bloodtype);

    
    
    res.send()
});

app.post("/donor",function(req,res){

})

function getCompatibleBloodTypes(bloodType) {
    // A list of all possible blood types
    const allBloodTypes = ['A_pos', 'A_neg', 'B_pos', 'B_neg', 'AB_pos', 'AB_neg', 'O_pos', 'O_neg'];
  
    // A list of compatible blood types for each blood type
    const compatibility = {
      'A_pos': ['A_pos', 'A_neg', 'O_pos', 'O_neg'],
      'A_neg': ['A_neg', 'O_neg'],
      'B_pos': ['B_pos', 'B_neg', 'O_pos', 'O_neg'],
      'B_neg': ['B_neg', 'O_pos'],
      'AB_pos': ['A_pos', 'A_neg', 'B_pos', 'B_neg', 'AB_pos', 'AB_neg', 'O_pos', 'O_neg'],
      'AB_neg': ['A_neg', 'B_neg', 'AB_neg-', 'O_neg'],
      'O_pos': ['O_pos', 'O_neg'],
      'O_neg': ['O_neg']
    };
    return compatibility[bloodType];
  }