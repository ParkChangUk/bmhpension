$(document).ready(function(){
  //TOP버튼
  var currentPosition = parseInt($("#right_section").css("top"));
  $('#right_section').fadeOut();
  $(window).scroll(function() {
          var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
          $("#right_section").stop().animate({"top":position+currentPosition+"px"},300);

          if ($(window).scrollTop() < 50) {
              $('#right_section').fadeOut();
          }else if($(window).scrollTop() > 440){
            $('#right_section').stop().animate({"top":"1380px"});

          }else{
            $('#right_section').show();
          }
});
  //사진 자동 fadeIn, fadeOut 효과
  var num=5;
  setInterval(function(){
    num--;
    if(num==0)
    {
      $("#content_img>img").last().fadeIn(2000,function(){
        $("#content_img>img").show();
        num=5;
      });
    }
    else
    {
      $("#content_img>img").eq(num).fadeOut(2000);}
    },4500);




})
