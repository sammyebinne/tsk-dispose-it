import Header from "./Header";
import SearchForm from "./SearchForm";
import Info from "./Info";
import { useState, useEffect } from "react";
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
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // is Edit button toggled?
  const [isEdit, setIsEdit] = useState(false);
  // is Add button toggled?
  const [isAdd, setIsAdd] = useState(false);
  // show or hide more info
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  // show or hide keywords
  const [showKeywords, setShowKeywords] = useState(false);
  // search for something to dispose of
  const search = async (query) => {
    setCurrentCategory(null);
    setIsEdit(false);
    let response = await fetch(`/findItem/${query}`);
    let searchResult = await response.json();

    if (searchResult.length > 0) {
      console.log(searchResult);
      setCurrentCategory(searchResult[0]);
    } else {
      setCurrentCategory(null);
      setSuggestions([]);
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
  const toggleShowKeywords = () => {
    setShowKeywords((old) => {
      let newShowKeywords = !old;
      console.log("showKeywords", newShowKeywords);
      return newShowKeywords;
    });
  };
  const onCategoryChange = () => {
    setCurrentCategory(null);
  };

  useEffect(() => {
    async function fuzzySearch() {
      if (text.length > 2) {
        setCurrentCategory(null);
        let response = await fetch(`/fuzzySearch/${text}`);
        response = await response.json();
        return setSuggestions(response);
      }
      return setSuggestions([]);
    }
    fuzzySearch();
  }, [text]);

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
        text={text}
        setText={setText}
        isEdit={isEdit}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        setSuggestions={setSuggestions}
        suggestions={suggestions}
        isAdd={isAdd}
      />
      {currentCategory && !isEdit && !isAdd && (
        <Info
          wasteType={currentCategory}
          showMoreInfo={showMoreInfo}
          toggleShowMoreInfo={toggleShowMoreInfo}
          toggleShowKeywords={toggleShowKeywords}
          showKeywords={showKeywords}
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
