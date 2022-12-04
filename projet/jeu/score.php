<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$link = mysqli_connect('localhost' ,'root','root','projet_web_db');

$sql = "SELECT username,score
        FROM gamedata
        ORDER BY score DESC LIMIT 10";


$myArray = array();
$result = $link->query($sql);
while($row = $result->fetch_assoc()) {
    $myArray[] = $row;
}
echo json_encode($myArray);
?>