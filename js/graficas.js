$(".car2").click(function(){
    nombre("car2", "car1");
    //$(".car1").attr("src",$(".car2").attr("src"));
    //$("car1").css("order","4");
    //$("#imagen1").addClass("car2");
    //$("#imagen2").addClass("car1");

    //$("#imagen2").removeClass("car2");
    //$("#imagen1").removeClass("car1");
});

function nombre(num1, num2){
    $( "."+num2 ).animate({
        opacity: 0}, 100);
    $( "."+num1 ).animate({
        opacity: 0}, 100, function() {
            temp = $("."+num1).attr("src");
            $("."+num1).attr("src",$("."+num2).attr("src"));
            $("."+num2).attr("src",temp);
      });
    

    $( "."+num1 ).animate({
        opacity: 1}, 100);
        $( "."+num2 ).animate({
            opacity: 1}, 100);
    /*var tem1 = $("."+num1);
    var tem2 = $("."+num2);
    $("."+num1).addClass(num2);
    $("."+num2).addClass(num1);
    tem1.removeClass(num1);
    tem2.removeClass(num2);*/
}
//$(".car1").click(nombre("car1", "car1"));
//$(".car2").click(nombre("car1", "car2"));
$(".car3").click(function(){
    nombre("car3", "car1")

});

