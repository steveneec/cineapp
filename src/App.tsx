import { useEffect, useState } from "react";
import { getAllMovies } from "./services/peliculas.service";
import { peliculaType } from "./types";
import Pelicula from "./components/Pelicula";
import homeStyle from "./css/home.module.css";

export default function App() {
  const [consultaPeliculas, setConsultaPeliculas] =
    useState<Array<peliculaType>>();

  useEffect(() => {
    _getAllMovies();
  }, []); //Se va a ejecutar una vez, cuando se monta el componente

  useEffect(() => {
    console.log("Se han actualizado las peliculas");
  }, [consultaPeliculas]);

  async function _getAllMovies() {
    const movies = await getAllMovies();
    setConsultaPeliculas(movies);
  }

  return (
    <div>
      <p>Home</p>
      <button onClick={() => _getAllMovies()}>Actualizar peliculas</button>
      <div className={homeStyle.movies}>
        {consultaPeliculas?.map((_pelicula) => (
          <Pelicula pelicula={_pelicula} />
        ))}
      </div>
    </div>
  );
}
