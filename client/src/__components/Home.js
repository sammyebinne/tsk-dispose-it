import { useState } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

function Home() {
  const [data, setData] = useState([]);

  const getData = (data) => {
    setData(data);
  };

  return (
    <main className="app">
      <SearchForm getData={getData} />
      <ResultList results={data} />
    </main>
  );
}

export default Home;
