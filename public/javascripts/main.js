/**
 * JavaScript
 */

$(function(){
    function getData(){
        var successFn = function(data){
            var div = $("#resultArea");
            var flagments = "";
            for(var i = 0, n = data.length; i < n; i++) {
                var datum = data[i];
                flagments += "Text: " + datum.text + ", ID: " + datum.id + "<br>";
            }
            div.html(flagments);
        };
        
        $.ajax({
            async: true,
            data: {
                action: "load"
            },
            dataType: "json",
            success: successFn,
            type: "GET",
            url: "mongodbtest"
        });
    }
    
    // attach events
    $("#btnRead").on("click", function(event){
        getData();
    });
});
