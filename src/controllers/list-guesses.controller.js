const { ref, get } = require('firebase/database')
const db = require('../firebase-database')

const listGuesses = async (req, res, next) => {
    try {
        const guessesRef = ref(db, 'guesses')
        const guesses = await get(guessesRef)

        res.json(guesses)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
        next()
    }
}

module.exports = listGuesses
