import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [text, setText] = useState("");
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
    </form>
  );
};

export default SearchForm;
