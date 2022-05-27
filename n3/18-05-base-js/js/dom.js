// les fonctions en javascripts

function somme(x, y) {
  return x + y;
}

function soustraction(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

document.write(somme(999, 888));
document.write("<br>");

document.write(soustraction(999, 888));

document.write("<br>");
document.write(multi(9, 8));

document.write("<br>");
document.write(div(9, 8));

let paragraphe = document.querySelector("#info");

paragraphe.innerText = "On change le texte dans notre paragraphe"; 

let formulaire = document.querySelector("#form");

console.log(formulaire);

formulaire.addEventListener("submit", onSubmit)

function onSubmit(event){
    event.preventDefault();
    paragraphe.innerText = "le formulaire à bien été envoyer";
}