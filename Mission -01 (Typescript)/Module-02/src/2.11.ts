{
    //utility types
    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    };

    type NameAge = Pick<Person, "name" | "age">;

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;

    // Required
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
    type PersonReadonly = Readonly<Person>;
    const person1: PersonReadonly = {
        name: "Mr. XY",
        age: 200,
        contactNo: "017",
    };
    person1.name = "Mr. YZ"; // it will throw an error because PersonReadonly is readonly type and we can't modify its value

    // Record
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };

    //ex: 01
    type MyObj = Record<string, number>;

    //ex: 02
    const EmptyObj: Record<string, unknown> = {};

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        e: 6,
    };
}