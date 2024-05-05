//Reference type ---> object


let user: {
    company: 'Google Inc'; // this 'Google Inc' will act like a type, we can't assign any other value to this company property
    name: string;
    age: number;
    ismarried?: boolean; // optiona type(we can skip this but the rest of the properties are mandatory we can't skip them)
} = {
    company: 'Google Inc',
    name: 'user1',
    age: 30,
}