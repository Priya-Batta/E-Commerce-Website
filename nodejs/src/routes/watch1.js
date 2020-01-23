var express=require('express');
const router=express.Router();
const UsersModel=require('../models/watch1');

router.get('',(req,res)=>{
    UsersModel.findUsers(req, (error,response)=>{
        if(error) console.log("error is : ",error);
        if(response) {
            console.log("Success response is : ",response); 
            res.send(response);
        }  
});
});

router.post('/add',(req, res)=>{
    UsersModel.addUsers(req,(error,response)=>{
        if(error) console.log("error is : ",error);
        if(response) {
            console.log("Success response is : ",response); 
            res.send(response);}
});
});


module.exports = router;