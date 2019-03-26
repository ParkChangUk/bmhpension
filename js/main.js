$(document).ready(function(){
  //TOP버튼
  var currentPosition = parseInt($("#right_section").css("top"));
  $('#right_section').fadeOut();
  $(window).scroll(function() {
          var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
          $("#right_section").stop().animate({"top":position+currentPosition+"px"},300);

          if ($(window).scrollTop() < 50) {
              $('#right_section').fadeOut();
          }else if($(window).scrollTop() > 3970){
            $('#right_section').stop().animate({"top":"4970px"});

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
  //메인 슬라이드 화면
    $("#slide_img ul").prepend($("#slide_img ul li:last"))
                .css({ marginLeft: -1903 })
  //left
    $(".left_btn").click(function () {
      $("#slide_img ul").animate({marginLeft: 0 },800, function() {
        $("#slide_img ul").prepend($("#slide_img li:last"))
                     .css({ marginLeft: -1903 })
      })
    })
  //right
      $(".right_btn").click(function () {
      $("#slide_img ul").animate({ marginLeft: -3806 },800, function() {
        $("#slide_img ul").append($("#slide_img ul li:first"))
                     .css({ marginLeft: -1903 })
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


    //소셜 바로가기 마우스 오버시 효과
    $(".instar ul li:eq(3)").mouseover(function(){
      $(".instar ul li a").stop().animate({
        fontSize:18
      },200)
      $(".instar_btn").stop().animate({
        paddingLeft: 14
      },200)
    })
    $(".instar ul li:eq(3)").mouseout(function(){
      $(".instar ul li a").stop().animate({
        fontSize:17
      },200)
      $(".instar_btn").stop().animate({
        paddingLeft: 5
      },200)
    })
    $(".facebook ul li:eq(3)").mouseover(function(){
      $(".facebook ul li a").stop().animate({
        fontSize:18
      },200)
      $(".facebook_btn").stop().animate({
        paddingLeft: 14
      },200)
    })
    $(".facebook ul li:eq(3)").mouseout(function(){
      $(".facebook ul li a").stop().animate({
        fontSize:17
      },200)
      $(".facebook_btn").stop().animate({
        paddingLeft: 5
      },200)
    })
    $(".blog ul li:eq(3)").mouseover(function(){
      $(".blog ul li a").stop().animate({
        fontSize:18
      },200)
      $(".blog_btn").stop().animate({
        paddingLeft: 14
      },200)
    })
    $(".blog ul li:eq(3)").mouseout(function(){
      $(".blog ul li a").stop().animate({
        fontSize:17
      },200)
      $(".blog_btn").stop().animate({
        paddingLeft: 5
      },200)
    })







})
