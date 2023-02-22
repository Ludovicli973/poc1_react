import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";


const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(process.env);
  const options = {
    method: "GET",
    params: {
      page: "1",
      size: "30",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://anime-db.p.rapidapi.com/anime?page=1&size=30",
          options
        );
        setData(response.data.data);
        console.log(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading === false ? (
        <div>
          <p>En cours de chargements...</p>
        </div>
      ) : (
        <div class=" box-border flex flex-wrap justify-around py-1">
          {data?.map((anime, index) => {
            return (
              <div key={index}>
              <Card anime={anime} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
