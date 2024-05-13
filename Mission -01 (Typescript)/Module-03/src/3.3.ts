{
    // type guards

    // typeof --> type guard

    type Alphaneumeric = string | number;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    };

    const result1 = add("2", "3");
    console.log(result1);

    // In --> type guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`The admin user name is ${user.name} and the role is ${user.role}`);
        } else {
            console.log(`The normal user name is ${user.name}`);
        }
    }

    const normalUser1: NormalUser = {
        name: "Mr. x",
    }

    const adminUser1: AdminUser = {
        name: "Mr. y",
        role: "admin",
    }

    const result = getUser(adminUser1);
    console.log(result);


}