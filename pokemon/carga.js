const url = "https://pokeapi.co/api/v2/pokemon/kadabra";

async function cargar(url){
    try{
        const respuesta = await fetch(url);

        if(!respuesta.ok){
            throw new Error(`Error http: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        console.log(data);

        console.log(JSON.stringify(data, null, 4));
    }catch{
        console.error(`Hubo un problema con la petición`, error.message);
        console.error(respuesta.status)
    }
}

cargar(url);

async function obtenerDatos(url) {
    try {
      // 1. Realiza la petición y espera la respuesta
      const response = await fetch(url);
  
      // 2. Verifica si la respuesta HTTP es exitosa (códigos 200-299)
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      // 3. Convierte el cuerpo de la respuesta a JSON
      const datos = await response.json();
      console.log(datos);
      return datos;
  
    } catch (error) {
      // 4. Captura errores de red, errores HTTP lanzados arriba o fallos al parsear JSON
      console.error('Ocurrió un problema con la petición:', error.message);
    }
  }