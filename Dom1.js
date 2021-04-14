function ajout(){
    var add = document.getElementById("course").value;
    var liste = document.getElementById("listecommissions");
    var li = document.createElement("li")
    li.textContent= add;
    liste.append(li);
}