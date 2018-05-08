console.log('JS running');

//amend the below so the nav bar works on click
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// change this to vanilla javascript - function to smooth the top nav link clicks
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    const $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
});
