const express = require('express')
const bodyParser = require('body-parser') //parsing the request
require('./dbConnection.js');
const app = express()  //framework
var users=require('./routes/users');
var shoes=require('./routes/shoes');
var watch1=require('./routes/watch1');
var person=require('./routes/person');

//var id=1;
// var tops=[
//       {
//         "s":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtwkjAozsVESGTLWNhkw7i0V_J4BoVdhtefNPRVYKlsgZEnbbz",
//         "name": "B1",
//         "price":600,
//       },
//     ]
app.use(bodyParser.json());

app.use("*",(req,res,next)=>{                    //use function is used to access all the functions
    console.log('Middleware is called');
    res.setHeader('Access-Control-Allow-Origin',"*")//allow all the cross origins//to eliminate the cors//format maintain
    res.setHeader('Access-Control-Allow-Headers',"Content-Type,Access-Control,Allow-Header,Authorization,X-Requested-With")
    res.setHeader('Access-Control-Allow-Methods',"*")
    next();//go to next function otherwise n times it will print
})

app.use('/users',users) //any request users is a handler
app.use('/shoes',shoes)
app.use('/watch1',watch1)
app.use('/person',person)

app.get('/', function (req, res) {
  res.send('Hello World!!!!!!!!')
  console.log("hello");
})

app.get('/sh', function (req, res) {
  res.send('welcome')
})

/*app.get('/top1', function (req, res) {
    res.send(tops)
})  */ 
 
app.listen(3009)
        