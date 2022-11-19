<?php
    $link = mysqli_connect('localhost', 'root', 'root', 'projet_web_db');
    mysqli_set_charset($link, "utf8");
?>

<?php
    $id = $_GET["id"];
    $results = mysqli_query($link, "SELECT * FROM objets WHERE id = $id");
    $array = [];
    foreach($results as $result){
        array_push($array,$result);
    }
    echo json_encode($array,JSON_NUMERIC_CHECK)
?>