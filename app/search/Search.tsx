'use client'
// PRECISA SER CLIENT SIDE RENDER

import { useRouter } from "next/navigation"
import React, {FormEvent, useState} from "react"


const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter();


  // função que faz a pesquisa e cria uma pagina dinamica com o valor pesquisado
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`)
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold
        py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  )
}

export default Search