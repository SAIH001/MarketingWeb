$(document).ready(function () {
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 1000,
    autoplayspeed: 500,
    centerMode: false,
    focusOnSelect: true,
    draggable: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".servies-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplayspeed: 500,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  $(".slider-nav").slick("setPosition");
});

$(document).ready(function () {
  $(".nav-button").click(function () {
    $("body").toggleClass("nav-open");
  });
});

$(".pack-li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".servicess").hover(
  function () {
    $(".jumbo-menu-bar").addClass("show-this");
  },
  function () {
    $(".jumbo-menu-bar").removeClass("show-this");
  }
);

$(document).on("click", ".order", function (e) {
  $("#popupform").modal();
  $(".pack-tit").val(
    $(this).parent().parent().parent().find(".pack-head h3").html()
  );
  $(".pack-pri").val($(this).parent().parent().parent().find(".price").html());
  $(".pack-category").val(
    $(this).parent().parent().parent().find(".category").html()
  );
  $(".package_detail").val(
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".pack-content ul")
      .html()
      .replace(/(<([^>]+)>)/gi, "")
  );
  $(".package_detail_breif").val(
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".pack-content ul")
      .html()
      .replace(/(<([^>]+)>)/gi, "@")
  );
  $(this).attr("href", "javascript:void(0)");
});
$(document).on("click", ".complete_order", function (e) {
  $("#popupform").modal();
  $(".pack-tit").val(
    $(this).parent().parent().parent().parent().find(".pack-head h3").html()
  );
  $(".pack-pri").val($(this).parent().parent().parent().find(".price").html());
  $(".pack-category").val(
    $(this).parent().parent().parent().find(".category").html()
  );
  $(".package_detail").val(
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".pack-content ul")
      .html()
      .replace(/(<([^>]+)>)/gi, "")
  );
  $(".package_detail_breif").val(
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".pack-content ul")
      .html()
      .replace(/(<([^>]+)>)/gi, "@")
  );
  $(this).attr("href", "javascript:void(0)");
});

$(document).on("click", ".book-a-call", function (e) {
  $(this).attr("href", "tel:+1-307-288-3154");
});
