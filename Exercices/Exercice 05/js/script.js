while(true){// Je met ma boucle pour que la condition s'effectue jusqu'à rencontrer le break

    //Je demande à l'utilisateur de saisir un nombre compris entre 1 et 3
    let number = parseInt(prompt('Veuillez saisir un nombre entre 1 et 3'));

    //Je déclare ma condition
    if(number >= 1 && number <= 3){ // Si le nombre est supérieur égale à 1 et inférieur ou égal à 3
        alert('Correct');// j'affiche ce message
        break;// Je stop ma boucle si ma condition est vrai
    }

    alert("Attention le nombre n'est pas compris entre 1 et 3");// j'affiche ce message

}