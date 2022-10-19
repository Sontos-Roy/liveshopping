$(document).ready(function(){
    $("#menu-toggler").click(function(){
      $(".mobile-sidebar").css("left", "0")
      $(".overlay-sidebar").fadeIn("fast");
    });
    $(".overlay-sidebar").click(function(){
      $(".mobile-sidebar").css("left", "-300px")
      $(".overlay-sidebar").fadeOut("fast");
    });
    
    $("#mst-menu").click(function(){
        $("#mst-menu").addClass("mst-active").fadeIn("slow");
        $("#mst-category").removeClass("mst-active");
        $(".m-menu-dp").fadeIn("fast");
        $(".m-cat-dp").fadeOut("fast");
    });
    $("#mst-category").click(function(){
        $("#mst-category").addClass("mst-active")
        $("#mst-menu").removeClass("mst-active");
        $(".m-menu-dp").fadeOut("fast");
        $(".m-cat-dp").fadeIn("fast");
    });
    $(".search-dp").click(function(){
        $(".search-cat-dp").slideToggle("fast");
    });
    $(".cat-dp-main").hover(function(){
        $(".search-cat-dp-hover").slideToggle("fast");
    });


    // for all tabs  

    $("#tab1").addClass("active");
    $("#tab1con").fadeIn("slow");
    $("#tab2con").css("display", "none");
    $("#tab1").click(function(){
        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#tab1con").fadeIn("slow");
        $("#tab2con").fadeOut("fast");
    });
    $("#tab2").click(function(){
        $("#tab2").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2con").fadeIn("slow");
        $("#tab1con").fadeOut("fast");
    });
    
    $("#tab3").addClass("active");
    $("#tab3con").fadeIn("slow");
    $("#tab4con").css("display", "none");
    $("#tab3").click(function(){
        $("#tab3").addClass("active");
        $("#tab4").removeClass("active");
        $("#tab3con").fadeIn("slow");
        $("#tab4con").fadeOut("fast");
    });
    $("#tab4").click(function(){
        $("#tab4").addClass("active");
        $("#tab3").removeClass("active");
        $("#tab4con").fadeIn("slow");
        $("#tab3con").fadeOut("fast");
    });
    
    
    
    
    
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots:false
                },
                450:{
                    items: 2,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false,
                    dots:true
                },
                1000:{
                    items:5,
                    nav:false,
                    loop:false,
                    dots:true
                }
            }
        })
  });

 
