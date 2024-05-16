// practice the below queries using the NoSQLBooster or mongodb compass's terminal

// ------------------------------------------------Module 5-6: $Exists, $Type, $Size -----------------------------------------------------
// $exists : ekta document e kon ekta field ache kina se onujai data return korbe
// emon document jetar moddhe company field ta nai
1. db.test.find({ company: { $exists: false } }).project({
    company: 1
})

// $type : sei documents gulo pabo jetar company field er type null
2. db.test.find({ company: { $type: "null" } }).project({
    company: 1
})

// $size : sudhu array type er field er khetre kaj kore, 
// sei documents gulo pabo jetar friends array er size 4
3. db.test.find({ friends: { $size: 4 } }).project({
    friends: 1
})


// ----------------------------------------------- Module 5-7: $All , $ElemMatch ----------------------------------------

// MongoDB operators --> Array Query Operators --> $All , $ElemMatch (resd documentation)

//$all : to query on array elements
// oi sob docs find korbe jader interests field e "Gaming", "Writing", "Reading" ei 3 ta element ache
1. db.test.find({ interests: { $all: ["Gaming", "Writing", "Reading"] } }).project({
    interests: 1
})

//$elemMatch : to query on object's properties
// oi sob docs find korbe jader skills arr of obj er element e name = Kotlin && level = "Expert"
2. db.test.find({
    skills: {
        $elemMatch: {
            name: "KOTLIN",
            level: "Expert",
        }
    }
}).project({
    skills: 1
})

//Extra example: jodi emon sob docs find korte chai jar inetrest field er 2 no index e "Reading" ache
db.test.find({ "interests.2": "Reading" }).project({
    interests: 1
})


// ----------------------------------------------- Module 5-8: $Set, $AddToSet, $Push ----------------------------------------

// MongoDB operators --> Array Query Operators --> $All , $ElemMatch (read documentation)

// $set : used to update fields of a document
1.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $set: {
            age: 60
        }
    }
)

// $addToSet : used to add element to an array
// the problem is for premitive data $set is okay but you can't update an array or objects so we have to use $addToSet to add element to an array
// but the problem is using $addToSet we can't add duplicate elements, that menas if the "Coding" is already there it will not add to the interests array twice
2. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $addToSet: {
            interests: "Coding"
        }
    }
)

// if we want to add multiple elements
3.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $addToSet: {
            interests: { $each: ["Coding", "Writing"] }
        }
    }
)

// if we want to add elements doesn't matter its already there or not we can use $push
4. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $push: {
            interests: { $each: ["Coding", "Writing"] }
        }
    }
)


// ----------------------------------------------- Module 5-9: $unset, $pop, $pull, $pullAll ----------------------------------------

// MongoDB operators --> Field update operators (read documentation)

// Learn delete operators in different ways

// $unset : reverse of set
// syntax: { $unset: { <field1>: "", ... } } // we can use either empty string "" or 1 ( which means true) 
1.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $unset: {
            age: 1
        }
    }
)

// $pop : used to remove 1st or last element from an array
// syntax: { $pop: { <field>: <-1 | 1>, ... } }
2. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pop: {
            interests: 1 // last element ta remove hobe, -1 dile 1st element remove hobe
        }
    }
)

// $pull : used to remove a specific elements
3.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pull: {
            interests: "Coding"
        }
    }
)

// $pullAll : used to remove multiple elements
4. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pullAll: {
            interests: ["Coding", "Writing"]
        }
    }
)


// ----------------------------------------------- Module 5-10: More about $set ----------------------------------------

// if we want to update multiple properties from an object
1.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $set: {
            "address.city": "dhaka",
            "address.country": "BD",
        }
    }
)

// if we want to update a property value from an array of objects
2.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7"), "education.major": "Biology" },
    {
        $set: {
            "education.$.major": "CSE"
        }
    }
)

// jodi age field er value 2 kore barate chai
3.  db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $inc: {
            age: 2 // -2 dile 2 kore kombe
        }
    }
)
