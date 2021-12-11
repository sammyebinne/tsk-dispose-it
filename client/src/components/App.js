import Header from "./Header";
import SearchForm from "./SearchForm";
import Info from "./Info";
import { useState } from "react";
import "../styles/old/App.css";
import EditForm from "./EditForm";
import AddForm from "./AddForm";

function App() {
  // const [wasteTypes, setWasteTypes] = useState(async () => {
  //   let response = await fetch("/api/loadItems");
  //   response = await response.json();
  //   setWasteTypes(response);
  // });
  const [currentCategory, setCurrentCategory] = useState(null);
  // is Edit button toggled?
  const [isEdit, setIsEdit] = useState(false);
  // is Add button toggled?
  const [isAdd, setIsAdd] = useState(false);
  // show or hide more info
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  // search for something to dispose of
  const search = async (query) => {
    setCurrentCategory(null);
    setIsEdit(false);
    let response = await fetch(`/findItem/${query}`);
    let searchResult = await response.json();

    if (searchResult) {
      console.log(searchResult);
      setCurrentCategory(searchResult); // delete [0] when adding to database
    } else {
      setCurrentCategory(null);
      alert("nothing found");
    }
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    console.log("isEdit", isEdit);
  };
  const toggleAdd = () => {
    setIsAdd((old) => {
      let newIsAdd = !old;
      console.log("isAdd", newIsAdd);
      return newIsAdd;
    });
  };
  const toggleShowMoreInfo = () => {
    setShowMoreInfo((old) => {
      let newShowMoreInfo = !old;
      console.log("showMoreInfo", newShowMoreInfo);
      return newShowMoreInfo;
    });
  };

  return (
    <div className="container">
      <Header
        currentCategory={currentCategory}
        toggleEdit={toggleEdit}
        isEdit={isEdit}
        toggleAdd={toggleAdd}
        isAdd={isAdd}
        search={search}
      />
      <SearchForm onSearch={search} isEdit={isEdit} />
      {currentCategory && !isEdit && !isAdd && (
        <Info
          wasteType={currentCategory}
          showMoreInfo={showMoreInfo}
          toggleShowMoreInfo={toggleShowMoreInfo}
        />
      )}

      {currentCategory && isEdit && (
        <EditForm
          currentCategory={currentCategory}
          setIsEdit={setIsEdit}
          search={search}
        />
      )}

      {isAdd && <AddForm setIsAdd={setIsAdd} search={search} />}
    </div>
  );
}

export default App;
