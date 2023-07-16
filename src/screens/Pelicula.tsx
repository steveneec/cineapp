import { useEffect } from "react";

export default function Pelicula({ params }: any) {
  useEffect(() => {
    console.log("...");
    console.log(params);
  }, []);

  return (
    <div>
      <p>Pelicula</p>
    </div>
  );
}
