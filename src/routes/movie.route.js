const { getAll, create, getOne, remove, update, setMovieGenre, setMovieActor, setMovieDirector } = require('../controllers/movie.controller');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/movies/:id/genres')
    //.get(getOne)
    //.put(update)
    .post(setMovieGenre);

movieRouter.route('/movies/:id/actors')
    //.put(update)
    .post(setMovieActor);

movieRouter.route('/movies/:id/directors')
    //.put(update)
    .post(setMovieDirector);

module.exports = movieRouter;