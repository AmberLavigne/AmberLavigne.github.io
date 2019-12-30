
$(document).on('click',".sidebar-nav > ul > li > a",function () {
    $(this).next().slideToggle(200);
});