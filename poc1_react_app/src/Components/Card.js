import { useNavigate } from "react-router-dom";

function Card({ anime }) {
  const navigate = useNavigate();

  return (
    <div
      class="w-[200px] h-[270px] my-1 "
      onClick={() => navigate(`/details/${anime._id}`)}
    >
      <img src={anime.image} alt="poster" class="w-full h-full object-cover" />
      <h1> {anime.title}</h1>
      <p>{anime.Type}</p>
    </div>
  );
}

export default Card;
