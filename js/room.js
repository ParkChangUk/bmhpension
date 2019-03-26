$(document).ready(function(){
//scroll시 탑 버튼
  var currentPosition = parseInt($("#right_section").css("top"));
  $('#right_section').fadeOut();
  $(window).scroll(function() {
          var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
          $("#right_section").stop().animate({"top":position+currentPosition+"px"},300);


            if ($(window).scrollTop() < 50) {
                $('#right_section').fadeOut();
            }else if($(window).scrollTop() > 1250){
              $('#right_section').stop().animate({"top":"2250px"});

            }else{
              $('#right_section').show();
            }
});
$("#top_button").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });


  $("#slide_img ul").prepend($("#slide_img ul li:last"))
              .css({ marginLeft: -1509 })
//left
  $(".left_btn").click(function () {
    $("#slide_img ul").animate({marginLeft: 0},800, function() {
      $("#slide_img ul").prepend($("#slide_img li:last"))
                   .css({ marginLeft: -1509 })
    })
  })
//right
    $(".right_btn").click(function () {
    $("#slide_img ul").animate({ marginLeft: -3018 },800, function() {
      $("#slide_img ul").append($("#slide_img ul li:first"))
                   .css({ marginLeft: -1509 })
    })
  })
//자동 슬라이드 및 마우스오버시 정지
  var timing = setInterval(function() {
    $(".right_btn").click();
  }, 5000)

  $("#slide a").hover(function() {
    clearInterval(timing)
  }, function() {
    timing = setInterval(function() {
      $(".right_btn").click();
    }, 5000)
  })





})
