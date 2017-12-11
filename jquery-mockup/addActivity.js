$(function(){
        var calTotal = 0;
            
        $("#actList-placeholder").load("_actList.html", function (){
              $("#btn1").click(function addAct(){
                var excerice = $('#userExercise').val();
                var amount = $('#userAmount').val();
                var calories = $('#userCalories').val();
                $("#activityList ul").append("<li class='list-group-item' >"+excerice+" , "+amount+" , "+calories+"</li>");
        
                calTotal = parseInt(calTotal) + parseInt(calories); 
                
                $("#activityList p1").replaceWith("<p1>"+calTotal+"</p1>");
        })
        }
)}
)
