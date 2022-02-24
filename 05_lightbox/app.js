var items = $(".cards li");
var dimm = $(".dimm");
var dimmImg = dimm.find("img");

items.click(function () {
  var dataImg = $(this).find("img").attr("data-img");
  dimm.addClass("show");
  dimmImg.attr("src", dataImg);

  dimm.click(function () {
    $(this).removeClass("show");
  });
});
