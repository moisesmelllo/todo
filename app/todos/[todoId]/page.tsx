import { Todo } from '@/typings'
import React from 'react'

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60}}
  );

  const todo = await res.json();
  return todo;
}

async function Todopage ({ params: {todoId}}: PageProps) {

  const todo: Todo = await fetchTodo(todoId)

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'yes' : 'No'}</p>

      <p className='border-t border-black mt-5 text-right'>
        By user: {todo.userId}
      </p>
    </div>
  )
}

export default Todopage;

export async function genereateStaticParams() {
  const res = await fetch('http://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();

  // for this demo, we are only prebuilding the first 10 pages
  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map(todo => ({
    todoId: todo.id.toString(),
  }))
}
