$(function(){
            
        $("#actList-placeholder").load("_actList.html", function (){
              $("#btn1").click(function addAct(){
                var excerice = $('#userExercise').val();
                var amount = $('#userAmount').val();
                $("#activityList ul").append("<li class='list-group-item' >"+excerice+" , "+amount+"</li>");
        })
        }
)}
)
