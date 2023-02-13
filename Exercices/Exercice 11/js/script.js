
/*
    1) Créer une fonction JS permettant de créer un overlay HTML et de l'insérer dans la page (dans le body)
*/
function setOverlay(){
    // Création de la div overlay
    let overlay = document.createElement('div');

    // Ajout de la class overlay sur la div
    overlay.classList.add('overlay');

    // Placement de la div dans le body au début
    document.querySelector('body').prepend(overlay);
}

/*
    2) Créer une fonction JS permettant de supprimer l'overlay sur la page
*/

function removeOverlay(){
    // selection de la div overlay
    let overlay = document.querySelector('.overlay');

    // Suppression de la div overlay
    overlay.remove();
}