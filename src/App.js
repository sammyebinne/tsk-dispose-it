import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  const search = (query) => {
    console.log(query.text);
  };
  return (
    <div className="container">
      <Header />
      <SearchForm onSearch={search} />
    </div>
  );
}

export default App;
