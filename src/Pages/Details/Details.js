import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificAnime } from "../../services/api";

const Details = () => {
  let { id } = useParams();
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const handleAnime = (current_anime) => {
    setAnime(current_anime);
  };

  const getSynopsis = (anime) => {
    let synopsis = "Pas de synopsis disponible";
    if (anime.synopsis) {
      synopsis = anime.synopsis;
    }
    return synopsis;
  };

  useEffect(() => {
    const fetchSpecificAnime = async () => {
      const anime = await getSpecificAnime(id);
      handleAnime(anime);
      handleLoading();
    };

    fetchSpecificAnime();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Chargement...</h1>
      ) : Object.keys(anime).length !== 0 ? (
        <div class="h-screen">
          <div class="w-full flex space-x-4 p-4">
            <img
              src={anime.image}
              alt={anime.title}
              class="h-full aspect-auto"
            />
            <div class="flex-col">
              <h1 class="font-bold text-xl">{anime.title}</h1>
              <p class="my-4 text-justify">{getSynopsis(anime)}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Anime introuvable</h1>
      )}
    </>
  );
};

export default Details;
