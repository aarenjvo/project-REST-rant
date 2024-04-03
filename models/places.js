const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: "http://placekitten.com/350/350" },
    city: { type: String, default: 'City of Peace' },
    state: { type: String, default: 'State of Mind' },
    cuisines: { type: String, required: true },
    founded: {
        type: Number,
        min: [1673, ' Cannot read prehistoric year.'],
        max: [new Date().getFullYear(), 'Cmon, this year is in the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)

