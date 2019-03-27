<?php
// $duration = 24 * 60 * 60 * 30;  // 30일
// ini_set('session.gc_maxlifetime', $duration);
// session_set_cookie_params($duration);
session_start();
$id = $_POST['id'];
$pw = $_POST['pw'];
$mysqli=mysqli_connect('localhost','root','111111','opentutorials');
$check = "SELECT * FROM user_info WHERE id='".$id."'";
$result = mysqli_query($mysqli, $check);
$count = mysqli_num_rows($result);
if($id == null || $pw == null){
  echo "<script>alert(\"아이디와 비밀번호를 입력해주세요.\");
                    history.back();</script>";
}
 else if($count=1){
    $row = mysqli_fetch_array($result);
  if($row['pw']==$pw){
    $_SESSION['id']= $id;
    if(isset($_SESSION['id']))
    {
      header('Location: ../af_index.html'); //세션저장성공
    }
    else{
      echo "<script>alert(\"세션 저장에 실패하였습니다. 다시 로그인 해주세요.\");
                        history.back();</script>";
    }
  }
  else{
    echo "<script>alert(\"아이디 혹은 비밀번호가 잘못되었습니다.\");
                        history.back();</script>";
  }
}
else{
  echo "<script>alert(\"아이디 혹은 비밀번호가 잘못되었습니다.\");
                      history.back();</script>";
}
 ?>
