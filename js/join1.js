$(document).ready(function(){

  var url = "join2.html?ver=1"
  $(".join_nav2").click(function(){
    if($("#agree_1").prop("checked")){
      if($("#agree_2").prop("checked")){
        $(".join_nav2").attr('href', url);
      }else{
        alert("개인정보처리방침안내에 동의하셔야 합니다.");
        exit();
      }
    }else{
      alert("온라인 회원가입 약관에 동의하셔야 합니다.");
    }
  })

  $("#disagree_1").click(function(){
    if($("#disagree_1").prop("checked")){
      $("input[name=agree_1]").prop("checked",false);
      $("#al_agree").prop("checked",false);
    }
  })
  $("#agree_1").click(function(){
    if($("#agree_1").prop("checked")){
      $("input[name=disagree_1]").prop("checked",false);
    }
  })
  $("#disagree_2").click(function(){
    if($("#disagree_2").prop("checked")){
      $("input[name=agree_2]").prop("checked",false);
      $("#al_agree").prop("checked",false);
    }
  })
  $("#agree_2").click(function(){
    if($("#agree_2").prop("checked")){
      $("input[name=disagree_2]").prop("checked",false);
    }
  })

  //전체선택 체크박스 클릭
  $("#al_agree").click(function(){
    //만약 전체 선택 체크박스가 체크된상태일경우
    if($("#al_agree").prop("checked")) {
      //해당화면에 전체 checkbox들을 체크해준다
      $("input[name=agree_1]").prop("checked",true);
      $("input[name=agree_2]").prop("checked",true);
      $("input[name=disagree_1]").prop("checked",false);
      $("input[name=disagree_2]").prop("checked",false);
      }
    else {
      $("input[name=agree_1]").prop("checked",false);
      $("input[name=agree_2]").prop("checked",false);
      }
    })

    $(".next").click(function(){
      if($("#agree_1").prop("checked")){
        if($("#agree_2").prop("checked")){
          $(".next a").attr('href',url);
        }else{
          alert("개인정보처리방침안내에 동의하셔야 합니다.");
        }
      }else{

        alert("온라인 회원가입 약관에 동의하셔야 합니다.");


      }
    })

  })
