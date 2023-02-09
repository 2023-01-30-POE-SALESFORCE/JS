//Je définit mes constantes de mail et mot de passe utilisateur
const mailBob = "bob@bob.bo";
const passwordBob = "Admin123*";


while(true){// Je met ma boucle pour que la condition s'effectue jusqu'à rencontrer le break
    //Je demande à l'utilisateur de saisir son mail et mot de passe en stockant le résultat dans une variable mail et password
    let mailGet = prompt('Veuillez saisir votre mail');
    let passwordGet = prompt('Veuillez saisir votre mot de passe');
    //Je déclare ma condition
    if(mailBob != mailGet || passwordBob != passwordGet){// Si le mail et le mot de passe ne correspondent pas à ceux que j'ai définit dans mes contantes
        alert('Identifiants incorrects');// j'affiche ce message
    }else{
        alert('Bienvenu dans votre espace client');// j'affiche ce message
        break;
    }

}