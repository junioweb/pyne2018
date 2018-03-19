var $meuMenu = $('#masthead-header');
var offset = $meuMenu.offset().top;

if ($(window).width() >= 768) {
    $('#logo-secundaria').hide();
}

$(document).on('scroll', function () {
    if ($(window).width() < 768) { return; }

    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');

        $('#logo').fadeOut('fast', function() {
          $('#logo').hide();
        });

        $('#logo-secundaria').fadeIn('fast', function() {
          $('#logo-secundaria').show();
        });
    } else {
        $meuMenu.removeClass('fixar');

        $('#logo').show();
        $('#logo-secundaria').hide();
    }
});

$('#menu-principal a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset
  }, 500);
});
