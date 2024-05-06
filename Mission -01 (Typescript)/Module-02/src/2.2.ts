{
    //interface || type alias vs interface

    //similar to type alias, but we can't use interface to primitive data type. we can only use interface to object, array and function

    //ex: 01 type vs interface
    type User1 = {
        name: string,
        password: string
    }

    interface User2 {
        name: string,
        password: string
    }

    //if we want to add or extend other value to the same type and interface:
    type UserWithID1 = User1 & { id: string }

    interface UserWithID2 extends User2 { id: string }
    interface UserWithID3 extends User1 { id: string } //we can even use the type as interface like this

    const user1: UserWithID2 = {
        name: "Persian",
        password: "07hu",
        id: "E0010",
    };

    // we know in JS array and function are also object type, so we can use interface to array and function


    //Array
    //ex: 01
    type Friends1 = string[];

    const friends1: Friends1 = ["Ross", "Monica", "Joey"]; // and the assigned values are strings
                              //   0        1        2  ===> index types are numbers


    interface Friends2 {
        [index: number]: string; //index type and the element type
    }

    //Function
    //ex: 01
    // const add = (num1, num2) => num1 + num2;

    //using interface
    interface Add {
        (num1: number, num2: number): number;
    }

    // uses
    const add: Add = (num1, num2) => num1 + num2;

}