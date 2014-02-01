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
var hoge = mongoose.model("Hoge");

exports.mongodbtest = function(req, res) {

    hoge.find(function(err, docs) {
        res.send(docs);
    });

}
