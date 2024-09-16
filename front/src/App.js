import logo from './logo.svg';
import './App.css';
import ListMovieComponent from './components/ListMovieComponent';
import FootComponent from './components/FootComponent';
import HeadComponent from './components/HeadComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMovieComponent from './components/AddMovieComponent';

function App(){
return(
      <div>
              <BrowserRouter>
                <HeadComponent />
                    <div className='container'>
                    <Routes>
                      <Route exact path='/' element={<ListMovieComponent />}></Route>
                      <Route path='/movies' element={<ListMovieComponent />}></Route>
                      <Route path='/add-movies' element={<AddMovieComponent />}></Route>
                      <Route path='/edit-movies/:id' element={<AddMovieComponent />}></Route>
                    </Routes>
                    </div>
                  <FootComponent />
              </BrowserRouter>          
      </div>
    );
}


export default App;
