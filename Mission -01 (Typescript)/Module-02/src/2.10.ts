{
    // mapped types

    const arrOfNumbers: number[] = [1, 4, 5];

    // const arrOfStrings : string[] = ['1','4','5']
    const arrOfStrings: string[] = arrOfNumbers.map((number) => // if we want to convert the number type array to a string type array
        number.toString()
    );
    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };

    //if we want to change the parameters type from number to string we have to create a new type like below:(manual way)
    // type AreaString = {
    //   height: string;
    //   width: string
    // }

    type Height = AreaNumber["height"]; // by using look up type we can get the type of a specific parameter from a type

    // keyof AreaNumber => "height"|"width"

    // T => {height:string;width:number}
    // key => T["width"]
    //by the help of generics we can modify each and every parameter type dynamically
    type AreaString<T> = {
        [key in keyof T]: T[key];
    };

    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
    };
}