import axios from "axios";
import { allMovies, movieById } from "../config";

//Consultas - querys

//Obtener todas las peliculas
export async function getAllMovies() {
  try {
    const result = await axios.get(allMovies);
    return result.data;
  } catch (error) {
    console.log(error);
    //Darle un tratamiento al error
  }
}

//Obtener pelicula por id
export async function getMovieById({ id }: { id: string }) {
  try {
    const result = await axios.get(`${movieById}/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
