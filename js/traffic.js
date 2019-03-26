$(document).ready(function(){

  var currentPosition = parseInt($("#right_section").css("top"));
  $('#right_section').fadeOut();
  $(window).scroll(function() {
          var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
          $("#right_section").stop().animate({"top":position+currentPosition+"px"},300);


            if ($(window).scrollTop() < 50) {
                $('#right_section').fadeOut();
            }else if($(window).scrollTop() > 752){
              $('#right_section').stop().animate({"top":"1000px"});

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

});
