$(document).ready(function(){

//로그인 상단 메뉴

$(".language_menu").hide();
$(".language").toggle(function(){
  $(".language_menu").fadeIn()
  $(".lnb_img").attr({src: "images/language_bt_1.jpg"})
},function(){
    $(".language_menu").fadeOut()
    $(".lnb_img").attr({src: "images/language_bt.jpg"})
  })


//메뉴바 마우스오버시 효과
 $(".nav1_about").mouseover(function(){
   $(this).text("인사말")
          .css({
            "padding-left" : "68px" ,
            "padding-right" : "68px",
            "font-weight" : 550
          })
 })
 $(".nav1_about").mouseout(function(){
   $(this).text("ABOUT")
          .css({
            "padding-left" : "66px",
            "padding-right" : "66px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_room").mouseover(function(){
   $(this).text("객 실")
          .css({
            "padding-left" : "71.5px",
            "padding-right" : "72px",
            "font-weight" : 550
          })
 })
 $(".nav1_room").mouseout(function(){
   $(this).text("ROOM")
          .css({
            "padding-left" : "66px",
            "padding-right" : "66px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_special").mouseover(function(){
   $(this).text("BMH 스페셜")
          .css({
            "padding-left" : "70.5px",
            "padding-right" : "70.0px",
            "font-weight" : 550
          })
 })
 $(".nav1_special").mouseout(function(){
   $(this).text("BMH SPECIAL")
          .css({
            "padding-left" : "66px",
            "padding-right" : "66px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_event").mouseover(function(){
   $(this).text("BMH 이벤트")
          .css({
            "padding-left" : "64.5px",
            "padding-right" : "64.8px",
            "font-weight" : 550
          })
 })
 $(".nav1_event").mouseout(function(){
   $(this).text("BMH EVENT")
          .css({
            "padding-left" : "66px",
            "padding-right" : "66px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_traffic").mouseover(function(){
   $(this).text("오시는길")
          .css({
            "padding-left" : "63.5px",
            "padding-right" : "64px",
            "font-weight" : 550
          })
 })
 $(".nav1_traffic").mouseout(function(){
   $(this).text("TRAFFIC")
          .css({
            "padding-left" : "66px",
            "padding-right" : "66px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_community").mouseover(function(){
   $(this).text("게 시 판")
          .css({
            "padding-left" : "79px",
            "padding-right" : "79px",
            "font-weight" : 550
          })
 })
 $(".nav1_community").mouseout(function(){
   $(this).text("COMMUNITY")
          .css({
            "padding-left" : "60px",
            "padding-right" : "60px",
            "font-weight" : "normal"
          })
 })
 $(".nav1_reservation").mouseover(function(){
   $(this).text("예 약 하 기")
          .css({
            "padding-left" : "66.5px",
            "padding-right" : "65px",
            "font-weight" : 550
          })
  $(".nav1 li:eq(6)").css({
    "background-color" : "rgb(126, 93, 13)"
  })
 })
 $(".nav1_reservation").mouseout(function(){
   $(this).text("RESERVATION")
          .css({
            "padding-left" : "55px",
            "padding-right" : "55px",
            "font-weight" : "normal"
          })
  $(".nav1 li:eq(6)").css({
    "background-color" : "rgba(126, 93, 13,0.4)"
  })
 })










})
