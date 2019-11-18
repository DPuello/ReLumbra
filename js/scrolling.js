var shapes1 = [
  {
      d: "M0,516.09V1200H375c-41.62-11-156.33,19.35-200-107C117.13,925.57,187.5,575,0,516.09Z"
  },
  {
      d: "M0,516.09V1200H375c-41.62-11-156.33,19.35-200-107C117.13,925.57,187.5,552.09,0,516.09Z"
  },
  {
      d: "M0,516.09V1200H375c-46.38-25.44-156.33,19.35-200-107C117.13,925.57,187.5,552.09,0,516.09Z"
  }
];
var morph1 = anime({
  targets: '.cls-1',
  d: [
      {value: shapes1[0].d},
      {value: shapes1[1].d},
      {value: shapes1[2].d}
  ],
  duration: 5000,
  direction: 'alternate',
  autoplay: true,
  easing: 'easeInOutQuad',
  elasticity: 100,
  loop: true
});

// SVG 2
var shapes2 = [
  {
    d: "M0,410.8V0H375C333.38,6.59,198.24-16.84,175,64.27,147,162,187.5,375.42,0,410.8Z"
},
{
    d: "M0,410.8V0H375C333.38,6.59,198.24-16.84,175,64.27,147,162,193,392,0,410.8Z"
},
{
    d: "M0,410.8V0H375C365,13,198.24-16.84,175,64.27,147,162,193,392,0,410.8Z"
}
];
var morph2 = anime({
  targets: '.cls-2',
  d: [
      {value: shapes2[0].d},
      {value: shapes2[1].d},
      {value: shapes2[2].d}
  ],
  duration: 5000,
  direction: 'alternate',
  autoplay: true,
  easing: 'easeInOutQuad',
  elasticity: 100,
  loop: true
});

// SVG 3
var shapes3 = [
  {
    d: "M1920,687v513H1775C1881,1173,1907,975,1920,687Z"
},
{
    d: "M1920,687v513H1775C1881,1173,1887,956,1920,687Z"
},
{
    d: "M1920,687v513H1775C1907,1185,1887,956,1920,687Z"
}
];
var morph3 = anime({
  targets: '.cls-3',
  d: [
      {value: shapes3[0].d},
      {value: shapes3[1].d},
      {value: shapes3[2].d}
  ],
  duration: 5000,
  direction: 'alternate',
  autoplay: true,
  easing: 'easeInOutQuad',
  elasticity: 100,
  loop: true
});


