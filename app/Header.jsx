import Link from "next/link"

const Header = () => {

  return (
    <header className='w-full bg-blue-500 py-4 font-bold px-3 text-2xl'>
      <Link href='/' className="px-2 py-1 bg-white text-blue-500 rounded-lg mr-4">
        Home
      </Link>
      <Link href='/todos' className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Todo
      </Link>
    </header>
  )
}

export default Header