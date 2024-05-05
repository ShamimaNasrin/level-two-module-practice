//Reference type ---> object


let user: {
    company: 'Google Inc'; // this 'Google Inc' will act like a type, we can't assign any other value to this company property
    name: string;
    age: number;
    ismarried?: boolean; // optiona type(we can skip this but the rest of the properties are mandatory we can't skip them)
    readonly email: string;
} = {
    company: 'Google Inc',
    name: 'user1',
    age: 30,
    email: 'user@google.com'
}

user.name = 'user2'; // we can re write this property value
user.age = 32; // we can re write this property value
// user.email = 'user2@gmail.com'; // we can't re write this property value as it is readonly

