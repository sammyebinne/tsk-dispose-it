const SearchForm = ({
  text,
  setCurrentCategory,
  currentCategory,
  setText,
  suggestions,
  isAdd,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault(); // prevents page from refreshing

    if (!text) {
      // if search bar is empty when user hits submit button:
      alert("Please enter something into the search bar");
      return;
    }
    setCurrentCategory(suggestions[0]);
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
      {!currentCategory && !isAdd && (
        <ul>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion.id}
                onClick={() => setCurrentCategory(suggestion)}
                className="task"
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