$(function () { // Seccion Impacto
  
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
      //.addIndicators()
      .addTo(controller);

    
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: 0.5,
      duration: "500%"
    })
    .on('enter', function () { // Para modificar el borde //
      // Distancia superior
      $(".cls-1").css({"fill":"#027368"});
      $(".cls-2").css({"fill":"#027368"});
      $(".cls-3").css({"fill":"#027368"});
      //AjusteBorde("delfincito", "Capa_1", "Capa_2");
      $("#delfincito").attr("src", "images/menu/d3.jpg");
    $("#impacto").css({"background-color":"#04c4c5"});
    $("#impacto").css({"border-color":"#a7c8f2"});
    $("#patito").attr("src", "images/menu/p3.jpg");
    $("#quees").css({"background-color":"#04c4c5"});
    $("#quees").css({"border-color":"#a7c8f2"});
    $("#tortica").attr("src", "images/menu/g3.jpg");
    $("#graficas").css({"background-color":"#04c4c5"});
    $("#graficas").css({"border-color":"#a7c8f2"});
    $("#recicla").attr("src", "images/menu/r3.jpg");
    $("#alternativas").css({"background-color":"#04c4c5"});
    $("#alternativas").css({"border-color":"#a7c8f2"});
    $("#manita").attr("src", "images/menu/m3.jpg");
    $("#ayudar").css({"background-color":"#04c4c5"});
    $("#ayudar").css({"border-color":"#a7c8f2"});
    })
    //.addIndicators()
      //.setTween(color)
      .addTo(controller);
    
    
  });
  
  $(function () { // Seccion QueEs
    
    var controller = new ScrollMagic.Controller();
    
    var horizontalSlide = new TimelineMax()
    // animate panels
    
    .to("#js-slideContainer3", 1,   {x: "-20%"})	
    //.to("#js-slideContainer3", 1,   {x: "-20%"})
    //.to("#js-slideContainer3", 1,   {x: "-60%"})
    //.to("#js-slideContainer3", 1,   {x: "-80%"})
  
    var timeline = new TimelineMax();
    // create scene to pin and link animation
    Escena = new ScrollMagic.Scene({
      triggerElement: "#js-wrapper3",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin("#js-wrapper3")
      .setTween(horizontalSlide)
      //.addIndicators()
      .addTo(controller);
    

    
  });
  $(function () { // Seccion Como ayudar
    
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer4", 1,   {x: "-18%"})	
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
    
    /// Seccion Alternativas ///
    new ScrollMagic.Scene({
      triggerElement: "#Alternativas",
      triggerHook: 0.5,
      duration: "100%"
    })
    .on('enter', function () { // Para modificar el borde //
      // Distancia superior
      $(".cls-1").css({"fill":"#027368"});
      $(".cls-2").css({"fill":"#027368"});
      $(".cls-3").css({"fill":"#027368"});
      //AjusteBorde("recicla", "Capa_1", "Capa_2");
      $("#delfincito").attr("src", "images/menu/d3.jpg");
    $("#impacto").css({"background-color":"#04c4c5"});
    $("#impacto").css({"border-color":"#a7c8f2"});
    $("#patito").attr("src", "images/menu/p3.jpg");
    $("#quees").css({"background-color":"#04c4c5"});
    $("#quees").css({"border-color":"#a7c8f2"});
    $("#tortica").attr("src", "images/menu/g3.jpg");
    $("#graficas").css({"background-color":"#04c4c5"});
    $("#graficas").css({"border-color":"#a7c8f2"});
    $("#recicla").attr("src", "images/menu/r3.jpg");
    $("#alternativas").css({"background-color":"#04c4c5"});
    $("#alternativas").css({"border-color":"#a7c8f2"});
    $("#manita").attr("src", "images/menu/m3.jpg");
    $("#ayudar").css({"background-color":"#04c4c5"});
    $("#ayudar").css({"border-color":"#a7c8f2"});
    })
    
      //.setTween(color)
      .addTo(controller);


    /// Seccion Graficas ///
      new ScrollMagic.Scene({
        triggerElement: "#Graficas",
        triggerHook: 0.5,
        duration: "100%"
      })
      .on('enter', function () { // Para modificar el borde //
        // Distancia superior
        $(".cls-1").css({"fill":"#02628c"});
      $(".cls-2").css({"fill":"#02628c"});
      $(".cls-3").css({"fill":"#02628c"});
        //AjusteBorde("tortica", "Capa_1", "Capa_2");
        $("#delfincito").attr("src", "images/menu/d2.jpg");
    $("#impacto").css({"background-color":"#01628a"});
    $("#impacto").css({"border-color":"#faa121"});
    $("#patito").attr("src", "images/menu/p2.jpg");
    $("#quees").css({"background-color":"#01628a"});
    $("#quees").css({"border-color":"#faa121"});
    $("#tortica").attr("src", "images/menu/g2.jpg");
    $("#graficas").css({"background-color":"#01628a"});
    $("#graficas").css({"border-color":"#faa121"});
    $("#recicla").attr("src", "images/menu/r2.jpg");
    $("#alternativas").css({"background-color":"#01628a"});
    $("#alternativas").css({"border-color":"#faa121"});
    $("#manita").attr("src", "images/menu/m2.jpg");
    $("#ayudar").css({"background-color":"#01628a"});
    $("#ayudar").css({"border-color":"#faa121"});
      })
      
        //.setTween(color)
        .addTo(controller);



    /// Seccion Como Ayudar ///
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper4",
      triggerHook: 0.5,
      duration: "400%"
    })
    .on('enter', function () { // Para modificar el borde //
      // Distancia superior
      $(".cls-1").css({"fill":"#faa121"});
      $(".cls-2").css({"fill":"#faa121"});
      $(".cls-3").css({"fill":"#faa121"});
      AjusteBorde("ayudar", "Capa_1", "Capa_2");
      $("#delfincito").attr("src", "images/menu/d1.jpg");

    $("#impacto").css({"background-color":"#9aa626"});
    $("#impacto").css({"border-color":"#bece30"});
    $("#patito").attr("src", "images/menu/p1.jpg");

    $("#quees").css({"background-color":"#9aa626"});
    $("#quees").css({"border-color":"#bece30"});
    $("#tortica").attr("src", "images/menu/g1.jpg");

    $("#graficas").css({"background-color":"#9aa626"});
    $("#graficas").css({"border-color":"#bece30"});
    $("#recicla").attr("src", "images/menu/r1.jpg");

    $("#alternativas").css({"background-color":"#9aa626"});
    $("#alternativas").css({"border-color":"#bece30"});
    $("#manita").attr("src", "images/menu/m1.jpg");

    $("#ayudar").css({"background-color":"#9aa626"});
    $("#ayudar").css({"border-color":"#bece30"});
    })
    
      //.setTween(color)
      .addTo(controller);

      /// Seccion Que Es ///
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper3",
      triggerHook: 0.5,
      duration: "200%"
    })
    .on('enter', function () { // Para modificar el borde //
      // Distancia superior
      $(".cls-1").css({"fill":"#faa121"});
      $(".cls-2").css({"fill":"#faa121"});
      $(".cls-3").css({"fill":"#faa121"});
      AjusteBorde("patito", "Capa_1", "Capa_2");
      $("#delfincito").attr("src", "images/menu/d1.jpg");
    $("#impacto").css({"background-color":"#9aa626"});
    $("#impacto").css({"border-color":"#bece30"});
    $("#patito").attr("src", "images/menu/p1.jpg");
    $("#quees").css({"background-color":"#9aa626"});
    $("#quees").css({"border-color":"#bece30"});
    $("#tortica").attr("src", "images/menu/g1.jpg");
    $("#graficas").css({"background-color":"#9aa626"});
    $("#graficas").css({"border-color":"#bece30"});
    $("#recicla").attr("src", "images/menu/r1.jpg");
    $("#alternativas").css({"background-color":"#9aa626"});
    $("#alternativas").css({"border-color":"#bece30"});
    $("#manita").attr("src", "images/menu/m1.jpg");
    $("#ayudar").css({"background-color":"#9aa626"});
    $("#ayudar").css({"border-color":"#bece30"});
    })
    //.setClassToggle('.cls-1', 'amarillo')
      //.setTween(color)
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
//.addIndicators()
.setPin(".animation")
.addTo(controller1);


