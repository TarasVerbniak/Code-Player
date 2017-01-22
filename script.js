function updateOutput() {
    $("iframe").contents().find("html").html(
        "<html><head><style type='text/css'>" +
        $("#cssPanel").val() +
        "</style></head><body>" +
        $("#htmlPanel").val() +
        "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".toggleButton").hover(function () {
    $(this).addClass("highlightedButton");
}, function () {
    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelID = $(this).attr("id") + "Panel";
    $("#" + panelID).toggleClass("hidden");
    var numberOfActiveClass = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberOfActiveClass) - 15);
});

$("textarea").height($(window).height()-$("#header").height()-15);
$("iframe").height($(window).height()-$("#header").height()-15);

$(".panel").width(($(window).width()/2) - 13);

updateOutput();

$("textarea").on('change keyup paste', function () {
    updateOutput();
});