const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place) => {
    return(
        <div>
            <h2>{ place.name }</h2>
            <img src={ place.pic } alt={place.name} height='400' width='550'></img>
        </div>
    )
})
return(
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            { placesFormatted }
        </main>
    </Def>
)
}

module.exports = index