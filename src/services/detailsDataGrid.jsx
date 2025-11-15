import React from "react";

export const dataGrid = (category, targetData, state) => {
  switch (category) {
    case "people": {
      const peopleHomeworldUrl = targetData.properties.homeworld;
      const planetId = peopleHomeworldUrl
        ? peopleHomeworldUrl.split("planets/")[1]
        : null;

      const vehicleId = (targetData.properties.vehicles || []).map(
        (vehicle) => vehicle.split("vehicles/")[1]
      );
      const starshipsId = (targetData.properties.starships || []).map(
        (starship) => starship.split("starships/")[1]
      );
      const filmsId = (targetData.properties.films || []).map(
        (film) => film.split("films/")[1]
      );

      const dataGridPeople = [
        { title: "GENDER", items: [targetData.properties.gender] },
        { title: "MASS", items: [targetData.properties.mass] },
        { title: "HEIGHT", items: [targetData.properties.height] },
        {
          title: "HOMEWORLD",
          items: (() => {
            if (!planetId) return ["N/A"];
            const planet = state.planets.find((p) => p.uid == planetId);
            if (!planet) return ["N/A"];
            return [
              planet.properties.name,
              <img
                src={`/assets/img/planets/${planetId}.jpg`}
                alt={`img from ${planet.properties.name} `}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          })(),
        },
        {
          title: "VEHICLES",
          items: vehicleId.flatMap((id) => {
            const item = state.vehicles.find((v) => v.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/vehicles/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "STARSHIPS",
          items: starshipsId.flatMap((id) => {
            const item = state.starships.find((s) => s.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/starships/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "FILMS",
          items: filmsId.flatMap((id) => {
            const item = state.films.find((f) => f.uid == id);
            if (!item) return [];
            return [
              item.properties.title,
              <img
                src={`/assets/img/films/${id}.jpg`}
                alt={`img from ${item.properties.title}`}
                className="img-fluid w-50 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
      ];
      return dataGridPeople;
    }

    case "planets": {
      const dataGridPlanets = [
        { title: "CLIMATE", items: [targetData.properties.climate] },
        { title: "DIAMETER", items: [targetData.properties.diameter] },
        { title: "POPULATION", items: [targetData.properties.population] },
        { title: "GRAVITY", items: [targetData.properties.gravity] },
        { title: "TERRAIN", items: [targetData.properties.terrain] },
        {
          title: "ROTATION PERIOD",
          items: [targetData.properties.rotation_period],
        },
        {
          title: "ORBITAL PERIOD",
          items: [targetData.properties.orbital_period],
        },
      ];
      return dataGridPlanets;
    }

    case "starships": {
      const pilotsId = (targetData.properties.pilots || []).map(
        (pilot) => pilot.split("people/")[1]
      );
      const filmsId = (targetData.properties.films || []).map(
        (film) => film.split("films/")[1]
      );

      const dataGridStarships = [
        { title: "MODEL", items: [targetData.properties.model] },
        {
          title: "STARSHIP CLASS",
          items: [targetData.properties.starship_class],
        },
        {
          title: "CARGO CAPACITY",
          items: [targetData.properties.cargo_capacity],
        },
        { title: "LENGTH", items: [targetData.properties.length] },
        { title: "PASSENGERS", items: [targetData.properties.passengers] },
        {
          title: "PILOTS",
          items: pilotsId.flatMap((id) => {
            const item = state.people.find((p) => p.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/people/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "FILMS",
          items: filmsId.flatMap((id) => {
            const item = state.films.find((f) => f.uid == id);
            if (!item) return [];
            return [
              item.properties.title,
              <img
                src={`/assets/img/films/${id}.jpg`}
                alt={`img from ${item.properties.title}`}
                className="img-fluid w-50 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
      ];
      return dataGridStarships;
    }

    case "vehicles": {
      const filmsId = (targetData.properties.films || []).map(
        (film) => film.split("films/")[1]
      );
      const pilotsId = (targetData.properties.pilots || []).map(
        (pilot) => pilot.split("people/")[1]
      );

      const dataGridVehicles = [
        { title: "MODEL", items: [targetData.properties.model] },
        { title: "MANUFACTURER", items: [targetData.properties.manufacturer] },
        {
          title: "VEHICLE CLASS",
          items: [targetData.properties.vehicle_class],
        },
        {
          title: "COST IN CREDITS",
          items: [targetData.properties.cost_in_credits],
        },
        {
          title: "CARGO CAPACITY",
          items: [targetData.properties.cargo_capacity],
        },
        { title: "LENGTH", items: [targetData.properties.length] },
        { title: "PASSENGERS", items: [targetData.properties.passengers] },
        {
          title: "PILOTS",
          items: pilotsId.flatMap((id) => {
            const item = state.people.find((p) => p.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/people/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "FILMS",
          items: filmsId.flatMap((id) => {
            const item = state.films.find((f) => f.uid == id);
            if (!item) return [];
            return [
              item.properties.title,
              <img
                src={`/assets/img/films/${id}.jpg`}
                alt={`img from ${item.properties.title}`}
                className="img-fluid w-50 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
      ];
      return dataGridVehicles;
    }

    case "species": {
      const speciesHomeworldUrl = targetData.properties.homeworld;
      const homeworldPlanetId = speciesHomeworldUrl
        ? speciesHomeworldUrl.split("planets/")[1]
        : null;

      const peopleId = (targetData.properties.people || []).map(
        (person) => person.split("people/")[1]
      );

      const dataGridSpecies = [
        {
          title: "CLASSIFICATION",
          items: [targetData.properties.classification],
        },
        {
          title: "AVERAGE HEIGHT",
          items: [targetData.properties.average_height],
        },
        {
          title: "AVERAGE LIFESPAN",
          items: [targetData.properties.average_lifespan],
        },
        { title: "LANGUAGE", items: [targetData.properties.language] },
        { title: "EYE COLORS", items: [targetData.properties.eye_colors] },
        { title: "HAIR COLORS", items: [targetData.properties.hair_colors] },
        { title: "SKIN COLORS", items: [targetData.properties.skin_colors] },
        {
          title: "HOMEWORLD",
          items: (() => {
            if (!homeworldPlanetId) return ["N/A"];
            const planet = state.planets.find(
              (p) => p.uid == homeworldPlanetId
            );
            if (!planet) return ["N/A"];
            return [
              planet.properties.name,
              <img
                src={`/assets/img/planets/${homeworldPlanetId}.jpg`}
                alt={`img from ${planet.properties.name} `}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          })(),
        },
        {
          title: "PEOPLE",
          items: peopleId.flatMap((id) => {
            const item = state.people.find((p) => p.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/people/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
      ];
      return dataGridSpecies;
    }

    case "films": {
      const charactersId = (targetData.properties.characters || []).map(
        (c) => c.split("people/")[1]
      );
      const planetsId = (targetData.properties.planets || []).map(
        (p) => p.split("planets/")[1]
      );
      const starshipsId = (targetData.properties.starships || []).map(
        (s) => s.split("starships/")[1]
      );
      const vehiclesId = (targetData.properties.vehicles || []).map(
        (v) => v.split("vehicles/")[1]
      );
      const speciesId = (targetData.properties.species || []).map(
        (s) => s.split("species/")[1]
      );

      const dataGridFilms = [
        { title: "DIRECTOR", items: [targetData.properties.director] },
        { title: "PRODUCER", items: [targetData.properties.producer] },
        {
          title: "RELEASE DATE",
          items: [targetData.properties.release_date],
        },
        {
          title: "PLANETS",
          items: planetsId.flatMap((id) => {
            const item = state.planets.find((p) => p.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/planets/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "STARSHIPS",
          items: starshipsId.flatMap((id) => {
            const item = state.starships.find((s) => s.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/starships/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "VEHICLES",
          items: vehiclesId.flatMap((id) => {
            const item = state.vehicles.find((v) => v.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/vehicles/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "SPECIES",
          items: speciesId.flatMap((id) => {
            const item = state.species.find((s) => s.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/species/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
        {
          title: "CHARACTERS",
          items: charactersId.flatMap((id) => {
            const item = state.people.find((p) => p.uid == id);
            if (!item) return [];
            return [
              item.properties.name,
              <img
                src={`/assets/img/people/${id}.jpg`}
                alt={`img from ${item.properties.name}`}
                className="img-fluid w-100 rounded"
                onError={(e) => (e.target.src = "")}
              />,
            ];
          }),
        },
      ];
      return dataGridFilms;
    }

    default:
      return [];
  }
};
