<?php
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
if($username=="admin"&&$password=="admin"){
    echo "success";
}else{
    echo "error";
}
 ?>
