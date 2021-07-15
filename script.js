$(document).ready(function () {
  $("#toggle-btn").click(function () {
    $(".nav-links").slideToggle(1000);
  });

  // ACCORDION
  $("#accordion").accordion({
    animate: 1000,
  });
});

// FIXED POSITION
$(document).scrollTop(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 70) {
    $("#nav").addClass("new-nav");
  } else {
    $("#nav").removeClass("new-nav");
  }
});

// SECTION SCROLLING
$("nav a").click(function (link) {
  link.preventDefault();
  let target = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    "slow"
  );
});
