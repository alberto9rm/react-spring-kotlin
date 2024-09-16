package com.movies.movies.controller;

import com.movies.movies.models.Movie;
import com.movies.movies.repository.MovieRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/movies/peliculas")
        public class MovieController {
     
    @Autowired
        private MovieRepository movieRepository;
        
//Peticion fuera de aqui "@CrossOrigin"
    @CrossOrigin
    @GetMapping
         public List<Movie> getAllMovies(){
            return movieRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
        public ResponseEntity<Movie> getMovieById(@PathVariable Long id){
            Optional<Movie> movie = movieRepository.findById(id);
            return movie.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

        }

//Inserccion de elementos
    @CrossOrigin
    @PostMapping
        public ResponseEntity<Movie> createMovie(@RequestBody Movie movie ){
            Movie savedMovie = movieRepository.save(movie);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedMovie); 
        }

//Borrado de elementos
    @CrossOrigin
    @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteMovie(@PathVariable Long id){
            if(!movieRepository.existsById(id)){
                return ResponseEntity.notFound().build();
            }
            movieRepository.deleteById(id);
                return ResponseEntity.noContent().build();
        }
    
//Actualizar los elementos
    @CrossOrigin
    @PutMapping("/{id}")
         public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie updateMovie){
                    if(!movieRepository.existsById(id)) {
                        return ResponseEntity.notFound().build();
                    }
                    updateMovie.setId(id);
                    Movie saveMovie = movieRepository.save(updateMovie);
                    return ResponseEntity.ok(saveMovie);
         }

//Votacion de los elementos de la base de Datos
    @CrossOrigin
    @GetMapping("/vote/{id}/{rating}")
        public ResponseEntity<Movie> voteMovie(@PathVariable Long id, @PathVariable double rating){
            if(!movieRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }
             //Cacular los votos 
             Optional<Movie> optional = movieRepository.findById(id);
                Movie movie = optional.get();

            double newRating =((movie.getVotes() * movie.getRating()) + rating ) / (movie.getVotes() +1);

            movie.setVotes(movie.getVotes() + 1);
            movie.setRating(newRating);

            Movie saveMovie  = movieRepository.save(movie);
            return ResponseEntity.ok(saveMovie);
            
            }
}
