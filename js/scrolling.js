$(function () { // wait for document ready
  
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1,   {x: "-20%"})	
    .to("#js-slideContainer", 1,   {x: "-40%"})
    .to("#js-slideContainer", 1,   {x: "-60%"})
    //.to("#js-slideContainer", 1,   {x: "-80%"})
    
  
    // create scene to pin and link animation
    impactado = new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      .addIndicators()
      .addTo(controller);
      alert(impactado.scrollOffset());
    
    
  });
  $(function () { // wait for document ready
    
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer2", 1,   {x: "-20%"})	
    .to("#js-slideContainer2", 1,   {x: "-40%"})
    .to("#js-slideContainer2", 1,   {x: "-60%"})
    .to("#js-slideContainer2", 1,   {x: "-80%"})
  
  
    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper2",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper2")
      .setTween(horizontalSlide)
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    
    
    
  });
  $(function () { // wait for document ready
    
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer3", 1,   {x: "-20%"})	
    //.to("#js-slideContainer3", 1,   {x: "-20%"})
    //.to("#js-slideContainer3", 1,   {x: "-60%"})
    //.to("#js-slideContainer3", 1,   {x: "-80%"})
  
  
    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper3",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper3")
      .setTween(horizontalSlide)
      //.addIndicators()
      .addTo(controller);
    
    
    
  });
  $(function () { // wait for document ready
    
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer4", 1,   {x: "-25%"})	
    //.to("#js-slideContainer4", 1,   {x: "-20%"})
    //.to("#js-slideContainer3", 1,   {x: "-60%"})
    //.to("#js-slideContainer3", 1,   {x: "-80%"})
  
  
    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper4",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper4")
      .setTween(horizontalSlide)
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    
    
    
  });

  /////////////////////// Pez
  const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: 50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x: window.innerWidth, y: -250}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane",1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller1 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller1)