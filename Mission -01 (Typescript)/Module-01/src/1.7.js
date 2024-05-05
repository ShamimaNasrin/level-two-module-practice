//spread operator
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var team1 = {
    react: 'rafa',
    javascript: 'sana',
    typescript: 'fuad'
};
var team2 = {
    node: 'mizan',
    express: 'rafi',
    redux: 'tonmoy',
    mongo: 'rajib'
};
//if we want to get all the team members
var teamMembers = __assign(__assign({}, team1), team2);
console.log(teamMembers);
