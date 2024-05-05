//spread operator

const team1 = {
    react: 'rafa',
    javascript: 'sana',
    typescript: 'fuad'
}

const team2 = {
    node: 'mizan',
    express: 'rafi',
    redux: 'tonmoy',
    mongo: 'rajib'
}

//if we want to get all the team members
const teamMembers = {
    ...team1,
    ...team2,
}

console.log(teamMembers);

//rest operator

// ex:1 the manual way
const playersOne = (p1: string, p2: string, p3: string, p4: string) => {
    `Hello there..${p1} ${p2} ${p3} ${p4}`;
}

playersOne('abul', 'kabul', 'babul', 'ubul');

// ex:2 the optimesed way with rest operator
const playersTwo = (...p1: string[]) => {
    p1.forEach(p => `Hello there..${p}`);
}

playersTwo('abul', 'kabul', 'babul', 'ubul');