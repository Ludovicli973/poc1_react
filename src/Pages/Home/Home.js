import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { getAllAnime } from "../../services/api";

const Home = () => {
  const [AnimeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialAnimeList, setInitialAnimeList] = useState([]);

  const fetchAnimeList = async () => {
    const animeList = await getAllAnime();
    setAnimeList(animeList);
    setInitialAnimeList(animeList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAnimeList();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <p>En cours de chargement</p>
        </div>
      ) : (
        <div>
          <SearchBar
            initialAnimeList={initialAnimeList}
            setAnimeList={setAnimeList}
          />
          <div class="my-6 flex flex-wrap justify-around py-1 flex-row">
            {AnimeList?.length > 0 ? (
              <>
                {" "}
                {AnimeList.map((anime, index) => {
                  return (
                    <div key={index} class="my-10">
                      <Card anime={anime} />
                    </div>
                  );
                })}
              </>
            ) : (
              <p>Not Found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
