<?php
include "common.php";
class Car {
	function __construct() {
		global $conn;
		$this->conn = $conn;
	}
	public function getCarItems($userID) {
		$sql = "select c.count as count ,p.* from car c,products p where c.userid = $userID and c.itemid=p.id";
		$result = mysqli_query($this->conn, $sql);
		$arr = array();
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($arr, $row);
		}
		return $arr;
	}
	public function addCar($userID, $itemID, $count) {
		$sql = "SELECT * FROM car where itemid=$itemID AND userid=$userID";
		$result = mysqli_query($this->conn, $sql);
		$row = mysqli_fetch_assoc($result);
		if ($row) {
			$count += $row["count"];
			$sql = "UPDATE car SET count=$count WHERE itemid=$itemID AND userid=$userID";
		} else {
			$sql = "INSERT INTO car (itemid,count,userid) VALUES ($itemID,$count,$userID)";
		};
		$result = mysqli_query($this->conn, $sql);
		$obj = (object) array();
		$obj->status = 0;
		$obj->msg = "执行成功";
		if (!$result) {
			$obj->status = 1;
			$obj->msg = "执行失败";
		}
		return $obj;
	}
}
$type = $_REQUEST["type"];
$userID = $_REQUEST["userID"];

$car = new Car();
if ($type == "get") {
	$items = $car->getCarItems($userID);
}
if ($type == "add") {
	$itemID = $_REQUEST["itemID"];
	$count = $_REQUEST["count"];
	$items = $car->addCar($userID, $itemID, $count);
}

echo json_encode($items);
?>
