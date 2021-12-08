import { useState } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

function Home() {
  const [data, setData] = useState([]);

  const getData = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <main className="app">
      <SearchForm getData={getData} />
      <ResultList className="result-list" results={data} />
    </main>
  );
}

export default Home;
