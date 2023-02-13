
// Écouteur d'évènement sur le premier rectangle
document.querySelector('#click').addEventListener('click', function(){
    // La div change de couleur au clique
    this.classList.toggle('color-changed');
});

// Écouteur d'évènement sur le deuxième rectangle
document.querySelector('#double-click').addEventListener('dblclick', function(){
    // La div se retourne au double-clique
    this.classList.toggle('reversed');
});

// Écouteurs d'évènements sur le troisième rectangle
document.querySelector('#mouse').addEventListener('mouseenter', function(){
    // La div grossit au passage de la souris
    this.classList.add('zoomed');
});
document.querySelector('#mouse').addEventListener('mouseleave', function(){
    // La div perd  la classe de grossissement quand la souris part
    this.classList.remove('zoomed');
});

// Écouteur d'évènement sur le 4ème rectangle
document.querySelector('#copy').addEventListener('copy', function(){
    // Le texte de la div s'efface et laisse des petits points à sa copie
    this.textContent='.......';
});

// Écouteur d'évènement sur le 5ème rectangle
document.querySelector('#live input').addEventListener('keyup', function(){
    // Le texte du champ remplace celui du dessous
    inputText = this.value;
    this.nextElementSibling.textContent = inputText;

});








