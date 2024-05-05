{
    // Type Alias

    //object
    const student1: {
        name: string;
        age: number;
        phone: number;
        address: string;
        email: string;
    } = {
        name: 'Student 1',
        age: 30,
        phone: 987643,
        address: 'dhaka',
        email: "student1@gmail.com",
    }

    const student2: {
        name: string;
        age: number;
        phone: number;
        address: string;
    } = {
        name: 'Student 2',
        age: 40,
        phone: 987643,
        address: 'ctg',
    }

    //we can achive the above thing in a optimize way using type alias

    type Student = {
        name: string;
        age: number;
        phone: number;
        address: string;
        email?: string;
    }
    const student3: Student = {
        name: 'Student 3',
        age: 45,
        phone: 987643,
        address: 'ctg',
        email: "student3@gmail.com",
    }

    //string, boolean 
    type Name = string;
    const firstName: Name = 'shamima';

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = false;

    //function

    type AddNumbers = (number1: number, number2: number) => number;

    const add: AddNumbers = (num1, num2) => num1 + num2;


}