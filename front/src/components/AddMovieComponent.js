import React, { useEffect, useState } from 'react'
import MovieServices from '../services/MovieServices';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddMovieComponent = () => {
   
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [year,setYear] = useState('');
    const [votes,setVotes] = useState('');
    const [rating,setRating] = useState('');
    const [imgUrl,setImgUrl] = useState('');

    const navigate = useNavigate();
    const {id}= useParams();

    const saveUpMovie = (S) =>{
        S.preventDefault();
        const pelicula = { title, description,year,votes,rating,imgUrl};

        if(id){
            MovieServices.updateMovie(id,pelicula).then((response) =>{
                console.log(response.data)
                navigate('/movies');
    
            }).catch (error =>{
                console.log(error);
            })
        }else{
            MovieServices.createMovie(pelicula).then((response) =>{
                console.log(response.data)
                navigate('/movies');
    
            }).catch (error =>{
                console.log(error);
            })
        }      
     }

     useEffect(() => {
        MovieServices.getMovieById(id).then((response) => {
            setTitle(response.data.title);
            setDescription(response.data.description);
            setYear(response.data.year);
            setVotes(response.data.votes);
            setRating(response.data.rating);
            setImgUrl(response.data.imgUrl);

        }).catch(error =>{
                console.log(error)
        })
     },[] )

     const titulo= () =>{
        if(id){
            return <h2 className='text-center'>Update Movie</h2>
        }else {
            return <h2 className='text-center'>Add Movie</h2>
        }
     }

  return (
    <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>
                                     {
                                        titulo()
                                      }
                        </h2>
                        <div className='card-body'>
                            <form>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Title</label>
                                        <input type='text' placeholder='Type Title' name='title' className='form-control'
                                                    value={title} onChange={(S) => setTitle(S.target.value)} />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Description</label>
                                        <input type='text' placeholder='Description Title' name='description' className='form-control'
                                                    value={description} onChange={(S) => setDescription(S.target.value)} />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Year</label>
                                        <input type='text' placeholder='Year of movie' name='year' className='form-control'
                                                    value={year} onChange={(S) => setYear(S.target.value)} />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Votes</label>
                                        <input type='text' placeholder='How much votes you give' name='votes' className='form-control'
                                                    value={votes} onChange={(S) => setVotes(S.target.value)} />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Rating</label>
                                        <input type='text' placeholder='Movie Rating' name='rating' className='form-control'
                                                    value={rating} onChange={(S) => setRating(S.target.value)} />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Images</label>
                                        <input type='text' placeholder='Image of the Movie' name='images' className='form-control'
                                                    value={imgUrl} onChange={(S) => setImgUrl(S.target.value)} />
                                    </div>
                                    <div className="text-end">
                                                <button className='btn btn-success' onClick={saveUpMovie}>SAVE</button>
                                                &nbsp;&nbsp;
                                                <Link to='/movies' className='btn btn-danger'>CANCEL</Link>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
     
    </div>
  )
}

export default AddMovieComponent
