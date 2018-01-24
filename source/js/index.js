var $body = document.body;
var $toggle = document.querySelector(".navbar-toggle");
var $navbar = document.querySelector("#bosenyblog-navbar");
var $collapse = document.querySelector(".navbar-collapse");
var topBtn = document.querySelector(".gotop-btn");

$toggle.addEventListener("click", handleMagic);
function handleMagic(e) {
  if ($navbar.className.indexOf("in") > 0) {
    // CLOSE
    $navbar.className = "";
    // wait until animation end.
    setTimeout(function() {
      // prevent frequently toggle
      if ($navbar.className.indexOf("in") < 0) {
        $collapse.style.height = "0px";
      }
    }, 400);
  } else {
    // OPEN
    $collapse.style.height = "auto";
    $navbar.className += " in";
  }
}
$(window).scroll(function() {
  $(this).scrollTop() > 400
    ? $(".gotop-btn").css("display", "block")
    : $(".gotop-btn").hide();
});
$(".gotop-btn").hover(
  function() {
    $(this).addClass("top-active");
  },
  function() {
    $(this).removeClass("top-active");
  }
);
topBtn.addEventListener("click", () => {
  $("html,body").animate({ scrollTop: "0px" }, 500);
  $(".gotop-btn").removeClass("top-active");
});
