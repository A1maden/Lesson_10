$(".row1_zoom").click(function () 
{
    if ($(".gallery_row1-bigimg").is(":visible")) {
        $(".gallery_row1-bigimg").fadeOut(600);
    }
    else {
        $(".gallery_row1-bigimg").fadeIn(600);
    };
});