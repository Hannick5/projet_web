<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$link = mysqli_connect('localhost' ,'root','root','projet_web_db');

if(mysqli_connect_error()){
    exit('Error connecting database' . mysqli_connect_error());
}

if(!isset($_POST['username'])){
    exit('Empty Field');
}

if(empty($_POST['username'])){
    exit('Value empty');
}


if($stmt = $link->prepare('SELECT id FROM gamedata WHERE username = ?')){
    $stmt->bind_param('s',$_POST['username']);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows>0){
        echo '<!DOCTYPE html>
        <html lang="fr">
            <head>    
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
                <link rel="stylesheet" href="register.css">
                <meta charset="UTF-8">
                <title>Register</title>
                <meta name = "Register" content="">
            </head> 
        
        <div class="login-box">
            <h2>Register</h2>    
                <form action="register2.php" method="post">
                        <div class="user-box">
                            <input type="text" id="username" name="username" autocomplete="off" >
                            <label>Username</label>
                        </div>
                        <!--<div class="user-box">
                            <input type="password" id="password" name="mdp" autocomplete="off">
                            <label>Password</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="cmdp" id="confirmpassword" autocomplete="off" >
                            <label>Confirm Password</label>
                        </div>-->

                        <p id="warning" style="color:red;">Ce nom existe déjà.</p>
        
                        <div class="container ">
                            <button type="submit" id="connect" class="button type3">
                                <script>
                                    document.getElementById("connect").addEventListener("click", myFunction);
                                    function myFunction() {
                                      window.location.replace("../../jeu/jeu.html");
                                    }
                                  </script>
                                <span>Connect</span>
                            </button>
                            <i class="fa fa-spinner " id="spinner" aria-hidden="true "></i>
                            <i class="fa fa-check " id="check" aria-hidden="true "></i>
                        
                        </div>
        
        
                    </form>
                    <div id="container">
                <div id="head">
                    <i class="fas fa-crown"></i>
				    <h1>Best Players</h1>
                </div>
                <div id="leaderboard">
                    <script>
                        fetch("../../jeu/score.php")
                        .then(result => result.json())
                        .then(result => {
                            console.log(result);
                            var nbr_dejoueur = Object.keys(result).length;
                            var leaderboard = document.getElementById("leaderboard");
                            for(var k = 0;k<nbr_dejoueur;k++){
                                var li = document.createElement("li");
                                li.innerText = li.value + k+1 +"." + result[k].username + " avec un score de " + result[k].score;
                                leaderboard.appendChild(li);
                            }
                        })
                    </script>
                    
            </div>
        </div>
                    <script src="register.js" ></script>     
        </div>';
    }
    else{
        if($stmt = $link->prepare('INSERT INTO gamedata (username) VALUES (?)')){
            $stmt->bind_param('s',$_POST['username']);
            $stmt->execute();
        }
        header("Location:../../jeu/jeu.html");
    }
    $stmt->close();
}
$link->close();
?>
