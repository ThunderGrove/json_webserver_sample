var express=require('express');
var router=express.Router();

var cars={
  zero:[{
    producer:"Volvo",
    model:"480"
  }],
  one:[{
    producer:"Volvo",
    model:"440"
  }],
  two:[{
    producer:"Volvo",
    model:"460"
  }]};

var carsJSON=JSON.stringify(cars);

var users={
  0:[{
    username:"johndoe",
    name:"john"
  }],
  1:[{
    username:"janedoe",
    name:"Jane"
  }]};

var usersJSON=JSON.stringify(users);

var rented={
  0:[2,1],
  1:[1,0]
};

var rentedJSON=JSON.stringify(rented);

/* GET home page. */
router.get('/',function(req,res,next){
  res.render('index',{title:'JSON website sample',carsJSON:carsJSON,usersJSON:usersJSON,rentedJSON:rentedJSON});
});

module.exports=router;
