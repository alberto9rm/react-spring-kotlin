import React, { useEffect, useState } from 'react'
import MovieServices from '../services/MovieServices';
import { Link } from 'react-router-dom';

export const ListMovieComponent = () => {
    const listarMovie = () =>{
        MovieServices.getAllMovie().then(response =>{
            setMovie(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const  [movie, setMovie] = useState([]);

    useEffect(() =>{
                listarMovie();
    },[])

const deleteMovie = (peliculaId)=> {
    MovieServices.deleteMovie(peliculaId).then ((response) =>{
            listarMovie();
    }). catch (error =>{
        console.log(error);
    })
}
  return (
    <div  className='container'>
        <h2 className='text-center'>Movies Listings</h2>
        <Link to='/add-movies' className='btn btn-primary mb-4'>Add Movies</Link>
        <table className='table table-bordered table-striped'>
            <thead>
               <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Year</th>
                    <th>Votes</th>
                    <th>Rating</th>
                    <th>Images</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { movie.map( 
                      movies =>
                         <tr key = { movies.id }>
                                <td> { movies.id } </td>
                                <td> { movies.title } </td>
                                <td> { movies.description } </td>
                                <td> { movies.year } </td>
                                <td> { movies.votes } </td>
                                <td> { movies.rating } </td>
                                <td> { movies.imgUrl  } </td>
                                <td>
                                    <Link className='btn btn-info'  to={`/edit-movies/$(movies.id)`}>UPDATE</Link>
                                      <button style={{ marginLeft:"13px"}}  className='btn btn-danger' onClick={() => deleteMovie(movies.id)}>DELETE</button>  
                               </td>
                         </tr>
                         
                )}
            </tbody>
        </table>
    </div>
  )
}


export default ListMovieComponent;