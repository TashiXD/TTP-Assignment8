import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

//importing components
import GifCard from "./components/Gifcard/GifCard";
import Search from "./components/Search/Search";

function App() {
  const API_KEY = "qFb2hJrxjWy2Ezfe5hkxMyK3nk7nL2DR";
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //fetches gifs using the trending api
  //and sets gifs to the list of gifs fetched
  const fetchTrendingGifs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );
      setGifs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetches gifs based on the search term
  // If no search term is provided, fetches trending gifs
  const fetchSearchGifs = async () => {
    try {
      setIsLoading(true);
      let response;
      if (search !== "") {
        response = await axios.get(
          `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`
        );
      } else {
        response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
        );
      }
      setGifs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch trending gifs when the component mounts
    fetchTrendingGifs();
  }, []);

  useEffect(() => {
    if (search !== "") {
      // Fetch search gifs when the 'search' isnt empty
      fetchSearchGifs();
    }
  }, [search]);

  return (
    <div className="App">
      <nav>
        <h1>Gif Finder</h1>
        <div className="search">
          <Search
            search={search}
            setSearch={setSearch}
            fetchSearchGifs={fetchSearchGifs}
          />
        </div>
      </nav>
      <main>
        {!isLoading ? (
          gifs.map((gif, index) => (
            <div key={index} className="card">
              <GifCard gif={gif} />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    </div>
  );
}

export default App;
