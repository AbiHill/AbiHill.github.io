console.log('JS running');

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// THE BELOW FUNCTIONS DO AUTO SCROLL ON THE PAGE
// function pageScroll() {
//   window.scrollBy(0,1);
//   let scrolldelay = setTimeout(pageScroll,10);
// }
//
//
// pageScroll();

// var x = 1; //y-axis pixel displacement
// var y = 1; //delay in milliseconds
//
// setInterval(function() {
//   window.scroll(0, x);
//   x = x + 0.2; //if you want to increase speed simply increase increment interval
// }, y);
