const app = require('./firebase-app')

const { getDatabase } = require('firebase/database')

module.exports = getDatabase(app)
