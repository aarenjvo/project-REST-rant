const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    city: { type: String, default: 'City of Peace' },
    state: { type: String, default: 'State of Mind' },
    cuisines: { type: String, required: true },
    founded: Number
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)










// Mock Data
// module.exports = [
//     {
//         name: 'Taegukgi Korean BBQ',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'Korean BBQ',
//         pic: 'https://tucsonfoodie.com/wp-content/uploads/2022/11/TF-Taegukgi-korean-bbq-house-02-e1606091682696-1.jpg',
//         web: 'https://www.tggsd.com/'
//     }, {
//         name: 'Mister As',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'Fine-Dining Steak & Seafood',
//         pic: 'https://media.sandiegoreader.com/img/photos/2014/03/02/duck_t720.JPG?5755a55b677da5dfc6c8e05d88cfbaffe8abac5c',
//         web: 'https://www.asrestaurant.com/'
//     }, {
//         name: 'Fogo De Chao',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'Brazilian Steakhouse',
//         pic: 'https://austinfoodmagazine.com/wp-content/uploads/2023/01/Fogo-de-Chao-3.jpg',
//         web: 'https://fogodechao.com/location/san-diego/'
//     }, {
//         name: 'Prince Street Pizza',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'NY Style Pizza',
//         pic: 'https://cdn.vox-cdn.com/thumbor/HCpVoqwg4B3_QGumenNIYCQCdc8=/0x0:1280x853/920x613/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71823514/Prince_Street_Pizza_2.0.jpg',
//         web: 'https://princestreetpizza.com/sandiego-2/'
//     }]