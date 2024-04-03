const db = require('../models')

db.Place.create([
    {
        name: 'Taegukgi Korean BBQ',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Korean BBQ',
        pic: 'https://tucsonfoodie.com/wp-content/uploads/2022/11/TF-Taegukgi-korean-bbq-house-02-e1606091682696-1.jpg',
        founded: 2008,
        web: 'https://www.tggsd.com/'
    },
    {
        name: 'Mister As',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Fine-Dining Steak & Seafood',
        pic: 'https://media.sandiegoreader.com/img/photos/2014/03/02/duck_t720.JPG?5755a55b677da5dfc6c8e05d88cfbaffe8abac5c',
        founded: 1965,
        web: 'https://www.asrestaurant.com/'
    }, {
        name: 'Fogo De Chao',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Brazilian Steakhouse',
        pic: 'https://austinfoodmagazine.com/wp-content/uploads/2023/01/Fogo-de-Chao-3.jpg',
        founded: 1979,
        web: 'https://fogodechao.com/location/san-diego/'
    }, {
        name: 'Prince Street Pizza',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'NY Style Pizza',
        pic: 'https://cdn.vox-cdn.com/thumbor/HCpVoqwg4B3_QGumenNIYCQCdc8=/0x0:1280x853/920x613/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71823514/Prince_Street_Pizza_2.0.jpg',
        founded: 2012,
        web: 'https://princestreetpizza.com/sandiego-2/'
    }
])
    .then(() => {
        console.log('Success')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })