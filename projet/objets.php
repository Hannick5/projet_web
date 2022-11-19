<?php
    $link = mysqli_connect('localhost', 'root', 'root', 'geobase');
    mysqli_set_charset($link, "utf8");
?>

<?php
    $results = mysqli_query($link, "SELECT * FROM objets");
    $array = [];
    foreach($results as $result){
        array_push($array,$result);
    }
    echo json_encode($array)
?>