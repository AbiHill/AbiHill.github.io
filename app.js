$( document ).ready(function() {
  console.log('JS Working');

  //Dom Elements
  const $x = $('.icon');




  //mobile x click
  $x.on('click', topNavToggle);

  function topNavToggle() {
    console.log('topnav clicked');
    const $topnav = $('#myTopnav');
    if ($topnav.className === ' topnav') {
      $topnav.className += ' responsive';
    } else {
      $topnav.className = 'topnav';
    }
  }









//   // change this to vanilla javascript - function to smooth the top nav link clicks
//   $(document).ready(function(){
//     $('a[href^="#"]').on('click',function (e) {
//       e.preventDefault();
//       var target = this.hash;
//       const $target = $(target);
//       $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//       }, 900, 'swing', function () {
//         window.location.hash = target;
//       });
//     });
//   });
//
});
