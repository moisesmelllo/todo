type PageProps = {
  params: {
    searchTerm: string
  }
}

type SearchResult = {
  organic_results: [
    {
      position: number,
      title: string,
      link: string,
      thumbnail: string,
      snippet: string,
    }
  ]
}

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.scaleserp.com/search?api_key=${'0A60C41DE14147DB9FF7ECEA57437ABD'}&q=${searchTerm}`
  );
  
  const data: SearchResult = await res.json();
  return data;
}

async function SearchResults({ params: {searchTerm} }: PageProps) {
  const SearchResults = await search(searchTerm)

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {SearchResults && SearchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults;