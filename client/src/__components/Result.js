function Result({ result }) {
  return (
    <div>
      <h1>{result.category}</h1>
      <p>
        {result.keywords.map((keyword, i) => {
          return <li key={i}>{keyword}</li>;
        })}
      </p>
    </div>
  );
}

export default Result;
