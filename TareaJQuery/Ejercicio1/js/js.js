$(document).ready(function() {
    $("#textbox").keyup(function() {
        var tvalue = $(this).val();
        console.log(tvalue);
    }).keyup();  // Trigger the event initially
});
