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
// var vm = new Vue({
//   el: "#vue",
//   data: {
//     text: ""
//   },
//   computed: {},
//   methods: {},
//   mounted() {
//     $.ajax({
//       url: "https://boseny-blog.disqus.com/embed.js", //请求的URL
//       timeout: 3000, //超时时间设置，单位毫秒
//       type: "get", //请求方式，get或post
//       data: {}, //请求所传参数，json格式
//       dataType: "script", //返回的数据格式
//       success: function(data) {
//         //请求成功的回调函数
//         return;
//       },
//       error: function(err) {
//         vm.text = "温馨提示，评论需要全局代理才可使用";
//         return;
//       },
//       complete: function(XMLHttpRequest, status) {
//         //请求完成后最终执行参数
//         if (status == "timeout") {
//           //超时,status还有success,error等值的情况
//           return;
//         }
//       }
//     });
//   }
// });
