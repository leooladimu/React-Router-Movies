
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList'
import MovieList from './MovieList'
import Movie from './Movie'

export default function App (props) {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
        .then(response => setMovieList(response.data)
        
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        )
        // console.log(movieList)
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);length

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path="/">
          <MovieList />
      </Route>
      <Route path={"/movies-list/:moviesId"}>
          <Movie movies={stock} />
      </Route>
    </div>
  );
}
