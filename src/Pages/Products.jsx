import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  let [productsdata, setProductsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${props.title}`)
      .then((a) => a.json())
      .then((b) => setProductsData(b.products));
  }, [props.title]); // Added dependency array to avoid repeated fetches

  return (
    <>
      <section>
        <div className="container">
          <h3 className="text-uppercase">{props.title}</h3>
          <div className="row">
            {productsdata.length > 0 ? (
              productsdata.slice(1, 5).map((a) => (
                <div className="col-md-3 col-sm-6 img-ctrl" key={a.id}>
                  <div className="product-grid6">
                    <div className="product-image6">
                      <Link to={`/details/${a.id}`}>
                        <img
                          className="pic-1 w-100"
                          src={a.images[0]}
                          alt={a.title}
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="#">{a.title}</a>
                      </h3>
                      <div className="price">
                        ${a.price}
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
