import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchGIFs, setSearchGIFs] = useState([]);
  const [trending, setTrending] = useState([]);
  const [randomGif, setRandomGif] = useState(null);

  const backend = "http://localhost:5000";

  const fetchSearch = async () => {
    const res = await fetch(`${backend}/search?q=${query}`);
    const data = await res.json();
    setSearchGIFs(data);
  };

  const fetchTrending = async () => {
    const res = await fetch(`${backend}/trending`);
    const data = await res.json();
    setTrending(data);
  };

  const fetchRandom = async () => {
    const res = await fetch(`${backend}/random`);
    const data = await res.json();
    setRandomGif(data);
  };

  useEffect(() => {
    fetchTrending();
    fetchRandom();
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      <h2>GIF App</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />

      <button onClick={fetchSearch} style={{ padding: "10px" }}>
        Search
      </button>

      <h3>Search Results</h3>
      <div style={gridStyle}>
        {searchGIFs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.original.url}
            alt=""
            style={{ width: "100%" }}
          />
        ))}
      </div>

      <h3>Trending</h3>
      <div style={gridStyle}>
        {trending.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.original.url}
            alt=""
            style={{ width: "100%" }}
          />
        ))}
      </div>

      <h3>Random</h3>
      {randomGif && (
        <img
          src={randomGif.images.original.url}
          alt=""
          style={{ width: "200px" }}
        />
      )}
    </div>
  );
}

export default App;
