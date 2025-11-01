const swapiData = async (cosa) => {
  try {

    const request = await fetch(`https://www.swapi.tech/api/${cosa}/?expanded=true&page=*&limit=*`);
    if (!request.ok) {
      throw new Error(`Error en la API: ${request.statusText}`);
    }

    const response = await request.json();
if (cosa=="films")localStorage.setItem(cosa, JSON.stringify(response.result));
else localStorage.setItem(cosa, JSON.stringify(response.results));


  } catch (error) { throw error
  }
};

export default swapiData
