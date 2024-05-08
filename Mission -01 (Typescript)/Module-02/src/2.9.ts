{
    //Conditional type (if a type depends on another type because of a condition this is a conditional type) 

    //Example : 01
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // a1 is number so it can't extend null, so its type will be false

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    //Example : 02
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    };

    //keyof Sheikh   "bike" | "car" | "ship"

    // car ase kina / bike ase kina / ship kina / tractor ase kina
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasPlane = CheckVehicle<"plane">;
}