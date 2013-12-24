$(function() {
  
  var
  number = $('.container > section').length;
  
  $('.container').width(number*100 + '%');
  
  $('.about-btn').click(function() {
    var pos = $(this).index()*-100;
    $('.container').animate({'left': pos+'%'});
  });
  $('.photo-btn').click(function() {
    var pos = $(this).index()*-100;
    $('.container').animate({'left': pos+'%'})
  });
  $('.design-btn').click(function() {
    var pos = $(this).index()*-100;
    $('.container').animate({'left': pos+'%'})
  });
  
  $('.number').text(100);
  
});