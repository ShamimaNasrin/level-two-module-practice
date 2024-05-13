{
    //Instance of 

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(" animal make sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        barking() {
            console.log("Dog is barking..");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        meawing() {
            console.log("Cat is meawing..");
        }
    }

    const dog1 = new Dog('puppy', 'dog'); //this dog1 is basically an instance of Dog class
    const cat1 = new Cat('snow', 'cat');

    dog1.barking();
    cat1.makeSound();

    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) { // by using the instanceof we can access the properties of the Dog class
            animal.barking();
        } else if (animal instanceof Cat) {
            animal.meawing();
        } else {
            animal.makeSound();
        }
    }

    const result1 = getAnimal(cat1);
    console.log({ result1 });


    // smart way to use the instanceof

    //here its returning a boolean value but if we just mention the return type boolean then it will just return true or false no information about the Dog or Cat class so we need to mention the return type as animal is "class name"
    const isDog = (animal: Animal): animal is Dog => {
        return (animal instanceof Dog)
    }

    const isCat = (animal: Animal): animal is Cat => {
        return (animal instanceof Cat)
    }
    const getAnimal1 = (animal: Animal) => {
        if (isDog(animal)) {
            animal.barking();
        } else if (isCat(animal)) {
            animal.meawing();
        } else {
            animal.makeSound();
        }
    }

    const result2 = getAnimal1(cat1);



}