$(function () { // wait for document ready
  
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1,   {x: "-20%"})	
    .to("#js-slideContainer", 1,   {x: "-40%"})
    .to("#js-slideContainer", 1,   {x: "-60%"})
    //.to("#js-slideContainer", 1,   {x: "-80%"})
    
  
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
      //.addIndicators() // add indicators (requires plugin)
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