import Link from "next/link"

const Header = () => {
  return (
    <div className='bg-blue-400 flex justify-center font-bold text-xl py-4'>
      <button className="border-slate-950 bg-black text-white py-2 px-4 rounded-full mr-2">
        <Link
          href='/'
        >
          Home
        </Link>
      </button>
      <button className="border-slate-950 bg-black text-white py-2 px-4 rounded-full mr-2">
        <Link
          href='/todos'
        >
          Todos
        </Link>
      </button>
      <button className="border-slate-950 bg-black text-white py-2 px-4 rounded-full">
        <Link
          href='/search'
        >
          Search
        </Link>
      </button>
    </div>
  )
}

export default Header