const app = require('./firebase-app')

const { getAuth } = require('firebase/auth')

module.exports = getAuth(app)
