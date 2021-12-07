import { useState } from "react";

function SearchForm({ getData }) {
  const [query, setQuery] = useState("");

  const enterQuery = (e) => {
    let query = e.target.value;
    setQuery(query);
  };

  const search = async () => {
    try {
      let response = await fetch(`/findItem/${query}`);
      let data = await response.json();
      console.log(data);
      return getData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(query);
    setQuery("");
  };

  return (
    <form action="" className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter waste item"
        onChange={enterQuery}
        value={query}
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
}

export default SearchForm;
