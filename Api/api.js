let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPelis();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPelis();
  }
});

const cargarPelis = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=397c9bc46bfff4fb36aa2e61772fa875&language=es-AR&page=${pagina}`
      
    );

    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
        <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        </div>
        <h3 class="titulo">${pelicula.title}</h3>
        `;
      });

      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error desconocido.");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPelis();
