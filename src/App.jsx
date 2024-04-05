import { useEffect, useState } from "react";

function App() {
  const [todos, setTodo] = useState([]);
  useEffect((_) => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
    setTodo(data);
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? <p>Done</p> : <p className="none">None</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
