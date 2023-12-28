const filtroMujer= document.getElementById("mujeres");
const filtroHombre= document.getElementById("hombres");
const filtroSinGenero= document.getElementById("sinGenero");
const filtroDesconocido= document.getElementById("desconocido");
const contador = document.getElementById("personajes-totales");
const contenedor = document.getElementById("contenedor-tarjetas");
console.log(contenedor);

fetch("https://rickandmortyapi.com/api/character")
  .then(respuesta => respuesta.json())
  .then(data => {
    const dataApi = data.results;
    console.log(dataApi);

    let acc = "";
    for (let i = 0; i < dataApi.length; i++) {
      acc = acc + `
        <div class="card">
          <div class="contenedor-img">
            <img src=${dataApi[i].image} alt=${dataApi[i].name}>
          </div>
          <p>
            Name: ${dataApi[i].name}</p>
          <p>
            Gender: ${dataApi[i].gender}</p>
          <p>
            Species:  ${dataApi[i].species}</p>
          <p>
            Status:  ${dataApi[i].status}</p>
          <p>
            Origin:  ${dataApi[i].origin.name}</p>
          <p>
            Location:  ${dataApi[i].location.name}</p>
        </div>
      `;
    }
    contenedor.innerHTML = acc;
    contador.innerText = data.info.count; 
  });

  const filtroGenero= (parametro)=>{
    fetch(`https://rickandmortyapi.com/api/character/?gender=${parametro}`)
    .then(res => res.json())
    .then(data => {
        const dataApi = data.results;
        console.log(dataApi);
    
        let acc = "";
        for (let i = 0; i < dataApi.length; i++) {
          acc = acc + `
            <div class="card">
              <div class="contenedor-img">
                <img src=${dataApi[i].image} alt=${dataApi[i].name}>
              </div>
              <p>
                Nombre: ${dataApi[i].name}</p>
              <p>
                Genero: ${dataApi[i].gender}</p>
              <p>
                Especie:  ${dataApi[i].species}</p>
              <p>
                Estado:  ${dataApi[i].status}</p>
              <p>
                Origen:  ${dataApi[i].origin.name}</p>
              <p>
                Locacion:  ${dataApi[i].location.name}</p>
            </div>
          `;
        }
        contenedor.innerHTML = acc;
      });
  };

  filtroMujer.addEventListener("click", () => {
    filtroGenero("female")
  });
  filtroHombre.addEventListener("click" , () => {
    filtroGenero("male")
  });
  filtroSinGenero.addEventListener("click", () => {
    filtroGenero("genderless")
  });
  filtroDesconocido.addEventListener("click", () => {
    filtroGenero("unknown")
  });
