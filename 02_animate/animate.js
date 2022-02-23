var btn = $(".btn");
var box = $(".box");

// $(selector).animate({params},speed,callback);
btn.click(function () {
  box.animate({ width: 500 }, 1000, "easeOutBounce", () => {
    box.animate({ width: 100 }, 1000, "easeOutBounce");
  });
});

btn.on("mouseover", () => {
  box.stop().animate({ width: 500, height: 500 }, 1000, "easeOutBounce");
});

btn.on("mouseleave", () => {
  box.stop().animate({ width: 100, height: 100 }, 1000, "easeOutBounce");
});

// stop() -> animation 사용시 필요하다.

box.on("mouseover", () => {
  $(this).stop().animate({ width: 600, height: 400 }, 1000, "easeOutBounce");
});

box.on("mouseleave", () => {
  $(this).stop().animate({ width: 100, height: 100 }, 1000, "easeOutBounce");
});

// this => 자기 자신을 가리킨다. 위에서는 box에 해당됌
