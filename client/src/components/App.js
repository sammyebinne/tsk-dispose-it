import Header from "./Header";
import SearchForm from "./SearchForm";
import Info from "./Info";
import { useState } from "react";
import "../styles/old/App.css";

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
    let response = await fetch(`/findItem/${query}`);
    let searchResult = await response.json();
    
    if (searchResult) {
      console.log(searchResult);
      setCurrentCategory(searchResult[0]);
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
