import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import useGlobalReducer from "../hooks/useGlobalReducer";

import { useEffect } from "react";

export function Navbar() {
  const { state, dispatch } = useGlobalReducer();

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    dispatch({ type: "setFavorites", payload: favoritesFromStorage });
  }, [dispatch]);

  const handleDeleteFavorite = (itemToDelete) => {
    const newFavorites = state.favorites.filter(
      (fav) => !(fav.uid === itemToDelete.uid && fav.type === itemToDelete.type)
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    dispatch({ type: "setFavorites", payload: newFavorites });
  };

  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="/assets/starwarsLogo.png"
            alt="Star Wars Logo"
            width="80"
            style={{ height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink to="/#gente" className="nav-link">
                People
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/#planetas" className="nav-link">
                Planets
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/#naves" className="nav-link">
                Starships
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/#vehiculos" className="nav-link">
                Vehicles
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/#especies" className="nav-link">
                Species
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink className="nav-link" to="/#peliculas" smooth>
                Films
              </HashLink>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
                <span className="badge bg-danger ms-1">
                  {state.favorites.length}
                </span>
              </a>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                {state.favorites.length > 0 ? (
                  state.favorites

                    .filter((fav) => fav.properties)

                    .map((fav) => (
                      <li
                        key={`${fav.type}-${fav.uid}`}
                        className="d-flex justify-content-between align-items-center pe-2"
                      >
                        <Link
                          to={`/details/${fav.type}/${fav.uid}`}
                          className="dropdown-item"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {fav.properties.name || fav.properties.title}
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDeleteFavorite(fav)}
                          aria-label="Eliminar favorito"
                        >
                          &times;
                        </button>
                      </li>
                    ))
                ) : (
                  <li>
                    <span className="dropdown-item-text">No hay favoritos</span>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
