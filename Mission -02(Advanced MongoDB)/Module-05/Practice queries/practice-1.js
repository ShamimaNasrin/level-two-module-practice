// practice the below queries using the NoSQLBooster or mongodb compass's terminal

// ------------------------------------------------Module 5-1: Basic practice -----------------------------------------------------
// After installing the GUI
// commands:
1. show dbs //to show all the databases
2. use practice // to create a db name practice
// queries:
3. db.createCollection("test") // to create a collection
4. db.getCollection("test").insertOne({ name: 'level-1' }) // to insert a single document
5. db.getCollection("test").find() // to fetch all documents


// --------------------------------Module 5-2: Insert, InsertOne, Find, FindOne, Field Filtering, Project ---------

// queries:
1. db.test.insertMany({ name: 'level-1' }, { name: 'level-2' }) // to insert multiple documents
2. db.test.findOne({ company: "Demimbu" }) // to fetch a document
// field filtering
3. db.test.find({ gender: "male" }, { name: 1, email: 1 }) // to fetch only 2 fields(name and email) which gender is male
4. db.test.find({ gender: "male" }).project({ name: 1, email: 1 }) // same thing using project method


// ------------------------------------------Module 5-3: $Eq, $Neq, $Gt, $Lt, $Gte, $Lte ---------------------------------------

// queries:
// Google --> MongoDB Operators --> Read Comparison Query operators from mongodb docs

// basic syntax for $Eq, $Neq, $Gt, $Lt, $Gte, $Lte : {<field>: {$eq: <value> } }
1. db.test.find({ age: { $eq: 12 } }) // find document which age = 12

// -----------------------------------------Module 5-4: $In, $Nin, Implicit And Condition --------------------------------
// implicit and for different fields (multiple conditions use korake implicit and bole)
1. db.test.find({ age: { $gte: 18, $lte: 30 } }) // find document where age >= 18 and age <= 30
2. db.test.find({ age: { $gte: 18, $lte: 30 } }, { age: 1 }).sort({ age: 1 }) // fetch only age of those documents whose age >= 18 and age <= 30. sort the data by age ascending order
3. db.test.find({ gender: "Female", age: { $gte: 18, $lte: 30 } }, { age: 1, gender: 1 }).sort({ age: 1 }) // fetch only age and gender of those documents whose age >= 18 and age <= 30 and gender is female. sort the data by age ascending order
4. db.test.find(
    { gender: "Female", age: { $in: [12, 18, 20] } },
    { age: 1, gender: 1 }
).sort({ age: 1 }) // fetch only age and gender of those documents whose age is 12/18/20 and gender is female. sort the data by age ascending order
5. db.test.find(
    { gender: "Female", 
    age: { $nin: [12, 18, 20] } },
    interests: { $in: ["Cooking", "Gaming"]}
    { age: 1, gender: 1 }
).sort({ age: 1 }) // fetch only age and gender of those documents whose age is not 12/18/20 and gender is female and interest is Cooking/Gaming. sort the data by age ascending order

//implicit and for same field
6.db.test.find({age: {$ne: 12, $lte: 30}}) 


//-----------------------------------------------Module 5-5: $And, $Or, Implicit Vs Explicit --------------------------------------------
// Logical Query operators: $and, $or, $not, $nor
// syntax: { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

// Explicit $and
1. db.test.find({
    $and: [
        {gender: "Female"},
        {age: {$ne: 15}},
        {age: { $lte: 30}}
        ]
    }).project({
        age: 1,
        gender: 1
    }).sort({ age: -1 }) // gender = Female, age != 15 and <= 30, sort by age descending.

// Explicit $or
2. db.test.find({
    $or: [
        {interests: "Cooking"},
        {interests: "Traveling"},
        ]
    }).project({
        interests: 1
    }).sort({ age: 1 }) // interests : Cooking or Traveling, ekhane interests 1 ta array "interests" : [ "Gardening", "Travelling", "Writing" ]  jodi obj hoto tahole ex: 03 er moto query korte hobe


3. db.test.find({
    $or: [
        {"skills.name": "JAVASCRIPT"},
        {"skills.name": "PYTHON"},
        ]
    }).project({
        skills: 1
    }).sort({ age: 1 }) // ekhane data ta obj hisebe ache "skills" : [ {"name" : "RUBY", "level" : "Beginner" }, {"name" : "JAVASCRIPT", "level" : "Expert" }]
		
		



4. db.test.find({ "skills.name" : {$in : ["JAVASCRIPT", "PYTHON"]}}).project({
    skills: 1
}).sort({ age: 1 }) // we can achieve the same thing as ex: 03 using $in 
