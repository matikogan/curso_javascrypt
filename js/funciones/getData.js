const obtenerDatos = async () => {
    try {
      const response = await fetch('../../json/data.json');
      const data = await response.json();
      data.sort(function (a, b) {
        return a.relevancia - b.relevancia
      })
      return data;
    } catch (error) {
      console.log('Error', error);
    };
  };
  
export default obtenerDatos;