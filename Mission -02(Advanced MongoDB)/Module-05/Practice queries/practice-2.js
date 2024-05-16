// practice the below queries using the NoSQLBooster or mongodb compass's terminal

// ------------------------------------------------Module 5-6: $Exists, $Type, $Size -----------------------------------------------------
// $exists : ekta document e kon ekta field ache kina se onujai data return korbe
// emon document jetar moddhe company field ta nai
1. db.test.find({ company : {$exists : false}}).project({
    company: 1
})

// $type : sei documents gulo pabo jetar company field er type null
2. db.test.find({ company : {$type : "null"}}).project({
    company: 1
})

// $size : sudhu array type er field er khetre kaj kore, 
// sei documents gulo pabo jetar friends array er size 4
3. db.test.find({ friends : {$size : 4}}).project({
    friends: 1
})


// ----------------------------------------------- Module 5-7: $All , $ElemMatch ----------------------------------------


