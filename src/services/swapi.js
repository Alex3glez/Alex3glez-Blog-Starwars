const swapiData = async (cosa) => {
  try {
    const request = await fetch(`https://www.swapi.tech/api/${cosa}`);
    if (!request.ok) {
      throw new Error(`Error en la API: ${request.statusText}`);
    }

    const response = await request.json();

    localStorage.setItem(cosa, JSON.stringify(response.results));

  } catch (error) { throw error
  }
};

export default swapiData
