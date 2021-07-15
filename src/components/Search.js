import React from 'react';
import Button from 'react-bootstrap/Button';

function Search({handleInput, handleGenreInput, search, searchBtn, showPopular, showGenres }) {
    return (
      <section>
      <div className="search">
          <input type="text" className="input-search" placeholder="Search for a movie..."
            onChange={handleInput}
            onKeyPress={search}>
          </input>
          <Button className="searchBtn" onClick={searchBtn}>
            Search
          </Button>
      </div>
      <div>
          <input type="text" className="input-search" placeholder="Search for a genre..."
            onChange={handleGenreInput}
            onKeyPress={showGenres}>
          </input>
          <Button className="searchBtn" onClick={showGenres}>Show Genres</Button>
      </div>
      <div>
          <Button className="showPopularBtn" onClick={showPopular}>
            Show popular
          </Button>
      </div>
    </section>
    )
  };

  export default Search;
