 var express    = require("express");
 var mysql      = require('mysql');
 var app = express();
 var connection = mysql.createConnection
 ({
   host     : 'localhost',
   user     : 'root',
   password : '2016',
   database : 'mydatabase'
 });

app.post('/post', function (req, res) 
 {
  console.log(req.body);
   //users= {user_id:req.body.user_id,user_name:req.body.user_name};
   connection.query('UPDATE user SET user_name = ? Where user_id = ?',["req.body.user_name",req.body.user_id],function (err, result) //update table record
  {
    if (err) throw err;
    console.log('Changed ' + result.changedRows + ' rows');
  });
   
       /*connection.query('SELECT *  from user', function(err, rows)//retrive the data fron user table
        {
                connection.end();
                if (!err)
                {
                    res.end(JSON.stringify(rows));
                }
               else
               console.log('Error while performing Query.');
        });*/
  });

//});

 app.get("/get/:user_id",function(req, res)
  {
    console.log(req.params.user_id);
    connection.query('select * from user Where user_id = ?',[req.params.user_id],function (err, result) 
    {
        if (err) throw err;
        res.json(result);
   });

 });
  app.listen(9090);
  console.log("running server 9090");
