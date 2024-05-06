{
    // ternary operator || optional chaining || nullish coalescing

    // ternary operator
    const age = 30;
    const isAdult = age >= 18 ? true : false;

    //nullish coalescing 
    // we should only use this when we have to do decision making based on null or undefined values

    const isAdmin = null;
    const isAuthenticated = "";

    const result1 = isAdmin ?? 'Guest'; //that means if isAdmin is undefined or null it will print Guest
    console.log(result1);// output : 'Guest'

    const result2 = isAuthenticated ?? 'Guest'; // it won't work for any other falsy values
    console.log(result2);// output : ""

    //Note: do not messed up with ternary operator, both logics are different

}