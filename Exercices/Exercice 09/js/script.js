
let animal = { // Objet

    // 4 attributs
    kind: 'chat',
    origin: 'Japon',
    nature: 'calme',
    age: 2,

    // 2 méthodes
    eat: function(){
        alert('est entrain de manger');
    },
    drink: function(){
        alert('est entrain de boire');
    },
}

alert("Il s'agit d'un " + animal.kind + " originaire du " + animal.origin + ". Il a un caractère plutôt " + animal.nature + " et il a " + animal.age + " ans.");

animal.eat();