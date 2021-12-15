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
  const [otherCategories, setOtherCategories] = useState(null);
  // is Edit button toggled?
  const [isEdit, setIsEdit] = useState(false);
  // is Add button toggled?
  const [isAdd, setIsAdd] = useState(false);
  // show or hide more info
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  // search for something to dispose of
  const search = async (query) => {
    setCurrentCategory(null);
    setOtherCategories(null);
    setIsEdit(false);
    let response = await fetch(`/findItem/${query}`);
    let searchResult = await response.json();

    if (searchResult.length > 0) {
      console.log(searchResult);
      setCurrentCategory(searchResult[0]); // delete [0] when adding to database

      if (searchResult.length > 1) {
        setOtherCategories(searchResult.slice(1));
      }
    } else {
      setCurrentCategory(null);
      setOtherCategories(null);
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
  const onCategoryChange = () => {
    if (otherCategories) {
      let tempCurrentCategory = currentCategory;
      setCurrentCategory(otherCategories[0]);
      let tempOtherCategories = otherCategories.slice(1);
      setOtherCategories([...tempOtherCategories, tempCurrentCategory]);
    } else {
      alert("No more results.");
    }
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
      <SearchForm
        onSearch={search}
        isEdit={isEdit}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {currentCategory && !isEdit && !isAdd && (
        <Info
          wasteType={currentCategory}
          showMoreInfo={showMoreInfo}
          toggleShowMoreInfo={toggleShowMoreInfo}
          onCategoryChange={onCategoryChange}
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
