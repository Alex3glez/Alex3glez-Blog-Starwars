import { Link } from "react-router-dom";

export function Navbar({ favorites = [] }) {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        
        <Link className="navbar-brand" to="/" >
          <img 
            src="public\assets\starwarsLogo.png" 
            alt="Star Wars Logo" 
            width="80" 
            style={{ height: 'auto' }}
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
				<Link className="nav-link" to={"#people"}>People</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#films"}>Films</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planetsList">Planets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#speciesList">Species</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#starshipsList">Starships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vehiclesList">Vehicles</a>
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
                
                <span className="badge bg-danger ms-1">{favorites.length}</span>
              </a>
              
             
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
               
                {
                  favorites.length > 0 ? (
                    favorites.map(fav => (
                      <li key={fav.id}>
                        <a className="dropdown-item" href={`#/${fav.type}/${fav.id}`}>
                          {fav.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    
                    <li><span className="dropdown-item-text">No hay favoritos</span></li>
                  )
                }
              </ul>
            </li>
          </ul> 
          
        </div> 
      </div> 
    </nav>
  );
}

