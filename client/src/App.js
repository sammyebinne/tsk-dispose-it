import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [wasteTypes, setWasteTypes] = useState([
    {
      category: "pop can",
      bin: "blue",
    },
    {
      category: "banana peel",
      bin: "green",
    },
    {
      category: "aluminum foil",
      bin: "black",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState("");
  // search for something to dispose of
  const search = (query) => {
    // replace with fetch request once back end is hooked up
    let searchResult = wasteTypes.find((wasteType) => {
      console.log(wasteType.category);
      return wasteType.category === query.text;
    });
    console.log(searchResult);
    if (searchResult) {
      setCurrentCategory(searchResult);
      console.log(currentCategory);
    } else {
      setCurrentCategory("");
      alert("nothing found");
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
