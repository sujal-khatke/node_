// To update a single document, use db.collection.updateOne().

// To update multiple documents, use db.collection.updateMany().

// To replace a document, use db.collection.replaceOne().

//To update a single document
db.movies.updateOne( { title: "The Favourite" },
    {
      $set: {
        plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
      },
      $currentDate: { lastUpdated: true }
    })

    db.movies.findOne( { title: "The Favourite" })

    // To update multiple documents

    //To update a multiple document
    db.movies.updateMany(
        { year: { $lt: 2019 } },  // Filter to match documents with year less than 2018
        {
          $set: { year: 2020, rated: "PG-13" }  // Fields to update
        }
      )
      
      db.movies.find({ year: { $lt: 2020 } })
