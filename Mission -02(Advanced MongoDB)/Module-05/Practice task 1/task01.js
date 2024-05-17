// Find all documents in the collection where the age is greater than 30, and only return the name and email fields
1. db.test.find({ age: { $gt: 30 } }).project({
    name: 1,
    email: 1
})

// Find documents where the favorite color is either "Maroon" or "Blue."
2. db.test.find({
    $or: [
        { favoutiteColor: "Blue" },
        { favoutiteColor: "Maroon" },
    ]
}).project({
    favoutiteColor: 1,
})

// Find all documents where the skill is an empty array
3. db.test.find({
    skills: { $size: 0 }
}).project({
    skills: 1,
})

// Find documents where the person has skills in both "JavaScript" and "Java"
4. db.test.find({
    $and: [
        { "skills.name": "JAVA" },
        { "skills.name": "JAVASCRIPT" },
    ]
}).project({
    skills: 1,
})

// Add a new skill to the skills array for the document with the email "amccurry3@cnet.com". The skill is
// {"name": "Python", "level": "Beginner", "isLearning": true}
// Note: At first, you will have to insert the given email then add the skill mentioned above
5. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $addToSet: {
            skills: {
                name: "Python",
                level: "Beginner",
                isLearning: true,
            }
        }
    }
) 

// Add a new language "Spanish" to the list of languages spoken by the person
6. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $addToSet: {
            languages: "Spanish"
        }
    }
) 

// Remove the skill with the name "Kotlin" from the skills array
7. db.test.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    {
        $pull: {
           skills: { name: "KOTLIN" }
        }
    }
)

