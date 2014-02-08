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

    var actions = {
        "put": function() {
            var text = req.body.text;
            var id = req.body.id;
            var h = new Hoge({
                text: text,
                id: id
            });
            h.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Success!");
                }
            });
        },
        "load": function() {
            Hoge.find({}, function(err, docs) {
                res.send(docs);
            });
        }
    };
    var actionName = req.query.action;
    console.log("actionName: " + actionName);
    actions[actionName]();
};
