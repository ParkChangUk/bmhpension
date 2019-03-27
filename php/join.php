<?php
  session_start();
  $id = $_POST['id'];
  $pw = $_POST['pw'];
  $pwc = $_POST['pwc'];
  $name = $_POST['name'];
  $name_en = $_POST['name_en'];
    $_SESSION['name_en'] = $_POST['name_en'];
  $sex = $_POST['sex'];
  $date = $_POST['date'];
    $phone_num1 = $_POST['phone_num1'];
    $phone_num2 = $_POST['phone_num2'];
    $phone_num3 = $_POST['phone_num3'];
  $phone_num = "$phone_num1-$phone_num2-$phone_num3";
    $email_1 = $_POST['email_1'];
    $email_2 = $_POST['email_2'];
  $email = "$email_1@$email_2";
  $email_chk = $_POST['email_chk'];
  $sms_chk = $_POST['sms_chk'];

  $mysqli=mysqli_connect('localhost','root','111111','opentutorials');
  $id_check = "SELECT * FROM user_info WHERE id='".$_POST['id']."'";
  $id_result = mysqli_query($mysqli, $id_check);
  $id_count = mysqli_num_rows($id_result);
   if($id == null){
     echo "<script>alert(\"아이디를 입력해 주세요.\");
                       history.back();</script>";
   }else if($id_count>=1||preg_match('/[0-9]/',$id)=="0"&&preg_match('/[a-z]/',$id)=="0"||preg_match('/[!\#\&\+\-\%\@\=\/\\\:\;\,\.\'\"\^\`\~\_\|\?\*\$\<\>\(\)\[\]\{\}]/', $id)>="1"||strlen($id)<8||strlen($id)>15)
   {
     echo "<script> alert(\"중복확인을 하지 않았습니다.\");
                      history.back();</script>";
   }
   else if($pw == null){
     echo "<script>alert(\"비밀번호를 입력해 주세요.\");
                       history.back();</script>";
   }
   else if(preg_match('/[0-9]/',$pw)=="0"||preg_match('/[a-z]/',$pw)=="0"&&preg_match('/[!\#\&\+\-\%\@\=\/\\\:\;\,\.\'\"\^\`\~\_\|\?\*\$\<\>\(\)\[\]\{\}]/', $pw)=="0"||strlen($pw)<8||strlen($pw)>15){
     echo "<script>alert(\"8~15자 이상의 영문자와 숫자, 특수기호를 이용한 비밀번호를 입력해 주세요.\");
                       history.back();</script>";
   }
   else if($pwc == null){
    echo "<script>alert(\"비밀번호 확인을 입력해 주세요.\");
                      history.back();</script>";
  }else if($pw != $pwc){
    echo "<script>alert(\"비밀번호가 일치하지 않습니다.\");
                      history.back();</script>";
  }
  else if($name == null){
    echo "<script>alert(\"성명(한글)을 입력해 주세요.\");
                      history.back();</script>";
  }else if(preg_match('/[0-9]/',$name)>="1"||preg_match('/[!\#\&\+\-\%\@\=\/\\\:\;\,\.\'\"\^\`\~\_\|\?\*\$\<\>\(\)\[\]\{\}]/', $name)>="1"||preg_match('/[ ]/',$name)>="1"){
    echo "<script>alert(\"정확한 성명(한글)을 입력해 주세요.\");
                      history.back();</script>";
  }
  else if($name_en == null){
    echo "<script>alert(\"성명(영문)을 입력해 주세요.\");
                      history.back();</script>";
  }else if($sex == null ){
    echo "<script>alert(\"성별을 입력해 주세요.\");
                      history.back();</script>";
  }else if($date == null){
    echo "<script>alert(\"생년월일을 입력해 주세요.\");
                      history.back();</script>";
  }else if($phone_num1 == null||$phone_num2 == null||$phone_num3 == null){
    echo "<script>alert(\"전화번호를 입력해 주세요.\");
                      history.back();</script>";
  }else if(preg_match('/[^0-9]/',$phone_num2)>="1"||preg_match('/[^0-9]/',$phone_num3)>="1"){
    echo "<script>alert(\"전화번호를 입력해 주세요.\");
                      history.back();</script>";
  }else
  if($email_1 == null){
    echo "<script>alert(\"이메일을 입력해 주세요.\");
                         history.back();</script>";
  }else if($email_2 == null){
    echo "<script>alert(\"도메인을 입력해 주세요.\");
                         history.back();</script>";
  }else if(preg_match('!^[\w\d\_\.\-]+\@((?:[\w\d\_\-]+\.)+(?:[\w]+))$!i', trim($email), $match) == false){
    echo "<script>alert(\"이메일을 잘못 입력하였습니다.\");
                         history.back();</script>";
  }
  // 성명(영문)은 무조건 대문자 힌트로 홍길동 넣기
  else{
    mysqli_query($mysqli,"INSERT INTO user_info(id,pw,name,name_en,sex,date,phone_num,email,email_chk,sms_chk) VALUES('$id','$pw','$name','$name_en','$sex','$date','$phone_num','$email','$email_chk','$sms_chk')");
    header("Location: ../join3.html");
  }



 ?>
