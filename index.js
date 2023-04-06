<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(window).on('scroll', function() {
  var triggerElement = $('.trigger-element');
  var triggerElementTop = triggerElement.offset().top;
  var triggerElementBottom = triggerElementTop + triggerElement.outerHeight();
  var scrollTop = $(window).scrollTop() + $(window).height();

  if (scrollTop > triggerElementTop && scrollTop < triggerElementBottom) {
    triggerElement.addClass('animate__animated animate__fadeIn');
  }
});


// < !--Example JavaScript code for animating the container element on load-- >

  $(document).ready(function() {
    // Add animate__animated class to the container element on load
    $('.my-container').addClass('animate__animated');
  });


