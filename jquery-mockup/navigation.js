$(function(){
    $("#header-placeholder").load("_header.html", function () {
        $("#nav-placeholder").load("_nav.html", function(){
            $(".nav-link").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");           
        });   
            
    } );
    

    $(".btn-primary").click(function(){
        $(this).closest(".col-md-4").css({ 'max-width': 'none'})
            .animate({ 'flex-basis' : '100%' })
    })

});


function activityAdd() {
    var count = 1;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode( count.toString() ) );
    li.setAttribute("id", "element" + count ); // added line
    ul.appendChild(li);
    alert(li.id);
    count++;
  }