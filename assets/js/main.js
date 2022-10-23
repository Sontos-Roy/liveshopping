$(document).ready(function () {
  $("#menu-toggler").click(function () {
    $(".mobile-sidebar").css("left", "0");
    $(".overlay-sidebar").fadeIn("fast");
  });
  $(".overlay-sidebar").click(function () {
    $(".mobile-sidebar").css("left", "-300px");
    $(".overlay-sidebar").fadeOut("fast");
  });

  $("#mst-menu").click(function () {
    $("#mst-menu").addClass("mst-active").fadeIn("slow");
    $("#mst-category").removeClass("mst-active");
    $(".m-menu-dp").fadeIn("fast");
    $(".m-cat-dp").fadeOut("fast");
  });
  $("#mst-category").click(function () {
    $("#mst-category").addClass("mst-active");
    $("#mst-menu").removeClass("mst-active");
    $(".m-menu-dp").fadeOut("fast");
    $(".m-cat-dp").fadeIn("fast");
  });
  $(".search-dp").click(function () {
    $(".search-cat-dp").slideToggle("fast");
  });
  $(".cat-dp-main").hover(function () {
    $(".search-cat-dp-hover").slideToggle("fast");
  });

  // for all tabs

  $("#tab1").addClass("active");
  $("#tab1con").fadeIn("slow");
  $("#tab2con").css("display", "none");
  $("#tab1").click(function () {
    $("#tab1").addClass("active");
    $("#tab2").removeClass("active");
    $("#tab1con").fadeIn("slow");
    $("#tab2con").fadeOut("fast");
  });
  $("#tab2").click(function () {
    $("#tab2").addClass("active");
    $("#tab1").removeClass("active");
    $("#tab2con").fadeIn("slow");
    $("#tab1con").fadeOut("fast");
  });

  $("#tab3").addClass("active");
  $("#tab3con").fadeIn("slow");
  $("#tab4con").css("display", "none");
  $("#tab3").click(function () {
    $("#tab3").addClass("active");
    $("#tab4").removeClass("active");
    $("#tab3con").fadeIn("slow");
    $("#tab4con").fadeOut("fast");
  });
  $("#tab4").click(function () {
    $("#tab4").addClass("active");
    $("#tab3").removeClass("active");
    $("#tab4con").fadeIn("slow");
    $("#tab3con").fadeOut("fast");
  });
  $("#tab5").addClass("active");
  $("#tab5con").fadeIn("slow");
  $("#tab6con").css("display", "none");
  $("#tab5").click(function () {
    $("#tab5").addClass("active");
    $("#tab6").removeClass("active");
    $("#tab5con").fadeIn("slow");
    $("#tab6con").fadeOut("fast");
  });
  $("#tab6").click(function () {
    $("#tab6").addClass("active");
    $("#tab5").removeClass("active");
    $("#tab6con").fadeIn("slow");
    $("#tab5con").fadeOut("fast");
  });
  // $(".product .product-details .product-details-p").fadeOut("fast");
  $(".product .product-details").removeClass("ps-2");
  $("#product-12").click(function () {
    $(".product").addClass("col-lg-12");
    $(".product").removeClass("col-lg-3");
    $(".product").addClass("d-lg-flex");
    $(".product .product-details").addClass("text-start");
    $(".product .product-details").addClass("ps-3");
    $(".product .product-details").removeClass("text-center");
    $(".product .product-details .product-details-p").fadeIn("fast");
    $(".product .product-details a .button").removeClass("m-auto");
  });
  $("#product-3").click(function () {
    $(".product").removeClass("col-lg-3");
    $(".product").removeClass("col-lg-12");
    $(".product").removeClass("d-lg-flex");
    $(".product .product-details").removeClass("text-start");
    $(".product .product-details").removeClass("ps-2");
    $(".product .product-details").addClass("text-center");
    $(".product .product-details .product-details-p").fadeOut("fast");
    $(".product .product-details a .button").addClass("m-auto");
  });
  $(".filter-dropdown").css("display","none");
  $("#filter").click(function () {
    $(".filter-dropdown").slideToggle("medium");
  });
  

  var counter = 1;
  var qty = $("#qty");
  $("#inc").click(function () {
    var inc = counter++;

    qty.val(inc);
  });
  $("#dec").click(function () {
    if (qty.val() > 1) {
      var dec = counter--;
    } else {
      dec = 1;
    }

    qty.val(dec);
  });
});
$(document).ready(function () {
  $(".cat-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      450: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: true,
        dots: true,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true,
        dots: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".gift-card-owl").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
        dots: false,
      },
    },
  });
});
 
