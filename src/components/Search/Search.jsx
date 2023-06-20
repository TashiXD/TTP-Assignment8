import React,{ useState } from 'react';

function Search({search,setSearch,fetchSearchGifs }) {
    const[searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    }

    const handleSearchClick = () =>{
        setSearch(searchTerm);
        fetchSearchGifs();
    }
  return (
    <div className="search-section">
          <input type="text" placeholder="search for gif" onChange={handleSearchChange}/>
          <button className="button" onClick={handleSearchClick}>Search</button>
        </div>
  )
}

export default Search
