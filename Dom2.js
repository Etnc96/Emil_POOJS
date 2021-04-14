var texte = document.querySelector('#zone');

function ajoute(){
    //console.log('hello');
    //var style = document.createElement("style")
    //style.textContent= '#zone{color: green}';
    let tabCouleur = ["red", "blue","green","yellow"];
    let couleur = Math.floor(Math.random()*(tabCouleur.length));
    texte.setAttribute('style','color : ' + tabCouleur[couleur]);
    console.log(couleur, tabCouleur[couleur]);
}

function supprime(){
    texte.removeAttribute("style");
}