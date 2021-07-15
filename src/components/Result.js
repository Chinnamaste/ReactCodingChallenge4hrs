import React from 'react';
import Button from 'react-bootstrap/Button';

const apiImgBaseUrl = 'https://image.tmdb.org/t/p/w200';


function Result ({ result }) {

    //### Unfinished code for storing favourites in localStorage
 /*    function SaveDataToLocalStorage(data) {
        let favourites  = [];
        favourites = JSON.parse(localStorage.getItem(result.title)) || [];
        favourites.push(data);
        localStorage.setItem(result.title, JSON.stringify(data.favourites));       //storing favourites to localStorage

        console.log('LEMPPARIT', favourites);

    
    var storedFavs= JSON.parse(localStorage.getItem(favourites));                   //getting items from localstorage
    console.log('LEMPPARI', storedFavs);
    
    } */

    return (
        <section className="movieItem">
            <img src={apiImgBaseUrl + result.poster_path} alt='Movie poster'></img>
            <p className="movieTitle">{result.title}</p>
            <p className="releaseDate">Release date: {result.release_date}</p>
            <p className="overview">{result.overview}</p>
            <p className="genres">Genres: {result.genre_ids}</p>
            <Button className="favouriteBtn" /*onClick={SaveDataToLocalStorage} */>Add to favourites</Button>
        </section>
    )
}

export default Result;
