$(function(){
	"use strict";

	console.log("hola");

	var imgcarrusel = $(".imgcarrusel");

	console.log(imgcarrusel);

	//slider con click

        $(".carrusel").attr("href","#");
		$(".carrusel").css("cursor","pointer");

        var cont_click=-1;//contar las veces que haga click

        $.each(imgcarrusel, function(i,v){
		if(i==4 || i==5 || i==6|| i==7|| i==8)
		{
			$(imgcarrusel[i]).css({"display":"none"});
			$(imgcarrusel[i]).css({"opacity":"0"});
		}
		});

 		$(".carrusel").on("click", function(e){//click dentro del carrusel
 			cont_click+=1;//aumentar contador+1
            $(imgcarrusel[cont_click]).animate({"opacity":"0"},500);//quitar la opacidad
            $(imgcarrusel[cont_click]).slideUp(500);//sale arriba
            $(imgcarrusel[cont_click+4]).slideDown(500);//entra abajo
            $(imgcarrusel[cont_click+4]).css({"display":"block"});//se muestra el de abajo
            $(imgcarrusel[cont_click+4]).animate({"opacity":"1"},500);//dar opacidad

          		
	            if(cont_click>4)//si está en el 5o click y se acabaron las imagenes
	            {

	            	var nuevaimg=document.createElement("IMG");//crear una nueva imagen
	            	$(nuevaimg).attr("src",(imgcarrusel[cont_click-5]).getAttribute("src"));//dandole a la nueva imagen el src de la que se va
	            	$(nuevaimg).attr("class","imgcarrusel");//dandole a la clase
	            	$(nuevaimg).css({"opacity":"0"});//opacidad de 0
	            	$(nuevaimg).css({"display":"block"});//aparece
	            	$(nuevaimg).animate({"opacity":"1"},500);//animacion a opacidad de 1
	            	$(nuevaimg).css({"width":"80%"});//tamaño
	           		$(nuevaimg).css({"padding-top":"30px"});
	           		$(nuevaimg).css({"padding-bottom":"30px"});
	           		$(".carrusel").append(nuevaimg);//añadiendo nuevaimagen a carrusel

	           		imgcarrusel.push(nuevaimg);

	            	console.log(cont_click);
	            	//$(imgcarrusel[cont_click]).slideUp(500);//sale arriba
	            }

	            	

        });
 		

 	//slider con mouseover
 		/*
 		 var cont_click=-1;//contar las veces que haga click

 		 var cont=-1;

        $.each(imgcarrusel, function(i,v){
		if(i==4 || i==5 || i==6|| i==7|| i==8)
		{
			$(imgcarrusel[i]).css({"display":"none"});
			$(imgcarrusel[i]).css({"opacity":"0"});
		}
		});

 		$(".carrusel").on("mouseover", function(e){//mouse dentro del carrusel
 			cont_click+=1;//aumentar contador+1
 			if(cont_click%1000==0)//si el residuo de cont_click/1000
 			{
 				cont+=1;

	            $(imgcarrusel[cont]).animate({"opacity":"0"},1000);//quitar la opacidad
	            $(imgcarrusel[cont]).slideUp(1000);//sale arriba
	            $(imgcarrusel[cont+4]).slideDown(1000);//entra abajo
	            $(imgcarrusel[cont+4]).css({"display":"block"});//se muestra el de abajo
	            $(imgcarrusel[cont+4]).animate({"opacity":"1"},1000);//dar opacidad

	          		
		            if(cont>4)//si está en el 5o click y se acabaron las imagenes
		            {

		            	var nuevaimg=document.createElement("IMG");//crear una nueva imagen
		            	$(nuevaimg).attr("src",(imgcarrusel[cont-5]).getAttribute("src"));//dandole a la nueva imagen el src de la que se va
		            	$(nuevaimg).attr("class","imgcarrusel");//dandole a la clase
		            	$(nuevaimg).css({"opacity":"0"});//opacidad de 0
		            	$(nuevaimg).css({"display":"block"});//aparece
		            	$(nuevaimg).animate({"opacity":"1"},1000);//animacion a opacidad de 1
		            	$(nuevaimg).css({"width":"80%"});//tamaño
		           		$(nuevaimg).css({"padding-top":"30px"});
		           		$(nuevaimg).css({"padding-bottom":"30px"});
		           		$(".carrusel").append(nuevaimg);//añadiendo nuevaimagen a carrusel

		           		imgcarrusel.push(nuevaimg);

		            	//$(imgcarrusel[cont_click]).slideUp(500);//sale arriba
		            }
		    }
		     console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click+" quemando tiempo con un console.log muy largo por que imprimir datos en consola demora el proceso");
	        console.log(cont_click);
	        cont_click-=1;
        });

        */

	/*--------------------hasta aqui va el slider con mouseover-----------------------*/


	var imgcinta=$(".imgcinta");


	$.each(imgcinta, function(i,v){
		if(i==2 ||i==3 ||i==4 || i==5 || i==6)
		{
			$(imgcinta[i]).css({"display":"none"});
			$(imgcinta[i]).css({"opacity":"0"});
		}

		if(i==1)
		{
			//$(imgcinta[i]).attr("class","imgcarrusel");//dandole a la clase
	        $(imgcinta[i]).css({"top":"-120px"});//alto
	        $(imgcinta[i]).css({"left":"420px"});//izq
	        $(imgcinta[i]).css({"opacity":"0.7"});//izq

		}
	});


	//configurando las flechas
	$(".flecha_izq").attr("href","#");
	$(".flecha_izq").css("cursor","pointer");
	$(".flecha_der").attr("href","#");
	$(".flecha_der").css("cursor","pointer");

	$(".flecha_izq").on({mouseenter: function(){//eventos de hover de la flecha izquierda
			$(this).attr("src","images/cinta/cinta_y_caja/flecha_izquierda.png");
		}, mouseleave:function(){
			$(this).attr("src","images/cinta/cinta_y_caja/flecha_izquierda_2.png");
		}
	});

	$(".flecha_der").on({mouseenter: function(){//eventos de hover de la flecha derecha
			$(this).attr("src","images/cinta/cinta_y_caja/flecha_derecha.png");
		}, mouseleave:function(){
			$(this).attr("src","images/cinta/cinta_y_caja/flecha_derecha_2.png");
		}
	});


	 var conteo_click=-1;//contar las veces que haga click

	 var grado=180;
	 var n=-1;

 		$(".flecha_izq").on("click", function(e){//click dentro del carrusel
 			conteo_click+=1;//aumentar contador+1
 			if(conteo_click>5)
 				{
 				conteo_click=5;
 				}

 			

 			$(".flecha_izq").attr("src","images/cinta/cinta_y_caja/flecha_izquierda.png");

 			
 				 /*$(imgcinta[conteo_click]).animate({width: 'toggle'});*/

 				 //para el elemento del centro
 				if(conteo_click>=0 && conteo_click<7)
 				{
				$(imgcinta[conteo_click]).animate({"left":"-70px"},500);
				$(imgcinta[conteo_click]).animate({"opacity":"0"},500);

 				//para el elemento de la derecha
 				$(imgcinta[conteo_click+1]).animate({"left":"150px"},500);
				$(imgcinta[conteo_click+1]).animate({"opacity":"1"},500);				

				//para el que va entrando
				$(imgcinta[conteo_click+2]).css({"opacity":"0"});
				$(imgcinta[conteo_click+2]).css({"display":"block"});
				$(imgcinta[conteo_click+2]).animate({"opacity":"0.5"},500);
	        	$(imgcinta[conteo_click+2]).css({"left":"420px"});//izq


	        	$('.engr').animate({ deg: grado },
				    {
				      duration: 500,
				      step: function(now) {
				        $(this).css({ transform: 'rotate(' + now + 'deg)' });
				        //console.log(now);
				      }
				    }
			 	);

	        	if(grado<=-900)
	        		grado=-900;

	        	else
		        	{
					grado=180*n;
					n-=1;
					}

	        	}

	        	console.log("conteo iz "+conteo_click);


	        	if(conteo_click==-1){
		    		$(".titulo_tipo").text("1. PETE");
		    		$(".dano_tipo").text("Daño: Moderado");
		    		$(".titulo_plastico").text("Polietileno Tereftalato");
		    		$(".parrafo_plastico").text("Es transparente, liviano, impermeable, estable y levemente tóxico ante componentes ácidos, resistente químicamente. Es reciclable y no es biodegradable, es usado para hacer envases y textiles.");
		    }

		    if(conteo_click==0){
		    		$(".titulo_tipo").text("2. PEAD");
		    		$(".dano_tipo").text("Daño: Bajo");
		    		$(".titulo_plastico").text("Polietileno de alta densidad");
		    		$(".parrafo_plastico").text("Es un polímero termoplástico, resistente química y térmicamente, resiste golpes, ligero, flexible, tenaz. Es reciclable mediante procesos mecánicos o térmicos.");
		    }

		    else if(conteo_click==1){
		    		$(".titulo_tipo").text("3. PVC");
		    		$(".dano_tipo").text("Daño: Medio");
		    		$(".titulo_plastico").text("Policloruro de vinilo");
		    		$(".parrafo_plastico").text("Es el derivado del plástico más versátil, tiene resistencia mecánica, puede ser rígido o flexible según el estabilizante que se utilice, es muy resistente, aislante eléctrico, resistente a la corrosión y al agua, y es económico.");
		    }

		    else if(conteo_click==2){
		    		$(".titulo_tipo").text("4. PEBD");
		    		$(".dano_tipo").text("Daño: Moderado");
		    		$(".titulo_plastico").text("Polietileno de baja densidad");
		    		$(".parrafo_plastico").text("Tiene buena resistencia térmica y química, flexible y resistente a impactos. Se puede reciclar, se usa en bolsas plásticas, capas de invernaderos, juguetes, cubiertos, botellas.");
		    }

		    else if(conteo_click==3){
		    		$(".titulo_tipo").text("5. PP");
		    		$(".dano_tipo").text("Daño: Bajo");
		    		$(".titulo_plastico").text("Polipropileno");
		    		$(".parrafo_plastico").text("Resistente a disolventes químicos y también ácidos, es ligero, flexible, tiene una alta temperatura de reblandecimiento. Puede ser reciclado mediante el proceso químico o energético.");
		    }

		    else if(conteo_click==4){
		    		$(".titulo_tipo").text("6. PS");
		    		$(".dano_tipo").text("Daño: Alto");
		    		$(".titulo_plastico").text("Poliestireno");
		    		$(".parrafo_plastico").text("Se divide en poliestireno cristal, de alto impacto, poliestireno expandido, extruido y sindiotáctico. Es buen aislante térmico, pero a menos de 100°C se deforma, es aislante eléctrico, de baja densidad.");
		    }

		    else if(conteo_click==5){
		    		$(".titulo_tipo").text("7. Otros");
		    		$(".dano_tipo").text("Daño: Alto");
		    		$(".titulo_plastico").text("Mezcla de Plásticos");
		    		$(".parrafo_plastico").text("Suelen ser una mezcla de varios plásticos, se usa en platos para hornos microondas, botellas de ketchup y juguetes. No se reciclan pues no se sabe con certeza la composición del material.");
		    }

	        	if(conteo_click<0){
	        		conteo_click=-1;//para que al repetir se convierta en 1´por el aumento
	        	}

        });


 		$(".flecha_der").on("click", function(e){//click dentro del carrusel

 			
	 			conteo_click-=1;//aumentar contador+1

	 			$(".flecha_der").attr("src","images/cinta/cinta_y_caja/flecha_derecha.png");

	 				
	 				if(conteo_click>=-1 && conteo_click<7)
	 				{

	 					//para el que esta a la derecha y desaparece
	 				//$(imgcinta[conteo_click+3]).animate({"left":"670px"},500);
					$(imgcinta[conteo_click+3]).animate({"opacity":"0"},500);//opacidad a 0
					//$(imgcinta[conteo_click+3]).css({"display":"none"});//desaparece

	 				 //para el elemento del centro y se va a la derecha
					$(imgcinta[conteo_click+2]).animate({"left":"420px"},500);
					$(imgcinta[conteo_click+2]).animate({"opacity":"0.5"},500);
					

	 				//para el elemento que va entrando por la izq y se va al centro
	 				//$(imgcinta[conteo_click+1]).css({"opacity":"0"});
	 				//$(imgcinta[conteo_click+1]).css({"display":"block"});
					$(imgcinta[conteo_click+1]).animate({"opacity":"1"},100);	
					$(imgcinta[conteo_click+1]).animate({"left":"150px"},500);	
		    		
		    		$('.engr').animate({ deg: grado },
					    {
					      duration: 500,
					      step: function(now) {
					        $(this).css({ transform: 'rotate(' + now + 'deg)' });
					        //console.log(now);
					      }
					    }
			 		);


		    		if(n==0)
		    			n=1;

	        		else
		        	{
					grado=180*n;
					n+=1;
					}

		       	}
		       	

		    console.log("conteo der "+conteo_click);

		    if(conteo_click==-1){
		    		$(".titulo_tipo").text("1. PETE");
		    		$(".dano_tipo").text("Daño: Moderado");
		    		$(".titulo_plastico").text("Polietileno Tereftalato");
		    		$(".parrafo_plastico").text("Es transparente, liviano, impermeable, estable y levemente tóxico ante componentes ácidos, resistente químicamente. Es reciclable y no es biodegradable, es usado para hacer envases y textiles.");
		    }

		    if(conteo_click==0){
		    		$(".titulo_tipo").text("2. PEAD");
		    		$(".dano_tipo").text("Daño: Bajo");
		    		$(".titulo_plastico").text("Polietileno de alta densidad");
		    		$(".parrafo_plastico").text("Es un polímero termoplástico, resistente química y térmicamente, resiste golpes, ligero, flexible, tenaz. Es reciclable mediante procesos mecánicos o térmicos.");
		    }

		    else if(conteo_click==1){
		    		$(".titulo_tipo").text("3. PVC");
		    		$(".dano_tipo").text("Daño: Medio");
		    		$(".titulo_plastico").text("Policloruro de vinilo");
		    		$(".parrafo_plastico").text("Es el derivado del plástico más versátil, tiene resistencia mecánica, puede ser rígido o flexible según el estabilizante que se utilice, es muy resistente, aislante eléctrico, resistente a la corrosión y al agua, y es económico.");
		    }

		    else if(conteo_click==2){
		    		$(".titulo_tipo").text("4. PEBD");
		    		$(".dano_tipo").text("Daño: Moderado");
		    		$(".titulo_plastico").text("Polietileno de baja densidad");
		    		$(".parrafo_plastico").text("Tiene buena resistencia térmica y química, flexible y resistente a impactos. Se puede reciclar, se usa en bolsas plásticas, capas de invernaderos, juguetes, cubiertos, botellas.");
		    }

		    else if(conteo_click==3){
		    		$(".titulo_tipo").text("5. PP");
		    		$(".dano_tipo").text("Daño: Bajo");
		    		$(".titulo_plastico").text("Polipropileno");
		    		$(".parrafo_plastico").text("Resistente a disolventes químicos y también ácidos, es ligero, flexible, tiene una alta temperatura de reblandecimiento. Puede ser reciclado mediante el proceso químico o energético.");
		    }

		    else if(conteo_click==4){
		    		$(".titulo_tipo").text("6. PS");
		    		$(".dano_tipo").text("Daño: Alto");
		    		$(".titulo_plastico").text("Poliestireno");
		    		$(".parrafo_plastico").text("Se divide en poliestireno cristal, de alto impacto, poliestireno expandido, extruido y sindiotáctico. Es buen aislante térmico, pero a menos de 100°C se deforma, es aislante eléctrico, de baja densidad.");
		    }

		    else if(conteo_click==5){
		    		$(".titulo_tipo").text("7. Otros");
		    		$(".dano_tipo").text("Daño: Alto");
		    		$(".titulo_plastico").text("Mezcla de Plásticos");
		    		$(".parrafo_plastico").text("Suelen ser una mezcla de varios plásticos, se usa en platos para hornos microondas, botellas de ketchup y juguetes. No se reciclan pues no se sabe con certeza la composición del material.");
		    }



		    if(conteo_click>6){
		    	conteo_click=7;//para que al repetir se convierta en 6 por el decremento
		    }

		    if(conteo_click<-1){
		    	conteo_click=-1;
		    }
		   
		    
    		// $('.engr').rotate({ count:4, duration:0.6, easing:'ease-out' });
  			

        });


        console.log("conteo final "+conteo_click);

 		
//---------------------------------------------------------

});

