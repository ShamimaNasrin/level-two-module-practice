{
    //destruturing ==> object destruturing and array destruturing


    //object destruturing
    const user = {
        id: 123,
        name: {
            firstName: 'shamima',
            middleName: 'nasrin',
            lastName: 'nisa',
        },
        phone: 19784538,
    }

    //destrure from user obj
    const {
        phone: mobile, // name alias(just another name of phone, this is call name alias) 
        name: { middleName }, // the middle name is commented out thats why we can't destructure it from user
    } = user;


    //array destruturing
    const friedns = ['chandler', 'monica', 'ross', 'joey', 'rachel', 'pheobe'];

    //we can assign any name to an spesific element of the frieds array
    const [a, b, rossIsBest] = friedns;

    //we can assign any name to an spesific element of the frieds array and skip any elements or keep the rest of the elements with rest operator
    const [, , bestFriend, ...rest] = friedns;


}