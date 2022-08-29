import React, { useEffect, useState } from "react";
import "./App.css";

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      placeholder="search..."
      id="search"
      type="text"
      value={value}
      onChange={onChange} />
  </div>
);

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();

      setUser(data)
    }
    fetchData()
  }, [])



  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      
      {user && <h2>Logged in as {user.name}</h2>}
      <img src="" alt="react" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;