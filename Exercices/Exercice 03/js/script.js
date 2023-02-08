

// 1 : stocker les valeurs récupérés des deux prompt (mail et mdp) dans des variables

// 2 : définir une constante pour une adresse mail / définir une contante pour un mot de passe

// 3 : condition

// 1
let mailGet = prompt('Veuillez saisir votre mail');
let passwordGet = prompt('Veuillez saisir votre mot de passe');


// 2
const mailBob = "bob@bob.bo";
const passwordBob = "Admin123*";

// 3
if(mailBob != mailGet || passwordBob != passwordGet){
    alert('Identifiants incorrects');
}else{
    alert('Bienvenu dans votre espace client');
}


