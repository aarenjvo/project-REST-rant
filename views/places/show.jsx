const React = require('react')
const Def = require('../default')

function show({ place, id }) {
    return (
        <Def>
            <body>
                <main className="rounded-bottom">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-7 text-center my-4">
                                <img src={place.pic} alt={place.name} height='350vh' width='430vw' />
                                <h4>Located in {place.city}, {place.state}</h4>
                                <h4>serving {place.cuisines}</h4>
                            </div>
                            <div className="col-md-4 text-center">
                                <br />
                                <h1>{place.name}</h1>
                                <h2>Rating</h2>
                                <h4>Not Rated</h4>
                                <h2>Description</h2>
                                <h4>
                                    {place.showEstablished()}
                                </h4>
                                <h5>
                                    Serving {place.cuisines}
                                </h5>

                                <div className="d-inline-flex p-2 bd-highlight">
                                    <a href={`/places/${id}/edit`} className="btn btn-warning mx-2 px-4">
                                        <span className="bi-pencil" />
                                        Edit
                                    </a>
                                    <form method="POST" action={`/places/${id}?_method=DELETE`}>
                                        <button type="submit" className="btn btn-danger mx-2 px-3">
                                            <span className="bi-trash" />
                                            Delete
                                        </button>
                                    </form>
                                </div>
                                <div className="text-center">
                                <a href={place.web} target="_blank" className="btn btn-primary mb-3 mt-2" id="learnMoreBtn">
                                <span className="bi-info-circle" />
                                Learn more
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="text-center my-4">
                        <h2>Comments</h2>
                        <h4>No comments yet!</h4>
                    </footer>
                </main>
            </body>
        </Def>
    )
}

module.exports = show
