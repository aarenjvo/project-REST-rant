const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!!!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border rounded my-1 d-inline-flex text-center" id="comments">
                    <span>
                        <h2 className="rant text-center">{c.rant ? 'Rant!🤬' : 'Rave!😋'}</h2>
                        <h5 className="text-center">{c.content}</h5>
                        <h4 className="text-center">
                            <strong>- {c.author}</strong>
                        </h4>
                        <h5 className="text-center">Rating: {c.stars}</h5>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning mx-2 px-3 w-7 h-4">
                            <span className="bi-pencil" />
                            Edit
                        </a>
                        <form action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`} method="POST">
                            <button type="submit" value="Delete Comment" className="btn btn-danger mx-2 px-2 w-6 h-4">
                                <span className="bi-trash" />
                                Delete
                            </button>
                        </form>
                    </span>
                </div>
            )
        })
    }
    return (
        <Def>
            <body>
                <main className="rounded-bottom">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-7 text-center my-4">
                                <img src={data.place.pic} alt={data.place.name} height='350vh' width='430vw' />
                                <h4>Located in {data.place.city}, {data.place.state}</h4>
                                <h4>serving {data.place.cuisines}</h4>
                            </div>
                            <div className="col-md-4 text-center">
                                <br />
                                <h1>{data.place.name}</h1>
                                <h2>Rating</h2>
                                {rating}
                                <h2>Description</h2>
                                <h4>
                                    {data.place.showEstablished()}
                                </h4>
                                <h5>
                                    Serving {data.place.cuisines}
                                </h5>

                                <div className="d-inline-flex p-2 bd-highlight">
                                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning mx-2 px-4">
                                        <span className="bi-pencil" />
                                        Edit
                                    </a>
                                    <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
                                        <button type="submit" value="DELETE" className="btn btn-danger mx-2 px-3">
                                            <span className="bi-trash" />
                                            Delete
                                        </button>
                                    </form>
                                </div>
                                <div className="text-center">
                                    <a href={data.place.web} target="_blank" className="btn btn-primary mb-3 mt-2" id="learnMoreBtn">
                                        <span className="bi-info-circle" />
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="text-center my-4">
                        <h1>Comments</h1>
                        {comments}
                        <div className="border my-2 py-4">
                            <h4>Add a comment: </h4>
                            <form action={`/places/${data.place.id}/comment`} method='POST' id="commentForm" className="d-flex flex-column form-group text-center">
                                <label htmlFor="author">Author</label>
                                <input
                                    className="form-control my-2"
                                    type="text"
                                    name="author"
                                />
                                <label htmlFor="content">Content</label>
                                <input
                                    className="form-control my-2"
                                    type="text"
                                    name="content"
                                    id="content"
                                />
                                <label htmlFor="stars">Star Rating</label>
                                <input
                                    className="form-control-range text-center my-2"
                                    type="range"
                                    name="stars"
                                    id="stars"
                                    min="0"
                                    max="5"
                                    step="0.5"
                                    required
                                />
                                <div id="rantDivWrap" className="my-2">
                                    <label htmlFor="rant">Rant</label>
                                    <input
                                        className="form-check mx-2"
                                        type="checkbox"
                                        name="rant"
                                        id="rant"
                                    />
                                </div>
                                <input type="submit" id="commentBtn" className="btn btn-primary my-2"></input>
                            </form>
                        </div>
                    </footer>
                </main>
            </body>
        </Def>
    )
}


module.exports = show
