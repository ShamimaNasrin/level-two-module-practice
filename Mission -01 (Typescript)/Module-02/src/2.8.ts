{
    // promise

    //Example: 01
    type Something = { something: string };

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'student data' };
            if (data) {
                resolve(data);
            } else {
                reject("failed to load data");
            }
        });
    };

    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        console.log(data);
        return data;
    };

    showData();


     //Example: 02

     const getTodo = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data = await response.json();
       console.log(data);

     };

     getTodo();
}