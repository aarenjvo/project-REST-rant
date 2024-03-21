const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'TGG Korean BBQ House' })

    // Fake sample comment
    let comment = await db.Comment.create(
        {
            author: 'BBQ Enthusiast',
            rant: false,
            stars: 5.0,
            content: 'Best BBQ there is in San Diego!'
        }
    )

    // add comment to the place's comment array
    place.comments.push(comment.id)

    // save the place now that is has comment
    await place.save()

    // Exit program
    process.exit()
}

seed()