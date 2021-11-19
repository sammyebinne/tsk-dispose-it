import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [text, setText] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter something into the search bar");
      return;
    }
    await onSearch({ text });
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="search for something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
