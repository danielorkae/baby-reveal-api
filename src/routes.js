const revealController = require('./controllers/reveal.controller')
const storeGuess = require('./controllers/store-guess.controller')
const listGuesses = require('./controllers/list-guesses.controller')

const routes = (app) => {
    app.get('/reveal', revealController)

    app.get('/guesses', listGuesses)
    app.post('/guesses', storeGuess)
}

module.exports = routes
