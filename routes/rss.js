/**
 * Get RSS.
 */

exports.rss20 = function(req, res) {
    res.render("rss20", {
        channel: {
            title: "たいとる",
            link: "http://www.example.com/hoge",
            description: "しょうさい"
        },
        items: [{
            title: "あいてむ1",
            link: "http://www.example.com/item1"
        }, {
            title: "あいてむ2",
            link: "http://www.example.com/item2"
        }]
    });
}
