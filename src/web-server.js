const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const webServer = () => {
    const listen = (app) => {
        app.listen(process.env.PORT, () => {
            console.log('app listening on port 3000!')
        })
    }

    const registerRoutes = (app) => {
        routes(app)
    }

    const registerMiddlewares = (app) => {
        app.use(bodyParser.json())
        app.use(cors())
    }

    const init = () => {
        const app = express()
        
        registerMiddlewares(app)
        registerRoutes(app)
        listen(app)
    }

    return {
        init,
    }
}

module.exports = webServer()
