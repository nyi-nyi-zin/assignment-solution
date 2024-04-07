import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [id, setId] = useState("");

  const getdata = async (e) => {
    e.preventDefault();

    if (id < 1) {
      setError(true);
      setId("");
      return;
    }

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    setError(false);
    setData(data);
    setId("");
  };

  return (
    <section>
      <form onSubmit={getdata}>
        <input
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && <p>Enter an invalid Id</p>}
        {data && (
          <div>
            <h1>title - {data.title}</h1>
            <h1>userId - {data.id}</h1>
            <h1>
              completed -{" "}
              {data.completed ? (
                <span>Completed</span>
              ) : (
                <span>not completed</span>
              )}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
export default App;
