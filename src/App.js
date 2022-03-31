import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./Search.svg"


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3663e19e"



function App()
{
  const [movies, setMovie] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) =>
  {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovie(data.Search)
  }

  useEffect(() =>
  {
    searchMovies("Batman")

  }, [])

  return (
    <div className="main">
      <h1>Movies.com</h1>

      <div className="search">
        <input
          type="text"
          placeholder='Find Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        >

        </input>
        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className="container">

              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}

            </div>
          ) :
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )

      }


    </div>
  );
}

export default App;
