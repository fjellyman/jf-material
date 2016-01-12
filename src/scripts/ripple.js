(function (window, $) {

  $(function() {
    $('.button').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());

      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2)
        })
        .appendTo($(this));

      if ($(this).hasClass('button-flat') && $(this).hasClass('button-default')) {
        $div
          .css({
            background: '#e0e0e0'
          })
          .appendTo($(this));
      }

      if ($(this).hasClass('button-flat') && $(this).hasClass('button-primary')) {
        $div
          .css({
            background: '#005195'
          })
          .appendTo($(this));
      }

      if ($(this).hasClass('button-flat') && $(this).hasClass('button-accent')) {
        $div
          .css({
            background: '#ff9800'
          })
          .appendTo($(this));
      }

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    }).is('button-primary', function () {
      console.log('is button-primary');
    });
  });
})(window, jQuery);
