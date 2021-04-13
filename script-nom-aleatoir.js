
//Tp 1
var Noms = [];
function tirage(){ //fonction qui selectionne un membre du tableau
    let index = Math.floor( Math.random(Noms)* (Noms.length));
    let m=Noms[index];
    console.log('Client tiré au sort' + m);
    return m;
}

function add_nom(){
    var nom= prompt('Saisir un nom');  //on demande le nom 
    Noms.push(nom);
}

