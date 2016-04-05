var express = require('express'),
    path=  require('path'),
    app = express(),
    rootpath = path.normalize(__dirname + '/../'),
    events = require('./eventsController'),
    bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(rootpath + '/app'));
app.get('/',function(req,res){
   res.send("OK");
});
app.get('/data/event/:id',events.get);
app.post('/data/event/:id',events.save);
app.listen(8000);
console.log('Server is Up ...');