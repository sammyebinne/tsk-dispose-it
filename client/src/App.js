import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  // const [wasteTypes, setWasteTypes] = useState(async () => {
  //   let response = await fetch("/api/loadItems");
  //   response = await response.json();
  //   setWasteTypes(response);
  // });
  const [currentCategory, setCurrentCategory] = useState(null);
  // search for something to dispose of
  const search = async (query) => {
    setCurrentCategory(null);
    let response = await fetch(`/api/findItem?searchInput=${query}`);
    let searchResult = await response.json();

    if (searchResult) {
      setCurrentCategory(searchResult);
    } else {
      alert("nothing found");
      setCurrentCategory(null);
    }
  };
  return (
    <div className="container">
      <Header />
      <SearchForm onSearch={search} />
      {currentCategory && <Info wasteType={currentCategory} />}
    </div>
  );
}

export default App;
