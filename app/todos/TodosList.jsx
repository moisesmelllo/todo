import Link from "next/link";


// 2 - função que conecta a api
const fetchTodos = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/todos/')
  const todos = await res.json();
  return todos;
}


// 1 - função principal
async function TodosList() {

  // 3 -  retorno da função criada acima
  const todos = await fetchTodos();

  return (
    <div>
      {todos && todos.map((todo) => (
        <p key={todo.id}>
          <Link
            href={`/todos/${todo.id}`}
          >
            Todo: {todo.id}
          </Link>
        </p>
      ))}
    </div>
  )
}

export default TodosList