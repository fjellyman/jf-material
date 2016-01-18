(function($) {
    'use strict';

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.context-menu').length) {
            $('.menu').removeClass('show').addClass('hide');
        }
    });

    $('.context-menu').children('i').click(function() {
        var contextMenu = $(this).parent();
        contextMenu.children('.menu')
            .toggleClass('show')
            .toggleClass('hide');
    });
})(jQuery);
