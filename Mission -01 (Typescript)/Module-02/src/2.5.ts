{
    // function with generics

    //Example: 01
    const createArray = (param: string): string[] => {
        return [param];
    };
    const res1 = createArray("Bangladesh");

    //ex 01 with generics
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric<string>("Bangladesh");

    //Example: 02
    type User = { id: number; name: string };
    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: "Mr. Pashan",
    });


    // Tuples with generics
    //Example: 03
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
    const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
        name: "Asia",
    });

    //Example: 04
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        };
    };

    type Student = { name: string; email: string; devType: string; };

    const student1 = addCourseToStudent<Student>({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    type Student2 = { name: string; email: string; hasWatch: string; };
    const student2 = addCourseToStudent<Student2>({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });

    //
}