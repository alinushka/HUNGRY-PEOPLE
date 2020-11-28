$(document).ready(function () {
  var tabsItem = $(".tabs__item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    console.log($(this).attr("data-target"));
  });
});
