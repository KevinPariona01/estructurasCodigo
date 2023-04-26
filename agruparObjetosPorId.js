const objetos = [
    { id: 1, nombre: "Objeto 1" },
    { id: 2, nombre: "Objeto 2" },
    { id: 1, nombre: "Objeto 3" },
    { id: 3, nombre: "Objeto 4" },
    { id: 1, nombre: "Objeto 5" },
  ];
  
  // Crear un Map para almacenar los objetos agrupados por ID
  const mapObjetos = new Map();
  
  // Iterar por cada objeto y agregarlo al Map
  objetos.forEach(objeto => {
    const { id, nombre } = objeto;
    if (mapObjetos.has(id)) {
      // Si ya existe un array para ese ID, agregar el objeto al array
      mapObjetos.get(id).push({ nombre });
    } else {
      // Si no existe un array para ese ID, crear un nuevo array con el objeto
      mapObjetos.set(id, [{ nombre }]);
    }
  });
  
  // Mostrar los objetos agrupados por ID
  mapObjetos.forEach((objetos, id) => {
    console.log(`ID: ${id}`);
    objetos.forEach(objeto => {
      console.log(`- ${objeto.nombre}`);
    });
  });