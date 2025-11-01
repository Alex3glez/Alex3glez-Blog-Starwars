import { Link } from "react-router-dom";

function CardComponent({ item, id }) {

  return (
    <>
      {id === "films"? (
        <div className="card h-100 m-1"> 
          <img 
            src={`/assets/img/${id}/${item.uid}.jpg`}
            className="card-img-top" 
            alt={item.properties.title}
            onError={e=>e.target.src = "/assets/img/big-placeholder.jpg"} 
          />
          <div className="card-body">
            <h5 className="card-title">{item.properties.title}</h5>
            <p className="card-text">{item.properties.release_date}</p>
            <a href="#" className="btn btn-primary">More details</a>
          </div>
        </div>
      ): 
      (
        <div className="card h-100 m-1"> 
          <img 
            src={`/assets/img/${id}/${item.uid}.jpg`}
            className="card-img-top" 
            alt={item.name} 
            onError={e=>e.target.src = "/assets/img/big-placeholder.jpg"}
          />
          <div className="card-body">
            <h5 className="card-title">{item.properties.name}</h5>
            <p className="card-text">{item.properties.gender}</p>
            <p className="card-text">{item.description}</p>
            <Link to={`/details/${id}/${item.uid}`} className="btn btn-primary">More details</Link>
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
      <div
        className="row flex-nowrap overflow-x-auto horizontal-scroll-container py-2"
      >
        
        {items.map((item) => (
          
          <div 
            key={item.uid || item.properties.episode_id} 
           
            className="col-10 col-md-4 col-lg-3 p-2" 
          >
            <CardComponent item={item} id={id} />
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default CardList;