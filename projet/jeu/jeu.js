//Déclaration de variables globales

var map = L.map('map').setView([51.505, -0.09], 13);
var inventaire = document.getElementById("inventaire");
var formulaire = document.getElementById("form");

//On charge les slots d'inventaire

var placeholder1 = document.getElementById("obj1");
var placeholder2 = document.getElementById("obj2");
var placeholder3 = document.getElementById("obj3");
var placeholder4 = document.getElementById("obj4");
var placeholder5 = document.getElementById("obj5");
var placeholder6 = document.getElementById("obj6");

//Création de la map leaflet

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.Control.geocoder().addTo(map);


//Objet recupérable

fetch('objets.php?id=1') //Requête ajax pour récupérer l'objet qui a l'id correspondant dans la bdd (voir php)
.then(result => result.json())
.then(result => {

    result = result[0]; //Pour faciliter l'accès aux attributs du json..

    //Création d'icone pour les marker à l'aide de leaflet

    var keyIcon = L.icon({ 
        iconUrl: 'images/key.png', //Le répertoire images contient toutes les images utilisées
    
        iconSize:     [60, 95], 
        iconAnchor:   [22, 94], 
        popupAnchor:  [-3, -76] 
    });

    //Fonction qui va déplacer l'objet vers l'inventaire
    
    function moveToInventory(){
        var keyPic = document.createElement("img");
        keyPic.setAttribute("src", "images/key.png")
        keyPic.setAttribute("height","80%");
        keyPic.setAttribute("width","100%");
        keyPic.setAttribute("max-width","100%");
        keyPic.setAttribute("max-height","100%");
        keyPic.style.marginTop = "20px";
        placeholder1.appendChild(keyPic);
        Markers.removeLayer(keyMarker);
        placeholder1.classList.add(result.nom); //Important si c'est un objet qui en bloque un autre
    }

    //On utilise la méthode ".on" des marker pour ajouter un event listener

    var keyMarker = L.marker([result.latitude, result.longitude], {icon: keyIcon}).on("click",moveToInventory);

    //Gestion du zoom avec construction et déconstruction d'un groupe de marker

    var Markers = new L.FeatureGroup();
    
    Markers.addLayer(keyMarker);
    
    map.on('zoomend', function() {
        if (map.getZoom() <result.zoom_min){
                map.removeLayer(Markers);
        }
        else {
                map.addLayer(Markers);
            }
    });
})

//Objet qui donne un code

fetch('objets.php?id=2')
.then(result => result.json())
.then(result => {
  result = result[0];
  var codeIcon = L.icon({
    iconUrl: 'images/parchemin-ancien.png',

    iconSize:     [60, 75], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
    });

    //Fonction qui affiche le code après un clique

    var doubleClique = true; //Pemier clique affiche le code et deuxième déplace dans l'inventaire

    function afficheCode(e){
        if(doubleClique){
            var popup = e.target.getPopup();
            popup.setContent("Voici le code : " + result.code); //accès au code et insertion dans le popup
        }
        else{
            var codePic = document.createElement("img");
            codePic.setAttribute("src", "images/parchemin-ancien.png")
            codePic.setAttribute("height", "130");
            codePic.setAttribute("width", "90");
            codePic.setAttribute("alt", "Code");
            codePic.setAttribute("max-width","100%");
            codePic.setAttribute("max-height","100%");
            codePic.setAttribute("class", "codeSecu");
            codePic.style.marginLeft = "18px";
            codePic.style.marginTop = "40px";
            placeholder2.appendChild(codePic);
            Markers.removeLayer(codeMarker);
        }
        doubleClique=false;
        
    }

    var popupStatic = '<p style="height:200px; width:200px">static content</p>'

    var codeMarker = L.marker([result.latitude, result.longitude], {icon: codeIcon}).on('click',afficheCode);

    //Gestion du zoom

    var Markers = new L.FeatureGroup();
    
    Markers.addLayer(codeMarker);
    
    map.on('zoomend', function() {
        if (map.getZoom() <result.zoom_min){
                map.removeLayer(Markers);
        }
        else {
                map.addLayer(Markers);
            }
    });

    codeMarker.bindPopup(popupStatic);

    var marker = new L.Marker([result.latitude, result.longitude]).addTo(map);
})

//Objet bloqué par un code

