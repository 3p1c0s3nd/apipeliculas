const Actor = require('./Actor');
const Director = require('./Director');
const Movie = require('./Movie');
const Genre = require('./Genre');


//Crear las relaciones: una película puede tener muchos actores, muchos directores y ser de muchos géneros.
Movie.belongsToMany(Actor, {through: 'movie_actor'});
Movie.belongsToMany(Director, {through: 'movie_director'});
Movie.belongsToMany(Genre, {through: 'movie_genre'});
