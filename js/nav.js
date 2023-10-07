
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    // $("#toggle-controls").toggleClass("hide-ctrl");
    // $("#toggle-data").toggleClass("hide-ctrl");

    $("#mainListDiv").fadeIn();

});