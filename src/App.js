import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';
import axios from 'axios';      // Axios for automatic JSON data transformation


function App() {
  const [state, setState] = useState({
    inputSearch: "",           // stores the user movie search input, fist initialized as empty string
    inputGenreSearch: "",      // stores the user genre search input, fist initialized as empty string
    results: [],               // stores the JSON search results coming from API as an array
    resultsPopular: [],        // stores the JSON popular results coming from API as an array
  });

const apiBaseUrl = 'https://api.themoviedb.org/3/search/movie';
const apiBaseUrlPopular = 'https://api.themoviedb.org/3/movie/popular';
const apiBaseUrlGenres = 'https://api.themoviedb.org/3/discover/movie';


//### Api query returns 20 per page and it cannot be changed by query parameters, but page 2 could be returned by adding + '&page=2' 
//to query, but didn't have time to implement
const search = (e) => {
  if (e.key === "Enter") {
    axios(apiBaseUrl + '?api_key=' + process.env.REACT_APP_API_KEY + '&query=' + state.inputSearch)
      .then(({ data }) => {
      let results = data.results;

      setState(prevState => {
        return {...prevState, results: results}
     })
    })
  }
}

const searchBtn = (e) => {
    axios(apiBaseUrl + '?api_key=' + process.env.REACT_APP_API_KEY + '&query=' + state.inputSearch)
      .then(({ data }) => {
      let results = data.results;

      setState(prevState => {
        return {...prevState, results: results}
     })
    })
}

const showPopular = (e) => {
    axios(apiBaseUrlPopular + '?api_key=' + process.env.REACT_APP_API_KEY)
      .then(({ data }) => {
      let results = data.results.slice(0, 24);

      setState(prevState => {
        return {...prevState, results: results}
     })
    })
}


//### handleGenreInput currently has a bug, when typing the genre, the input value stored is lagging behind one letter, so
//testing can be done by erasing the last letter and typing again. Can be fixed with useEffect, or async function, but didn't have time to implement
let genreNumber = 0;

const handleGenreInput = (e) => {
  let inputGenreSearch = e.target.value;
    if (inputGenreSearch.toLowerCase() === "action") {
      genreNumber = 28;
    } else if (inputGenreSearch.toLowerCase() === "adventure") {
      genreNumber = 12;
    } else if (inputGenreSearch.toLowerCase() === "animation") {
      genreNumber = 16;
    } else if (inputGenreSearch.toLowerCase() === "comedy") {
      genreNumber = 35;
    } else if (inputGenreSearch.toLowerCase() === "crime") {
      genreNumber = 80;
    } else if (inputGenreSearch.toLowerCase() === "documentary") {
      genreNumber = 99;
    } else if (inputGenreSearch.toLowerCase() === "drama") {
      genreNumber = 18;
    } else if (inputGenreSearch.toLowerCase() === "family") {
      genreNumber = 10751;
    } else if (inputGenreSearch.toLowerCase() === "fantasy") {
      genreNumber = 14;
    } else if (inputGenreSearch.toLowerCase() === "history") {
      genreNumber = 36;
    } else if (inputGenreSearch.toLowerCase() === "horror") {
      genreNumber = 27;
    } else if (inputGenreSearch.toLowerCase() === "music") {
      genreNumber = 10402;
    } else if (inputGenreSearch.toLowerCase() === "mystery") {
      genreNumber = 9648;
    } else if (inputGenreSearch.toLowerCase() === "romance") {
      genreNumber = 10749;
    } else if (inputGenreSearch.toLowerCase() === "science fiction" || "scifi") {
      genreNumber = 878;
    } else if (inputGenreSearch.toLowerCase() === "TV Movie") {
      genreNumber = 10770;
    } else if (inputGenreSearch.toLowerCase() === "Thriller") {
      genreNumber = 53;
    } else if (inputGenreSearch.toLowerCase() === "War") {
      genreNumber = 10752;
    } else if (inputGenreSearch.toLowerCase() === "Western") {
      genreNumber = 37;
    } else {
      genreNumber = 0;
    }
 }

const showGenres = (e) => {
  axios(apiBaseUrlGenres + '?api_key=' + process.env.REACT_APP_API_KEY + '&with_genres=' + genreNumber)
    .then(({ data }) => {
    let results= data.results;

    setState(prevState => {
      return {...prevState, results: results}
   })
  })
}


const handleInput = (e) => {
  let inputSearch = e.target.value;

  setState(prevState => {
    return { ...prevState, inputSearch: inputSearch}
  });
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Movie App</h1>
        <Search className="inputSearch" handleInput={handleInput} handleGenreInput={handleGenreInput} search={search} searchBtn={searchBtn} showPopular={showPopular} showGenres={showGenres} />
      </header>    
      <main className="App-main">  
        <Results results={state.results} handleFavourites={state.handleFavourites}/>
      </main>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App; 
