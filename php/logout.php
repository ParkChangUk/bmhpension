<?php
session_start();

unset( $_SESSION['id'] );
  header('Location: ../login.html');
// }else {
//   echo "<script>alert(\"오류\");
//                     history.back();</script>";
// }

 ?>
