$(function(){
    var calTotal = 0;
    
$("#mealList-placeholder").load("_mealList.html", function (){
      $("#btn1").click(function addfood(){
        var meal = $('#meals').val();
        var food = $('#food').val();
        var amount = $('#calories').val();
        $("#mealList ul").append("<li class='list-group-item' > <b>"+meal+"</b> , "+food+" , "+amount+"</li>");

        
        calTotal = parseInt(calTotal) + parseInt(amount); 

        $("#mealList p1").replaceWith("<p1>"+calTotal+"</p1>");
        
        
        
})
}
)}
)
