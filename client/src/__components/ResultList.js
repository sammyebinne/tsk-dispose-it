import Result from "./Result";

function ResultList({ results }) {
  return (
    <div>
      {results && (
        <div>
          {results?.map((result) => (
            <Result key={result._id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultList;
