/**
 * MongoDBのデータを取得してみる
 */

var mongoose = require('mongoose');
var hogeSchema = new mongoose.Schema({
    text: String,
    id: String
});
mongoose.model("Hoge", hogeSchema);
mongoose.connect("mongodb://localhost/hoge");
var Hoge = mongoose.model("Hoge");

exports.mongodbtest = function(req, res) {

    var h = new Hoge();
    h.text = "testData";
    h.id = "testId";
    h.save(function(err) {
        if (err) { console.log(err); }
    });
    
    Hoge.find({}, function(err, docs) {
        res.send(docs);
    });
};
