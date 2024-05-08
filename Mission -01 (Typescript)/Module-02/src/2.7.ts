
{
    // generic constraint with keyof operator

    //Ex:01 if we want to create a type(as union) with all the keys of a different type
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;


    //Ex:02 if we want to get any of the keys value using a  function
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };

    // user[age]  ==> 26 //we can get any property value like this(manuall way)

    //dynamically 
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const car = {
        model: "Toyota 100",
        year: 2001,
    };

    const result1 = getPropertyValue(car, "year");
    console.log("result1: ", result1);

}
