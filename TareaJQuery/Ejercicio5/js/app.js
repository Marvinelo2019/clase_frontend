$(document).ready(function() {
    $("p").mouseup(function() {
        $(this).append(" Mouse up.");
    }).mousedown(function() {
        $(this).append(" Mouse down");
    });
});
