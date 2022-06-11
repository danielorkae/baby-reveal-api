
const reveal = (req, res, next) => {
    const gender = process.env.GENDER
    const revealDate = Date.parse(process.env.REVEAL_DATE)
    const now = Date.now()

    if (now < revealDate) {
        res.status(400).json({
            error: {
                message: 'The reveal is not yet available',
                meta: {
                    revealDate,
                    now,
                },
            },
        })
        return next()
    }

    res.json({ gender })
}

module.exports = reveal
