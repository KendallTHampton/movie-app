import React from 'react'

function Movies({movie})
{
    return (
        <div className="movies">
            <div className="movies__year">
                <p>{movie.Year}</p>
            </div>

            <div className="movies__poster">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>

            <div className="movies__footer">
                <span>{movie.Type} </span>
                <h3>{movie.Title}</h3>
            </div>


        </div>

    )
}

export default Movies