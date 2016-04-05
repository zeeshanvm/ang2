/**
 * Created by raza on 4/5/2016.
 */
var fs = require('fs');

module.exports.get = function(req,res){
    console.log(req.params.id);

    var event = fs.readFileSync('../app/data/event/'+req.params.id + '.json','utf-8');
    res.send(event)
};
module.exports.save = function(req,res){
    var event = req.body;
    fs.writeFileSync('./app/data/event/' +req.params.id+'.json',JSON.stringify(event));
    res.send(event);

};