# Projet Web ING2 



<p align="center">
  <a href="https://ibb.co/Px2FmVB">
    <img src="https://i.ibb.co/SNk5sZq/siteon0.jpg" alt="siteon0" width = 200 height = 200 border="0">
  </a>

  <h3 align="center">Projet Web ING2</h3>

  <p align="center">
    par Hannick Abdul Kuthoos et Axel Dumont
    <br>
  </p>
</p>


## Table of contents

- [Projet](#projet)
- [Installation](#installation)
- [Jeu](#jeu)
- [Solution du jeu](#solution-du-jeu)

## Projet

Dans le cadre du projet de développement web de 2 ème année nous avons codés un escape game à l'aide des languages de programmation HTML, CSS, JavaScript et PHP.

L'objectif étant d'avoir une carte interactive fonctionnelle pour le grand publique implémentant des fonctionnalités précises et requises dans le cadre du projet. (cf. la partie features) 

Pour le côté serveur nous avons utilisé le système de gestion de bases de données relationnelles (SGBDR) MySQL couplé avec MAMP qui est un logiciel gratuit permettant de créer un serveur local ainsi que de gérer la base de donnée directement en ligne. (Plus d'information dans le section Installation)

La connexion à la BDD à l'aide de PHP, couplée aux différentes requêtes AJAX sur JavaScript permettent de récupérer et parser un JSON contenant la donnée qui nous intéresse.

Pour le côté client nous avons implémenter en CSS une approche GRID pour la structure du site ainsi que l'inventaire.

## Installation


1. Téléchargez git ou un équivalent.
2. Clonez le repository à l'aide de la commande suivante pour git :
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Téléchargez et installez [MAMP](https://www.mamp.info/en/downloads/).
4. Ouvrez MAMP et vérifiez que le nom est bien localhost et vérifiez votre port dans les préférences
5. Indiquez la position du dossier projet dans les paramètres de MAMP.
6. Lancez le web serveur Apache et allez sur : http://localhost:8888/MAMP/ (ici 8888 indique le port que vous avez choisit modifiez le lien en fonction).
7. Allez dans Tools > phpMyAdmin > import et choisissez le fichier '.sql' du projet importez le dans une bdd nommée "projet_web_db".
8. Vérifiez les paramètres dans les fichiers php.
    ```sh
   $link = mysqli_connect('localhost', 'root', 'root', 'projet_web_db');
   ```
    Par défaut le nom d'utilisateur et le mot de passe de mysql pour MAMP sont 'root' et 'root' si vous les avez modifiés modifiez les dans le objets.php aussi. 
9. Lancez 'index.html' dans le dossier 'register'.
10. Vous pouvez maintenant jouer au jeu !

## Jeu

Le but de l'escape game est de trouver 3 gemmes en résolvant des énigmes qui vous mènerons aux différents coffres contenant les gemmes. Vous devez récupérer les gemmes bleue et rouge en premières et lorsque vous récupérez la gemme verte vous devrez cliquer sur le portail qui apparaît pour finir la partie. Votre score est calculé en fonction de votre rapidité attention le timer commence lorque vous cliquez sur le coffre fort !

## Solution du jeu

Pour le code du coffre fort : cathédrale de Forcalquier

Pour la clé : sur la tour Eiffel

Pour les 3 coffres : vert Mont Rushmore, bleu muraille de Chine, rouge Grand monument Mansudae

