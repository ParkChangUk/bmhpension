$(document).ready(function(){

  var currentPosition = parseInt($("#right_section").css("top"));
  $('#right_section').fadeOut();
  $(window).scroll(function() {
          var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
          $("#right_section").stop().animate({"top":position+currentPosition+"px"},300);


            if ($(window).scrollTop() < 50) {
                $('#right_section').fadeOut();
            }else if($(window).scrollTop() > 882){
              $('#right_section').stop().animate({"top":"1790px"});

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

  $(function(){
  $("#before_res").datepicker({
  dateFormat: 'yy-mm-dd' //Input Display Format 변경
  ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
  ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면
  ,buttonImage: "./images/date.jpg" //버튼 이미지 경로
  ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
  ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
  ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
  ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
  ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
  ,maxDate: 60
  ,beforeShowDay: disableAllTheseDays
  ,minDate: 0
  ,onSelect: function(selected) {
  $("#after_res").datepicker("option","minDate", selected)
   $("img.ui-datepicker-trigger").attr("style", "margin-left: -26px; width: 20px; vertical-align:-6px; cursor: Pointer;");
  }
  });

});
var disabledDays = ["2019-4-13","2019-4-14"];
function disableAllTheseDays(date) {
    var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
    for (i = 0; i < disabledDays.length; i++) {
        if($.inArray(y + '-' +(m+1) + '-' + d,disabledDays) != -1) {
            return [false];
        }
    }
    return [true];
}
$(function(){
  $("#after_res").datepicker({
    dateFormat: 'yy-mm-dd' //Input Display Format 변경
    ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
    ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면
    ,buttonImage: "./images/date.jpg" //버튼 이미지 경로
    ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
    ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
    ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
    ,maxDate: 60
    ,beforeShowDay: disableAllTheseDays
    ,minDate: 0
  ,onSelect: function(selected) {
  $("#before_res").datepicker("option","maxDate", selected)
   $("img.ui-datepicker-trigger").attr("style", "margin-left: -26px; width: 20px; vertical-align:-6px; cursor: Pointer;");
  }
  });
});


  $(function() {
      //input을 datepicker로 선언
  $("#datepicker").datepicker({
      dateFormat: 'yy-mm-dd' //Input Display Format 변경
      ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
      ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
      ,changeYear: true //콤보박스에서 년 선택 가능
      ,changeMonth: true //콤보박스에서 월 선택 가능
      ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
      ,buttonImage: "./images/date.jpg" //버튼 이미지 경로
      ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
      ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
      ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
      ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
      ,maxDate: 0
      ,minDate: "-100Y"
      ,yearRange: "-100: -0"
  });
 $("img.ui-datepicker-trigger").attr("style", "margin-left:-26px; width: 20px; vertical-align:-6px; cursor: Pointer;");
});

});
