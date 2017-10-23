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


