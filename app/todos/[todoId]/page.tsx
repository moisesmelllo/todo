import {notFound } from 'next/navigation'


// caso não tenha a pagina gerada pelo generateStaticParams, tente renderiza-la e depois salve em cache
export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  }
}


// função que bate na api de cada todo individualmente
// metodo next: {revalidate: } determina quando tempo o resposta pode ficar armazenada em cache antes que o next
// volte a fazer uma requisição.
const fetchTodo  = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: { revalidate: 60}})

  const todo = await res.json();
  return todo

}


// note que todoId é o mesmo nome dado a pasta dinamica que contem esta pagina, deste modo, você receberá juntamente com outras
// props o valor do id de cada todo
async function TodoPage({ params: {todoId } } : PageProps) {
  const todo = await fetchTodo(todoId)


  // caso tente acessar um todo que não existe, você será redirecionadao para a pagina de not-found
  if(!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>#{todo.id}: {todo.title}</p>
      <p>Completed: {todo.completed ? 'yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">By User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage;



// pré renderiza todas as paginas para um carregamento mais rapido
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return todos.map((todo: any) => ({
    todoId: todo.id.toString(),
  }));
}