function BordeSeccion1(){
  var forma = [
  {
      d: "M310.2,1200H0V340.59c16.46,0,114.29,26.53,123.36,101,12.78,104.91,42.34,347.66,46,450.06C173.07,993.67,226.53,1136.51,310.2,1200Z"
  },
  {
      d: "M310.2,1200H0V340.59c16.46,0,100,0,123.36,101,23.82,103,31.75,343.94,46,450.06C183,992.82,240.22,1115.53,310.2,1200Z"
  },
  {
      d: "M310.2,1200H0V340.59c16.46,0,77.55,0,123.36,101,43.66,96.24,42,343.94,56.24,443.94C194,986.59,224.49,1136.51,310.2,1200Z"
  }
  ];
  return forma;
}
function ActualizarBorde(Bnum, shapes, tiempo){
  morph = anime({
    targets: Bnum,
    d: [
        {value: shapes[0].d},
        {value: shapes[1].d},
        {value: shapes[2].d}
    ],
    duration: tiempo,
    direction: 'alternate',
    autoplay: true,
    easing: 'easeInOutQuad',
    elasticity: 100,
    loop: true
  });
}

function AjusteBorde(seccion, capa1, capa2){
  var distanciaTop = document.getElementById("redondo").offsetTop - document.getElementById("redondo").offsetHeight/2
      + document.getElementById(seccion).offsetTop;
      
      // Distancia inferior
      var distanciaBottom = $(window).height() - distanciaTop - $("#"+seccion).height();
      document.getElementById(capa1).style.height = distanciaBottom + "px";
      document.getElementById(capa2).style.height = distanciaTop + "px";
      //ActualizarBorde('.cls-1', BordeSeccion1(), 100);
      
      //document.getElementById(capa1).style.width = document.getElementById("redondo").offsetWidth + "px";

}