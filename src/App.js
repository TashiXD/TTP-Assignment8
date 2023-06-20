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
  //and sets the trendingGif and gif to the list of gifs returned
  //using the api

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

  //function that fetches gif based on what what searched
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
    fetchTrendingGifs();
  }, []);

  useEffect(() => {
    if (search !== "") {
      fetchSearchGifs();
    }
  }, [search]);

  return (
    <div className="App">
      <nav>
        <h1>Gif Finder</h1>
        <Search
          search={search}
          setSearch={setSearch}
          fetchSearchGifs={fetchSearchGifs}
        />
      </nav>
      <main>
        {!isLoading ? (
          gifs.map((gif, index) => (
            <div key={index}>
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
