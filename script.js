
function toggleMenuControl(){
  $( '#menu-toggler a' ).click(function() {
    $( '.menu-mobile' ).addClass('open');
    $( '#cover' ).css("display", "block");
  });

  $( '#close-menu' ).click(function() {
    $( '.menu-mobile' ).removeClass('open');
    $( '#cover' ).css("display", "none");
  });
}

// function seePortfolio(){
//   $( '.portfolio-card' ).mouseover(function(){
//     var selectedProject = $(this);
//     selectedProject.find( '.card-info' ).css( "display", "block" );
//     selectedProject.mouseleave(function(){
//       selectedProject.find( '.card-info' ).css( "display","none" )
//     });
//   });
// }


toggleMenuControl();
// seePortfolio();
