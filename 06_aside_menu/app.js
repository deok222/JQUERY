var btn = $(".btn");
var side = $(".side");

btn.click(function () {
  side.toggleClass("active");

  if (side.hasClass("active")) {
    $(this).find("img").attr("src", "../images/close.png");
  } else {
    $(this).find("img").attr("src", "../images/open.png");
  }
});
// hasClass =>
