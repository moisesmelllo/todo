import TodoList from "./TodoList";
import Todo from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <TodoList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  )
}