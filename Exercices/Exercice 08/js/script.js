// Array vide qui contiendra les prénoms
const firstName = [];

// Tant que l'utilisateur souhaite ajouter un prénom, on boucle
while(confirm("Ajouter un nouveau prénom")){
    // je stock le prénom rentré dans le prompt
    let addName = prompt('Quel prénom souhaitez-vous ajouter à la liste ?');

    // Ajout du nouveau prénom dans le array
    firstName.push(addName);

}
// affichage du array dans la console
console.log(firstName);