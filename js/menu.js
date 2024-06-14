$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu, .header__list, .overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.overlay').click(function() {
    $('.header__burger, .header__menu, .header__list, .overlay').removeClass('active');
    $('body').removeClass('lock');
  });
});