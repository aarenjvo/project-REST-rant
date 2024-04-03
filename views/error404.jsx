const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main className="text-center">
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find the page you're looking for...</p>
                <img src="/images/sadKermitMeme.png" alt="Sad Kermit Pic" height='400' width='550' />
            </main>
        </Def>
    )
}

module.exports = error404