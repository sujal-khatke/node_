
// To retrieve the inserted document, read the collection: 

db.movies.find() // Fetch all documents
db.movies.find({}) // Fetch all documents

db.movies.find( { year :2019} )     //call with argument

db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )

//AND
db.movies.find( { rated: "R",runtime : {$lt : 121 }} )

//OR
db.movies.find( {$or: [{ rated: "R" } , { runtime : {$lt : 130 } }]} )


db.movies.findOne( { rated: "R",runtime : {$lt : 121 }} )
