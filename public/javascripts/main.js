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
        $("#inputArea").show("blind");
    }
    
    function hideInputArea(){
        $("#inputArea").hide();
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
    
    // generate jQuery UI button and attach event
    $("#btnRead").button().on("click", function(event){
        getData();
    });
    $("#btnAdd").button().on("click", function(event){
        showInputArea();
    });
    $("#btnSubmit").button().on("click", function(event){
        addData();
    });
});
