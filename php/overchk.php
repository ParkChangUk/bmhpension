<?php

$id = $_POST['id'];

$mysqli=mysqli_connect('localhost','root','111111','opentutorials');

$check = "SELECT * FROM user_info WHERE id='".$id."'";
$result = mysqli_query($mysqli, $check);
$count = mysqli_num_rows($result);

if($id == NULL)
{
  echo "<script>alert(\"아이디를 입력해 주세요.\");
                    history.back();</script>";
}
else if(preg_match('/[0-9]/',$id)=="0"&&preg_match('/[a-z]/',$id)=="0"||preg_match('/[!\#\&\+\-\%\@\=\/\\\:\;\,\.\'\"\^\`\~\_\|\?\*\$\<\>\(\)\[\]\{\}]/', $id)>="1"
                    ||strlen($id)<8||strlen($id)>15)
{
  echo "<script>alert(\"8~15자 영문과 숫자만를 혼용하여 사용해 주세요.\");
                    history.back();</script>";
}
else
if($count>=1)
{
  echo "<script>alert(\"중복된 id입니다.\");
                    history.back();</script>";
}else{
  echo "<script>alert(\"사용가능한 id입니다.\");
                    history.back();</script>";
}

 ?>
