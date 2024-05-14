{
    // abstract means we can know the structure of a method or something but we don't know how its work or the actual mechanism
    // we can achieve abstraction by two ways  : 1. interface 2. abstract

    //By using interface
    //idea: we can provide an idea about the methods, but not the real implementation of those methods
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation of those methods will be in this class, and if a class wants to follow a structure then we have to use "implements"
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log("I am stopping the car engine");
        }
        move(): void {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`I am just testing`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();



    // abstract class

    // idea : the concept is same as the interface, we have to use abstract keyword to those methods which we want to abstract can abstructed methods cant be implemented just the structure, and we can't create an intance of an abstruct class we have to extend it to access the methods and properties
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log(`I am just testing`);
        }
    }


    // real implementation
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("I am starting the car  engine");
        }
        stopEngine(): void {
            console.log("I am stopping the car engine");
        }
        move(): void {
            console.log("I am moving  the car");
        }
    }

    // const hondaCar = new Car2();
    // hondaCar.startEngine();

    //
}