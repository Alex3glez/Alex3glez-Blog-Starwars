import React, { useRef, useState, useEffect, useCallback } from 'react';


function CardComponent({ item, id }) {
  


  return (
    <>
      {id === "films" ? (
        <div className="card h-100 m-1"> 
          <img 
            src={`/assets/img/${id}/${item.uid}.jpg`}
            className="card-img-top" 
            alt={item.properties.title}
            onError={e=>e.target.src = "/assets/img/big-placeholder.jpg"} 
          />
          <div className="card-body">
            <h5 className="card-title">{item.properties.title}</h5>
            <p className="card-text">ID: {item.properties.episode_id}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ) : (
        <div className="card h-100 m-1"> 
          <img 
            src={`/assets/img/${id}/${item.uid}.jpg`}
            className="card-img-top" 
            alt={item.name} 
            onError={e=>e.target.src = "/assets/img/big-placeholder.jpg"}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">UID: {item.uid}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      )}
    </>
  );
}




function CardList({ items = [], id }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  
  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < (scrollWidth - clientWidth) - 5);
    }
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(checkScrollButtons, 100);
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [items, checkScrollButtons]);


  const handleScroll = (scrollAmount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  
  const scrollNext = () => {
    handleScroll(scrollContainerRef.current.clientWidth * 0.7);
  };
  const scrollPrev = () => {
    handleScroll(-(scrollContainerRef.current.clientWidth * 0.7));
  };


  return (
    
    <div className="position-relative my-4 mx-2 mx-md-5">

     
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollButtons}
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
      
      
     
      {canScrollLeft && (
        <button 
          className="btn btn-dark btn-lg rounded-circle position-absolute top-50 start-0 translate-middle-y ms-n2"
          onClick={scrollPrev}
          style={{ zIndex: 10 }} 
        >
        
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
      )}

      
      {canScrollRight && (
        <button 
          className=" btn btn-dark btn-lg rounded-circle position-absolute top-50 end-0 translate-middle-y me-n2"
          onClick={scrollNext}
          style={{ zIndex: 10 }}
        >
          <i className="bi bi-chevron-right fs-5"></i>
        </button>
      )}
    </div>
  );
}

export default CardList;