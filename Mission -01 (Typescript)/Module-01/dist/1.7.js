"use strict";
//spread operator
const team1 = {
    react: 'rafa',
    javascript: 'sana',
    typescript: 'fuad'
};
const team2 = {
    node: 'mizan',
    express: 'rafi',
    redux: 'tonmoy',
    mongo: 'rajib'
};
//if we want to get all the team members
const teamMembers = Object.assign(Object.assign({}, team1), team2);
console.log(teamMembers);
