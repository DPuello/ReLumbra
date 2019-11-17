$(function () { // Seccion Impacto
  
    var slides = $('#js-slideContainer').querySelectorAll('.section')

    var controller = new window.ScrollMagic.Controller({
        vertical: false,
        refreshInterval: 1
      })
  
    
      slides.forEach((item, index) => {
    
    new window.ScrollMagic.Scene({
      triggerElement: "#cosita",
      triggerHook: 0.5,
      duration: "50%"
    })
    .on('enter', function () { // Para modificar el borde //
      // Distancia superior
      //AjusteBorde("delfincito", "Capa_1", "Capa_2");
    })
    .setClassToggle('.plancton', 'models3d')
      //.setTween(color)
      .setPin("#js-wrapper")
      .addIndicators()
      .addTo(controller);
});
    
  });