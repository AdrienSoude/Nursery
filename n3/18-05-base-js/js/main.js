// alert("Hello word ! ");

let age = 99;
// let nomPrenom= "Dupond Toto";
let nom = "Dupond";
let prenom = "Toto";

console.log(
  "Bonjour !  Je suis " + nom + " " + prenom + ", j'ai  " + age + " ans !"
);
console.log("Bonjour !  Je suis", nom, " ", prenom, ", j'ai  ", age, " ans !");
console.log(`Bonjour ! Je suis ${nom} ${prenom} , j'ai ${age} ans ! `);
// Bonjour !  Je suis nom prenom , j'ai age ans !
const nomComplet = "Julien;La;Garde";

console.log(prenom.substring(1, 2));

console.log(nomComplet.split(";"));

const csv1 = "Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075";
console.log(csv1.split(";"));

const csv2 = "Jack;McGinnis;220 hobo Av.;Phila;PA;09119";
let resulta = csv2.split(";");
console.log(resulta);

const csv3 = "Bonjour !  Je suis Dupond Toto, j'ai  99 ans !";
console.log(csv3.split(" "));

let monTableau = [1, 9856, 3, 4, 5, 6, 7, 8, 7, 98];

console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);
console.log(monTableau[3]);
console.log(monTableau[4]);
console.log(monTableau[5]);
console.log(monTableau[6]);
console.log(monTableau[7]);
console.log(monTableau[8]);
console.log(monTableau[9]);

let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
fruits.push("fraise");

console.log(fruits);

console.log(fruits.indexOf("fraise"));
// format csv
// Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075
// Jack;McGinnis;220 hobo Av.;Phila;PA;09119
// Bonjour !  Je suis Dupond Toto, j'ai  99 ans !

const personne = {
  prenom: "Julien",
  nom: "La garde",
  age: 30,
  passions: ["foot", "natation", "jeux videos"],
  adresse: {
    rue: "rue Nationale",
    ville: "Lille",
    pays: "France",
  },
};

console.log(`Bonjour je suis ${personne.nom} ${personne.prenom}`);

console.log(`j'habite a ${personne.adresse.ville}`);

console.log(personne.passions[2]);

personne.email = "monemail@gmail.fr";

console.log(personne.email);
personne.email = "toto";

console.log(personne);

let personnes = [
  {
    prenom: "Julien",
    nom: "La garde",
    age: 30,
    passions: ["foot", "natation", "jeux videos"],
    adresse: {
      rue: "rue Nationale",
      ville: "Lille",
      pays: "France",
    },
  },

  {
    prenom: "Adrien",
    nom: "La garde",
    age: 301,
    passions: ["JS", "CSS", "HTML"],
    adresse: {
      rue: "rue du pont",
      ville: "Paris",
      pays: "France",
    },
  },
];

console.log(personnes);

console.log(personnes[1].age);

console.log(personnes[1].passions[2]);

personnes[1].passions[2] = "Cobol";

console.log(personnes[1].passions[2]);

let nombres = [1, 2, 35, 99, 105];

// ici on utilise un forEach avec une function anonyme
nombres.forEach(function (element) {

  document.write(element + "<br>");

} ) ;


// ici on utilise un forEach avec une function fléchée
nombres.forEach( (element) => {

  document.write(element + " ");

} ) ;


// on parcours le tableau de la fin jusqu'au début
for (let i = nombres.length-1 ;  i >= 0 ; i--){

    document.write( nombres[i] + " " );

}

//parcourir le tableau du début à la fin avec une boucle for
document.write("<br>");
for (let i = 0 ; i < nombres.length ; i++){

    document.write( nombres[i] + " " );

}

document.write("<br>");

let nombreRechercher = 0;
let indice = 0;

while ( indice < nombres.length && nombreRechercher !== 99 ){

    nombreRechercher = nombres[indice];
    document.write(nombreRechercher + "<br>");
    indice++;
}

let flag = true;

while (flag == true){

    flag = false;
    document.write("faux c'est une boucle fini");
}

// tant que  une condition  est vrai alors on fait un
// Traitement et fin du tant que
