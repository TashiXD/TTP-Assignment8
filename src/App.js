import React from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_KEY = "qFb2hJrxjWy2Ezfe5hkxMyK3nk7nL2DR";
  const [gifs, setGifs] = useState([]);
  const [trendingGif, setTrendingGif] = useState([]);
  const [search, setSearch] = useState("");

  //fetches gifs using the trending api
  //and sets the trendingGif and gif to the list of gifs returned
  //using the api
  useEffect(() => {
    async function fetchTrendingGif() {
      try {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
        );
        setTrendingGif(response.data.data);
        setGifs(trendingGif);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingGif();
  }, []);

  //function that fetches gif based on what what searched
  const getSearchGifs = async () => {
    try {
      const response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Gif Finder</h1>
        <Search setSearch={setSearch} getSearchGifs={getSearchGifs} />
      </nav>
      <main>
        <h1>{console.log("trendingGif:", trendingGif)}</h1>
        <h1>{console.log(search)}</h1>
        <h1>{console.log("search", gifs)}</h1>
      </main>
    </div>
  );
}

export default App;
