const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place, id) => {
        return (
            <div className="col-sm-6 text-center">
                <h2>
                    <a href={`/places/${id}`}>
                        {place.name}
                    </a>
                </h2>
                <p>
                    {place.cuisines}
                </p>
                <div>
                    <img src={place.pic} alt={place.name} height='400vh' width='550vw' />
                </div>
                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index