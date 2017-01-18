<?php

$file = $_FILES["myFile"];
// $user = $_POST["user"];
if ($file["error"] == 0) {
	//如果文件上传正确
	//设置一个允许上传类型数组
	$array = array("image/png", "image/gif", "image/jpeg", "image/jpg");
	if (in_array($file["type"], $array)) {
		if ($file["size"] > 900000) {
			//如果文件大小超出限制
			die("上传文件大小超出限制，最大支持200K");
		} else {
			if (!file_exists("upload")) {
				mkdir("upload");
			}
			;
			move_uploaded_file($file["tmp_name"], "upload/" . $file["name"]);
			$url = "upload/" . $file["name"];
			echo $url;
		}
	} else {
		die("上传文件类型错误，支持jpg/jpeg/png/gif");
	}
}

?>
