import { peliculaType } from "../types";
import movieStyles from "../css/movie.module.css";
import { Link } from "react-router-dom";

export default function Pelicula(props: props) {
  return (
    <Link to={`peliculas/${props.pelicula.id}`}>
      <div
        className={movieStyles.poster}
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.85658e047dcdb86ce571b873f0d9a500?rik=ruYRrRNqsUDiRw&pid=ImgRaw&r=0')",
        }}
      ></div>
    </Link>
  );
}

interface props {
  pelicula: peliculaType;
}
