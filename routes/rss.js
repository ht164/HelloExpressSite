/**
 * Get RSS.
 */

exports.rss20 = function(req, res) {
    res.render("rss20", {
        channel: {
            title: "たいとる",
            link: "http://www.example.com/hoge",
            description: "しょうさい"
        }
    });
}
