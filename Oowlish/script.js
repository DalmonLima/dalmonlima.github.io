
function toggleMenuControl(){
  $('#menu-toggler a').click(function() {
    $('.menu-mobile').addClass('open');
    $('#cover').css("display", "block");
  });

  $('#close-menu').click(function() {
    $('.menu-mobile').removeClass('open');
    $('#cover').css("display", "none");
  });
}


toggleMenuControl();