fetch('objets.php?id=3')
.then(result => result.json())
.then(result => {
    result = result[0];
    var securiteIcon = L.icon({
    iconUrl: 'images/securite.png',

    iconSize:     [60, 75], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
    });

    var keyIcon = L.icon({
        iconUrl: 'images/key.png',
    
        iconSize:     [60, 95], 
        iconAnchor:   [22, 94], 
        popupAnchor:  [-3, -76] 
    });

    //recupération du code
    
    codeReel = 0;

    fetch('objets.php?id=2')
    .then(result => result.json())
    .then(result => {
        codeReel=result[0].code;
    })
    
    function moveToInventory(){
        var keyPic = document.createElement("img");
        keyPic.setAttribute("src", "images/key.png")
        keyPic.setAttribute("height", "130");
        keyPic.setAttribute("width", "90");
        keyPic.setAttribute("alt", "Key");
        keyPic.style.marginLeft = "18px";
        keyPic.style.marginTop = "40px";

        placeholder4.appendChild(keyPic);
        map.removeLayer(sortieMarker);

    }

    var indice = result.Indice;
    var indiceHTML = document.createElement("p");
    indiceHTML.innerText = indice;
    formulaire.appendChild(indiceHTML);

    var sortieMarker = L.marker([result.latitude, result.longitude], {icon: keyIcon}).on("click",moveToInventory);
    var submit = document.getElementById("submit");
    var codeInput = document.getElementById("codeValue");
    
    function reviewCode(e){
        var popup = e.target.getPopup();
        var erreur = document.getElementById("erreurCode");
        popup.setContent( formulaire );

        submit.addEventListener("click",function(event){
            if(codeInput.value != codeReel){
                
                erreur.innerHTML="Mauvais code réessayez";
                popup.setContent( formulaire );
                event.preventDefault();
            }
            else{
                map.removeLayer(securiteMarker);
                sortieMarker.addTo(map);
                event.preventDefault();
            }
            
        })
    }


    var securiteMarker = L.marker([result.latitude, result.longitude], {icon: securiteIcon}).addTo(map).on("click",reviewCode);
    var popupStatic = '<p style="height:200px; width:200px">static content</p>'

    securiteMarker.bindPopup(popupStatic);
    
})

//Objet bloqué par un objet

fetch('objets.php?id=4')
.then(result => result.json())
.then(result => {
    result = result[0];

    var idObjBloque = result.idBloque;

    var nomObjBloque = "";

    fetch('objets.php?id='+idObjBloque)
    .then(result => result.json())
    .then(result => {
        nomObjBloque = result[0].nom;
    })



    var treasureIcon = L.icon({
    iconUrl: 'images/treasure.png',

    iconSize:     [60, 65], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
    });

    var gemmeIcon = L.icon({
        iconUrl: 'images/gemme.png',
    
        iconSize:     [60, 95], 
        iconAnchor:   [22, 94], 
        popupAnchor:  [-3, -76] 
    });

    function moveToInventory(){
        var gemmePic = document.createElement("img");
        gemmePic.setAttribute("src", "images/gemme.png")
        gemmePic.setAttribute("height","100%");
        gemmePic.setAttribute("width","100%");
        gemmePic.setAttribute("max-width","100%");
        gemmePic.setAttribute("max-height","100%");
        gemmePic.setAttribute("alt", "Gemme");
        placeholder3.appendChild(gemmePic);
        map.removeLayer(sortieMarker);

    }

    var sortieMarker = L.marker([result.latitude, result.longitude], {icon: gemmeIcon}).on("click",moveToInventory);
    var treasureMarker = L.marker([result.latitude, result.longitude], {icon: treasureIcon}).on("click",isThereObject);


    function isThereObject(e){  
        var popup = e.target.getPopup();
        if(placeholder1.classList.contains(nomObjBloque)){
            map.removeLayer(treasureMarker);
            Markers.removeLayer(treasureMarker);
            Markers.addLayer(sortieMarker);
            sortieMarker.addTo(map);
        }
        else{
            popup.setContent( "Vous n'avez pas la clé." );
        }
    }

    var popupStatic = '<p style="height:200px; width:200px">static content</p>';

    var Markers = new L.FeatureGroup();
    
    
    Markers.addLayer(treasureMarker);

    map.on('zoomend', function() {
        if (map.getZoom() < 15  ){
                map.removeLayer(Markers);
        }
        else {
                map.addLayer(Markers);
            }
    });

    treasureMarker.bindPopup(popupStatic);

})

