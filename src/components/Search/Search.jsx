import React from 'react';

function Search({setSearch,getSearchGifs }) {
    
  return (
    <div className="search-section">
          <input type="text" placeholder="search for gif" onChange={e => setSearch(e.target.value)}/>
          <button className="button" onClick={getSearchGifs}>Search</button>
        </div>
  )
}

export default Search
