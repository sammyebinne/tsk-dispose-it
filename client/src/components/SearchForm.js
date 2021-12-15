import { useState, useEffect } from "react";

const SearchForm = ({ onSearch, setCurrentCategory, currentCategory }) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onSubmit = async (e) => {
    e.preventDefault(); // prevents page from refreshing

    if (!text) {
      // if search bar is empty when user hits submit button:
      alert("Please enter something into the search bar");
      return;
    }
    await onSearch(text);
    setText("");
  };

  useEffect(() => {
    async function fuzzySearch() {
      if (text.length < 3) {
        return setSuggestions([]);
      }
      setCurrentCategory(null);
      let response = await fetch(`/fuzzySearch/${text}`);
      response = await response.json();
      setSuggestions(response);
    }
    fuzzySearch();
    console.log(suggestions);
  }, [text]);

  return (
    <form onSubmit={onSubmit}>
      <input
        style={{
          width: "100%",
          height: "40px",
          margin: "5px",
          padding: "3px 7px",
          fontSize: "17px",
        }}
        type="search"
        placeholder="search for something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" className="btn btn-block" />
      {!currentCategory && (
        <ul>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion.id}
                onClick={() => setCurrentCategory(suggestion)}
              >
                {suggestion.category}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
};

export default SearchForm;
