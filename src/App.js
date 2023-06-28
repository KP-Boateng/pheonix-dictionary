import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
// import WordCarousel from "./wordcarousel";
import Definition from "./definition";
import wallpaperImage from "./images/wp2038550-phoenix-wallpaper-hd.jpg";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      const response = await fetch(url + query);
      const jsonData = await response.json();
      setData(jsonData);
    };

    const fetchDefinition = async () => {
      if (query) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fetchData();
        }, 500);
      }
    };

    fetchDefinition();

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${wallpaperImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <h1 className="text-center text-orange-special text-xl font-extrabold">
        Phoenix Dictionary
      </h1>

      <SearchBar word={setQuery} />
      {/* <WordCarousel word={setQuery} /> */}
      <Definition word={query} data={data} />
    </div>
  );
}

export default App;
