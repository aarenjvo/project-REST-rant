const React = require('react')

const Def = require('./default')

function home() {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/2-rest-rant.jpg" alt="Restaurant Dining Area" height='400' width='550' />
                    <div>
                    Photo by <a href="https://unsplash.com/@alessiodandi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alessio Dandi</a> on <a href="https://unsplash.com/photos/brown-wooden-table-with-chairs-LusjIyLfZ70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home