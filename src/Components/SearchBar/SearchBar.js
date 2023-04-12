import { useState } from "react";

function SearchBar({ initialAnimeList, setAnimeList }) {
  const [searchInput, setsearchInput] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const anime = initialAnimeList.filter((element) =>
      element.title.includes(searchInput)
    );
    setAnimeList(anime);
  }

  function resetSearch() {
    setAnimeList(initialAnimeList);
    setsearchInput("");
  }

  return (
    <div className="flex items-center mt-2 ml-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setsearchInput(e.target.value)}
          name="input"
          value={searchInput}
          class="w-[200px] h-[30px] border border-black rounded"
          placeholder="Search"
        />
        <button
          class="ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"
          type="submit"
        >
          Search
        </button>
        {searchInput !== "" && (
          <button
            class="ml-[10px] w-[100px] h-[30px] border rounded bg-gray-200 border-gray-200"
            onClick={resetSearch}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
