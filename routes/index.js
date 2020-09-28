var express=require('express');
var router=express.Router();

var cars={
  "zero":[{
    "producer":"Volvo",
    "model":"480"
  }],
  "one":[{
    "producer":"Volvo",
    "model":"440"
  }],
  "two":[{
    "producer":"Volvo",
    "model":"460"
  }]};

var carsJSON=JSON.stringify(cars);

var users={
  "zero":[{
    username:"johndoe",
    name:"John"
  }],
  "one":[{
    username:"janedoe",
    name:"Jane"
  }],
  "two":[{
    username:"harrypotter",
    name:"Harry"
  }]};

var usersJSON=JSON.stringify(users);

var rented={
  "zero":[2,1],
  "one":[1,0]
};

var rentedJSON=JSON.stringify(rented);

/* GET home page. */
router.get('/',function(req,res,next){
  res.render('index',{title:'JSON website sample',carsJSON:carsJSON,usersJSON:usersJSON,rentedJSON:rentedJSON});
});

module.exports=router;
