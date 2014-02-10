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
    
    function showInputArea(){
        $("#inputArea").toggleClass("hide", false);
    }
    
    function hideInputArea(){
        $("#inputArea").toggleClass("hide", true);
    }
    
    function addData(){
        $.ajax({
            async: true,
            data: {
                text: $("#strText").val(),
                id: $("#strId").val()
            },
            type: "POST",
            url: "mongodbtest?action=put"
        }).done(function(){
            hideInputArea();
        });
    }
    
    // attach events
    $("#btnRead").on("click", function(event){
        getData();
    });
    $("#btnAdd").on("click", function(event){
        showInputArea();
    });
    $("#btnSubmit").on("click", function(event){
        addData();
    });
});
