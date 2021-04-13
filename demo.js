'use strict'; 
/*(function() {
    const expr = 'Papayas';
    switch (expr) {
      case 'Oranges':
        display('Oranges are $0.59 a pound.');
        break;
      case 'Mangoes':
      case 'Papayas':
        display('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        display(`Sorry, we are out of ${expr}.`);
    }
  

})();
*/
/*
(function(){
  function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function(){return this.age > 18}
  }

  function Student(firstName, lastName, age, level){
    Person.call(this, firstName, lastName, age)
    this.level=level;
  }

  function Stagiaire(firstName, lastName, age, exp){
    Person.call(this, firstName, lastName, age)
    this.exp=exp;
  }

  Student.prototype = Object.create(Person.prototype)
  Stagiaire.prototype = Object.create(Person.prototype)
  let rishi = new Student('Rishi','BEN',21, 5);
  display(rishi);
  let lola = new Stagiaire('lola','cola',21, 6);
  display(lola);

})();
*/

(function(){
  function Documents(numEnreg, titre){
    this.numEnreg = numEnreg;
    this.titre = titre;

  }

  function Livre(numEnreg, titre, auteur, page){
    Documents.call(this,numEnreg,titre)
    this.auteur = auteur;
    this.page = page;
    
    this.nbPages = function(){
      switch (true){
        case this.page <= 100 :
            display('nombre de page entre 0 et 100');
          break;
        case this.page <= 200 :
            display('nombre de page entre 101 et 200');
          break;
        case this.page <= 300 :
            display('nombre de page entre 201 et 300');
          break;
        default :
            display('nombre de page est superieur a 300');
      }
    }
  }

  function Revu( numEnreg, titre, mois, annee){
    Documents.call(this, numEnreg,titre)
    this.mois = mois;
    this.annee = annee;

  }

  function Dictionnaire( numEnreg, titre, langue){
    Documents.call(this, numEnreg,titre)
    this.langue = langue;

  }

  Livre.prototype = Object.create(Documents.prototype);
  Revu.prototype = Object.create(Documents.prototype);
  Dictionnaire.prototype = Object.create(Documents.prototype);

  let marius = new Livre(1,'Marius','Marcel Pagnol', 192);
  let sience_et_vie = new Revu(2,'Sience_et_vie', 2021, 'avril');
  let larousse = new Dictionnaire(3,'Le Larousse', 'Français');

 
  display(marius.nbPages);
  
})();
