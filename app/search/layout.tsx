import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <main className="flex space-x-4 divide-x-2 p-5">
      <head>
        <title>Search component</title>
      </head>
      <div>
        <h1>Layout Search page</h1>
      </div>
      <div className="flex-1 pl-5">
        <Search />

        <div>{children}</div>
      </div>
    </main>
  )
}