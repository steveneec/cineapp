import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/peliculas.service";
import { peliculaType } from "../types";

export default function Peliculas() {
  const [movie, setMovie] = useState<peliculaType>();
  const params = useParams();

  useEffect(() => {
    getMovieById({ id: params.id as string })
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {movie ? (
        <div>
          <p>{movie.title}</p>
          <p>{movie.genero}</p>
          <p>{movie.id}</p>
        </div>
      ) : null}
    </div>
  );
}
