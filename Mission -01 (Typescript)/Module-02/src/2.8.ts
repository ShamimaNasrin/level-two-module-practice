{
    // promise

    const createPromise = (): Promise<{something : string}> => {
        return new Promise<{something : string}>((resolve, reject) => {
            const data: {something : string} = {something : 'student data'};
            if (data) {
                resolve(data);
            } else {
                reject("failed to load data");
            }
        });
    };

    // calling create promise function
    const showData = async (): Promise<{something : string}> => {
        const data: {something : string} = await createPromise();
        console.log(data);
        return data;
    };

    showData();
}