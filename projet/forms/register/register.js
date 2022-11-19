let register = document.getElementById("register")
let us = register.elements["us"];
let mdp = register.elements["mpd"];
let cmdp = register.elements["cmpd"];


function valider (event) {
    let form_OK = true;
    
    if(us.value == ""){
        form_OK = false;
        us.classList.add("erreur");
    }
    else{
        us.classList.remove("erreur");
    }
    if(mdp.value.length <= 12 ){
        form_OK = false;
        mdp.classList.add("erreur");
    }
    else{
        mdp.classList.remove("erreur");
    }
    if(cmdp!=mdp ){
        form_OK = false;
        mdp.classList.add("erreur");
        cmdp.classList.add("erreur");
    }
    else{
        mdp.classList.remove("erreur");
        cmdp.classList.remove("erreur");
    }

    if(!form_OK){
        event.preventDefault();
    }
}

register.addEventListener('submit', valider); 
