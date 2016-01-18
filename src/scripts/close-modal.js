(function($) {

    $('html').click(function() {
        var elements = $('.bottom-sheet, .dialog');
        if (elements) {
          $('.bottom-sheet, .dialog').removeClass('show').addClass('hide');
        }
    });

    $('.bottom-sheet-show').click(function() {
        var id = '#' + $(this).attr('name')
        $(id).removeClass('hide').addClass('show');
    });

    $('.bottom-sheet, .dialog').click(function(event) {
        event.stopPropagation();
    });
})(jQuery);
