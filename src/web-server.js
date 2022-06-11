const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const webServer = () => {
    const listen = (app) => {
        app.listen(3000, () => {
            console.log('app listening on port 3000!')
        })
    }

    const registerRoutes = (app) => {
        routes(app)
    }

    const registerMiddlewares = (app) => {
        app.use(bodyParser.json())
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
