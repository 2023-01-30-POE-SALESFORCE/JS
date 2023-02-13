
// On selectionne nos h2, qui seront sous la forme d'un array donc on va parcourir notre array avec la boucle forEach
document.querySelectorAll('h2').forEach((title) => {
    //Ici je pose un écouteur au clic à chacun de mes titres
    title.addEventListener(('click'), function(){
        //j'applique la class qui met la couleur rouge sur le titre qui sera cliqué
        this.classList.add('red');

        // version bonus : remplacer la ligne 7 par : this.classList.toggle('red');
    });
});