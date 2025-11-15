import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";

function CardComponent({ item, id }) {
  const { state, dispatch } = useGlobalReducer();

  const defaultImg = "/assets/img/big-placeholder.jpg";

  const isFavorited = state.favorites.some(
    (fav) => fav.uid === item.uid && fav.type === id
  );

  const getImageUrl = () => {
    const type = id == "people" ? "characters" : id;

    const baseUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type}/${item.uid}.jpg`;

    return baseUrl;
  };

  const handleFavorite = () => {
    const favorites = state.favorites;

    const itemIndex = favorites.findIndex(
      (fav) => fav.uid === item.uid && fav.type === id
    );

    let newFavorites;

    if (itemIndex > -1) {
      newFavorites = favorites.filter(
        (fav) => !(fav.uid === item.uid && fav.type === id)
      );
    } else {
      const itemToSave = { ...item, type: id };

      newFavorites = [...favorites, itemToSave];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    dispatch({ type: "setFavorites", payload: newFavorites });
  };

  return (
    <>
      {id === "films" ? (
        <div className="card h-100 m-1">
          <img
            src={getImageUrl()}
            className="card-img-top"
            alt={item.properties.title}
            onError={(e) => {
              e.target.src = defaultImg;

              e.target.onerror = null;
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{item.properties.title}</h5>

            <p className="card-text">{item.properties.release_date}</p>

            <div className="d-flex gap-2 justify-content-center">
              <Link
                to={`/details/${id}/${item.uid}`}
                className="btn btn-primary"
                onClick={() => window.scrollTo(0, 0)}
              >
                More details
              </Link>

              <button
                className={`btn ${
                  isFavorited ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleFavorite}
              >
                {isFavorited ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card h-100 m-1">
          <img
            src={getImageUrl()}
            className="card-img-top"
            alt={item.properties.name}
            onError={(e) => {
              e.target.src = defaultImg;

              e.target.onerror = null;
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{item.properties.name}</h5>

            <p className="card-text">{item.properties.gender}</p>

            <p className="card-text">{item.description}</p>

            <div className="d-flex gap-2 justify-content-center">
              <Link
                to={`/details/${id}/${item.uid}`}
                className="btn btn-primary"
                onClick={() => window.scrollTo(0, 0)}
              >
                More details
              </Link>

              <button
                className={`btn ${
                  isFavorited ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleFavorite}
              >
                {isFavorited ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CardList({ items = [], id }) {
  return (
    <div className="my-4 mx-2 mx-md-5">
      <h2 className="mb-3 text-white">{id[0].toUpperCase() + id.slice(1)}</h2>

      <div className="row flex-nowrap overflow-x-auto horizontal-scroll-container py-2">
        {items.map((item) => (
          <div
            key={item.uid || item.properties.episode_id}
            className="col-8 col-md-4 col-lg-3 col-xl-2  p-2"
          >
            <CardComponent item={item} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
