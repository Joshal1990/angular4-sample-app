const express = require('express');
var path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/angular-CRUD-app'));
console.log('dirname: '+__dirname+'/dist/angular-CRUD-app');
app.listen(process.env.PORT || 8080);

//Path location starategy

app.get('/*',function(req,res){
    console.log('req '+req);
    console.log('res '+res);
    console.log('path join: '+path.join(__dirname+'/dist/angular-CRUD-app/index.html'));
  res.sendFile(path.join(__dirname+'/dist/angular-CRUD-app/index.html'));
});

console.log('console listening!!');

