const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Taegukgi Korean BBQ',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Korean BBQ',
        pic: 'https://scontent.fsan1-2.fna.fbcdn.net/v/t39.30808-6/258504312_2175379649268034_3977318335379489655_n.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6AFedRl8scAAX_mGK9M&_nc_ht=scontent.fsan1-2.fna&oh=00_AfCvgioromLC9fnHR9GFN51qnKnd1lbFkYGYoqsOzEF-kw&oe=65EBDDB7'
    }, {
        name: 'Mister As',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Fine-Dining Steak & Seafood',
        pic: 'https://media.sandiegoreader.com/img/photos/2014/03/02/duck_t720.JPG?5755a55b677da5dfc6c8e05d88cfbaffe8abac5c'
    }, {
        name: 'Fogo De Chao',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Brazilian Steakhouse',
        pic: 'https://austinfoodmagazine.com/wp-content/uploads/2023/01/Fogo-de-Chao-3.jpg'
    }, {
        name: 'Prince Street Pizza',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'NY Style Pizza',
        pic: 'https://cdn.vox-cdn.com/thumbor/HCpVoqwg4B3_QGumenNIYCQCdc8=/0x0:1280x853/920x613/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71823514/Prince_Street_Pizza_2.0.jpg'
    }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})


module.exports = router