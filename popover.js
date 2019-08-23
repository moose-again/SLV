$(document).ready(function () {
    var clicked = 0;
    $('a.active, a.disabled').on('click', function (e) {
        clicked++;
        if (clicked === 2) {
            $('[data-toggle="popover"]').popover();
        } else {
            return false;
        }

        $(this).on('hidden.bs.popover', function () {
            clicked = 0; 
            $('[data-toggle="popover"]').popover('dispose');
        });
    });
});