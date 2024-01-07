const express = require('express');
const actorRouter = require('./actor.route');
const directorRouter = require('./director.route');
const movieRouter = require('./movie.route');
const genreRouter = require('./genre.route');
const router = express.Router();

// colocar las rutas aquí

router.use(actorRouter);
router.use(directorRouter);
router.use(movieRouter);
router.use(genreRouter);


module.exports = router;