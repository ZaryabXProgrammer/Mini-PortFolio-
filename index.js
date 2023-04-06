<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

$(window).on('scroll', function() {
  var triggerElement = $('.trigger-element');
  var triggerElementTop = triggerElement.offset().top;
  var triggerElementBottom = triggerElementTop + triggerElement.outerHeight();
  var scrollTop = $(window).scrollTop() + $(window).height();

  if (scrollTop > triggerElementTop && scrollTop < triggerElementBottom) {
    triggerElement.addClass('animate__animated animate__fadeIn');
  }
});

