import Animal from "./Animal.js";


    var animal1 = new Animal("Gat", "Persa");
    console.log(animal1);
    console.log(animal1.ferSo("miau"));
    let stringAnimal = JSON.stringify(animal1);
    console.log(stringAnimal);
    let objAnimal = JSON.parse(stringAnimal);
    console.log(objAnimal);
