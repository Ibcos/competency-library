$(function () {
    //initialise all popovers
    $('[data-toggle="popover"]').popover();

    //create new data-timeout attribute to auto close popover
    $('[data-toggle="popover"][data-timeout]').on('shown.bs.popover', function() {
        this_popover = $(this);
        setTimeout(function () {
            this_popover.popover('hide');
        }, $(this).data("timeout"));
    });
})