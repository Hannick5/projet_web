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
- [Arborescence de dossiers](#arborescence-de-dossiers)
- [Installation](#installation)
- [Jeu](#jeu)
- [Solution du jeu](#solution-du-jeu)

## Projet

Dans le cadre du projet de développement web de 2 ème année nous avons codés un escape game à l'aide des languages de programmation HTML, CSS, JavaScript et PHP.

L'objectif étant d'avoir une carte interactive fonctionnelle pour le grand publique implémentant des fonctionnalités précises et requises dans le cadre du projet. (cf. la partie features) 

Pour le côté serveur nous avons utilisé le système de gestion de bases de données relationnelles (SGBDR) MySQL couplé avec MAMP qui est un logiciel gratuit permettant de créer un serveur local ainsi que de gérer la base de donnée directement en ligne. (Plus d'information dans le section Installation)

La connexion à la BDD à l'aide de PHP, couplée aux différentes requêtes AJAX sur JavaScript permettent de récupérer et parser un JSON contenant la donnée qui nous intéresse.

Pour le côté client nous avons implémenter en CSS une approche GRID pour la structure du site ainsi que l'inventaire.

## Arborescence de dossiers

Voici un arbre indiquant la structure des fichiers dans le projet :

```text
projet/
├──forms/
│  ├── login
│  └── register
├── jeu/
│  ├── images
│  └── objets.php
```

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
7. Allez dans Tools > phpMyAdmin > import et choisissez le fichier '.sql' du projet.
8. Vérifiez les paramètres dans le fichier objet.php (emplacement indiqué dans l'arborescence de dossiers)
    ```sh
   $link = mysqli_connect('localhost', 'root', 'root', 'projet_web_db');
   ```
    Par défaut le nom d'utilisateur et le mot de passe de mysql pour MAMP sont 'root' et 'root' si vous les avez modifiés modifiez les dans le objets.php aussi. 
9. Lancez 'login.html' dans le dossier 'login'.
10. Vous pouvez maintenant jouer au jeu !

## Jeu

Le but de l'escape game est de trouver 3 gemmes (bleue, verte et rouge) en résolvant des énigmes qui vous menerons aux différents coffres contenant les gemmes. Votre score est calculé en fonction de votre rapidité attention le timer commence au premier clique sur le premier objet visible !

## Solution du jeu

Pour le code du premier coffre fort : sur la tour eiffel

Pour la clé : cathédrale de forcalquier

Pour les 3 coffres : vert mont rushmore, bleu muraille de chine, rouge Grand monument Mansudae

