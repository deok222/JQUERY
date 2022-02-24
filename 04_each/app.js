var social = $(".social");
var item = $(".social span");

social.hover(
  function () {
    item.each(function (index) {
      $(this)
        .stop()
        .animate({ left: -(index * 50) }, 300);
    });
  },
  function () {
    item.each(function (index) {
      $(this).stop().animate({ left: -0 }, 300);
    });
  }
);

//(index * 50) => 0, 1, 2, 3의 배열을 가진 index를 순차적으로 0*50 / 1*50 / 2*50 함으로써 각각 거리가 다르기 때문에 펼쳐지듯이 효과를 낼 수 있다.
