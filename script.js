/*var maVar ="ma valeur";
(function(){
    var maVar = "Valeur locale";
    console.log(maVar);
})();
*/
/*
function Calcul(num1,num2){
    if(num2!=0){
        return num1 / num2;
    }else{
        console.log("Division par 0 impossible");
    }

}

var numero1 = 3;
var numero2 = 4;
console.log(numero1+ "+" + numero2 + "=" + Calcul(numero1, numero2));
*/

/* Exercice 1*/
/*
function carre(a) {

    return $a*$a;

}

// Afficher la sortie

console.log(carre(2));

console.log(carre(4));
*/
/*exercice 2 */
/*
function check(num1,num2){
    sum = num1 + num2 ;
    if(sum<100) return true;
    else return false; *//*cette ligne est inutile*/
    /*on peut remplacer ces lignes par return sum<100, il comprendra directement qu'il faut renvoyer un true ou false*/ /*
}
console.log(check(10,20));
*/


/*Exercice 3*/
/*
fuction Equal(num1,num2){
    return num1==num2;
}

var a = 23;
var b = 23;
console.log(Equal(a,b));
*/

/*Exercice 4*/
/*
function reverseTab(tab) { 

    let res = []; 
  
    for (let i = tab.length -1; i > -1; i--) { 
      res.push(tab[i]); 
    } 
    return res;
}

console.log(reverseTab([1, 2, 3]));

console.log(reverseTab([1,2,3,4,5,6]))

//exercice 5

function lasteleTab(tab){
    return tab[tab.length -1]
}

//afficher la sortie

console.log(lasteleTab([1,2,3]));
console.log(lasteleTab([1,1,2,2,3,12]));
*/
/*
//Tp 1
var Noms = [];
function tirage(){ //fonction qui selectionne un membre du tableau
    let index = Math.floor( Math.random(Noms)* (Noms.length));
    let m=Noms[index];
    console.log('Client tiré au sort'+ m);
    return m;
}

function add_nom(){
    var nom= prompt('Saisir un nom');  //on demande le nom 
    Noms.push(nom);
}
*/

//Jour 2

var Nbrs = [1,3,5,7,9]
for (let i = 0; i < Nbrs.length; i++) { 
    console.log(Nbrs[i]);
  } 