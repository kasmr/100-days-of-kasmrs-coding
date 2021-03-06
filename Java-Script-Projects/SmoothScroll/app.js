function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  //If you want to use the code with a navbar I would also recommend to subtract your navbar-height from the targetPosition variable.
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var box1 = document.querySelector(".box1");

section1.addEventListener("click", function() {
  smoothScroll(".section2", 1300);
});
section2.addEventListener("click", function() {
  smoothScroll(".box1", 1300);
});

// SimpleOne
// scrollPage(divClass){
//     var target = document.querySelector(divClass);
//     var targetLeftposition = target.getBoundingClientRect().left;
//     var targetTopposition = target.getBoundingClientRect().top;
//     window.scrollTo({
//      top: targetTopposition,
//      left: targetLeftposition,
//      behavior: 'smooth'
//     });
//    }

//    scrollPage(".section2");

//Another one

// // universal scroll //
// $(function() {
//   // This will select everything with the class smoothScroll
//   // This should prevent problems with carousel, scrollspy, etc...
//   $('.smoothScroll').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       console.log(this.hash);
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000); // The number here represents the speed of the scroll in milliseconds
//         return false;
//       }
//     }
//   });
// });

// // Change the speed to whatever you want
// // Personally i think 1000 is too much
// // Try 800 or below, it seems not too much but it will make a difference
