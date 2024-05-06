{
    // type assertion

    //ex:01
    let anything: any;
    anything = 'react js'; //as anything is an any type data so we can assign any type of value to it
    // anything = 1027;
    (anything as number) // if i use as number then the value will be a number even if its not a number but still it will be a number so we should only use this type assertion when we are sure about the value type

    //ex:02
    const kgToGM = (value: number | string): number | string | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `kg value: ${convertedValue}`;
        } else if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return convertedValue;
        }
    }


    const result1 = kgToGM('3937') as string; // as i am sure if i send str value i will get an str result so i can use type assertion here
    const result2 = kgToGM(3937) as number;


    //ex: 03
    type CustomError = {
        message: string;
    };

    try {
    } catch (error) {
        console.log((error as CustomError).message);
    }

}