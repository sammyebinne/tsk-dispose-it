import Header from "./Header";
import SearchForm from "./SearchForm";
import Info from "./Info";
import { useState } from "react";
import "../styles/old/App.css";
import EditForm from "./EditForm";

function App() {
  // const [wasteTypes, setWasteTypes] = useState(async () => {
  //   let response = await fetch("/api/loadItems");
  //   response = await response.json();
  //   setWasteTypes(response);
  // });
  const [currentCategory, setCurrentCategory] = useState(null);
  // is Edit button toggled?
  const [isEdit, setIsEdit] = useState(false);
  // search for something to dispose of
  const search = async (query) => {
    setCurrentCategory(null);
    setIsEdit(false);
    let response = await fetch(`/findItem/${query}`);
    let searchResult = await response.json();

    if (searchResult) {
      console.log(searchResult);
      setCurrentCategory(searchResult[0]);
    } else {
      setCurrentCategory(null);
      alert("nothing found");
    }
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    console.log("isEdit", isEdit);
  };
  return (
    <div className="container">
      <Header
        currentCategory={currentCategory}
        toggleEdit={toggleEdit}
        isEdit={isEdit}
      />
      <SearchForm onSearch={search} isEdit={isEdit} />
      {currentCategory && !isEdit && <Info wasteType={currentCategory} />}

      {currentCategory && isEdit && (
        <EditForm
          currentCategory={currentCategory}
          setIsEdit={setIsEdit}
          search={search}
        />
      )}
    </div>
  );
}

export default App;
