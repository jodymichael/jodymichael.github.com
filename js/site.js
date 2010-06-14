$(document).ready(function() {
  $.backstretch($(document.body).attr('data-background-image'));

  $("#testimonial-list li").each(function() {
    $(this).html($(this).html().replace(/<br\/?>/gi,'<div class="spacer">&nbsp;</div>')); 
  });
  
  $("#section-navigation-wrapper").tabs({ 
    fx: { opacity: 'toggle' }, 
    select: function(event, ui) {
      $(ui.tab).blur();
    },
    show: function(event, ui) {
      $("#testimonial-list").css({ 'height': $("#testimonial-list li").height() });
      $("#testimonial-list ul").cycle(0);
    }
  });
  
  $(".contact article a, .media article a").each(function() {
    $(this).attr('target', '_blank');
  })
    
  $("#testimonial-list ul").cycle({
    prev:   '#prev', 
    next:   '#next', 
    timeout: 0,
    nowrap: true,
    cleartype:  true,
    cleartypeNoBg:  true,
    after: function(inElement, outElement, options) {
      $("#next, #prev").removeClass('disabled');
      if ($("#testimonial-list li").length-1 == options.currSlide) { $("#next").addClass('disabled'); }
      if (0 == options.currSlide) { $("#prev").addClass('disabled'); }
    }
  }); 
});