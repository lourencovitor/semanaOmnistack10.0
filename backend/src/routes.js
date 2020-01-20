const {Router} = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: "Hello Omnistack" });
})

routes.get('/dev', DevController.index)
routes.post('/dev', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes;