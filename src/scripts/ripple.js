(function(window, $) {
    'use strict';

    var rippleSelector = '.button, .menu li';

    $(rippleSelector).on('click', function(event) {
        var $div = $('<div/>'),
            btnOffset = $(this).offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

        $div.addClass('ripple-effect');

        var $ripple = $('.ripple-effect');

        var color = {
            primary: '#0062b4',
            accent: '#ffa726',
            grey: '#bdbdbd',
            white: '#ffffff'
        };

        var backgroundColor = color.white;

        if ($(this).is('li')) {
          backgroundColor = color.primary;
        }

        if ($(this).hasClass('button-flat')) {
          if ($(this).hasClass('button-primary')){
            backgroundColor = color.primary;
          }
          if ($(this).hasClass('button-accent')){
            backgroundColor = color.accent;
          }
          if ($(this).hasClass('button-default')){
            backgroundColor = color.grey;
          }
        }

        $ripple.css('height', $(this).height());
        $ripple.css('width', $(this).height());
        $div.css({
                top: yPos - ($ripple.height() / 2),
                left: xPos - ($ripple.width() / 2),
                background: backgroundColor
            })
            .appendTo($(this));

        window.setTimeout(function() {
            $div.remove();
        }, 2000);
    });
})(window, jQuery);
