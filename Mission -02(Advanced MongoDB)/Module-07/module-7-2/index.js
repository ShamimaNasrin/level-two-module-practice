// local modules
const { a, add } = require('./local-1')
const { a: a2, add: add2 } = require('./local-2')

console.log(add2(3, 4, 6))


// built-in-modules
const path = require("path")

console.log(path.dirname("D:/Web/P-Hero Next level/module-practice/Mission -02(Advanced MongoDB)/Module-07/module-7-2/index.js"));
console.log(path.parse("D:/Web/P-Hero Next level/module-practice/Mission -02(Advanced MongoDB)/Module-07/module-7-2/index.js")); // prottekta jinis parse kore dibe
console.log(path.join("D:/Web/P-Hero Next level/module-practice/Mission -02(Advanced MongoDB)/Module-07/module-7-2/", "local-1.js"));

