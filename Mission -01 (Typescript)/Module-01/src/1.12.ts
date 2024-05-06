{
    // nullable type || unknown type || never type

    // nullable type
    //if we need to pass a null value as parameter we can mention the type like this 
    const searchProduct = (value: string | null) => {
        if (value) {
            console.log("searching....");
        } else {
            console.log("nothing to search");
        }
    }

    searchProduct(null);

    //unknown type
    // if we don't know the type and have to check in the run time after that based on the type we need to do some operations we can use this

    const getMeterPerSecond = (value: unknown) => {
        if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`speed: ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`speed: ${convertedSpeed} ms^-1`);
        } else {
            console.log("wrong input");
        }
    }

    getMeterPerSecond('1000 kmh^-1')

    //never type
    // if we know this function will never return anything then we can mention the output type 'never'
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError('error khaichi');

}