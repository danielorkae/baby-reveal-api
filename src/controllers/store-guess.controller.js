const { ref, push } = require('firebase/database')
const db = require('../firebase-database')

const storeGuess = async (req, res, next) => {
    const { guess, name } = req.body

    if (guess === undefined || name === undefined) {
        res.status(400).json({
            error: {
                message: 'Missing parameters',
            },
        })
    }

    try {
        const guesss = {
            guess,
            name,
            timestamp: Date.now(),
        }

        await push(ref(db, 'guesses'), guesss)

        res.json(guesss)
    } catch (error) {
        res.status(500).json(error)
        next(error)
    }

    next()
}

module.exports = storeGuess
