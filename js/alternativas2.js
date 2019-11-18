$(function(){
	"use strict";

	/*var list = $("#list");

	var updateLayout = function(listItems){
		for(var i = 0; i < listItems.length; i ++){
			var offsetAngle = 360 / listItems.length;
			var rotateAngle = offsetAngle * i;
			$(listItems[i]).css("transform", "rotate(" +rotateAngle+ "deg) translate(0, -200px) rotate(-" + rotateAngle + "deg)")
		};
	};

	var listItems =$(".list-item");
	updateLayout(listItems);*/

	/**/

	/*
	$(document).on("click", "#add-item", function(){
		var listItem = $("<li class='list-item'>Things go here<button class='remove-item'>Remove</button></li>");
		list.append(listItem);
		var listItems = $(".list-item");
		updateLayout(listItems);

	});

	$(document).on("click", ".remove-item", function(){
		$(this).parent().remove();
		var listItems = $(".list-item");
		updateLayout(listItems);
	});
	*/

	/*var boton = $("#add-item");
	boton.css({"display":"none"});*/

	//objetos draggable
	/* $( function() {
    	$( "#draggable" ).draggable();
  	} );*/


	 /*arrastre de las imagenes*/

	 /*las canecas deben ser los nuevos empty*/
	 /*las imagenes deben ser los nuevos fill*/

	 /*
	 const fill_banana = document.querySelector(".fill_banana");
	 const empties = document.querySelectorAll(".empty_banana");

	 fill_banana.addEventListener("dragstart", dragStart);
	 fill_banana.addEventListener("dragend", dragEnd);

	 for(const empty of empties)
	 {
	 	empty.addEventListener('dragover', dragOver);
	 	empty.addEventListener('dragenter', dragEnter);
	 	empty.addEventListener('dragleave', dragLeave);
	 	empty.addEventListener('drop', dragDrop);

	 }

	 function dragStart(){
	 	console.log("start");
	 	this.className +=" hold_banana";
	 	setTimeout(() => (this.className = " invisible_banana"),0);
	 }

	 function dragEnd(){
	 	console.log("end");
	 	this.className +=" fill_banana";
	 }

	 function dragOver(e){
	 	e.preventDefault();
	 	console.log("over");
	 }

	 function dragEnter(e){
	 	e.preventDefault();
	 	this.className +=" hovered_banana";
	 	console.log("enter");
	 }
	 function dragLeave(){
	 	this.className +=" empty_banana";
	 	console.log("leave");
	 }
	 function dragDrop(){
	 	this.className +=" empty_banana";
		this.append(fill_banana);
	 	console.log("drop");
	 }*/

		/*$( document ).on( "mousemove", function( event ) {
		 console.log("x "+event.pageX+" y "+event.pageY);
		});*/


		/*-----conteo de puntos para reiniciar--------*/
		var puntos=0;


		$(".reiniciar").on({
  		mouseenter: function(){
    	$(this).css("background-color", "#1abdaf");
	  },
	  mouseleave: function(){
	    $(this).css("background-color", "#027368");
	  },
	  click: function(){

	  	//puntos en 0 
	  	puntos=0;

	  	//poner el anuncio que debe estar
	   $(".multi-line-text").text("Información que ayuda al planeta ¡Ponla en práctica!");

	   //reiniciar las figuras
	    $(".banana").css("display", "inline");
	    $(".banana").animate({opacity: "1"},500);
	    $(".banana").animate({top: "-8%" , left: "46%"},500);
	    

	    $(".lata").css("display", "inline");
	    $(".lata").animate({opacity: "1"},500);
	    $(".lata").animate({top: "10%" , left: "35%"},500);
	    

	    $(".bolsa").css("display", "inline");
	    $(".bolsa").animate({opacity: "1"},500);
	    $(".bolsa").animate({top: "40%" , left: "40%"},500);

	    $(".botella").css("display", "inline");
	    $(".botella").animate({opacity: "1"},500);
        $(".botella").animate({top: "40%" , left: "55%"},500);
       

		$(".bolsa2").css("display", "inline");
		$(".bolsa2").animate({opacity: "1"},500);
		$(".bolsa2").animate({top: "10%" , left: "60%"},500);
		
	   //banear el boton

	   $(".reiniciar").css("display","none");

	  }
	}); 

		/*---------para arrastrar la banana-----------*/

	 	var en_verde=false; //verifica si el mouse esta sobre la caneca verde
	 	var stop_banana=false;
	 	var n=0;


	   $( function() {
    		$( ".banana" ).draggable(

    			{ cursor: "move", cursorAt: { top: 56, left: 56 } }, 

    			{ stop: function(){
	        		stop_banana=true;
	        		console.log("paro");

	        		if(en_verde==false){
	        			$(".banana").animate({top: "-8%" , left: "46%"},500);
	        		}
	        		else{
	        			$(".banana").animate({opacity: "0", display:"none"},500);
	        			$(".banana").css("display","none");
	        			puntos++;
	        			console.log("puntos "+puntos);
						rarar();
	        			if(puntos==5)
	        			{
	        				$(".multi-line-text").text("FELICIDADES, TERMINASTE EL JUEGO SATISFACTORIAMENTE");
	        				$(".reiniciar").css("display","inline");
	        			}
	        		}


	        			n=2;
	        		}
	        	}, 
				
				{ start: function(){
	        		stop_banana=false;
	        		console.log("empezo");
	        		}
	    		},
	   			
	   			{ drag: function(){
	        		stop_banana=false;
	        		console.log("andando");
	        		n=1;
	        		}
	    		});

    		/*var banana_top = $(".banana").css(top);*/

    		$(".caneca1").on("mouseover",function(){
	 			en_verde=true;
	 			console.log("en verde");

	 		});

	   		$(".caneca1").on("mouseleave",function(){
	 			en_verde=false;
	 			console.log("NO en verde");
	 		});

	 		

  		});

	  	
	  	$(".caneca1").on("mouseover",function(){
	 	/*$(this).addClass( "invisible" );*/
		 	if(n==1)
		 	{
		 		$(".caneca1").addClass( "circuloverde invisible" );
		 		n=0;
		 	}

		 	else
		 	{
    			$(".banana").animate({top: "-8%"},500);
    	/*$(".banana").animate({left: "46%"},500);*/
		 	}
	 	});

	 	
	  	$(".caneca1").on("mouseleave",function(){
		 $(this).removeClass( "circuloverde invisible" );
	 	});
	 			
	 			/*---------para arrastrar la lata-----------*/

	 	var en_azul=false; //verifica si el mouse esta sobre la caneca verde
	 	var stop_lata=false;
	 	var n2=0;


	   $( function() {
    		$( ".lata" ).draggable(

    			{ cursor: "move", cursorAt: { top: 56, left: 56 } }, 

    			{ stop: function(){
	        		stop_lata=true;
	        		console.log("paro");

	        		if(en_azul==false){
	        			$(".lata").animate({top: "10%" , left: "35%"},500);
	        		}
	        		else{
	        			$(".lata").animate({opacity: "0", display:"none"},500);
	        			$(".lata").css("display","none");
	        			puntos++;
						console.log("puntos "+puntos);
						rarar2();
	        			if(puntos==5)
	        			{
	        				$(".multi-line-text").text("FELICIDADES, TERMINASTE EL JUEGO SATISFACTORIAMENTE");
	        				$(".reiniciar").css("display","inline");
	        			}
	        		}
	        			n2=2;
	        		}
	        	}, 
				
				{ start: function(){
	        		stop_lata=false;
	        		console.log("empezo");
	        		}
	    		},
	   			
	   			{ drag: function(){
	        		stop_lata=false;
	        		console.log("andando");
	        		n2=1;
	        		}
	    		});

    		/*var banana_top = $(".banana").css(top);*/

    		$(".caneca2").on("mouseover",function(){
	 			en_azul=true;
	 			console.log("en azul");

	 		});

	   		$(".caneca2").on("mouseleave",function(){
	 			en_azul=false;
	 			console.log("NO en azul");
	 		});

	 		

  		});

	  	
	  	$(".caneca2").on("mouseover",function(){
	 	/*$(this).addClass( "invisible" );*/
		 	if(n2==1)
		 	{
		 		$(".caneca2").addClass( "circuloazul invisible" );
		 		n2=0;
		 	}

		 	else
		 	{
    			$(".lata").animate({top: "10%"},500);
    	/*$(".banana").animate({left: "46%"},500);*/
		 	}
	 	});

	 	
	  	$(".caneca2").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul invisible");
	 	});

	 	/*---------para arrastrar la bolsa-----------*/

	 	en_azul=false; //verifica si el mouse esta sobre la caneca verde
	 	var stop_bolsa=false;
	 	var n3=0;


	   $( function() {
    		$( ".bolsa" ).draggable(

    			{ cursor: "move", cursorAt: { top: 56, left: 56 } }, 

    			{ stop: function(){
	        		stop_bolsa=true;
	        		console.log("paro");

	        		if(en_azul==false){
	        			$(".bolsa").animate({top: "40%" , left: "40%"},500);
	        		}
	        		else{
	        			$(".bolsa").animate({opacity: "0", display:"none"},500);
	        			$(".bolsa").css("display","none");
	        			puntos++;
						console.log("puntos "+puntos);
						rarar2();
	        			if(puntos==5)
	        			{
	        				$(".multi-line-text").text("FELICIDADES, TERMINASTE EL JUEGO SATISFACTORIAMENTE");
	        				$(".reiniciar").css("display","inline");
	        			}
	        		}
	        			n3=3;
	        		}
	        	}, 
				
				{ start: function(){
	        		stop_bolsa=false;
	        		console.log("empezo");
	        		}
	    		},
	   			
	   			{ drag: function(){
	        		stop_bolsa=false;
	        		console.log("andando");
	        		n3=1;
	        		}
	    		});

    		/*var banana_top = $(".banana").css(top);*/

    		$(".caneca2").on("mouseover",function(){
	 			en_azul=true;
	 			console.log("en azul");

	 		});

	   		$(".caneca2").on("mouseleave",function(){
	 			en_azul=false;
	 			console.log("NO en azul");
	 		});

	 		

  		});

	  	
	  	$(".caneca2").on("mouseover",function(){
	 	/*$(this).addClass( "invisible" );*/
		 	if(n3==1)
		 	{
		 		$(".caneca2").addClass( "circuloazul invisible" );
		 		n3=0;
		 	}

		 	else
		 	{
    			$(".bolsa").animate({top: "40%"},500);
    	/*$(".banana").animate({left: "46%"},500);*/
		 	}
	 	});

	 	
	  	$(".caneca2").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul invisible");
	 	});
	 			

	 			
	 	/*---------para arrastrar la botella-----------*/

	 	en_azul=false; //verifica si el mouse esta sobre la caneca verde
	 	var stop_botella=false;
	 	var n4=0;


	   $( function() {
    		$( ".botella" ).draggable(

    			{ cursor: "move", cursorAt: { top: 56, left: 56 } }, 

    			{ stop: function(){
	        		stop_botella=true;
	        		console.log("paro");

	        		if(en_azul==false){
	        			$(".botella").animate({top: "40%" , left: "55%"},500);
	        		}
	        		else{
	        			$(".botella").animate({opacity: "0", display:"none"},500);
	        			$(".botella").css("display","none");
	        			puntos++;
						console.log("puntos "+puntos);
						rarar2();
	        			if(puntos==5)
	        			{
	        				$(".multi-line-text").text("FELICIDADES, TERMINASTE EL JUEGO SATISFACTORIAMENTE");
	        				$(".reiniciar").css("display","inline");
	        			}
	        		}
	        			n4=3;
	        		}
	        	}, 
				
				{ start: function(){
	        		stop_botella=false;
	        		console.log("empezo");
	        		}
	    		},
	   			
	   			{ drag: function(){
	        		stop_botella=false;
	        		console.log("andando");
	        		n4=1;
	        		}
	    		});

    		/*var banana_top = $(".banana").css(top);*/

    		$(".caneca2").on("mouseover",function(){
	 			en_azul=true;
	 			console.log("en azul");

	 		});

	   		$(".caneca2").on("mouseleave",function(){
	 			en_azul=false;
	 			console.log("NO en azul");
	 		});

	 		

  		});

	  	
	  	$(".caneca2").on("mouseover",function(){
	 	/*$(this).addClass( "invisible" );*/
		 	if(n4==1)
		 	{
		 		$(".caneca2").addClass( "circuloazul invisible" );
		 		n4=0;
		 	}

		 	else
		 	{
    			$(".botella").animate({top: "40%"},500);
    	/*$(".banana").animate({left: "46%"},500);*/
		 	}
	 	});

	 	
	  	$(".caneca2").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul invisible");
	 	});
	 			


	  	/*---------para arrastrar la bolsa2-----------*/

	 	en_azul=false; //verifica si el mouse esta sobre la caneca verde
	 	var stop_bolsa2=false;
	 	var n5=0;


	   $( function() {
    		$( ".bolsa2" ).draggable(

    			{ cursor: "move", cursorAt: { top: 56, left: 56 } }, 

    			{ stop: function(){
	        		stop_bolsa2=true;
	        		console.log("paro");

	        		if(en_azul==false){
	        			$(".bolsa2").animate({top: "10%" , left: "60%"},500);
	        		}
	        		else{
	        			$(".bolsa2").animate({opacity: "0", display:"none"},500);
	        			$(".bolsa2").css("display","none");
	        			puntos++;
						console.log("puntos "+puntos);
						rarar2();
	        			if(puntos==5)
	        			{
	        				$(".multi-line-text").text("FELICIDADES, TERMINASTE EL JUEGO SATISFACTORIAMENTE");
	        				$(".reiniciar").css("display","inline");
	        			}
	        		}
	        			n5=3;
	        		}
	        	}, 
				
				{ start: function(){
	        		stop_bolsa2=false;
	        		console.log("empezo");
	        		}
	    		},
	   			
	   			{ drag: function(){
	        		stop_bolsa2=false;
	        		console.log("andando");
	        		n5=1;
	        		}
	    		});

    		/*var banana_top = $(".banana").css(top);*/

    		$(".caneca2").on("mouseover",function(){
	 			en_azul=true;
	 			console.log("en azul");

	 		});

	   		$(".caneca2").on("mouseleave",function(){
	 			en_azul=false;
	 			console.log("NO en azul");
	 		});

	 		

  		});

	  	
	  	$(".caneca2").on("mouseover",function(){
	 	/*$(this).addClass( "invisible" );*/
		 	if(n5==1)
		 	{
		 		$(".caneca2").addClass( "circuloazul invisible" );
		 		n5=0;
		 	}

		 	else
		 	{
    			$(".bolsa2").animate({top: "10%"},500);
    	/*$(".banana").animate({left: "46%"},500);*/
		 	}
	 	});

	 	
	  	$(".caneca2").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul invisible");
	 	});
	 			

	 //cambiando el texto del centro

	 $(".gbanana").on("mouseover",function(){
	 	$(".multi-line-text").text("La cáscara de alimentos como frutas o verduras son biodegradables, es decir, se descompone por organismos vivos");
	 	$(this).addClass( "circuloverde" )
	 });

	 $(".gbanana").on("mouseleave",function(){
	 	$(this).removeClass( "circuloverde" )
	 });

	 $(".gbolsa").on("mouseover",function(){
	 	$(".multi-line-text").text(" Cambia las botellas de plástico desechables, por botellas de vidrio retornables");
	 	this.className +=" circuloazul";
	 });

	 $(".gbolsa").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul" )
	 });

	 $(".gbotella").on("mouseover",function(){
	 	$(".multi-line-text").text(" Cambia las botellas de plástico desechables, por botellas de vidrio retornables");
	 	this.className +=" circuloazul";
	 });

	 $(".gbotella").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul" )
	 });

	 $(".glata").on("mouseover",function(){
	 	$(".multi-line-text").text(" la compañía Saltwater Brewery, usa residuos de producción de cerveza para hacer anillos de six-pack biodegradable");
	 	this.className +=" circuloazul";
	 });

	 $(".glata").on("mouseleave",function(){
	 	$(this).removeClass( "circuloazul" )
	 });

	 $(".garbage").on("mouseover",function(){
	 	$(this).css({"cursor":"pointer"});
	 });

	 $(".garbage").on("mouseleave",function(){
	 	$(".multi-line-text").text("Información que ayuda al planeta ¡Ponla en práctica!");
	 });


	//------------------------------------
});

$("#cepillo").on("mouseover",function(){
	$(this).addClass( "movIzq" );
	//$("#cepillo").css("display","none");
});