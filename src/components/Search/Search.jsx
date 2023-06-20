import React,{ useState } from 'react';

function Search({search,setSearch,fetchSearchGifs }) {
    const[searchTerm, setSearchTerm] = useState("");
    //this handles and set our searchTerm whenever it is changed
    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    }

    //this will set the search useState that was 
    //passed from the parent component to the searchTerm
    //and call function from parent component that was passed
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
