<?php
  session_start();
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
  $res_date = "$date1 ~ $date2";
  $name = $_POST['name'];
    $_SESSION['name'] = $name;
  $sex = $_POST['sex'];
  $date = $_POST['date'];
    $phone_num1 = $_POST['phone_num1'];
    $phone_num2 = $_POST['phone_num2'];
    $phone_num3 = $_POST['phone_num3'];
  $phone_num ="$phone_num1-$phone_num2-$phone_num3";
    $email_1 = $_POST['email_1'];
    $email_2 = $_POST['email_2'];
  $email =  "$email_1@$email_2";
    $randomNum = mt_rand(10000 ,999999);
  $non_userNum = $randomNum;
    $_SESSION['non_userNum'] = $randomNum;
  $email_chk = $_POST['email_chk'];
  $sms_chk = $_POST['sms_chk'];

  $mysqli=mysqli_connect('localhost','root','111111','opentutorials');
  $check = "SELECT * FROM non_userRes WHERE name='".$name."'";
  $result = mysqli_query($mysqli, $check);
  $row = mysqli_fetch_array($result);
  $count = mysqli_num_rows($result);

    if($date1==null || $date2==null){
      echo "<script>alert(\"예약날짜를 입력해 주세요.\");
                        history.back();</script>";
    }else if($date1==$date2){
      echo "<script>alert(\"죄송합니다. 당일예약은 불가능합니다.\");
                        history.back();</script>";
    }
    else if($name==null){
      echo "<script>alert(\"성명을 입력해 주세요.\");
                        history.back();</script>";
    }else if($sex==null){
      echo "<script>alert(\"성별을 선택해 주세요.\");
                        history.back();</script>";
    }else if($date==null){
      echo "<script>alert(\"생년월일을 입력해 주세요.\");
                        history.back();</script>";
    }else if($phone_num==null){
      echo "<script>alert(\"휴대전화를 입력해 주세요.\");
                        history.back();</script>";
    }else if($email_1==null || $email_2==null){
      echo "<script>alert(\"이메일을 입력해 주세요.\");
                        history.back();</script>";
    }else if($email_chk==null && $sms_chk==null){
      echo "<script>alert(\"정보수신동의 필수로 입력해 주셔야합니다.(하나만 선택가능)\");
                        history.back();</script>";
    }else if($count=1){
     if($row['non_userNum']==$non_userNum){
       echo "<script>alert(\"이미 예약된 정보가 있습니다. 확인해주시기 바랍니다.\");
                         history.back();</script>";
     }
   }else{
     mysqli_query($mysqli,"INSERT INTO non_userRes(res_date,name,sex,date,phone_num,email,non_userNum,email_chk,sms_chk) VALUES('$res_date','$name','$sex','$date','$phone_num','$email','$non_userNum','$email_chk','$sms_chk')");
     header("Location: ../bmhspecial(getpul)3.html");
   }
 ?>
