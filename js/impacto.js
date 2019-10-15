//document.documentElement.scrollTop = document.body.scrollTop = 1000;
//alert(document.documentElement.scrollTop);
//document.getElementsByTagName("section").pageXOffset = 1000;
//alert(document.getElementsByTagName("section").pageXOffset);


//var last_known_scroll_position = 0;
//var ticking = false;

function doSomething(scroll_pos) {
  // Hacer algo con la posición del scroll
  console.log(last_known_scroll_position);
}
/*
window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }
    ticking = true;
  });*/

  /*
  $( "scroll-page.page-2" ).scrollLeft( 300 );
var lastScrollLeft = 0;
$("#sec_2").scroll(function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {

            var documentScrollLeft = $("#sec_2").scrollLeft();
            if (lastScrollLeft != documentScrollLeft) {
                console.log(lastScrollLeft);
                lastScrollLeft = documentScrollLeft;
            }

            ticking = false;
        });
        ticking = true;
    }
});
*/
$(function () { // wait for document ready
  
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1,   {x: "-20%"})	
    .to("#js-slideContainer", 1,   {x: "-40%"})
    .to("#js-slideContainer", 1,   {x: "-60%"})
    .to("#js-slideContainer", 1,   {x: "-80%"})
  
  
    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    
    
    
  });