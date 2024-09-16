import axios from 'axios';

const MOVIE_BASE_API = "http://localhost:8080/api/movies/peliculas";

class MovieServices{
    getAllMovie(){
        return axios.get(MOVIE_BASE_API);
    }
    createMovie(pelicula){
        return axios.post(MOVIE_BASE_API, pelicula);
    }
    getMovieById(peliculaId){
        return axios.get(MOVIE_BASE_API + '/' + peliculaId );
    }

    updateMovie(peliculaId,pelicula){
        return axios.put(MOVIE_BASE_API + '/ '+ peliculaId,pelicula );
    }

    deleteMovie(peliculaId){
        return axios.delete(MOVIE_BASE_API + '/' + peliculaId);
    }

}

export default new MovieServices();