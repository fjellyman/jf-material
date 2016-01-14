(function($) {

    $('html').click(function() {
        var elements = $('.bottom-sheet, .dialog');
        console.log('test-1', elements.hasClass('show'));
        if (elements) {
          $('.bottom-sheet, .dialog').removeClass('show').addClass('hide');
        }
    });

    $('.bottom-sheet-show').click(function() {
        var id = '#' + $(this).attr('name')
        console.log('test-2', $(id).hasClass('show'));
        $(id).removeClass('hide').addClass('show');
    });

    $('.bottom-sheet, .dialog').click(function(event) {
        event.stopPropagation();
    });
})(jQuery);
