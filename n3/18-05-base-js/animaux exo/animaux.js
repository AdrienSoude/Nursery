let animaux = [
    {
        nom : "Chat",
        longevite: " 10 à 20",
        image : "https://m.media-amazon.com/images/I/71rANl5JpJL._AC_SX425_.jpg",
        wiki : "https://fr.wikipedia.org/wiki/Chat",
        description : "Le petit chat ",
        aliments : ["croquettes" ,"poulet"]
    },
    {
        nom : "Chat",
        longevite: " 10 à 20",
        image : "https://m.media-amazon.com/images/I/71rANl5JpJL._AC_SX425_.jpg",
        wiki : "https://fr.wikipedia.org/wiki/Chat",
        description : "Le petit chat ",
        aliments : ["croquettes" ,"poulet"]
    },
    {
        nom : "Chat",
        longevite: " 10 à 20",
        image : "https://m.media-amazon.com/images/I/71rANl5JpJL._AC_SX425_.jpg",
        wiki : "https://fr.wikipedia.org/wiki/Chat",
        description : "Le petit chat ",
        aliments : ["croquettes" ,"poulet"]
    },
    {
        nom : "Chat",
        longevite: " 10 à 20",
        image : "https://m.media-amazon.com/images/I/71rANl5JpJL._AC_SX425_.jpg",
        wiki : "https://fr.wikipedia.org/wiki/Chat",
        description : "Le petit chat ",
        aliments : ["croquettes" ,"poulet"]
    },
    {
        nom : "Chat",
        longevite: " 10 à 20 ans",
        image : "https://m.media-amazon.com/images/I/71rANl5JpJL._AC_SX425_.jpg",
        wiki : "https://fr.wikipedia.org/wiki/Chat",
        description : "Le petit chat ",
        aliments : ["croquettes" ,"poulet"]
    },
]; 

// animaux.forEach( function (element){

//     document.write(element.nom +" ");
//     document.write(element.longevite + " ");
    
//     document.write(` 
//     <a href="${element.wiki}">
//       liens wikipedia
//     </a>
//     `);

//     document.write( ` <img src="${element.image}" > `);

//     document.write('<br>');

    

// })


document.write("<table border='1'>");
document.write(` 
<tr> 
    <th> Nom </th>
    <th> Longévité </th>
    <th> Image  </th>
    <th> wiki </th>
    <th> Description </th>
    <th> Aliments </th>
</tr>    
`);


animaux.forEach( function (element){
    document.write("<tr>");
    document.write(`<td> ${element.nom} </td>
                    <td> ${element.longevite} </td>
                    <td> <img src="${element.image}" height="80px" width="80px"> </td>
                    <td> <a href="${element.wiki}"  target="_blank"> Liens wiki </a> </td>
                    <td> ${element.description} </td> `);

    document.write('<td> <ul>');

    element.aliments.forEach( function (aliment){

        // ecrire le <li> et afficher l'aliment puis fermer le </li>
        document.write( ` <li> ${aliment} </li> ` );

    } )

    document.write('</td> </ul>');
    
    
    document.write("</tr>")
})



document.write("</table>");

let age = 40;

if(age==12){
    console.log("près ado");
}
else if(age<12){
    console.log('enfant')
}
else if(age > 13 && age < 18){
    console.log("Ados");
}
else if( age >= 18 && age < 99){
    console.log("MAJEUR")
}
else if(age>99){
    console.log("C'est bientot la fin ! ");
}
else{
    console.log("invalide");
}

