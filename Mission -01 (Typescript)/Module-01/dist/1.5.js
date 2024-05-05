"use strict";
//Reference type ---> object
let user = {
    company: 'Google Inc',
    name: 'user1',
    age: 30,
    email: 'user@google.com'
};
user.name = 'user2'; // we can re write this property value
user.age = 32; // we can re write this property value
// user.email = 'user2@gmail.com'; // we can't re write this property value as it is readonly
