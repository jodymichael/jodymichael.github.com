$(document).ready(function() {
 $.backstretch($(document.body).attr('data-background-image'));
 
 $("#section-navigation-wrapper").tabs({ 
  fx: { opacity: 'toggle' }, 
  select: function(event, ui) {
   $(ui.tab).blur();
  }
 });
 
 $(".contact article a, .media article a").each(function() {
  $(this).attr('target', '_blank');
 })
});