const router = require('express').Router()
const db = require('../models')

// GET /places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

// Post route to create new place
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `You input '${field}' was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
        })
})

// Show route
router.get('/:id', async (req, res) => {
    await db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// Post comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    if (req.body.rant) {
        req.body.rant = true;
    } else {
        req.body.rant = false;
    }
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    // To do: Save comment id to place
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

// Edit route
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.render('error404')
        })
})

// PUT route
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// Delete route
router.delete('/:id', async (req, res) => {
    await db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// Delete comment
router.delete('/:id/comment/:c', async (req, res) => {
    await db.Comment.findByIdAndDelete(req.params.c)
    res.redirect(`/places/${req.params.id}`)
    console.log('Trying to delete comment?')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router