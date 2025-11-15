import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Footer() {
  return (
    <footer className="bg-secondary text-light mt-auto border-top border-secondary">
      <div className="container pt-5 pb-4">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <img
              src="/assets/starwarsLogo.png"
              alt="Star Wars Logo"
              width="120"
              className="mb-2"
            />
            <p className="text-light small">
              Project created with React and Bootstrap.
              <br />
              All data is provided from{" "}
              <a
                href="https://www.swapi.tech/"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                SWAPI
              </a>
              .
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase" style={{ color: "#888" }}>
              Navigation
            </h5>
            <ul className="list-unstyled row">
              <li className="col-6">
                <HashLink to="/#gente" className="nav-link text-light p-0">
                  People
                </HashLink>
              </li>
              <li className="col-6">
                <HashLink to="/#planetas" className="nav-link text-light p-0">
                  Planets
                </HashLink>
              </li>
              <li className="col-6">
                <HashLink to="/#naves" className="nav-link text-light p-0">
                  Starships
                </HashLink>
              </li>
              <li className="col-6">
                <HashLink to="/#vehiculos" className="nav-link text-light p-0">
                  Vehicles
                </HashLink>
              </li>
              <li className="col-6">
                <HashLink to="/#especies" className="nav-link text-light p-0">
                  Species
                </HashLink>
              </li>
              <li className="col-6">
                <HashLink to="/#peliculas" className="nav-link text-light p-0">
                  Films
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase" style={{ color: "#888" }}>
              Resources
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.starwars.com/"
                  className="nav-link text-light p-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oficial de Star Wars Site
                </a>
              </li>
              <li>
                <a
                  href="https://starwars.fandom.com/es/wiki/Wookieepedia"
                  className="nav-link text-light p-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wookieepedia (Fans)
                </a>
              </li>
            </ul>

            <div className="d-flex mt-4 fs-4 justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/starwars"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/starwars"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com/starwars"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X/Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.youtube.com/user/starwars"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4" style={{ borderColor: "rgba(31, 17, 17, 1)" }} />

        <div className="row align-items-center mt-3">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <span className="text-light small">
              &copy; {new Date().getFullYear()} Alex3glez. Todos los derechos
              reservados.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <button
              className="btn btn-sm btn-outline-light "
              onClick={() => window.scrollTo(0, 0)}
            >
              Go top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
