$(function(){
	"use strict";

	var list = $("#list");

	var updateLayout = function(listItems){
		for(var i = 0; i < listItems.length; i ++){
			var offsetAngle = 360 / listItems.length;
			var rotateAngle = offsetAngle * i;
			$(listItems[i]).css("transform", "rotate(" +rotateAngle+ "deg) translate(0, -200px) rotate(-" + rotateAngle + "deg)")
		};
	};

	var listItems =$(".list-item");
	updateLayout(listItems);

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

	var boton = $("#add-item");
	boton.css({"display":"none"});

	//objetos draggable
	 $( function() {
    	$( "#draggable" ).draggable();
  	} );

	 //cambiando el texto del centro

	 $(".gbanana").on("mouseover",function(){
	 	$(".multi-line-text").text("La cáscara de alimentos como frutas o verduras son biodegradables, es decir, se descompone por organismos vivos");
	 });

	 $(".gbolsa").on("mouseover",function(){
	 	$(".multi-line-text").text(" Cambia las botellas de plástico desechables, por botellas de vidrio retornables");
	 });

	 $(".gbotella").on("mouseover",function(){
	 	$(".multi-line-text").text(" Cambia las botellas de plástico desechables, por botellas de vidrio retornables");
	 });

	 $(".glata").on("mouseover",function(){
	 	$(".multi-line-text").text(" la compañía Saltwater Brewery, usa residuos de producción de cerveza para hacer anillos de six-pack biodegradable");
	 });

	 $(".garbage").on("mouseover",function(){
	 	$(this).css({"cursor":"pointer"});
	 });

	 $(".garbage").on("mouseleave",function(){
	 	$(".multi-line-text").text("Información que ayuda al planeta ¡Ponla en práctica!");
	 });


	//------------------------------------
});